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
import { IntervalsOfDay, _decode_IntervalsOfDay, _encode_IntervalsOfDay } from "../Attribute-ASN1Module/IntervalsOfDay.ta.js";
export { IntervalsOfDay, _decode_IntervalsOfDay, _encode_IntervalsOfDay } from "../Attribute-ASN1Module/IntervalsOfDay.ta.js";
import { Time24, _decode_Time24, _encode_Time24 } from "../Attribute-ASN1Module/Time24.ta.js";
export { Time24, _decode_Time24, _encode_Time24 } from "../Attribute-ASN1Module/Time24.ta.js";


/* START_OF_SYMBOL_DEFINITION defaultIntervalsOfDay */
/**
 * @summary defaultIntervalsOfDay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * defaultIntervalsOfDay IntervalsOfDay ::= {
 *   {intervalStart  {hour 0, minute 0},
 *    intervalEnd    {hour 23, minute 59}}
 * }
 * ```
 * 
 * @constant
 */
export
const defaultIntervalsOfDay: IntervalsOfDay = [ /* COULD_NOT_COMPILE_SEQUENCE_OR_SET_OF_VALUE 0 */ ];
/* END_OF_SYMBOL_DEFINITION defaultIntervalsOfDay */

/* eslint-enable */
