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
 * @summary CallingGeodeticLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallingGeodeticLocation  ::=  [162] IMPLICIT OCTET STRING(SIZE(8..13))
 * ```
 */
export
type CallingGeodeticLocation = OCTET_STRING; // OctetStringType

let _cached_decoder_for_CallingGeodeticLocation: $.ASN1Decoder<CallingGeodeticLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallingGeodeticLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallingGeodeticLocation (el: _Element): CallingGeodeticLocation {
    if (!_cached_decoder_for_CallingGeodeticLocation) { _cached_decoder_for_CallingGeodeticLocation = $._decode_implicit<CallingGeodeticLocation>(() => $._decodeOctetString); }
    return _cached_decoder_for_CallingGeodeticLocation(el);
}

let _cached_encoder_for_CallingGeodeticLocation: $.ASN1Encoder<CallingGeodeticLocation> | null = null;

/**
 * @summary Encodes a(n) CallingGeodeticLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallingGeodeticLocation, encoded as an ASN.1 Element.
 */
export
function _encode_CallingGeodeticLocation (value: CallingGeodeticLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallingGeodeticLocation) { _cached_encoder_for_CallingGeodeticLocation = $._encode_implicit(_TagClass.context, 162, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_CallingGeodeticLocation(value, elGetter);
}


/* eslint-enable */
