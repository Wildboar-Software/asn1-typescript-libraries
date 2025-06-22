import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type StringEncoder from "./StringEncoder.mjs";

export
type StringEncoderGetter = (syntax: OBJECT_IDENTIFIER) => StringEncoder | undefined;

export default StringEncoderGetter;
