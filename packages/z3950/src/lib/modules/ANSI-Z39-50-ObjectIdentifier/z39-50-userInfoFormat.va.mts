/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_userInfoFormat
 * @description
 * 
 * Object-class arc under which user-information format OIDs are assigned,
 * `{Z39-50 10}` (OID.2 value 10, appendix USR). SearchResult-1 is
 * `{Z39-50-userInfoFormat 1}`; UserInfo-1 is `{Z39-50-userInfoFormat 3}`. Local
 * formats use `{Z39-50 10 1000 p m}` (OID.6).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-userInfoFormat   OBJECT IDENTIFIER ::= {z39-50 10}
 * ```
 * 
 * @constant
 */
export
const z39_50_userInfoFormat: OBJECT_IDENTIFIER = _OID.fromParts([
    10,
], z39_50);

/* eslint-enable */
