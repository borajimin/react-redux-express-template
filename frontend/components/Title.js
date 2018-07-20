import React from "react";
import PropTypes from "prop-types";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/jsx";
import "brace/theme/monokai";

const languages = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css"
];

const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal"
];

languages.forEach(lang => {
    require(`brace/mode/${lang}`);
    require(`brace/snippets/${lang}`);
});

themes.forEach(theme => {
    require(`brace/theme/${theme}`);
});
/* eslint-disable no-alert, no-console */
import "brace/ext/language_tools";
import "brace/ext/searchbox";

const defaultValue = `{
  "hi": "how are you",
  "how": {
    "when": [1,2,3]
  }
}`;

class Title extends React.Component {
    onLoad() {
        console.log("i've loaded");
    }
    onChange(newValue) {
        console.log("change", newValue);
        this.setState({
            value: newValue
        });
    }
    setTheme(e) {
        this.setState({
            theme: e.target.value
        });
    }
    setBoolean(name, value) {
        this.setState({
            [name]: value
        });
    }
    setFontSize(e) {
        this.setState({
            fontSize: parseInt(e.target.value, 10)
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            value: defaultValue,
            theme: "monokai",
            mode: "json",
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: true,
            fontSize: 14,
            showGutter: true,
            showPrintMargin: true,
            highlightActiveLine: true,
            enableSnippets: false,
            showLineNumbers: true
        };
        this.setTheme = this.setTheme.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.setBoolean = this.setBoolean.bind(this);
    }
    render() {
        return (
            <div className="columns">
                <div className="column">
                    <div className="field">
                        <label>Theme:</label>
                        <p className="control">
                            <span className="select">
                                <select name="Theme" onChange={this.setTheme} value={this.state.theme}>
                                    {themes.map(lang => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </p>
                    </div>

                    <div className="field">
                        <label>Font Size:</label>
                        <p className="control">
                            <span className="select">
                                <select name="Font Size" onChange={this.setFontSize} value={this.state.fontSize}>
                                    {[14, 16, 18, 20, 24, 28, 32, 40].map(lang => (
                                        <option key={lang} value={lang}>
                                            {lang}
                                        </option>
                                    ))}
                                </select>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.enableBasicAutocompletion}
                                    onChange={e => this.setBoolean("enableBasicAutocompletion", e.target.checked)}
                                />
                                Enable Basic Autocomplete
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.enableLiveAutocompletion}
                                    onChange={e => this.setBoolean("enableLiveAutocompletion", e.target.checked)}
                                />
                                Enable Live Autocomplete
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.showGutter}
                                    onChange={e => this.setBoolean("showGutter", e.target.checked)}
                                />
                                Show Gutter
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.showPrintMargin}
                                    onChange={e => this.setBoolean("showPrintMargin", e.target.checked)}
                                />
                                Show Print Margin
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.highlightActiveLine}
                                    onChange={e => this.setBoolean("highlightActiveLine", e.target.checked)}
                                />
                                Highlight Active Line
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.enableSnippets}
                                    onChange={e => this.setBoolean("enableSnippets", e.target.checked)}
                                />
                                Enable Snippets
                            </label>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    checked={this.state.showLineNumbers}
                                    onChange={e => this.setBoolean("showLineNumbers", e.target.checked)}
                                />
                                Show Line Numbers
                            </label>
                        </p>
                    </div>
                </div>
                <div className="examples column">
                    <h2>Editor</h2>
                    <AceEditor
                        mode={this.state.mode}
                        theme={this.state.theme}
                        name="blah2"
                        onLoad={this.onLoad}
                        onChange={this.onChange}
                        value={this.state.value}
                        fontSize={this.state.fontSize}
                        showPrintMargin={this.state.showPrintMargin}
                        showGutter={this.state.showGutter}
                        highlightActiveLine={this.state.highlightActiveLine}
                        setOptions={{
                            enableBasicAutocompletion: this.state.enableBasicAutocompletion,
                            enableLiveAutocompletion: this.state.enableLiveAutocompletion,
                            enableSnippets: this.state.enableSnippets,
                            showLineNumbers: this.state.showLineNumbers,
                            tabSize: 2
                        }}
                    />
                </div>
            </div>
        );
    }
}

Title.propTypes = {
    name: PropTypes.string
};

export default Title;
