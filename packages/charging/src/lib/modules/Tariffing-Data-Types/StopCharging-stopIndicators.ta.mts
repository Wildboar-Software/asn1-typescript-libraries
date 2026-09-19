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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StopCharging_stopIndicators
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StopCharging-stopIndicators ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type StopCharging_stopIndicators = BIT_STRING;

/**
 * @summary StopCharging_stopIndicators_callAttemptChargesApplicable
 * @constant
 */
export
const StopCharging_stopIndicators_callAttemptChargesApplicable: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callAttemptChargesApplicable
 * @constant
 */
export
const callAttemptChargesApplicable: number = StopCharging_stopIndicators_callAttemptChargesApplicable; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopCharging_stopIndicators: $.ASN1Decoder<StopCharging_stopIndicators> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopCharging_stopIndicators
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopCharging_stopIndicators (el: _Element): StopCharging_stopIndicators {
    if (!_cached_decoder_for_StopCharging_stopIndicators) { _cached_decoder_for_StopCharging_stopIndicators = $._decodeBitString; }
    return _cached_decoder_for_StopCharging_stopIndicators(el);
}

let _cached_encoder_for_StopCharging_stopIndicators: $.ASN1Encoder<StopCharging_stopIndicators> | null = null;

/**
 * @summary Encodes a(n) StopCharging_stopIndicators into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopCharging_stopIndicators, encoded as an ASN.1 Element.
 */
export
function _encode_StopCharging_stopIndicators (value: StopCharging_stopIndicators, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopCharging_stopIndicators) { _cached_encoder_for_StopCharging_stopIndicators = $._encodeBitString; }
    return _cached_encoder_for_StopCharging_stopIndicators(value, elGetter);
}


/* eslint-enable */
