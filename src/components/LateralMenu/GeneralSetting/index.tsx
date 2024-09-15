import * as React from "react";
import style from "./style.module.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { changeHide, changeTime } from "@/store/slices/hide.slice";

export interface IGeneralSettingProps {}

function GeneralSetting(props: IGeneralSettingProps) {
  const dispatch = useDispatch();
  const { time, isHide } = useSelector((state: RootState) => state.hide);
  const [stateGeneralSetting, setStateGeneralSetting] =
    React.useState<boolean>(false);

  const elementRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    let handler = (e: any) => {
      if (
        elementRef &&
        elementRef.current &&
        !elementRef.current.contains(e.target)
      ) {
        setStateGeneralSetting(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleChange = () => {
    dispatch(changeHide(!isHide));
  };
  const handleChangeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeTime(parseInt(e.target.value)));
  };

  return (
    <div ref={elementRef}>
      <button
        title="General setting"
        aria-label="General setting"
        className="w-fit h-full flex flex-col justify-center items-center"
        onClick={() => setStateGeneralSetting(!stateGeneralSetting)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={style.icon}
        >
          <path
            className={`${stateGeneralSetting ? style.isOpen : style.isClose}`}
            fillRule="evenodd"
            d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={`${style.container} ${!stateGeneralSetting && style.hiden}`}
      >
        <p className={style.title}>General setting</p>
        <div className={style.hide_element}>
          <p>Hide elements</p>
          <div
            className={`${style.toogle} ${
              isHide ? style.toogle_true : style.toogle_false
            }`}
          >
            <span
              className={`${style.toogle_button} ${
                isHide ? style.toogle_button_true : style.toogle_button_false
              }`}
              onClick={handleChange}
            ></span>
          </div>
        </div>
        <p className={style.comment}>
          You can choose to show or hide the interface after a period of
          inactivity.
        </p>
        <div className={style.hire_after}>
          <label htmlFor="hire-after-input" className={style.hire_after_title}>
            Hide after
          </label>
          <div className={style.hire_after_number}>
            <input
              type="number"
              value={time}
              onChange={handleChangeTime}
              className={style.hire_after_input}
              id="hire-after-input"
            />
            <p>sec</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(GeneralSetting);
