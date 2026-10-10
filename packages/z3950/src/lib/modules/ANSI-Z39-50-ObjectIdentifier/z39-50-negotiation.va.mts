/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_negotiation
 * @description
 * 
 * Object-class arc under which negotiation-definition OIDs are assigned,
 * `{Z39-50 15}` (OID.2 value 15). ASN1.2 does not name a further appendix.
 * Public values follow OID.4 and OID.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-negotiation      OBJECT IDENTIFIER ::= {z39-50 15}
 * ```
 * 
 * @constant
 */
export
const z39_50_negotiation: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], z39_50);

/* eslint-enable */
