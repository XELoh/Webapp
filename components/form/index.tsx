import { useRef } from "react";
import styles from "./form.module.css";

export default function Form(props: any) {
  const hiddenFileInput = useRef<HTMLInputElement>()

  function addThumbnail() {
    hiddenFileInput.current.click()
  }

  return (
    <form className={styles.container}>
      <div className={styles.inputContainer}>
        <label>Product Name <span className={styles.redStar}>*</span></label>
        <input
          type="text"
          placeholder="Name your listing. Keep it short and sweet"
        />
      </div>

      <div className={styles.rowContainer}>
        <div className={`${styles.inputContainer} ${styles.category}`}>
          <label>Category <span className={styles.redStar}>*</span></label>
          <div className={styles.selectorContainer}>
            {props.category.map((item:string, key:number) => (
              <button className={props.categorySelectedKey == key ? styles.selected : ''} key={key} type="button" onClick={() => props.select(key, "category")}>{item}</button>
            ))}
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label>Thumbnail Image <span className={styles.redStar}>*</span></label>
          <input ref={hiddenFileInput} type="file" accept="image/png, image/jpeg, image/jpg" onChange={props.onChangeThumbnail} style={{ display: 'none' }}/>
          <button type="button" className={styles.addImgBtn} onClick={addThumbnail} style={{ display: props.prevThumbnail ? "none" : "block" }}>Add Image</button>
          {
            props.prevThumbnail && (
              <img src={props.prevThumbnail} className={styles.thumbnail}/>
            )
          }
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label>Brand (up to 2) <span className={styles.redStar}>*</span></label>
        <input type="text" placeholder="Add a keyword and press Enter" />
      </div>

      <div className={styles.inputContainer}>
        <label>Description <span className={styles.redStar}>*</span></label>
        <input type="text" placeholder="Add a keyword and press Enter" />
      </div>

      <div className={styles.inputContainer}>
        <label>Available Qty <span className={styles.redStar}>*</span></label>
        <input type="text" placeholder="Enter available quantity" />
      </div>

      <div className={styles.inputContainer}>
        <label>Condition</label>
        <div className={styles.selectorContainer}>
          {props.condition.map((item:string, key: number) => (
            <button className={props.conditionSelectedKey == key ? styles.selected : ''} key={key} type="button" onClick={() => props.select(key, "condition")}>{item}</button>
          ))}
        </div>
      </div>

      <div className={styles.rowContainer}>
        <div className={styles.inputContainer}>
          <label>Season</label>
          <input
            type="text"
            placeholder="SS20"
          />
        </div>

        <div className={styles.inputContainer}>
          <label>Retail</label>
          <input
            type="text"
            placeholder="400"
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label>Authenticity</label>
        <p>100%</p>
      </div>

      <div className={styles.inputContainer}>
        <label>Declaration <span className={styles.redStar}>*</span></label>
        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="declaration" />
          <label htmlFor="declaration">
            I hereby declare that my item is 100% authentic and in the original packaging. In the event that any information given in this application proves to be false or incorrect, I shall be responsible for the consequences.
          </label>
        </div>
      </div>

      <p><span className={styles.redStar}>*</span> indicates required</p>

      <div className={styles.btnContainer}>
        <button type='button'>Cancel</button>
        <button type='button' className={styles.publishBtn}>Publish</button>
      </div>
    </form>
  );
}
