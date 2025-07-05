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
} from "@wildboar/asn1";
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
import { ECMQVAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union2_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union2-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union3_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union3-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union4_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union4-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union5_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union5-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union6_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union6-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union7_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union7-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union8_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union8-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union9_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union9-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union10_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union10-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union11_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union11-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union12_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union12-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union13_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union13-Intersection0-Element.oa.mjs";
import { ECMQVAlgorithmSet_Union14_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union14-Intersection0-Element.oa.mjs";
/**
 * @summary ECMQVAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECMQVAlgorithmSet ALGORITHM ::= {
 *     {OID mqvSinglePass-sha1kdf} |
 *     {OID mqvSinglePass-recommendedKDF} |
 *     {OID mqvSinglePass-specifiedKDF PARMS KeyDerivationFunction} |
 *     {OID mqvFull-sha1kdf} |
 *     {OID mqvFull-recommendedKDF} |
 *     {OID mqvFull-specifiedKDF PARMS KeyDerivationFunction} |
 *     {OID ecmqv} |
 *     {OID mqvSinglePass-sha256kdf-scheme } |
 *     {OID mqvSinglePass-sha384kdf-scheme } |
 *     {OID mqvSinglePass-sha224kdf-scheme } |
 *     {OID mqvSinglePass-sha512kdf-scheme } |
 *     {OID mqvFull-sha256kdf-scheme } |
 *     {OID mqvFull-sha384kdf-scheme } |
 *     {OID mqvFull-sha224kdf-scheme } |
 *     {OID mqvFull-sha512kdf-scheme } ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECMQVAlgorithmSet: (ALGORITHM)[] = [ ECMQVAlgorithmSet_Union0_Intersection0_Element, ECMQVAlgorithmSet_Union1_Intersection0_Element, ECMQVAlgorithmSet_Union2_Intersection0_Element, ECMQVAlgorithmSet_Union3_Intersection0_Element, ECMQVAlgorithmSet_Union4_Intersection0_Element, ECMQVAlgorithmSet_Union5_Intersection0_Element, ECMQVAlgorithmSet_Union6_Intersection0_Element, ECMQVAlgorithmSet_Union7_Intersection0_Element, ECMQVAlgorithmSet_Union8_Intersection0_Element, ECMQVAlgorithmSet_Union9_Intersection0_Element, ECMQVAlgorithmSet_Union10_Intersection0_Element, ECMQVAlgorithmSet_Union11_Intersection0_Element, ECMQVAlgorithmSet_Union12_Intersection0_Element, ECMQVAlgorithmSet_Union13_Intersection0_Element, ECMQVAlgorithmSet_Union14_Intersection0_Element, ];

/* eslint-enable */
