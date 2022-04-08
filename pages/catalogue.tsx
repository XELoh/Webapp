import { useState, ChangeEvent } from "react";
import Navbar from "@components/navbar";
import UploadImg from "@components/uploadImg";
import Form from "@components/form";
import styles from "../styles/catalogue.module.css";

export default function Catalogue() {
  // form selector
  const CATEGORY = ["Collectibles", "Accessories", "T-Shirts"];
  const CONDITION = ["Bad", "Fair", "Good", "New"];
  const [categorySelectedKey, setCategory] = useState<number>(0)
  const [conditionSelectedKey, setCondition] = useState<number>(0)
  // form thumbnail
  const [prevThumbnail, setImgPrev] = useState<string>("")
  // upload image
  const [prevImgs, setPrevImgs] = useState<Array<string>>([])
  const [currentTab, setCurrentTab] = useState<string>("gallery")

  // on-select form selector
  function select (itemKey: number, type: string) {
    if (type == 'category') {
      setCategory(itemKey)
    } else if (type == 'condition') {
      setCondition(itemKey)
    }
  }

  // on-change upload image (left side)
  function onChangeImage(e: ChangeEvent<HTMLInputElement>) {
    const imgs = e.target.files;
    let imgSet = [];

    if(imgs.length > 5 || (imgs.length == 5 && prevThumbnail)) {
      alert("Only can upload up to 5 images (including thumbnail)")
      return;
    }

    if(prevThumbnail) {
      imgSet.unshift(prevThumbnail)
    }

    for(let i=0;i<imgs.length;i++){
      imgSet.push(URL.createObjectURL(imgs[i]));
    }

    setCurrentTab("preview")
    setPrevImgs(imgSet)
  }

  // toggle upload tab
  function toggleTab(tab: string) {
    if (tab == 'preview' && prevImgs.length === 0) {
      return;
    }

    setCurrentTab(tab)
  }

  // on-change upload image (thumbnail)
  function onChangeThumbnail(e:ChangeEvent<HTMLInputElement>) {
    const img = e.target.files;
    let prevImgsList = prevImgs

    if(prevImgs.length == 5) {
      alert("Only can upload up to 5 images (including thumbnail)")
      return;
    }

    for(let i=0; i<img.length; i++) {
      let url = URL.createObjectURL(img[i])
      prevImgsList.unshift(url)

      setImgPrev(url)
      setPrevImgs(prevImgsList)
    }

    setCurrentTab("preview")
  }

  return (
    <div className={styles.main}>
      <Navbar />

      <div className={styles.content}>
        <UploadImg onChangeImage={onChangeImage} prevImgs={prevImgs} currentTab={currentTab} toggleTab={toggleTab}/>
        <Form category={CATEGORY} condition={CONDITION} categorySelectedKey={categorySelectedKey} conditionSelectedKey={conditionSelectedKey} select={select} onChangeThumbnail={onChangeThumbnail} prevThumbnail={prevThumbnail}/>
      </div>
    </div>
  );
}
