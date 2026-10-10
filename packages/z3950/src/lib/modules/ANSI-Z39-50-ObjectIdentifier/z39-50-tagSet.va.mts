/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_tagSet
 * @description
 * 
 * Object-class arc under which tag-set OIDs are assigned, `{Z39-50 14}` (OID.2
 * value 14, appendix TAG). Public values are those listed in this standard or
 * registered by the Maintenance Agency (OID.4, OID.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-tagSet           OBJECT IDENTIFIER ::= {z39-50 14}
 * ```
 * 
 * @constant
 */
export
const z39_50_tagSet: OBJECT_IDENTIFIER = _OID.fromParts([
    14,
], z39_50);

/* eslint-enable */
