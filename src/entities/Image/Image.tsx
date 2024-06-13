import styles from "./Image.module.scss";
import { useState } from "react";
import classnames from "classnames";

interface IProps
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alt: string;
}

export const Image = (props: IProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <article className={styles.image}>
      {isLoading && (
        <div data-testid="skeleton" className={classnames(styles.skeleton)} />
      )}
      <img
        onLoad={handleImageLoad}
        loading="lazy"
        className={classnames({
          [styles.loadingImage]: isLoading,
        })}
        {...props}
        alt={props.alt}
      />
    </article>
  );
};
