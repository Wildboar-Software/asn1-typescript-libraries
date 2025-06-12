import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type StringEncoder from "./StringEncoder.mjs";

export
type StringEncoderGetter = (syntax: OBJECT_IDENTIFIER) => StringEncoder | undefined;

export default StringEncoderGetter;
