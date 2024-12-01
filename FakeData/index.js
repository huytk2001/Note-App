export default {
  authors: [
    {
      id: 123,
      name: "Huy",
    },
    {
      id: 124,
      name: "Lan",
    },
    {
      id: 125,
      name: "Nam",
    },
    {
      id: 126,
      name: "Mai",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Huy's Folder",
      createdAt: "2023-01-01T10:00:00Z", // Ngày giả
      authorId: 123,
    },
    {
      id: "2",
      name: "Lan's Folder",
      createdAt: "2023-03-15T12:00:00Z", // Ngày giả
      authorId: 124,
    },
    {
      id: "3",
      name: "Nam's Folder",
      createdAt: "2023-05-10T08:30:00Z", // Ngày giả
      authorId: 125,
    },
    {
      id: "4",
      name: "Mai's Folder",
      createdAt: "2023-07-20T14:45:00Z", // Ngày giả
      authorId: 126,
    },
  ],
  notes: [
    {
      id: "123",
      content: "<p>Go to shopping</p>",
      folderId: "1",
    },
    {
      id: "124",
      content: "<p>Meeting with client</p>",
      folderId: "2",
    },
    {
      id: "125",
      content: "<p>Prepare presentation</p>",
      folderId: "2",
    },
    {
      id: "126",
      content: "<p>Finish project report</p>",
      folderId: "1",
    },
  ],
};
