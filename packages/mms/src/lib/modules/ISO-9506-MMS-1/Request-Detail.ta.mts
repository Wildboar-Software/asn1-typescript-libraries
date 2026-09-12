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
 * @summary Request_Detail
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Request-Detail  ::=  CHOICE {
 *     otherRequests NULL,
 *     ...
 * }
 * ```
 */
export
type Request_Detail =
    { otherRequests: NULL } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Request_Detail: $.ASN1Decoder<Request_Detail> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Request_Detail
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Request_Detail (el: _Element): Request_Detail {
    if (!_cached_decoder_for_Request_Detail) { _cached_decoder_for_Request_Detail = $._decode_extensible_choice<Request_Detail>({
    "UNIVERSAL 5": [ "otherRequests", $._decodeNull ]
}); }
    return _cached_decoder_for_Request_Detail(el);
}

let _cached_encoder_for_Request_Detail: $.ASN1Encoder<Request_Detail> | null = null;

/**
 * @summary Encodes a(n) Request_Detail into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Request_Detail, encoded as an ASN.1 Element.
 */
export
function _encode_Request_Detail (value: Request_Detail, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Request_Detail) { _cached_encoder_for_Request_Detail = $._encode_choice<Request_Detail>({
    "otherRequests": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_Request_Detail(value, elGetter);
}


/* eslint-enable */
