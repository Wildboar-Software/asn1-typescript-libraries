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
import { CS_Resume_Request_controlling, _decode_CS_Resume_Request_controlling, _encode_CS_Resume_Request_controlling } from "../ISO-9506-MMS-1/CS-Resume-Request-controlling.ta.mjs";
// export { CS_Resume_Request_controlling, _decode_CS_Resume_Request_controlling, _encode_CS_Resume_Request_controlling } from "../ISO-9506-MMS-1/CS-Resume-Request-controlling.ta.mjs";


/**
 * @summary CS_Resume_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CS-Resume-Request  ::=  [0] CHOICE {
 *    normal                     NULL,
 *    controlling                SEQUENCE {
 *           modeType               CHOICE {
 *           continueMode               [0] IMPLICIT NULL,
 *           changeMode                 [1] StartCount
 *           }  }  }
 * ```
 */
export
type CS_Resume_Request =
    { normal: NULL } /* CHOICE_ALT_ROOT */
    | { controlling: CS_Resume_Request_controlling } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CS_Resume_Request: $.ASN1Decoder<CS_Resume_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CS_Resume_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CS_Resume_Request (el: _Element): CS_Resume_Request {
    if (!_cached_decoder_for_CS_Resume_Request) { _cached_decoder_for_CS_Resume_Request = $._decode_explicit<CS_Resume_Request>(() => $._decode_inextensible_choice<CS_Resume_Request>({
    "UNIVERSAL 5": [ "normal", $._decodeNull ],
    "UNIVERSAL 16": [ "controlling", _decode_CS_Resume_Request_controlling ]
})); }
    return _cached_decoder_for_CS_Resume_Request(el);
}

let _cached_encoder_for_CS_Resume_Request: $.ASN1Encoder<CS_Resume_Request> | null = null;

/**
 * @summary Encodes a(n) CS_Resume_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CS_Resume_Request, encoded as an ASN.1 Element.
 */
export
function _encode_CS_Resume_Request (value: CS_Resume_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CS_Resume_Request) { _cached_encoder_for_CS_Resume_Request = $._encode_explicit(_TagClass.context, 0, () => $._encode_choice<CS_Resume_Request>({
    "normal": $._encodeNull,
    "controlling": _encode_CS_Resume_Request_controlling,
}, $.BER), $.BER); }
    return _cached_encoder_for_CS_Resume_Request(value, elGetter);
}


/* eslint-enable */
