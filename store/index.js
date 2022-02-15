// holds your root state
export const state = () => ({
    PageComponents: {
        Hero: {
            id: "Hero",
            name: "Hero Section",
            Description:
                "First impressions matter. The Hero section is the first section that users will see when they visit your site, so make it count! <br/> <br/> \
            Keep it short, clear, and to the point.",
            Style: {
                Show: "show",
                Collapsed: "",
                Selected: null,
                Deleted: null,
                BuilderText: "Build Your Header",
                Options: [
                    {
                        value: "HeroStyle1",
                        label: "Left Aligned",

                        align: "start",
                        placeholders: [
                            "placeholder col-11",
                            "placeholder col-8",
                            "placeholder bg-white col-4",
                            "placeholder bg-success col-5",
                        ],
                    },
                    {
                        value: "HeroStyle2",
                        label: "Centered",
                        align: "center",
                        placeholders: [
                            "placeholder col-11",
                            "placeholder col-8",

                            "placeholder bg-success col-5",
                        ],
                    },
                ],
            },
            Content: {
                title: {
                    id: "title",
                    text: "Fresh and on-time.",
                    label: "Title",
                    size: "h1",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                subtitle: {
                    id: "subtitle",
                    text: "Get produce delivered today.",
                    label: "Subtitle",
                    size: "h3",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                buttonText: {
                    id: "buttonText",
                    text: "Tell Me More",
                    label: "Button Text",
                    size: "md",
                    options: ["lg", "md", "sm"],
                },
                buttonLink: {
                    id: "buttonLink",
                    text: "#contact",
                    label: "Button Link",
                    // options: ["#contact", "#about", "#services"],
                },
            },
        },
        Content1: {
            id: "Content1",
            name: "Content Section",
            Style: {
                Show: "",
                Selected: null,
                Deleted: null,
                Collapsed: "collapsed",
                BuilderText: "Add Content Section",
                Options: [
                    {
                        value: "ContentStyle1",
                        label: "One Column",
                        align: "center ",
                        placeholders: [
                            "placeholder col-8",
                            "placeholder col-7",

                            "placeholder col-6",
                        ],
                    },
                    {
                        value: "ContentStyle2",
                        label: "Two Column",
                        align: "start",
                        placeholders: [
                            "placeholder col-5",
                            "placeholder bg-white col-1",
                            "placeholder col-5 2",
                            "placeholder bg-white col-1 2",
                            "placeholder col-5 3",
                            "placeholder bg-white col-1 3",
                            "placeholder col-5 4",
                            "placeholder bg-white col-1 4",
                            "placeholder col-5 5",
                            "placeholder bg-white col-1 5",
                            "placeholder col-5 6",
                            "placeholder bg-white col-1 6",
                        ],
                    },
                ],
            },
            Content: {
                title: {
                    id: "title",
                    text: "Affordable, Local, Organic",
                    label: "Title",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                bodyText: {
                    id: "bodyText",
                    text: "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
                    label: "Text",
                    size: "h3",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                buttonText: {
                    id: "buttonText",
                    text: "Tell Me More",
                    label: "Button Text",
                    size: "md",
                    options: ["lg", "md", "sm"],
                },
                buttonLink: {
                    id: "buttonLink",
                    text: "#contact",
                    label: "Button Link",
                },
            },
        },
        CounterSection: {
            id: "CounterSection",
            name: "Counter Section",
            Style: {
                Show: "",
                Selected: null,
                Deleted: null,
                Collapsed: "collapsed",
                BuilderText: "Add a Counter Section",

                Options: [
                    {
                        value: "CounterSection1",
                        label: "Centered",
                        align: "center ",
                        placeholders: [
                            "placeholder col-3",
                            "placeholder col-1 bg-white",
                            "placeholder col-3 2",
                            "placeholder col-1 bg-white 2",
                            "placeholder col-3 3",
                        ],
                    },
                ],
            },
            Content: {
                title: {
                    id: "title",
                    text: "Affordable, Local, Organic",
                    label: "Title",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                repeaters: [
                    {
                        title: "Deliveries",
                        content: "1000+",
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                    },
                    {
                        title: "Farmers & Producers",
                        content: 560,
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                    },
                    {
                        title: "Happy Customers",
                        content: "5000+",
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                    },
                ],
            },
        },

        CardsSection: {
            id: "CardsSection",
            name: "Cards Section",
            Style: {
                Show: "",
                Selected: null,
                Deleted: null,
                Collapsed: "collapsed",
                BuilderText: "Add a Cards Section",

                Options: [
                    {
                        value: "CardsSection1",
                        label: "Narrow",
                        align: "center ",
                        placeholders: [
                            "placeholder col-3",
                            "placeholder col-1 bg-white",
                            "placeholder col-3 2",
                            "placeholder col-1 bg-white 2",
                            "placeholder col-3 3",
                        ],
                    },
                    {
                        value: "CardsSection2",
                        label: "Wide",
                        align: "center ",

                        placeholders: [
                            "placeholder col-1 bg-white",
                            "placeholder col-2",
                            "placeholder col-1 bg-white 1",
                            "placeholder col-2 2",
                            "placeholder col-1 bg-white 3",
                            "placeholder col-2 3",
                            "placeholder col-1 bg-white 2",
                        ],
                    },
                ],
            },
            Content: {
                title: {
                    id: "title",
                    text: "Affordable, Local, Organic",
                    label: "Title",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                bodyText: {
                    id: "value",
                    text: "",
                    label: "Body Text",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                repeaters: [
                    {
                        title: "Farm to Table",
                        content: " Id ea voluptate officia reprehenderit est consequat ex consequat.",
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                        image: {
                            id: "image",
                            src: "https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500",
                            width: "100%",
                            height: "100%",
                        },
                    },
                    {
                        title: "Part of a Healthy Lifestyle",
                        content: " Id ea voluptate officia reprehenderit est consequat ex consequat.",
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                        image: {
                            id: "image",
                            src: "https://images.pexels.com/photos/1640769/pexels-photo-1640769.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500",
                            width: "100%",
                            height: "100%",
                        },
                    },
                    {
                        title: "Convenient & Quick",
                        content: " Id ea voluptate officia reprehenderit est consequat ex consequat.",
                        size: "h3",
                        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                        image: {
                            id: "image",
                            src: "https://images.pexels.com/photos/4392043/pexels-photo-4392043.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=500",
                            width: "100%",
                            height: "100%",
                        },
                    },
                ],
            },
        },
        ContactSection: {
            id: "ContactSection",
            name: "Contact Section",
            Style: {
                Selected: null,
                Deleted: null,
                Show: "",
                Collapsed: "collapsed",
                BuilderText: "Contact Section:",

                Options: [

                    {
                        value: "ContactSection1",
                        label: "Centered",
                        align: "center ",
                        placeholders: [
                            "placeholder col-3",
                            "placeholder col-1 bg-white",
                            "placeholder col-3 2",
                            "placeholder col-1 bg-white 2",
                            "placeholder col-3 3",
                        ],
                    },
                ],
            },
            Content: {
                heading: {
                    id: "heading",
                    text: "Contact Us",
                    label: "Heading",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                bodyText:
                {
                    id: "bodyText",
                    text: "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
                    label: "Title",
                    size: "h2",
                    options: ["h1", "h2", "h3", "h4", "h5", "h6"],
                },
                formFields: [
                    {
                        label: "First Name",
                        type: "text",
                        name: "FirstName",
                        placeholder: "Enter your name",
                        width: "50%",
                        required: true,
                    },
                    {
                        label: "Last Name",
                        type: "text",
                        name: "LastName",
                        placeholder: "Enter your last name",
                        width: "50%",
                        required: true,
                    },
                    {
                        label: "Email",
                        type: "email",
                        name: "Email",
                        placeholder: "Enter your email",
                        width: "50%",
                        required: true,
                    },
                    {
                        label: "Phone",
                        type: "tel",
                        name: "Phone",
                        placeholder: "Enter your phone number",
                        width: "50%",
                        required: false,
                    },
                    {
                        label: "Message",
                        type: "textarea",
                        name: "Message",
                        placeholder: "Enter your message",
                        width: "100%",
                        required: false,
                    },
                ],
            },
        },
        FooterSection: {
            id: "FooterSection",
            name: "Footer Section",
            Style: {
                Show: "",
                Selected: null,
                Deleted: null,
                Collapsed: "collapsed",
                Options: [
                    {
                        value: "FooterSection1",
                        label: "Left Aligned",
                    },
                    {
                        value: "FooterSection2",
                        label: "Centered",
                    },
                ],
            },
            Content: {
                title: "Footer",
                bodyText:
                    "We are committed to providing you with the freshest produce from local farmers and producers. We keep costs down through the relationships forged with our suppliers.",
            },
        },
    },
})

// contains your actions
export const actions = {
    counterUp({ state, commit }) {
        commit('setCounter', state.counter + 1)
    }
}
// contains your mutations
export const mutations = {
    setCounter(state, value) {
        state.counter = value
    },
    setSelected(state, data) {
        console.log(state, data)
        for (var i in state.PageComponents) {
            var component = state.PageComponents[i];
            if (component.id !== data.section.id) {
                component.Style.Show = "";
                component.Style.Collapsed = "collapsed";
            } else {
                component.Style.Selected = data.selected;
                component.Style.Show = "show";
                component.Style.Collapsed = "";
                component.id
            }
        }
    },
    deleteSection(state, data) {
        state.PageComponents[data.section.id].Style.Deleted = true
    },
    undeleteSection(state, data) {
        state.PageComponents[data.section.id].Style.Deleted = false
    },
    nextSection(state, data) {
        console.log(data)
        var index = Object.keys(state.PageComponents).indexOf(data.section.id);
        var index2 = index + 1;
        var id = data.section.id;
        var id2 = Object.keys(state.PageComponents)[index2];

        state.PageComponents[id].Style.Show = "";
        state.PageComponents[id].Style.Collapsed = "collapsed";
        state.PageComponents[id2].Style.Show = "show"
        state.PageComponents[id2].Style.Collapsed = ""

    },
    updateContent(state, data) {
        state.PageComponents[data.section.id].Content[data.element][data.property] = data.value;
        console.log(state.PageComponents[data.section.id].Content[data.element], data)
    },
    addItem(state, data) {
        var length = state.PageComponents[data.section.id].Content[data.element].length + 1;
        var value = JSON.parse(JSON.stringify(state.PageComponents[data.section.id].Content[data.element][0]))
        value.title = "New Item " + length
        value.content = ""
        state.PageComponents[data.section.id].Content[data.element].push(value);
        console.log('addedItem', state.PageComponents[data.section.id].Content[data.element])
    },
    removeItem(state, data) {
        state.PageComponents[data.section.id].Content[data.element].splice(data.index, 1);
        console.log('removedItem', state.PageComponents[data.section.id].Content[data.element])
    }
}
// your root getters
export const getters = {
    myGetter(state) { return state.counter + 1000 }
}