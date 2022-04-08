import { useRef, useState, ChangeEvent, ReactNode } from "react";
import styles from "./uploadImg.module.css";

export default function UploadImg(props: any) {
  const hiddenFileInput = useRef<HTMLInputElement>();
  const TAB = [
    {
      title: 'Image Gallery',
      path: 'gallery'
    },
    {
      title: 'Preview',
      path: 'preview'
    }
  ]

  type tab = {
    path: string,
    children: ReactNode
  }

  function Tab ({path, children}: tab) {
    return (
      <div className={`${styles.title} ${props.currentTab == path ? styles.selected : ''}`} onClick={() => props.toggleTab(path)}>
        <p>{children}</p>
      </div>
    )
  }

  function uploadImg() {
    hiddenFileInput.current.click();
  }

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {
        TAB.map(({title, path}) => (
          <Tab key={path} path={path}>
            {title}
          </Tab> 
        ))
        }
      </div>

      <div className={styles.addImgContainer} onClick={uploadImg} style={{ display: props.currentTab == TAB[0].path ? 'flex' : 'none' }}>
        <input ref={hiddenFileInput} type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.onChangeImage} style={{ display: 'none' }} multiple/>
        <p>Add Image</p>
      </div>

      <div className={styles.imageList} style={{ display: props.currentTab == TAB[TAB.length-1].path ? 'block' : 'none' }}>
        {
          props.prevImgs.map((img:string, key:number) => (
            <img key={key} src={img} style={{ width: '100px', height: '100px' }} />
          ))
        }
      </div>

      <p className={styles.note}>
        You may upload up to 5 images (including thumbnail)
      </p>
      <p className={styles.note}>Supported file types: jpeg, jpg, png</p>
    </div>
  );
}
