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
 * @summary ParameterOffers_priority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-priority ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_priority = BIT_STRING;

/**
 * @summary ParameterOffers_priority_normal
 * @constant
 */
export
const ParameterOffers_priority_normal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @constant
 */
export
const normal: number = ParameterOffers_priority_normal; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_priority_high
 * @constant
 */
export
const ParameterOffers_priority_high: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary high
 * @constant
 */
export
const high: number = ParameterOffers_priority_high; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_priority_urgent
 * @constant
 */
export
const ParameterOffers_priority_urgent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary urgent
 * @constant
 */
export
const urgent: number = ParameterOffers_priority_urgent; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParameterOffers_priority: $.ASN1Decoder<ParameterOffers_priority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_priority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_priority (el: _Element): ParameterOffers_priority {
    if (!_cached_decoder_for_ParameterOffers_priority) { _cached_decoder_for_ParameterOffers_priority = $._decodeBitString; }
    return _cached_decoder_for_ParameterOffers_priority(el);
}

let _cached_encoder_for_ParameterOffers_priority: $.ASN1Encoder<ParameterOffers_priority> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_priority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_priority, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_priority (value: ParameterOffers_priority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_priority) { _cached_encoder_for_ParameterOffers_priority = $._encodeBitString; }
    return _cached_encoder_for_ParameterOffers_priority(value, elGetter);
}


/* eslint-enable */
