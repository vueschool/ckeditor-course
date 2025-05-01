<template>
  <div class="main-container">
    <div ref="editorPresenceElement" class="presence" />
    <div
      ref="editorContainerElement"
      class="editor-container editor-container_document-editor editor-container_include-outline editor-container_include-annotations editor-container_include-pagination"
    >
      <div ref="editorMenuBarElement" class="editor-container__menu-bar" />
      <div ref="editorToolbarElement" class="editor-container__toolbar" />
      <div class="editor-container__editor-wrapper">
        <div ref="editorOutlineElement" class="editor-container__sidebar" />
        <div class="editor-container__editor">
          <div ref="editorElement">
            <ckeditor
              v-if="editor && config"
              :model-value="config.initialData"
              :editor="editor"
              :config="config"
              @ready="onReady"
            />
          </div>
        </div>
        <div ref="editorAnnotationsElement" class="editor-container__sidebar" />
      </div>
    </div>
    <div ref="editorRevisionHistoryElement" class="revision-history">
      <div class="revision-history__wrapper">
        <div
          ref="editorRevisionHistoryEditorElement"
          class="revision-history__editor"
        />
        <div
          ref="editorRevisionHistorySidebarElement"
          class="revision-history__sidebar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
/**
 * This configuration was generated using the CKEditor 5 Builder. You can modify it anytime using this link:
 * https://ckeditor.com/ckeditor-5/builder/?redirect=portal#installation/NoBgNARATAdArDEFIGYAcBGNaogyKOAdgDYCBOFAFjhJTjipBKqkOpEqYzimQgCmAO2QowwDGEnhJ0gLqQiDAQDMMAIwhygA
 */

import { computed, ref, onMounted, watchEffect, useTemplateRef } from "vue";
import { Ckeditor, useCKEditorCloud } from "@ckeditor/ckeditor5-vue";

const LICENSE_KEY = useRuntimeConfig().public.ckeditorLicenseKey;

/**
 * Unique ID that will be used to identify this document. E.g. you may use ID taken from your database.
 * Read more: https://ckeditor.com/docs/ckeditor5/latest/api/module_collaboration-core_config-RealTimeCollaborationConfig.html
 */
const DOCUMENT_ID = "<YOUR_DOCUMENT_ID>";

/**
 * Please update the following values with your tokens.
 * Instructions on how to obtain them: https://ckeditor.com/docs/trial/latest/guides/real-time/quick-start.html
 */
const CLOUD_SERVICES_TOKEN_URL =
  "https://_rz8mh6f6lp1.cke-cs.com/token/dev/f5bec2a290ca677fc23fdb7c20d494b77835fc51427a5ecabf9f2d6e6dee?limit=10";
const CLOUD_SERVICES_WEBSOCKET_URL = "wss://_rz8mh6f6lp1.cke-cs.com/ws";

const editorToolbar = useTemplateRef("editorToolbarElement");
const editorMenuBar = useTemplateRef("editorMenuBarElement");
const editorAnnotations = useTemplateRef("editorAnnotationsElement");
const editorPresence = useTemplateRef("editorPresenceElement");
const editorOutline = useTemplateRef("editorOutlineElement");
const editorContainer = useTemplateRef("editorContainerElement");
const editorRevisionHistory = useTemplateRef("editorRevisionHistoryElement");
const editorRevisionHistoryEditor = useTemplateRef(
  "editorRevisionHistoryEditorElement"
);
const editorRevisionHistorySidebar = useTemplateRef(
  "editorRevisionHistorySidebarElement"
);

const cloud = useCKEditorCloud({
  version: "45.0.0",
  premium: true,
  ckbox: { version: "2.6.1" },
});

const isLayoutReady = ref(false);

const editor = computed(() => {
  if (!cloud.data.value) {
    return null;
  }

  return cloud.data.value.CKEditor.DecoupledEditor;
});

const config = computed(() => {
  if (!isLayoutReady.value) {
    return null;
  }

  if (!cloud.data.value) {
    return null;
  }

  const {
    Plugin,
    ButtonView,
    Alignment,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    BalloonToolbar,
    Bold,
    Bookmark,
    CKBox,
    CKBoxImageEdit,
    CloudServices,
    Code,
    Emoji,
    Essentials,
    FindAndReplace,
    FontBackgroundColor,
    FontColor,
    FontFamily,
    FontSize,
    Heading,
    HorizontalLine,
    ImageBlock,
    ImageCaption,
    ImageEditing,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    ImageUtils,
    Indent,
    IndentBlock,
    Italic,
    Link,
    LinkImage,
    List,
    ListProperties,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    RemoveFormat,
    SpecialCharacters,
    SpecialCharactersArrows,
    SpecialCharactersCurrency,
    SpecialCharactersEssentials,
    SpecialCharactersLatin,
    SpecialCharactersMathematical,
    SpecialCharactersText,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Underline,
  } = cloud.data.value.CKEditor;
  const {
    CaseChange,
    Comments,
    DocumentOutline,
    ExportPdf,
    ExportWord,
    FormatPainter,
    ImportWord,
    MergeFields,
    MultiLevelList,
    Pagination,
    PasteFromOfficeEnhanced,
    PresenceList,
    RealTimeCollaborativeComments,
    RealTimeCollaborativeEditing,
    RealTimeCollaborativeRevisionHistory,
    RealTimeCollaborativeTrackChanges,
    RevisionHistory,
    SlashCommand,
    TableOfContents,
    Template,
    TrackChanges,
    TrackChangesData,
    TrackChangesPreview,
  } = cloud.data.value.CKEditorPremiumFeatures;

  return {
    toolbar: {
      items: [
        "previousPage",
        "nextPage",
        "|",
        "revisionHistory",
        "trackChanges",
        "comment",
        "|",
        "insertMergeField",
        "previewMergeFields",
        "|",
        "formatPainter",
        "|",
        "heading",
        "|",
        "fontSize",
        "fontFamily",
        "fontColor",
        "fontBackgroundColor",
        "|",
        "bold",
        "italic",
        "underline",
        "|",
        "link",
        "insertImage",
        "insertTable",
        "|",
        "alignment",
        "|",
        "bulletedList",
        "numberedList",
        "multiLevelList",
        "todoList",
        "outdent",
        "indent",
      ],
      shouldNotGroupWhenFull: false,
    },
    plugins: [
      Alignment,
      Autoformat,
      AutoImage,
      AutoLink,
      Autosave,
      BalloonToolbar,
      Bold,
      Bookmark,
      CaseChange,
      CKBox,
      CKBoxImageEdit,
      CloudServices,
      Code,
      Comments,
      DocumentOutline,
      Emoji,
      Essentials,
      ExportPdf,
      ExportWord,
      FindAndReplace,
      FontBackgroundColor,
      FontColor,
      FontFamily,
      FontSize,
      FormatPainter,
      Heading,
      HorizontalLine,
      ImageBlock,
      ImageCaption,
      ImageEditing,
      ImageInline,
      ImageInsert,
      ImageInsertViaUrl,
      ImageResize,
      ImageStyle,
      ImageTextAlternative,
      ImageToolbar,
      ImageUpload,
      ImageUtils,
      ImportWord,
      Indent,
      IndentBlock,
      Italic,
      Link,
      LinkImage,
      List,
      ListProperties,
      Mention,
      MergeFields,
      MultiLevelList,
      PageBreak,
      Pagination,
      Paragraph,
      PasteFromOffice,
      PasteFromOfficeEnhanced,
      PictureEditing,
      PresenceList,
      RealTimeCollaborativeComments,
      RealTimeCollaborativeEditing,
      RealTimeCollaborativeRevisionHistory,
      RealTimeCollaborativeTrackChanges,
      RemoveFormat,
      RevisionHistory,
      SlashCommand,
      SpecialCharacters,
      SpecialCharactersArrows,
      SpecialCharactersCurrency,
      SpecialCharactersEssentials,
      SpecialCharactersLatin,
      SpecialCharactersMathematical,
      SpecialCharactersText,
      Strikethrough,
      Subscript,
      Superscript,
      Table,
      TableCaption,
      TableCellProperties,
      TableColumnResize,
      TableOfContents,
      TableProperties,
      TableToolbar,
      Template,
      TextTransformation,
      TodoList,
      TrackChanges,
      TrackChangesData,
      TrackChangesPreview,
      Underline,
    ],
    balloonToolbar: [
      "comment",
      "|",
      "bold",
      "italic",
      "|",
      "link",
      "insertImage",
      "|",
      "bulletedList",
      "numberedList",
    ],
    cloudServices: {
      tokenUrl: CLOUD_SERVICES_TOKEN_URL,
      webSocketUrl: CLOUD_SERVICES_WEBSOCKET_URL,
    },
    collaboration: {
      channelId: DOCUMENT_ID,
    },
    comments: {
      editorConfig: {
        extraPlugins: [Autoformat, Bold, Italic, List, Mention],
        mention: {
          feeds: [
            {
              marker: "@",
              feed: [
                /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html#comments-with-mentions */
              ],
            },
          ],
        },
      },
    },
    documentOutline: {
      container: editorOutline.value,
    },
    exportPdf: {
      stylesheets: [
        /* This path should point to the content stylesheets on your assets server. */
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-pdf.html */
        "./export-style.css",
        /* Export PDF needs access to stylesheets that style the content. */
        "https://cdn.ckeditor.com/ckeditor5/45.0.0/ckeditor5.css",
        "https://cdn.ckeditor.com/ckeditor5-premium-features/45.0.0/ckeditor5-premium-features.css",
      ],
      fileName: "export-pdf-demo.pdf",
      converterOptions: {
        format: "A4",
        margin_top: "20mm",
        margin_bottom: "20mm",
        margin_right: "12mm",
        margin_left: "12mm",
        page_orientation: "portrait",
      },
    },
    exportWord: {
      stylesheets: [
        /* This path should point to the content stylesheets on your assets server. */
        /* See: https://ckeditor.com/docs/ckeditor5/latest/features/converters/export-word.html */
        "./export-style.css",
        /* Export Word needs access to stylesheets that style the content. */
        "https://cdn.ckeditor.com/ckeditor5/45.0.0/ckeditor5.css",
        "https://cdn.ckeditor.com/ckeditor5-premium-features/45.0.0/ckeditor5-premium-features.css",
      ],
      fileName: "export-word-demo.docx",
      converterOptions: {
        document: {
          orientation: "portrait",
          size: "A4",
          margins: {
            top: "20mm",
            bottom: "20mm",
            right: "12mm",
            left: "12mm",
          },
        },
      },
    },
    fontFamily: {
      supportAllValues: true,
    },
    fontSize: {
      options: [10, 12, 14, "default", 18, 20, 22],
      supportAllValues: true,
    },
    heading: {
      options: [
        {
          model: "paragraph",
          title: "Paragraph",
          class: "ck-heading_paragraph",
        },
        {
          model: "heading1",
          view: "h1",
          title: "Heading 1",
          class: "ck-heading_heading1",
        },
        {
          model: "heading2",
          view: "h2",
          title: "Heading 2",
          class: "ck-heading_heading2",
        },
        {
          model: "heading3",
          view: "h3",
          title: "Heading 3",
          class: "ck-heading_heading3",
        },
        {
          model: "heading4",
          view: "h4",
          title: "Heading 4",
          class: "ck-heading_heading4",
        },
        {
          model: "heading5",
          view: "h5",
          title: "Heading 5",
          class: "ck-heading_heading5",
        },
        {
          model: "heading6",
          view: "h6",
          title: "Heading 6",
          class: "ck-heading_heading6",
        },
      ],
    },
    image: {
      toolbar: [
        "toggleImageCaption",
        "imageTextAlternative",
        "|",
        "imageStyle:inline",
        "imageStyle:wrapText",
        "imageStyle:breakText",
        "|",
        "resizeImage",
        "|",
        "ckboxImageEdit",
      ],
    },
    initialData:
      '<h2>Congratulations on setting up CKEditor 5! 🎉</h2>\n<p>\n\tYou\'ve successfully created a CKEditor 5 project. This powerful text editor\n\twill enhance your application, enabling rich text editing capabilities that\n\tare customizable and easy to use.\n</p>\n<h3>What\'s next?</h3>\n<ol>\n\t<li>\n\t\t<strong>Integrate into your app</strong>: time to bring the editing into\n\t\tyour application. Take the code you created and add to your application.\n\t</li>\n\t<li>\n\t\t<strong>Explore features:</strong> Experiment with different plugins and\n\t\ttoolbar options to discover what works best for your needs.\n\t</li>\n\t<li>\n\t\t<strong>Customize your editor:</strong> Tailor the editor\'s\n\t\tconfiguration to match your application\'s style and requirements. Or\n\t\teven write your plugin!\n\t</li>\n</ol>\n<p>\n\tKeep experimenting, and don\'t hesitate to push the boundaries of what you\n\tcan achieve with CKEditor 5. Your feedback is invaluable to us as we strive\n\tto improve and evolve. Happy editing!\n</p>\n<h3>Helpful resources</h3>\n<ul>\n\t<li>📝 <a href="https://portal.ckeditor.com/checkout?plan=free">Trial sign up</a>,</li>\n\t<li>📕 <a href="https://ckeditor.com/docs/ckeditor5/latest/installation/index.html">Documentation</a>,</li>\n\t<li>⭐️ <a href="https://github.com/ckeditor/ckeditor5">GitHub</a> (star us if you can!),</li>\n\t<li>🏠 <a href="https://ckeditor.com">CKEditor Homepage</a>,</li>\n\t<li>🧑‍💻 <a href="https://ckeditor.com/ckeditor-5/demo/">CKEditor 5 Demos</a>,</li>\n</ul>\n<h3>Need help?</h3>\n<p>\n\tSee this text, but the editor is not starting up? Check the browser\'s\n\tconsole for clues and guidance. It may be related to an incorrect license\n\tkey if you use premium features or another feature-related requirement. If\n\tyou cannot make it work, file a GitHub issue, and we will help as soon as\n\tpossible!\n</p>\n',
    licenseKey: LICENSE_KEY,
    link: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      decorators: {
        toggleDownloadable: {
          mode: "manual",
          label: "Downloadable",
          attributes: {
            download: "file",
          },
        },
      },
    },
    list: {
      properties: {
        styles: true,
        startIndex: true,
        reversed: true,
      },
    },
    mention: {
      feeds: [
        {
          marker: "@",
          feed: [
            /* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */
          ],
        },
      ],
    },
    mergeFields: {
      /* Read more: https://ckeditor.com/docs/ckeditor5/latest/features/merge-fields.html#configuration */
    },
    pagination: {
      pageWidth: "21cm",
      pageHeight: "29.7cm",
      pageMargins: {
        top: "20mm",
        bottom: "20mm",
        right: "12mm",
        left: "12mm",
      },
    },
    placeholder: "Type or paste your content here!",
    presenceList: {
      container: editorPresence.value,
    },
    revisionHistory: {
      editorContainer: editorContainer.value,
      viewerContainer: editorRevisionHistory.value,
      viewerEditorElement: editorRevisionHistoryEditor.value,
      viewerSidebarContainer: editorRevisionHistorySidebar.value,
      resumeUnsavedRevision: true,
    },
    sidebar: {
      container: editorAnnotations.value,
    },
    table: {
      contentToolbar: [
        "tableColumn",
        "tableRow",
        "mergeTableCells",
        "tableProperties",
        "tableCellProperties",
      ],
    },
    template: {
      definitions: [
        {
          title: "Introduction",
          description: "Simple introduction to an article",
          icon: '<svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">\n    <g id="icons/article-image-right">\n        <rect id="icon-bg" width="45" height="45" rx="2" fill="#A5E7EB"/>\n        <g id="page" filter="url(#filter0_d_1_507)">\n            <path d="M9 41H36V12L28 5H9V41Z" fill="white"/>\n            <path d="M35.25 12.3403V40.25H9.75V5.75H27.7182L35.25 12.3403Z" stroke="#333333" stroke-width="1.5"/>\n        </g>\n        <g id="image">\n            <path id="Rectangle 22" d="M21.5 23C21.5 22.1716 22.1716 21.5 23 21.5H31C31.8284 21.5 32.5 22.1716 32.5 23V29C32.5 29.8284 31.8284 30.5 31 30.5H23C22.1716 30.5 21.5 29.8284 21.5 29V23Z" fill="#B6E3FC" stroke="#333333"/>\n            <path id="Vector 1" d="M24.1184 27.8255C23.9404 27.7499 23.7347 27.7838 23.5904 27.9125L21.6673 29.6268C21.5124 29.7648 21.4589 29.9842 21.5328 30.178C21.6066 30.3719 21.7925 30.5 22 30.5H32C32.2761 30.5 32.5 30.2761 32.5 30V27.7143C32.5 27.5717 32.4391 27.4359 32.3327 27.3411L30.4096 25.6268C30.2125 25.451 29.9127 25.4589 29.7251 25.6448L26.5019 28.8372L24.1184 27.8255Z" fill="#44D500" stroke="#333333" stroke-linejoin="round"/>\n            <circle id="Ellipse 1" cx="26" cy="25" r="1.5" fill="#FFD12D" stroke="#333333"/>\n        </g>\n        <rect id="Rectangle 23" x="13" y="13" width="12" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 24" x="13" y="17" width="19" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 25" x="13" y="21" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 26" x="13" y="25" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 27" x="13" y="29" width="6" height="2" rx="1" fill="#B4B4B4"/>\n        <rect id="Rectangle 28" x="13" y="33" width="16" height="2" rx="1" fill="#B4B4B4"/>\n    </g>\n    <defs>\n        <filter id="filter0_d_1_507" x="9" y="5" width="28" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n            <feFlood flood-opacity="0" result="BackgroundImageFix"/>\n            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>\n            <feOffset dx="1" dy="1"/>\n            <feComposite in2="hardAlpha" operator="out"/>\n            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.29 0"/>\n            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_507"/>\n            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_507" result="shape"/>\n        </filter>\n    </defs>\n</svg>\n',
          data: "<h2>Introduction</h2><p>In today's fast-paced world, keeping up with the latest trends and insights is essential for both personal growth and professional development. This article aims to shed light on a topic that resonates with many, providing valuable information and actionable advice. Whether you're seeking to enhance your knowledge, improve your skills, or simply stay informed, our comprehensive analysis offers a deep dive into the subject matter, designed to empower and inspire our readers.</p>",
        },
      ],
    },
  };
});

onMounted(() => {
  isLayoutReady.value = true;
});

watchEffect(() => {
  if (config.value) {
    configUpdateAlert(config.value);
  }
});

function onReady(editor) {
  [...editorToolbar.value.children].forEach((child) => child.remove());
  [...editorMenuBar.value.children].forEach((child) => child.remove());

  editorToolbar.value.appendChild(editor.ui.view.toolbar.element);
  editorMenuBar.value.appendChild(editor.ui.view.menuBarView.element);
}

/**
 * This function exists to remind you to update the config needed for premium features.
 * The function can be safely removed. Make sure to also remove call to this function when doing so.
 */
function configUpdateAlert(config) {
  if (configUpdateAlert.configUpdateAlertShown) {
    return;
  }

  const isModifiedByUser = (currentValue, forbiddenValue) => {
    if (currentValue === forbiddenValue) {
      return false;
    }

    if (currentValue === undefined) {
      return false;
    }

    return true;
  };

  const valuesToUpdate = [];

  configUpdateAlert.configUpdateAlertShown = true;

  if (!isModifiedByUser(config.licenseKey, "<YOUR_LICENSE_KEY>")) {
    valuesToUpdate.push("LICENSE_KEY");
  }

  if (
    !isModifiedByUser(
      config.cloudServices?.tokenUrl,
      "<YOUR_CLOUD_SERVICES_TOKEN_URL>"
    )
  ) {
    valuesToUpdate.push("CLOUD_SERVICES_TOKEN_URL");
  }

  if (
    !isModifiedByUser(
      config.cloudServices?.webSocketUrl,
      "<YOUR_CLOUD_SERVICES_WEBSOCKET_URL>"
    )
  ) {
    valuesToUpdate.push("CLOUD_SERVICES_WEBSOCKET_URL");
  }

  if (valuesToUpdate.length) {
    window.alert(
      [
        "Please update the following values in your editor config",
        "to receive full access to Premium Features:",
        "",
        ...valuesToUpdate.map((value) => ` - ${value}`),
      ].join("\n")
    );
  }
}
</script>
