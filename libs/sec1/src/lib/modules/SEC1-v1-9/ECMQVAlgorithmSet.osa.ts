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
import { ECMQVAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union0-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union0_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union0-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union1-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union1_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union1-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union2_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union2-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union2_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union2-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union3_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union3-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union3_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union3-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union4_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union4-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union4_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union4-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union5_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union5-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union5_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union5-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union6_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union6-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union6_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union6-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union7_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union7-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union7_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union7-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union8_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union8-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union8_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union8-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union9_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union9-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union9_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union9-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union10_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union10-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union10_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union10-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union11_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union11-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union11_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union11-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union12_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union12-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union12_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union12-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union13_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union13-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union13_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union13-Intersection0-Element.oa";
import { ECMQVAlgorithmSet_Union14_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union14-Intersection0-Element.oa";
export { ECMQVAlgorithmSet_Union14_Intersection0_Element } from "../SEC1-v1-9/ECMQVAlgorithmSet-Union14-Intersection0-Element.oa";


/* START_OF_SYMBOL_DEFINITION ECMQVAlgorithmSet */
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
/* END_OF_SYMBOL_DEFINITION ECMQVAlgorithmSet */

/* eslint-enable */
