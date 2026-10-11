/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_diagnostic
 * @description
 * 
 * Object-class arc under which diagnostic OIDs are assigned, `{Z39-50 4}`
 * (OID.2 value 4, appendix DIAG). general-diagnostics is `{Z39-50-diagnostic
 * 1}`; diag-1 is `{Z39-50-diagnostic 2}`; the General Diagnostic Container is
 * `{Z39-50-diagnostic 4}` (OID.4).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-diagnostic       OBJECT IDENTIFIER ::= {z39-50 4}
 * ```
 * 
 * @constant
 */
export
const z39_50_diagnostic: OBJECT_IDENTIFIER = _OID.fromParts([
    4,
], z39_50);

/* eslint-enable */
