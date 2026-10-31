/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";
import { type Uint32, _decode_Uint32, _encode_Uint32 } from "../NIS/Uint32.ta.mjs";
// export { Uint32, _decode_Uint32, _encode_Uint32 } from "../NIS/Uint32.ta.mjs";


/**
 * @summary UnixEpoch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnixEpoch  ::=  Uint32
 * ```
 */
export
type UnixEpoch = Uint32; // DefinedType

export
const _decode_UnixEpoch: $.ASN1Decoder<UnixEpoch> = _decode_Uint32;

export
const _encode_UnixEpoch: $.ASN1Encoder<UnixEpoch> = _encode_Uint32;

/* eslint-enable */
