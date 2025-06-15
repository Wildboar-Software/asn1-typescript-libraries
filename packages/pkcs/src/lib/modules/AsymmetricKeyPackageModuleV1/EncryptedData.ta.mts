/* eslint-disable */
import { ASN1Element as _Element, OCTET_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary EncryptedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptedData  ::=  OCTET STRING
 * ```
 */
export type EncryptedData = OCTET_STRING; // OctetStringType




export const _decode_EncryptedData = $._decodeOctetString;




export const _encode_EncryptedData = $._encodeOctetString;


/* eslint-enable */
