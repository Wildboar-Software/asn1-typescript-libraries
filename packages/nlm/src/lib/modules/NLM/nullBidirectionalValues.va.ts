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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta.js';
export {
    BidirectionalValues,
    _decode_BidirectionalValues,
    _encode_BidirectionalValues,
} from '../NLM/BidirectionalValues.ta.js';
import {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.js';
export {
    ChoiceInteger,
    _decode_ChoiceInteger,
    _encode_ChoiceInteger,
} from '../NLM/ChoiceInteger.ta.js';

/* START_OF_SYMBOL_DEFINITION nullBidirectionalValues */
/**
 * @summary nullBidirectionalValues
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nullBidirectionalValues BidirectionalValues ::= {incoming dontCare:NULL, outgoing dontCare:NULL}
 * ```
 *
 * @constant
 */
export const nullBidirectionalValues: BidirectionalValues = BidirectionalValues._from_object(
    { incoming: { dontCare: null }, outgoing: { dontCare: null } }
);
/* END_OF_SYMBOL_DEFINITION nullBidirectionalValues */

/* eslint-enable */
