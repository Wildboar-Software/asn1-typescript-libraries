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
 * @summary FramedRoute
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FramedRoute  ::=  CHOICE
 * {
 *         -- Additional Framed Route prefix information associated with the target service
 * 
 *     framedRoute     [0] OCTET STRING,
 *         -- This could contain an IPv4 as well as IPv6 FramedRoute information
 *         -- including additional information such Gateway address and
 *         -- one or more metrics in texual format.
 *         -- This parameter shall be populated with the RADIUS value.
 *     ...
 * }
 * ```
 */
export
type FramedRoute =
    { framedRoute: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_FramedRoute: $.ASN1Decoder<FramedRoute> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FramedRoute
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FramedRoute (el: _Element): FramedRoute {
    if (!_cached_decoder_for_FramedRoute) { _cached_decoder_for_FramedRoute = $._decode_extensible_choice<FramedRoute>({
    "CONTEXT 0": [ "framedRoute", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ]
}); }
    return _cached_decoder_for_FramedRoute(el);
}

let _cached_encoder_for_FramedRoute: $.ASN1Encoder<FramedRoute> | null = null;

/**
 * @summary Encodes a(n) FramedRoute into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FramedRoute, encoded as an ASN.1 Element.
 */
export
function _encode_FramedRoute (value: FramedRoute, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FramedRoute) { _cached_encoder_for_FramedRoute = $._encode_choice<FramedRoute>({
    "framedRoute": $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER),
}, $.BER); }
    return _cached_encoder_for_FramedRoute(value, elGetter);
}


/* eslint-enable */
