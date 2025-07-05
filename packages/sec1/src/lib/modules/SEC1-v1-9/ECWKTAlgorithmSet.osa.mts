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
import { ECWKTAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECWKTAlgorithmSet-Union0-Intersection0-Element.oa.mjs";
import { ECWKTAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECWKTAlgorithmSet-Union1-Intersection0-Element.oa.mjs";
/**
 * @summary ECWKTAlgorithmSet
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ECWKTAlgorithmSet ALGORITHM ::= {
 *     {OID ecwkt-recommendedParameters} |
 *     {OID ecwkt-specifiedParameters PARMS ECWKTParameters} ,
 *     ... -- Future combinations may be added
 * }
 * ```
 *
 * @constant
 * @type {ALGORITHM[]}
 *
 */
export
const ECWKTAlgorithmSet: (ALGORITHM)[] = [ ECWKTAlgorithmSet_Union0_Intersection0_Element, ECWKTAlgorithmSet_Union1_Intersection0_Element, ];

/* eslint-enable */
