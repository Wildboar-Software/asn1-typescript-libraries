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
 * @summary ParameterOffers_access
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParameterOffers-access ::= BIT STRING { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ParameterOffers_access = BIT_STRING;

/**
 * @summary ParameterOffers_access_wavar
 * @constant
 */
export
const ParameterOffers_access_wavar: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary wavar
 * @constant
 */
export
const wavar: number = ParameterOffers_access_wavar; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_access_waci
 * @constant
 */
export
const ParameterOffers_access_waci: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary waci
 * @constant
 */
export
const waci: number = ParameterOffers_access_waci; /* SHORT_NAMED_BIT */

/**
 * @summary ParameterOffers_access_waca
 * @constant
 */
export
const ParameterOffers_access_waca: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary waca
 * @constant
 */
export
const waca: number = ParameterOffers_access_waca; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ParameterOffers_access: $.ASN1Decoder<ParameterOffers_access> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParameterOffers_access
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParameterOffers_access (el: _Element): ParameterOffers_access {
    if (!_cached_decoder_for_ParameterOffers_access) { _cached_decoder_for_ParameterOffers_access = $._decodeBitString; }
    return _cached_decoder_for_ParameterOffers_access(el);
}

let _cached_encoder_for_ParameterOffers_access: $.ASN1Encoder<ParameterOffers_access> | null = null;

/**
 * @summary Encodes a(n) ParameterOffers_access into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParameterOffers_access, encoded as an ASN.1 Element.
 */
export
function _encode_ParameterOffers_access (value: ParameterOffers_access, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParameterOffers_access) { _cached_encoder_for_ParameterOffers_access = $._encodeBitString; }
    return _cached_encoder_for_ParameterOffers_access(value, elGetter);
}


/* eslint-enable */
