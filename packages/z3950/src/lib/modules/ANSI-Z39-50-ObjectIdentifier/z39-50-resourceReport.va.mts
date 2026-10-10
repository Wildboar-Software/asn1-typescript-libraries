/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_resourceReport
 * @description
 * 
 * Object-class arc under which resource-report format OIDs are assigned,
 * `{Z39-50 7}` (OID.2 value 7, appendix RSC). resource-1 is
 * `{Z39-50-resourceReport 1}`; resource-2 is `{Z39-50-resourceReport 2}`. OID.2
 * value 6 is no longer assigned.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-resourceReport   OBJECT IDENTIFIER ::= {z39-50 7}
 * ```
 * 
 * @constant
 */
export
const z39_50_resourceReport: OBJECT_IDENTIFIER = _OID.fromParts([
    7,
], z39_50);

/* eslint-enable */
