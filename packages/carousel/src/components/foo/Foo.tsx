import styles from "./Foo.module.less";

export const Foo = () => {
  return (
    <div className={styles.root}>
      <p className={styles.foo1}>Foo</p>
      <p className={styles.foo2}>Foo</p>
      <p className={styles.foo3}>Foo</p>
    </div>
  );
};
