export type InferActionValue<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type ActionsType<T extends { [key: string]: any }> = ReturnType<
  InferActionValue<T>
>;
