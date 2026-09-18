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
 * @summary ParameterOffers_trigger
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-trigger ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_trigger = BIT_STRING;

/**
 * @summary ParameterOffers_trigger_yes
 * @constant
 */
export
const ParameterOffers_trigger_yes: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary yes
 * @constant
 */
export
const yes: number = ParameterOffers_trigger_yes; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_trigger_no
 * @constant
 */
export
const ParameterOffers_trigger_no: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary no
 * @constant
 */
export
const no: number = ParameterOffers_trigger_no; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParameterOffers_trigger: $.ASN1Decoder<ParameterOffers_trigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_trigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_trigger (el: _Element): ParameterOffers_trigger {
    if (!_cached_decoder_for_ParameterOffers_trigger) { _cached_decoder_for_ParameterOffers_trigger = $._decodeBitString; }
    return _cached_decoder_for_ParameterOffers_trigger(el);
}

let _cached_encoder_for_ParameterOffers_trigger: $.ASN1Encoder<ParameterOffers_trigger> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_trigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_trigger, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_trigger (value: ParameterOffers_trigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_trigger) { _cached_encoder_for_ParameterOffers_trigger = $._encodeBitString; }
    return _cached_encoder_for_ParameterOffers_trigger(value, elGetter);
}


/* eslint-enable */
