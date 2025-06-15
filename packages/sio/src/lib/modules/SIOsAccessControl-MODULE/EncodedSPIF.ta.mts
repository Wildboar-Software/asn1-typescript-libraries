/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary EncodedSPIF
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodedSPIF  ::=  TYPE-IDENTIFIER.&Type(SPIF)
 * ```
 */
export type EncodedSPIF = _Element; // ObjectClassFieldType




export const _decode_EncodedSPIF = $._decodeAny;




export const _encode_EncodedSPIF = $._encodeAny;


/* eslint-enable */
