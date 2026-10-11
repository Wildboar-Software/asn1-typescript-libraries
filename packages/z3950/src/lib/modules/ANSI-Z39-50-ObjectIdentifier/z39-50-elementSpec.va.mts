/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_elementSpec
 * @description
 * 
 * Object-class arc under which element-specification format OIDs are assigned,
 * `{Z39-50 11}` (OID.2 value 11, appendix ESP). Public values are those listed
 * in this standard or registered by the Maintenance Agency (OID.4, OID.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-elementSpec      OBJECT IDENTIFIER ::= {z39-50 11}
 * ```
 * 
 * @constant
 */
export
const z39_50_elementSpec: OBJECT_IDENTIFIER = _OID.fromParts([
    11,
], z39_50);

/* eslint-enable */
