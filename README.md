# SCORM-12-Wistia
A Scorm File in 1.2 format with an index.html file used to play Wistia videos sequentially

Edit the index html file the section you are looking for is in the script section //Array of Wisita video IDS. Add in your video ids, they are at the end of a wistia share link

Once updated, zip the whole folder up - the folder structure should remain the same.

wistia-scorm-package/
│
├── imsmanifest.xml
├── adlcp_rootv1p2.xsd
├── ims_xml.xsd
├── imscp_rootv1p1p2.xsd
├── imsmd_rootv1p2p1.xsd
├── index.html
└── scripts/
    └── scorm_api_wrapper.js
