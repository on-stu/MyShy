import React, { useState } from "react";
import "./postPage.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function PostPage() {
  const [value, setValue] = useState("");

  const onChange = (data) => {
    setValue(data);
    console.log(value);
  };

  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    //'font',
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "align",
    "color",
    "background",
  ];
  return (
    <>
      <div className="post__Container">
        <div className="post__header">hello</div>
        <div
          style={{
            height: "692px",
            width: "900px",
            paddingBottom: 0,
            backgroundColor: "white",
          }}
        >
          <ReactQuill
            style={{
              height: "650px",
              width: "100%",

              paddingBottom: 0,
            }}
            theme="snow"
            modules={modules}
            formats={formats}
            value={value || ""}
            onChange={(content, delta, source, editor) =>
              onChange(editor.getHTML())
            }
          />
        </div>
        {/* <div className="quill">
          <div
            className="ql-container ql-snow"
            style={{ width: "900px", backgroundColor: "white" }}
          >
            <div
              className="ql-editor"
              dangerouslySetInnerHTML={{ __html: value }}
            ></div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default PostPage;
