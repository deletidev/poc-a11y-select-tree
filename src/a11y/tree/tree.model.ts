export type BaseOption<Option> = {
  id: string;
  label: string;
  children?: Option[];
};

export type FlatOption<Option extends BaseOption<Option>> = Omit<
  Option,
  'children'
> & {
  parentId?: string;
};

export type A11yTreeOption<Option extends BaseOption<Option>> = Omit<
  Option,
  'children'
> & {
  tabIndex: number;
  isSelectable: boolean;
  children?: A11yTreeOption<Option>[];
};
