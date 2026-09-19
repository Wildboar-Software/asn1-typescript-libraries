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
 * @summary ActivationCodeRetrievalInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivationCodeRetrievalInfo  ::=  CHOICE {
 *     activationCodeForProfileRedownload [1] UTF8String (SIZE(0..255)), -- Activation Code to be used for Profile re-download
 *     activationCodeRetrievalAvailable [2] BOOLEAN, -- the Activation Code Retrieval is available
 *     retryDelay [3] INTEGER -- expected time (in minutes) by when the SM-DP is ready
 * }
 * ```
 */
export
type ActivationCodeRetrievalInfo =
    { activationCodeForProfileRedownload: UTF8String } /* CHOICE_ALT_ROOT */
    | { activationCodeRetrievalAvailable: BOOLEAN } /* CHOICE_ALT_ROOT */
    | { retryDelay: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ActivationCodeRetrievalInfo: $.ASN1Decoder<ActivationCodeRetrievalInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivationCodeRetrievalInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivationCodeRetrievalInfo (el: _Element): ActivationCodeRetrievalInfo {
    if (!_cached_decoder_for_ActivationCodeRetrievalInfo) { _cached_decoder_for_ActivationCodeRetrievalInfo = $._decode_inextensible_choice<ActivationCodeRetrievalInfo>({
    "CONTEXT 1": [ "activationCodeForProfileRedownload", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ],
    "CONTEXT 2": [ "activationCodeRetrievalAvailable", $._decode_implicit<BOOLEAN>(() => $._decodeBoolean) ],
    "CONTEXT 3": [ "retryDelay", $._decode_implicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_ActivationCodeRetrievalInfo(el);
}

let _cached_encoder_for_ActivationCodeRetrievalInfo: $.ASN1Encoder<ActivationCodeRetrievalInfo> | null = null;

/**
 * @summary Encodes a(n) ActivationCodeRetrievalInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivationCodeRetrievalInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ActivationCodeRetrievalInfo (value: ActivationCodeRetrievalInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivationCodeRetrievalInfo) { _cached_encoder_for_ActivationCodeRetrievalInfo = $._encode_choice<ActivationCodeRetrievalInfo>({
    "activationCodeForProfileRedownload": $._encode_implicit(_TagClass.context, 1, () => $._encodeUTF8String, $.BER),
    "activationCodeRetrievalAvailable": $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER),
    "retryDelay": $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_ActivationCodeRetrievalInfo(value, elGetter);
}


/* eslint-enable */
