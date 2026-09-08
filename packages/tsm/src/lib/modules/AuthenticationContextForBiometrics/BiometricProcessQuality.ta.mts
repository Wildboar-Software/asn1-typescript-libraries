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



/**
 * @summary BiometricProcessQuality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricProcessQuality  ::=  OCTET STRING (SIZE(1..MAX))
 * ```
 */
export
type BiometricProcessQuality = OCTET_STRING; // OctetStringType

let _cached_decoder_for_BiometricProcessQuality: $.ASN1Decoder<BiometricProcessQuality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricProcessQuality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricProcessQuality (el: _Element): BiometricProcessQuality {
    if (!_cached_decoder_for_BiometricProcessQuality) { _cached_decoder_for_BiometricProcessQuality = $._decodeOctetString; }
    return _cached_decoder_for_BiometricProcessQuality(el);
}

let _cached_encoder_for_BiometricProcessQuality: $.ASN1Encoder<BiometricProcessQuality> | null = null;

/**
 * @summary Encodes a(n) BiometricProcessQuality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricProcessQuality, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricProcessQuality (value: BiometricProcessQuality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricProcessQuality) { _cached_encoder_for_BiometricProcessQuality = $._encodeOctetString; }
    return _cached_encoder_for_BiometricProcessQuality(value, elGetter);
}


/* eslint-enable */
