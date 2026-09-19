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
 * @summary Iv_element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Iv-element  ::=  OCTET STRING (SIZE(4))
 * ```
 */
export
type Iv_element = OCTET_STRING; // OctetStringType

let _cached_decoder_for_Iv_element: $.ASN1Decoder<Iv_element> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Iv_element
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Iv_element (el: _Element): Iv_element {
    if (!_cached_decoder_for_Iv_element) { _cached_decoder_for_Iv_element = $._decodeOctetString; }
    return _cached_decoder_for_Iv_element(el);
}

let _cached_encoder_for_Iv_element: $.ASN1Encoder<Iv_element> | null = null;

/**
 * @summary Encodes a(n) Iv_element into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Iv_element, encoded as an ASN.1 Element.
 */
export
function _encode_Iv_element (value: Iv_element, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Iv_element) { _cached_encoder_for_Iv_element = $._encodeOctetString; }
    return _cached_encoder_for_Iv_element(value, elGetter);
}


/* eslint-enable */
