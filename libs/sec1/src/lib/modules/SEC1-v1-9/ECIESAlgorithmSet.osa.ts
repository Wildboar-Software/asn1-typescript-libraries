/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";
export { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca";
import { ECIESAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union0-Intersection0-Element.oa";
export { ECIESAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union0-Intersection0-Element.oa";
import { ECIESAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union1-Intersection0-Element.oa";
export { ECIESAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECIESAlgorithmSet-Union1-Intersection0-Element.oa";


/* START_OF_SYMBOL_DEFINITION ECIESAlgorithmSet */
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
/* END_OF_SYMBOL_DEFINITION ECIESAlgorithmSet */

/* eslint-enable */
