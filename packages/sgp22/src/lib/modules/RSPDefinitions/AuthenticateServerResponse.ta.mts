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
import { AuthenticateResponseOk, _decode_AuthenticateResponseOk, _encode_AuthenticateResponseOk } from "../RSPDefinitions/AuthenticateResponseOk.ta.mjs";
// export { AuthenticateResponseOk, _decode_AuthenticateResponseOk, _encode_AuthenticateResponseOk } from "../RSPDefinitions/AuthenticateResponseOk.ta.mjs";
import { AuthenticateResponseError, _decode_AuthenticateResponseError, _encode_AuthenticateResponseError } from "../RSPDefinitions/AuthenticateResponseError.ta.mjs";
// export { AuthenticateResponseError, _decode_AuthenticateResponseError, _encode_AuthenticateResponseError } from "../RSPDefinitions/AuthenticateResponseError.ta.mjs";


/**
 * @summary AuthenticateServerResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticateServerResponse  ::=  [56] CHOICE { -- Tag 'BF38'
 *     authenticateResponseOk AuthenticateResponseOk,
 *     authenticateResponseError AuthenticateResponseError
 * }
 * ```
 */
export
type AuthenticateServerResponse =
    { authenticateResponseOk: AuthenticateResponseOk } /* CHOICE_ALT_ROOT */
    | { authenticateResponseError: AuthenticateResponseError } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticateServerResponse: $.ASN1Decoder<AuthenticateServerResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticateServerResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticateServerResponse (el: _Element): AuthenticateServerResponse {
    if (!_cached_decoder_for_AuthenticateServerResponse) { _cached_decoder_for_AuthenticateServerResponse = $._decode_explicit<AuthenticateServerResponse>(() => $._decode_inextensible_choice<AuthenticateServerResponse>({
    "CONTEXT 0": [ "authenticateResponseOk", _decode_AuthenticateResponseOk ],
    "CONTEXT 1": [ "authenticateResponseError", _decode_AuthenticateResponseError ]
})); }
    return _cached_decoder_for_AuthenticateServerResponse(el);
}

let _cached_encoder_for_AuthenticateServerResponse: $.ASN1Encoder<AuthenticateServerResponse> | null = null;

/**
 * @summary Encodes a(n) AuthenticateServerResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticateServerResponse, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticateServerResponse (value: AuthenticateServerResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticateServerResponse) { _cached_encoder_for_AuthenticateServerResponse = $._encode_explicit(_TagClass.context, 56, () => $._encode_choice<AuthenticateServerResponse>({
    "authenticateResponseOk": _encode_AuthenticateResponseOk,
    "authenticateResponseError": _encode_AuthenticateResponseError,
}, $.BER), $.BER); }
    return _cached_encoder_for_AuthenticateServerResponse(value, elGetter);
}


/* eslint-enable */
