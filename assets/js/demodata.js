const topics = [
    {
        id: 1,
        name: "user1",
        topic: "Web Development",
        keywords: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
    },
    {
        id: 2,
        name: "user2",
        topic: "Python Basics",
        keywords: ["Variables", "Loops", "Functions", "Data Types", "OOP"]
    },
    {
        id: 3,
        name: "user3",
        topic: "Data Structures & Algorithms",
        keywords: ["Arrays", "Linked Lists", "Trees", "Sorting", "Dynamic Programming"]
    },
    {
        id: 4,
        name: "user4",
        topic: "Machine Learning",
        keywords: ["Supervised Learning", "Unsupervised Learning", "Regression", "Classification", "Model Training"]
    },
    {
        id: 5,
        name: "user5",
        topic: "UI/UX Design",
        keywords: ["Wireframing", "Prototyping", "Figma", "User Research", "Design Thinking"]
    },
    {
        id: 6,
        name: "user6",
        topic: "Cybersecurity",
        keywords: ["Network Security", "Ethical Hacking", "Cryptography", "Firewalls", "Penetration Testing"]
    },
    {
        id: 7,
        name: "user7",
        topic: "Mobile App Development",
        keywords: ["Flutter", "React Native", "Swift", "Kotlin", "App Deployment"]
    },
    {
        id: 8,
        name: "user8",
        topic: "Cloud Computing",
        keywords: ["AWS", "Azure", "Google Cloud", "Serverless", "Cloud Storage"]
    },
    {
        id: 9,
        name: "user9",
        topic: "Digital Marketing",
        keywords: ["SEO", "Social Media Ads", "Content Marketing", "Email Campaigns", "Analytics"]
    },
    {
        id: 10,
        name: "user10",
        topic: "Entrepreneurship",
        keywords: ["Business Models", "Startup Strategy", "Market Research", "Funding", "Product Development"]
    }
]

const keywords = [
    "Introduction",
    "Basics",
    "Core Concepts",
    "Tools & Resources",
    "Best Practices",
    "Hands-on Practice",
    "Mini Projects",
    "Case Studies",
    "Advanced Techniques",
    "Problem Solving",
    "Industry Applications",
    "Common Mistakes",
    "Optimization",
    "Final Project",
    "Assessment & Review"
];

const roadmaps = [
    {
        "userId": '6898513979a89ecfc6867647',
        "topic": "Web Development",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to HTML",
                        "description": "Learn the basics of HTML structure, tags, and attributes.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=pQN-pnXPaVg"],
                            "articles": ["https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML"],
                            "websites": ["https://www.w3schools.com/html/"]
                        }
                    },
                    {
                        "title": "Introduction to CSS",
                        "description": "Learn styling basics, selectors, and layouts.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=1Rs2ND1ryYc"],
                            "articles": ["https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps"],
                            "websites": ["https://www.w3schools.com/css/"]
                        }
                    }
                ]
            },
            {
                "week": 2,
                "steps": [
                    {
                        "title": "JavaScript Fundamentals",
                        "description": "Variables, data types, and basic DOM manipulation.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=hdI2bqOjy3c"],
                            "articles": ["https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps"],
                            "websites": ["https://javascript.info/"]
                        }
                    }
                ]
            },
            {
                "week": 3,
                "steps": [
                    {
                        "title": "React Basics",
                        "description": "Introduction to components, props, and state.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=bMknfKXIFA8"],
                            "articles": ["https://react.dev/learn"],
                            "websites": ["https://reactjs.org/"]
                        }
                    }
                ]
            },
            {
                "week": 4,
                "steps": [
                    {
                        "title": "Responsive Design",
                        "description": "Make your website mobile-friendly with CSS Flexbox and Grid.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=srvUrASNj0s"],
                            "articles": ["https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design"],
                            "websites": ["https://web.dev/responsive-web-design-basics/"]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "topic": "Python Basics",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to Python",
                        "description": "Installing Python and understanding syntax.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=rfscVS0vtbw"],
                            "articles": ["https://realpython.com/python-first-steps/"],
                            "websites": ["https://www.learnpython.org/"]
                        }
                    },
                    {
                        "title": "Variables & Data Types",
                        "description": "Learn about integers, strings, floats, and booleans.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=ohCDWZgNIU0"],
                            "articles": ["https://www.programiz.com/python-programming/variables-datatypes"],
                            "websites": ["https://docs.python.org/3/tutorial/introduction.html"]
                        }
                    }
                ]
            },
            {
                "week": 2,
                "steps": [
                    {
                        "title": "Control Flow - Loops & Conditionals",
                        "description": "Understand if-else, for loops, and while loops.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=6iF8Xb7Z3wQ"],
                            "articles": ["https://realpython.com/python-conditional-statements/"],
                            "websites": ["https://www.w3schools.com/python/python_conditions.asp"]
                        }
                    }
                ]
            },
            {
                "week": 3,
                "steps": [
                    {
                        "title": "Functions",
                        "description": "Learn to create and use functions.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=9Os0o3wzS_I"],
                            "articles": ["https://realpython.com/defining-your-own-python-function/"],
                            "websites": ["https://www.w3schools.com/python/python_functions.asp"]
                        }
                    }
                ]
            },
            {
                "week": 4,
                "steps": [
                    {
                        "title": "Object-Oriented Programming",
                        "description": "Understand classes, objects, and methods in Python.",
                        "resources": {
                            "youtube": ["https://www.youtube.com/watch?v=JeznW_7DlB0"],
                            "articles": ["https://realpython.com/python3-object-oriented-programming/"],
                            "websites": ["https://docs.python.org/3/tutorial/classes.html"]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "topic": "Data Structures & Algorithms",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to Arrays",
                        "description": "Learn what arrays are and how to manipulate them.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=CHS9iE3YgW0"
                            ],
                            "articles": [
                                "https://www.geeksforgeeks.org/array-data-structure/"
                            ],
                            "websites": [
                                "https://www.programiz.com/dsa/array"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "topic": "Machine Learning",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Machine Learning Overview",
                        "description": "Understand what ML is, its types, and real-world applications.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=GwIo3gDZCVQ"
                            ],
                            "articles": [
                                "https://www.ibm.com/cloud/learn/machine-learning"
                            ],
                            "websites": [
                                "https://scikit-learn.org/stable/"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "topic": "UI/UX Design",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to UI/UX",
                        "description": "Learn the difference between UI and UX, and basic design principles.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=3k5XzgK9m6k"
                            ],
                            "articles": [
                                "https://careerfoundry.com/en/blog/ux-design/what-is-ui-vs-ux/"
                            ],
                            "websites": [
                                "https://www.interaction-design.org/"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 6,
        "topic": "Cybersecurity",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Cybersecurity Basics",
                        "description": "Learn about basic security principles and online threats.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=inWWhr5tnEA"
                            ],
                            "articles": [
                                "https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html"
                            ],
                            "websites": [
                                "https://www.kaspersky.com/resource-center/definitions/what-is-cyber-security"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "topic": "Mobile App Development",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to Mobile App Development",
                        "description": "Understand mobile platforms and frameworks like Flutter and React Native.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=1gDhl4leEzA"
                            ],
                            "articles": [
                                "https://www.geeksforgeeks.org/what-is-mobile-application-development/"
                            ],
                            "websites": [
                                "https://flutter.dev/"
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "topic": "Cloud Computing",
        "weeks": [
            {
                "week": 1,
                "steps": [
                    {
                        "title": "Introduction to Cloud Computing",
                        "description": "Understand cloud concepts and types of cloud services.",
                        "resources": {
                            "youtube": [
                                "https://www.youtube.com/watch?v=2LaAJq1lB1Q"
                            ],
                            "articles": [
                                "https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-is-cloud-computing/"
                            ],
                            "websites": [
                                "https://aws.amazon.com/what-is-cloud-computing/"
                            ]
                        }
                    }
                ]
            }
        ]
    }
];

export { topics, keywords, roadmaps };