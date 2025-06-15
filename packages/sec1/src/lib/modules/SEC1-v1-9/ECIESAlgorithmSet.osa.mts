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
import { ECIESAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECIESAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
/**
 * @summary ECIESAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECIESAlgorithmSet ALGORITHM ::= {
 *     {OID ecies-recommendedParameters} |
 *     {OID ecies-specifiedParameters PARMS ECIESParameters} ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECIESAlgorithmSet: (ALGORITHM)[] = [ ECIESAlgorithmSet_Union0_Intersection0_Element, ECIESAlgorithmSet_Union1_Intersection0_Element, ];

/* eslint-enable */
