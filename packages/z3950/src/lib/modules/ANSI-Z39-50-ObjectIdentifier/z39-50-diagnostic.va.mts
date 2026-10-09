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
