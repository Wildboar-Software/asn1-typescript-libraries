/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";
// export { z39_50 } from "../ANSI-Z39-50-ObjectIdentifier/z39-50.va.mjs";


/**
 * @summary z39_50_attributeSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * z39-50-attributeSet     OBJECT IDENTIFIER ::= {z39-50 3}
 * ```
 * 
 * @constant
 */
export
const z39_50_attributeSet: OBJECT_IDENTIFIER = _OID.fromParts([
    3,
], z39_50);

/* eslint-enable */
