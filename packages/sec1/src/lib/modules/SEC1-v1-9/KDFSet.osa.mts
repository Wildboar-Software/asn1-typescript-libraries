/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { KDFSet_Union0_Intersection0_Element } from "../SEC1-v1-9/KDFSet-Union0-Intersection0-Element.oa.mjs";
import { KDFSet_Union1_Intersection0_Element } from "../SEC1-v1-9/KDFSet-Union1-Intersection0-Element.oa.mjs";
import { KDFSet_Union2_Intersection0_Element } from "../SEC1-v1-9/KDFSet-Union2-Intersection0-Element.oa.mjs";
import { KDFSet_Union3_Intersection0_Element } from "../SEC1-v1-9/KDFSet-Union3-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION KDFSet */
/**
 * @summary KDFSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * KDFSet ALGORITHM ::= {
 *     {OID x9-63-kdf PARMS HashAlgorithm } |
 *     {OID nist-concatenation-kdf PARMS HashAlgorithm } |
 *     {OID tls-kdf PARMS HashAlgorithm } |
 *     {OID ikev2-kdf PARMS HashAlgorithm } ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const KDFSet: (ALGORITHM)[] = [ KDFSet_Union0_Intersection0_Element, KDFSet_Union1_Intersection0_Element, KDFSet_Union2_Intersection0_Element, KDFSet_Union3_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION KDFSet */

/* eslint-enable */
