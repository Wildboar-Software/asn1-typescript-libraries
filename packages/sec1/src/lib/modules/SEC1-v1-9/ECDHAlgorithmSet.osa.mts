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
import { ECDHAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union2_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union2-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union3_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union3-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union4_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union4-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union5_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union5-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union6_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union6-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union7_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union7-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union8_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union8-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union9_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union9-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union10_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union10-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union11_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union11-Intersection0-Element.oa.mjs";
import { ECDHAlgorithmSet_Union12_Intersection0_Element } from "../SEC1-v1-9/ECDHAlgorithmSet-Union12-Intersection0-Element.oa.mjs";
/* START_OF_SYMBOL_DEFINITION ECDHAlgorithmSet */
/**
 * @summary ECDHAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECDHAlgorithmSet ALGORITHM ::= {
 *     {OID dhSinglePass-stdDH-sha1kdf PARMS NULL} |
 *     {OID dhSinglePass-cofactorDH-sha1kdf PARMS NULL} |
 *     {OID dhSinglePass-cofactorDH-recommendedKDF} |
 *     {OID dhSinglePass-cofactorDH-specifiedKDF PARMS KeyDerivationFunction} |
 *     {OID ecdh} |
 *     {OID dhSinglePass-stdDH-sha256kdf-scheme} |
 *     {OID dhSinglePass-stdDH-sha384kdf-scheme} |
 *     {OID dhSinglePass-stdDH-sha224kdf-scheme} |
 *     {OID dhSinglePass-stdDH-sha512kdf-scheme} |
 *     {OID dhSinglePass-cofactorDH-sha256kdf-scheme} |
 *     {OID dhSinglePass-cofactorDH-sha384kdf-scheme} |
 *     {OID dhSinglePass-cofactorDH-sha224kdf-scheme} |
 *     {OID dhSinglePass-cofactorDH-sha512kdf-scheme} ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECDHAlgorithmSet: (ALGORITHM)[] = [ ECDHAlgorithmSet_Union0_Intersection0_Element, ECDHAlgorithmSet_Union1_Intersection0_Element, ECDHAlgorithmSet_Union2_Intersection0_Element, ECDHAlgorithmSet_Union3_Intersection0_Element, ECDHAlgorithmSet_Union4_Intersection0_Element, ECDHAlgorithmSet_Union5_Intersection0_Element, ECDHAlgorithmSet_Union6_Intersection0_Element, ECDHAlgorithmSet_Union7_Intersection0_Element, ECDHAlgorithmSet_Union8_Intersection0_Element, ECDHAlgorithmSet_Union9_Intersection0_Element, ECDHAlgorithmSet_Union10_Intersection0_Element, ECDHAlgorithmSet_Union11_Intersection0_Element, ECDHAlgorithmSet_Union12_Intersection0_Element, ];
/* END_OF_SYMBOL_DEFINITION ECDHAlgorithmSet */

/* eslint-enable */
