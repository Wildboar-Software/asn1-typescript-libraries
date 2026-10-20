/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { tcg } from "./tcg.va.mjs";


/**
 * @summary tcg_attribute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tcg-attribute                                   OBJECT IDENTIFIER ::= {tcg 2}
 * ```
 * 
 * @constant
 */
export
const tcg_attribute: OBJECT_IDENTIFIER = _OID.fromParts([
    2,
], tcg);

/* eslint-enable */
