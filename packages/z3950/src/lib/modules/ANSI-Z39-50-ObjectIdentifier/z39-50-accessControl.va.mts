/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_accessControl
 * @description
 * 
 * Object-class arc under which access-control format OIDs are assigned,
 * `{Z39-50 8}` (OID.2 value 8, appendix ACC). prompt-1, des-1, and krb-1 are
 * `{Z39-50-accessControl 1}`, `2`, and `3`.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-accessControl    OBJECT IDENTIFIER ::= {z39-50 8}
 * ```
 * 
 * @constant
 */
export
const z39_50_accessControl: OBJECT_IDENTIFIER = _OID.fromParts([
    8,
], z39_50);

/* eslint-enable */
