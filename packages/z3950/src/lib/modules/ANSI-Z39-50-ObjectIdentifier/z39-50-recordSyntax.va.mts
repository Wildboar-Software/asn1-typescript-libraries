/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_recordSyntax
 * @description
 * 
 * Object-class arc under which record-syntax OIDs are assigned, `{Z39-50 5}`
 * (OID.2 value 5, appendix REC). Public values are those listed in this
 * standard or registered by the Maintenance Agency (OID.4, OID.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-recordSyntax     OBJECT IDENTIFIER ::= {z39-50 5}
 * ```
 * 
 * @constant
 */
export
const z39_50_recordSyntax: OBJECT_IDENTIFIER = _OID.fromParts([
    5,
], z39_50);

/* eslint-enable */
