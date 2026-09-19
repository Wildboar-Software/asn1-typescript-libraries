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
 * @summary EnvelopeEncodingAuthority
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnvelopeEncodingAuthority  ::=  [98] IMPLICIT OBJECT IDENTIFIER
 * ```
 */
export
type EnvelopeEncodingAuthority = OBJECT_IDENTIFIER; // ObjectIdentifierType

let _cached_decoder_for_EnvelopeEncodingAuthority: $.ASN1Decoder<EnvelopeEncodingAuthority> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopeEncodingAuthority
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnvelopeEncodingAuthority (el: _Element): EnvelopeEncodingAuthority {
    if (!_cached_decoder_for_EnvelopeEncodingAuthority) { _cached_decoder_for_EnvelopeEncodingAuthority = $._decode_implicit<EnvelopeEncodingAuthority>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_EnvelopeEncodingAuthority(el);
}

let _cached_encoder_for_EnvelopeEncodingAuthority: $.ASN1Encoder<EnvelopeEncodingAuthority> | null = null;

/**
 * @summary Encodes a(n) EnvelopeEncodingAuthority into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopeEncodingAuthority, encoded as an ASN.1 Element.
 */
export
function _encode_EnvelopeEncodingAuthority (value: EnvelopeEncodingAuthority, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnvelopeEncodingAuthority) { _cached_encoder_for_EnvelopeEncodingAuthority = $._encode_implicit(_TagClass.context, 98, () => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_EnvelopeEncodingAuthority(value, elGetter);
}


/* eslint-enable */
