import { CaseReducer, createSlice, CreateSliceOptions, Slice } from "@reduxjs/toolkit";

type ToCaseReducer<State, Payloads extends { [action: string]: any }> = {
  [action in keyof Payloads]: CaseReducer<State, { type: string; payload: Payloads[action] }>;
};

export function createModule<State, Payloads>(
  options: CreateSliceOptions<State, ToCaseReducer<State, Payloads>>,
): Slice<State, ToCaseReducer<State, Payloads>> {
  return createSlice(options);
}
