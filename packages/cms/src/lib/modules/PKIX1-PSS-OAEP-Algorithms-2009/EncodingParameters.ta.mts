/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";


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
