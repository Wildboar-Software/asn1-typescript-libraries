import type { OBJECT_IDENTIFIER } from "asn1-ts";
import type StringDecoder from "./StringDecoder";

export
type StringDecoderGetter = (syntax: string) => [ OBJECT_IDENTIFIER, StringDecoder ] | undefined;

export default StringDecoderGetter;
