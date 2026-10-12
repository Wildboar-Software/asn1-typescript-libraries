/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";



/**
 * @summary id_mmhs_CDT
 * @description
 * 
 * Identifies the Annex E Compressed Data Type, `{id-mcont 2}`. STANAG 4406 (Ed.
 * 2), Annex E, clause 4.2.6.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-mmhs-CDT OBJECT IDENTIFIER ::= {
 *     iso(1)
 *     identified-organization(3)
 *     nato(26)
 *     stanags(0)
 *     mmhs(4406)
 *     object-identifiers(0)
 *     id-mcont(4)
 *     2
 * }
 * ```
 * 
 * @constant
 */
export
const id_mmhs_CDT: OBJECT_IDENTIFIER = _OID.fromParts([
    /* iso */ 1,
    /* identified-organization */ 3,
    /* nato */ 26,
    /* stanags */ 0,
    /* mmhs */ 4406,
    /* object-identifiers */ 0,
    /* id-mcont */ 4,
    2,
]);

/* eslint-enable */
