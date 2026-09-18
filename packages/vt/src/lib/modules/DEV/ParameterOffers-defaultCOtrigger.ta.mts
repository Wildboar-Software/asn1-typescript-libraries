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
 * @summary ParameterOffers_defaultCOtrigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-defaultCOtrigger ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_defaultCOtrigger = BIT_STRING;

/**
 * @summary ParameterOffers_defaultCOtrigger_notSelected
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_notSelected: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary notSelected
 * @constant
 */
export
const notSelected: number = ParameterOffers_defaultCOtrigger_notSelected; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_defaultCOtrigger_selected
 * @constant
 */
export
const ParameterOffers_defaultCOtrigger_selected: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary selected
 * @constant
 */
export
const selected: number = ParameterOffers_defaultCOtrigger_selected; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParameterOffers_defaultCOtrigger: $.ASN1Decoder<ParameterOffers_defaultCOtrigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_defaultCOtrigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_defaultCOtrigger (el: _Element): ParameterOffers_defaultCOtrigger {
    if (!_cached_decoder_for_ParameterOffers_defaultCOtrigger) { _cached_decoder_for_ParameterOffers_defaultCOtrigger = $._decodeBitString; }
    return _cached_decoder_for_ParameterOffers_defaultCOtrigger(el);
}

let _cached_encoder_for_ParameterOffers_defaultCOtrigger: $.ASN1Encoder<ParameterOffers_defaultCOtrigger> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_defaultCOtrigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_defaultCOtrigger, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_defaultCOtrigger (value: ParameterOffers_defaultCOtrigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_defaultCOtrigger) { _cached_encoder_for_ParameterOffers_defaultCOtrigger = $._encodeBitString; }
    return _cached_encoder_for_ParameterOffers_defaultCOtrigger(value, elGetter);
}


/* eslint-enable */
