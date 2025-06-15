/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary EncodingParameters
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncodingParameters  ::=  OCTET STRING(SIZE(0..MAX))
 * ```
 */
export type EncodingParameters = OCTET_STRING; // OctetStringType




export const _decode_EncodingParameters = $._decodeOctetString;




export const _encode_EncodingParameters = $._encodeOctetString;


/* eslint-enable */
