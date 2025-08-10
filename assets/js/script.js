import { keywords } from './demodata.js';


if(document.getElementById('sign-in')){
document.getElementById('sign-in').addEventListener('click', async () => {

    if (!puter.auth.isSignedIn()) {
        signInPuter();
    }
    else {
        window.location.href = `upload.html`;
        document.getElementById('sign-in').innerHTML = 'Logged In';
    }
});
}

if(document.getElementById('sign-in2')){
document.getElementById('sign-in2').addEventListener('click', async () => {

    if (!puter.auth.isSignedIn()) {
        signInPuter();
    }
    else {
        window.location.href = `upload.html`;
        document.getElementById('sign-in').innerHTML = 'Logged In';
    }
});
}

async function signInPuter() {
    // signIn() will resolve when the user has signed in.
    await puter.auth.signIn().then((res) => {
        // puter.print('Signed in<br>' + JSON.stringify(res));
        window.location.href = `upload.html`;
        if(document.getElementById('sign-in')){
        document.getElementById('sign-in').innerHTML = 'Get your Roadmap';
        }
    });
}

if (!puter.auth.isSignedIn()) {
    signInPuter();
}
else {
    // window.location.href = `upload.html`;
    if(document.getElementById('sign-in'){
    document.getElementById('sign-in').innerHTML = 'Logged In';
    }
}

// Simple custom useState
function useState(initialValue) {
    let value = initialValue;
    const getValue = () => value;
    const setValue = (newValue) => {
        value = newValue;
        updateStatusText(); // update counter UI
    };
    return [getValue, setValue];
}

// Create counter state
const [statusText, setStatusText] = useState('');

async function addRoadmap(userId, topic, weeks) {
    try {
        const res = await fetch("https://project-hackothon.onrender.com/api/addRoadmap", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId,
                topic,
                weeks
            })
        });

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();
        console.log("Response from backend:", data);

        return data;
    } catch (err) {
        console.error("Error:", err);
        return null;
    }
}

async function generateRoadmap(topic, keywords) {

    if (!topic || !keywords) {
        alert("Please enter topic and keywords");
        return;
    }

    const prompt = `
    Create a detailed learning roadmap JSON for the topic "${topic}".
    Use the following keywords as main steps: ${keywords}.
    Structure the roadmap into exactly FOUR weeks.
    Each week should have multiple steps related to the keywords.
    Output the result ONLY as JSON.

    Example format:
    {
      "weeks": [
        {
          "week": 1,
          "steps": [
            {
              "title": "Step title",
              "description": "Step description",
              "resources": {
                "youtube": ["url1"],
                "articles": ["url2"],
                "websites": ["url3"]
              }
            }
          ]
        },
        {
          "week": 2,
          "steps": [ ... ]
        },
        {
          "week": 3,
          "steps": [ ... ]
        },
        {
          "week": 4,
          "steps": [ ... ]
        }
      ]
    }

    Generate the roadmap now.
    `;

    // puter.ai.chat(prompt, { model: "gpt-4.1-nano" })
    //     .then(response => {
    //         puter.print(response);
    //         const contentStr = response.message.content;
    //         const jsonData = JSON.parse(contentStr);

    //         console.log(jsonData);
    //         return jsonData;
    //     })
    //     .catch(err => {
    //         console.error("Error:", err);
    //         return null;
    //     });

    try {
        const response = await puter.ai.chat(prompt, { model: "gpt-4.1-nano" });

        const contentStr = response.message.content;
        const jsonData = JSON.parse(contentStr);

        console.log("Generated JSON:", jsonData);
        return jsonData; // ✅ Now it returns the value to getroadmap
    } catch (err) {
        console.error("Error generating roadmap:", err);
        return null;
    }
}

function updateStatusText() {
    if (document.getElementById('StatusText')) {
        document.getElementById('StatusText').textContent = statusText();
    }
}

async function addUserinDb(name, topic, selectedKeywords) {
    try {
        const res = await fetch("https://project-hackothon.onrender.com/api/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ Name: name, topic: topic, keywords: selectedKeywords })
        });

        if (!res.ok) {
            throw new Error(`Server error: ${res.status}`);
        }

        const data = await res.json();
        console.log("Response from backend:", data);
        // alert("User added successfully!");
        return data;  // <-- Return the parsed data here
    } catch (err) {
        console.error("Error:", err);
        // alert("Failed to add user");
        return null;  // Return null or something falsy on error
    }
}

async function getroadmap(name, topic, selectedKeywords) {
    // console.log("Name:", name);
    // console.log("Topic:", topic);
    // console.log("Selected Keywords:", selectedKeywords);

    updateStatusText();
    setStatusText('Preparing data...');

    document.getElementById("FormScreen").style.display = "none";
    document.getElementById("loadingScreen").style.display = "block";
    updateStatusText();

    // put the user in db 
    const user = await addUserinDb(name, topic, selectedKeywords);

    if (!user) {
        return setStatusText('Error: Failed to analyze details');
    }

    console.log("user", user.user);

    setStatusText('Analyzing...');
    updateStatusText();

    // get the data from ai 
    const weeks = await generateRoadmap(topic, selectedKeywords);

    if (!weeks) {
        return setStatusText('Error: Failed to analyze details');
    }

    updateStatusText();
    console.log("weeks after", weeks);

    setStatusText('Analyzing almost done');
    updateStatusText();

    // put the roadmap to db
    const data = await addRoadmap(user.user, topic, weeks.weeks);

    if (!data) {
        return setStatusText('Error: Failed to analyze details');
    }

    console.log("data", data);

    setStatusText('Analysis complete, redirecting...');
    updateStatusText();

    window.location.href = `roadmap.html?id=${encodeURIComponent(data)}`;

}

async function rendertopicdata() {
    try {
        const response = await fetch("https://project-hackothon.onrender.com/api/getRoadmaps");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const roadmaps = await response.json();

        const html = roadmaps.map(item => `
        <a href="roadmap.html?id=${item._id}" class="flex flex-col gap-4 w-[310px] lg:w-[330px] xl:w-[390px] bg-[url('assets/images/bg-main.svg')] bg-cover rounded-2xl p-4 animate-in fade-in duration-1000">
            <h4 class=" max-sm:text-[1.5rem] text-2xl text-gradient leading-tight xl:tracking-[-2px] font-medium">
                       ${item.topic}</h4>
            <p class="text-lg break-words text-gray-500">Learn ${item.keywords.join(", ")} and more</p>
        </a>
    `).join('');

        if (document.getElementById('topic')) {
            document.getElementById('topic').innerHTML = html;
        }

        // console.log("Fetched roadmaps:", roadmaps);

        // // For example, display roadmap topics in the console or update your UI
        // roadmaps.forEach(rm => {
        //     console.log(`Topic: ${rm.topic}, User ID: ${rm.userId}`);
        // });

        return roadmaps; // if you want to use it elsewhere
    } catch (error) {
        console.error("Failed to fetch roadmaps:", error);
    }
}

function getData() {
    let selectedKeywords = [];

    const html = keywords.map(item => `
    <button type="button"
        class="px-3 py-1 text-gray-800 bg-gray-200 rounded hover:bg-gray-300"
        data-keyword="${item}">
        ${item}
    </button>`).join('');
    if (document.getElementById('keywords')) {
        document.getElementById('keywords').innerHTML = html;
    }

    document.querySelectorAll('#keywords button').forEach(btn => {
        btn.addEventListener('click', () => {
            const keyword = btn.dataset.keyword;
            // console.log(keyword)

            // Toggle selection
            if (selectedKeywords.includes(keyword)) {
                selectedKeywords = selectedKeywords.filter(k => k !== keyword);
                btn.classList.remove("bg-blue-500", "text-white");
                btn.classList.add("bg-gray-200", "text-gray-800");
            } else {
                selectedKeywords.push(keyword);
                btn.classList.remove("bg-gray-200", "text-gray-800");
                btn.classList.add("bg-blue-500", "text-white");
            }
        });
    });

    // Handle form submit
    if (document.getElementById('UploadForm')) {
        document.getElementById('UploadForm').addEventListener('submit', function (e) {
            e.preventDefault(); // stop form reload
            const name = document.uploadform.name.value;
            const topic = document.getElementById('title').value;

            if (topic == 'topic') {
                return
            }

            getroadmap(name, topic, selectedKeywords);
            updateStatusText();
        });
    }
}

const fetchRoadmapFromHome = async () => {
    const params = new URLSearchParams(window.location.search);
    const roadmapId = params.get("id");

    if (roadmapId) {

        try {
            const response = await fetch(`https://project-hackothon.onrender.com/api/getRoadmap/${roadmapId}`);

            // console.log(response)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const roadmap = await response.json();

            const html = `
  <div class="rounded-lg p-6 w-full px-20 bg-white shadow-sm">
    <h2 class="max-sm:text-xl text-3xl text-dark-200">${roadmap.topic}</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      ${roadmap.weeks.map(week => `
        <div class="mt-6">
          <h5 class="font-semibold text-gray-700 mb-2">Week ${week.week}</h5>
          ${week.steps.map(step => `
            <div class="mb-8">
              <h3 class="font-bold text-lg mb-2">${step.title}</h3>
              <p class="mb-4 text-gray-600">${step.description}</p>
              <h6 class="font-semibold mb-2">Links</h6>
              <ul class="space-y-1 text-blue-600">
                ${step.resources.youtube.map(url => `
                  <li>
                    <input type="checkbox" checked class="mr-2 align-middle" />
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-800">YouTube Link</a>
                  </li>
                `).join('')}
                ${step.resources.articles.map(url => `
                  <li>
                    <input type="checkbox" checked class="mr-2 align-middle" />
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-800">Article Link</a>
                  </li>
                `).join('')}
                ${step.resources.websites.map(url => `
                  <li>
                    <input type="checkbox" checked class="mr-2 align-middle" />
                    <a href="${url}" target="_blank" rel="noopener noreferrer" class="underline hover:text-blue-800">Website Link</a>
                  </li>
                `).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      `).join('')}
    </div>
  </div>
`;

            if (document.getElementById('roadmap')) {
                document.getElementById('roadmap').innerHTML = html;
            }

            return roadmap; // if you want to use it elsewhere
        } catch (error) {
            console.error("Failed to fetch roadmaps:", error);
            const html = `
            <div class="rounded-lg p-6 w-full px-20 bg-white shadow-sm">
    <h2 class="max-sm:text-xl text-3xl text-dark-200">Roadmap not Found</h2>
     </div>`;

            if (document.getElementById('roadmap')) {
                document.getElementById('roadmap').innerHTML = html;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    rendertopicdata();
    getData();
    fetchRoadmapFromHome();
    updateStatusText();
});
