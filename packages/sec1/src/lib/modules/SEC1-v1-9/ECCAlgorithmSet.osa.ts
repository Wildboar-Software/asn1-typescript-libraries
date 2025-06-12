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
import * as $ from "asn1-ts/dist/functional.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.js";
export { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.js";
import { ECDSAAlgorithmSet } from "../SEC1-v1-9/ECDSAAlgorithmSet.osa.js";
export { ECDSAAlgorithmSet } from "../SEC1-v1-9/ECDSAAlgorithmSet.osa.js";
import { ECDHAlgorithmSet } from "../SEC1-v1-9/ECDHAlgorithmSet.osa.js";
export { ECDHAlgorithmSet } from "../SEC1-v1-9/ECDHAlgorithmSet.osa.js";
import { ECMQVAlgorithmSet } from "../SEC1-v1-9/ECMQVAlgorithmSet.osa.js";
export { ECMQVAlgorithmSet } from "../SEC1-v1-9/ECMQVAlgorithmSet.osa.js";
import { ECIESAlgorithmSet } from "../SEC1-v1-9/ECIESAlgorithmSet.osa.js";
export { ECIESAlgorithmSet } from "../SEC1-v1-9/ECIESAlgorithmSet.osa.js";
import { ECWKTAlgorithmSet } from "../SEC1-v1-9/ECWKTAlgorithmSet.osa.js";
export { ECWKTAlgorithmSet } from "../SEC1-v1-9/ECWKTAlgorithmSet.osa.js";


/* START_OF_SYMBOL_DEFINITION ECCAlgorithmSet */
/**
 * @summary ECCAlgorithmSet
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECCAlgorithmSet ALGORITHM ::= {
 *     ECDSAAlgorithmSet |
 *     ECDHAlgorithmSet |
 *     ECMQVAlgorithmSet |
 *     ECIESAlgorithmSet |
 *     ECWKTAlgorithmSet ,
 *     ...
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM[]}
 * 
 */
export
const ECCAlgorithmSet: (ALGORITHM)[] = [ ...ECDSAAlgorithmSet, ...ECDHAlgorithmSet, ...ECMQVAlgorithmSet, ...ECIESAlgorithmSet, ...ECWKTAlgorithmSet, ];
/* END_OF_SYMBOL_DEFINITION ECCAlgorithmSet */

/* eslint-enable */
