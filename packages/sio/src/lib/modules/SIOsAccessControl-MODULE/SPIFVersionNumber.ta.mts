/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";


/**
 * @summary SPIFVersionNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SPIFVersionNumber  ::=  INTEGER(0..MAX)
 * ```
 */
export type SPIFVersionNumber = INTEGER;




export const _decode_SPIFVersionNumber = $._decodeInteger;




export const _encode_SPIFVersionNumber = $._encodeInteger;


/* eslint-enable */
