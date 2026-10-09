/* eslint-disable */
import {
    GeneralString
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary InternationalString
 * @description
 *
 * Character string used throughout the protocol. When version 2 is in
 * force, only the VisibleString repertoire may be used. When version
 * 3 is in force, GeneralString semantics apply unless initialization
 * negotiation changes them. Defined in Z39.50-1995 in place of
 * VisibleString. Where the identifier is `IMPLICIT`, the tag does not
 * distinguish the two repertoires. Comment 7.
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
