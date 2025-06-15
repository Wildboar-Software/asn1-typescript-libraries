/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary SignatureValue
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureValue  ::=  OCTET STRING
 * ```
 */
export type SignatureValue = OCTET_STRING; // OctetStringType




export const _decode_SignatureValue = $._decodeOctetString;




export const _encode_SignatureValue = $._encodeOctetString;


/* eslint-enable */
