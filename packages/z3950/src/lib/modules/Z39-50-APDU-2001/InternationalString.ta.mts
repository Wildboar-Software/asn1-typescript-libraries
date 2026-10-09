/* eslint-disable */
import {
    GeneralString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InternationalString  ::=  GeneralString
 * ```
 */
export
type InternationalString = GeneralString; // GeneralString
export const _decode_InternationalString = $._decodeGeneralString;
export const _encode_InternationalString = $._encodeGeneralString;


/* eslint-enable */
