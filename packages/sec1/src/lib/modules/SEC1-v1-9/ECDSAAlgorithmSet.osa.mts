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
import { ECDSAAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union2_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union2-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union3_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union3-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union4_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union4-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union5_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union5-Intersection0-Element.oa.mjs";
import { ECDSAAlgorithmSet_Union6_Intersection0_Element } from "../SEC1-v1-9/ECDSAAlgorithmSet-Union6-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION ECDSAAlgorithmSet */
/**
 * @summary ECDSAAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDSAAlgorithmSet ALGORITHM ::= {
 *     {OID ecdsa-with-SHA1 PARMS NULL} |
 *     {OID ecdsa-with-Recommended PARMS NULL} |
 *     {OID ecdsa-with-Specified PARMS HashAlgorithm } |
 *     {OID ecdsa-with-Sha224 PARMS NULL} |
 *     {OID ecdsa-with-Sha256 PARMS NULL} |
 *     {OID ecdsa-with-Sha384 PARMS NULL} |
 *     {OID ecdsa-with-Sha512 PARMS NULL} ,
 *     ... -- More algorithms need to be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECDSAAlgorithmSet: (ALGORITHM)[] = [ ECDSAAlgorithmSet_Union0_Intersection0_Element, ECDSAAlgorithmSet_Union1_Intersection0_Element, ECDSAAlgorithmSet_Union2_Intersection0_Element, ECDSAAlgorithmSet_Union3_Intersection0_Element, ECDSAAlgorithmSet_Union4_Intersection0_Element, ECDSAAlgorithmSet_Union5_Intersection0_Element, ECDSAAlgorithmSet_Union6_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION ECDSAAlgorithmSet */

/* eslint-enable */
