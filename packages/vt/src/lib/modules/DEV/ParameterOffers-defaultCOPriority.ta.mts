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
 * @summary ParameterOffers_defaultCOPriority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOPriority ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_defaultCOPriority = BIT_STRING;

/**
 * @summary ParameterOffers_defaultCOPriority_normal
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_normal: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary normal
 * @constant
 */
export
const normal: number = ParameterOffers_defaultCOPriority_normal; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_high
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_high: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary high
 * @constant
 */
export
const high: number = ParameterOffers_defaultCOPriority_high; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOPriority_urgent
 * @constant
 */
export
const ParameterOffers_defaultCOPriority_urgent: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary urgent
 * @constant
 */
export
const urgent: number = ParameterOffers_defaultCOPriority_urgent; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParameterOffers_defaultCOPriority: $.ASN1Decoder<ParameterOffers_defaultCOPriority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_defaultCOPriority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_defaultCOPriority (el: _Element): ParameterOffers_defaultCOPriority {
    if (!_cached_decoder_for_ParameterOffers_defaultCOPriority) { _cached_decoder_for_ParameterOffers_defaultCOPriority = $._decodeBitString; }
    return _cached_decoder_for_ParameterOffers_defaultCOPriority(el);
}

let _cached_encoder_for_ParameterOffers_defaultCOPriority: $.ASN1Encoder<ParameterOffers_defaultCOPriority> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_defaultCOPriority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_defaultCOPriority, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_defaultCOPriority (value: ParameterOffers_defaultCOPriority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_defaultCOPriority) { _cached_encoder_for_ParameterOffers_defaultCOPriority = $._encodeBitString; }
    return _cached_encoder_for_ParameterOffers_defaultCOPriority(value, elGetter);
}


/* eslint-enable */
