export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Gallery images from the images directory
const galleryFileNames = [
  "853799800003_5A.jpg",
  "853799800004_6A.jpg",
  "853799800005_7A.jpg",
  "853799800006_8A.jpg",
  "853799800007_9A.jpg",
  "853799800008_10A.jpg",
  "853799800012_14A.jpg",
  "853799800013_15A.jpg",
  "853799800014_16A.jpg",
  "853799810016_16A.jpg",
  "853799820005_4A.jpg",
  "853799820006_5A.jpg",
  "853799820007_6A.jpg",
  "853799820008_7A.jpg",
  "853799820009_8A.jpg",
  "DSC00578.JPG",
  "DSC00580.JPG",
  "DSC01131.JPG",
  "DSC01148.JPG",
  "DSC01151.JPG",
  "DSC01166.JPG",
  "DSC01170.JPG",
  "DSC01268.JPG",
  "DSC01269.JPG",
  "DSC01270.JPG",
  "DSC01271.JPG",
  "DSC_0153.JPG",
  "DSC_0718.jpg",
  "blurry.jpg",
  "fire-hydrant.jpg",
  "fred-didn't-get-the-memo.jpg",
  "i-luv-electricity.jpg",
  "me.jpg",
  "raindrops.jpg",
  "sketchy-arthur.jpg",
  "sleeping-baby.jpg",
  "stumpy.jpg",
  "the-composition-tho-pt2.jpg",
  "the-composition-tho.jpg",
  "week2-3.JPG",
  "week2-4.JPG",
  "week2-8.JPG",
  "week3-8.JPG",
  "week4-13.JPG",
  "week4-17.JPG",
  "week4-4.JPG",
  "week4-5.JPG",
  "week4-8.JPG",
];

export const galleryImages: GalleryImage[] = galleryFileNames.map((name) => ({
  src: `/images/gallery/full/${name}`,
  alt: name.replace(/\.(jpg|JPG|png|webp)$/, "").replace(/[-_]/g, " "),
  width: 1500,
  height: 1000,
}));
