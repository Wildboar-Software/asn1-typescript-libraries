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
 * @summary AP_invocation_id
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AP-invocation-id  ::=  INTEGER
 * ```
 */
export
type AP_invocation_id = INTEGER;

let _cached_decoder_for_AP_invocation_id: $.ASN1Decoder<AP_invocation_id> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AP_invocation_id
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AP_invocation_id (el: _Element): AP_invocation_id {
    if (!_cached_decoder_for_AP_invocation_id) { _cached_decoder_for_AP_invocation_id = $._decodeInteger; }
    return _cached_decoder_for_AP_invocation_id(el);
}

let _cached_encoder_for_AP_invocation_id: $.ASN1Encoder<AP_invocation_id> | null = null;

/**
 * @summary Encodes a(n) AP_invocation_id into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AP_invocation_id, encoded as an ASN.1 Element.
 */
export
function _encode_AP_invocation_id (value: AP_invocation_id, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AP_invocation_id) { _cached_encoder_for_AP_invocation_id = $._encodeInteger; }
    return _cached_encoder_for_AP_invocation_id(value, elGetter);
}


/* eslint-enable */
