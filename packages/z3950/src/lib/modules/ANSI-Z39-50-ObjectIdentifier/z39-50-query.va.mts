/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_query
 * @description
 * 
 * Object-class arc under which query-definition OIDs are assigned, `{Z39-50
 * 16}` (OID.2 value 16). Public values are those listed in this standard or
 * registered by the Maintenance Agency (OID.4, OID.5).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-query            OBJECT IDENTIFIER ::= {z39-50 16}
 * ```
 * 
 * @constant
 */
export
const z39_50_query: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], z39_50);

/* eslint-enable */
