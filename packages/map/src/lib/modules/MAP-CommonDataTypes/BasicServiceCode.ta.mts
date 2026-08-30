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
import { BearerServiceCode, _decode_BearerServiceCode, _encode_BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";
// export { BearerServiceCode, _decode_BearerServiceCode, _encode_BearerServiceCode } from "../MAP-BS-Code/BearerServiceCode.ta.mjs";
import { TeleserviceCode, _decode_TeleserviceCode, _encode_TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";
// export { TeleserviceCode, _decode_TeleserviceCode, _encode_TeleserviceCode } from "../MAP-TS-Code/TeleserviceCode.ta.mjs";


/**
 * @summary BasicServiceCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicServiceCode  ::=  CHOICE {
 *     bearerService    [2] BearerServiceCode,
 *     teleservice    [3] TeleserviceCode}
 * ```
 */
export
type BasicServiceCode =
    { bearerService: BearerServiceCode } /* CHOICE_ALT_ROOT */
    | { teleservice: TeleserviceCode } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BasicServiceCode: $.ASN1Decoder<BasicServiceCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicServiceCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicServiceCode (el: _Element): BasicServiceCode {
    if (!_cached_decoder_for_BasicServiceCode) { _cached_decoder_for_BasicServiceCode = $._decode_inextensible_choice<BasicServiceCode>({
    "CONTEXT 2": [ "bearerService", $._decode_implicit<BearerServiceCode>(() => _decode_BearerServiceCode) ],
    "CONTEXT 3": [ "teleservice", $._decode_implicit<TeleserviceCode>(() => _decode_TeleserviceCode) ]
}); }
    return _cached_decoder_for_BasicServiceCode(el);
}

let _cached_encoder_for_BasicServiceCode: $.ASN1Encoder<BasicServiceCode> | null = null;

/**
 * @summary Encodes a(n) BasicServiceCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicServiceCode, encoded as an ASN.1 Element.
 */
export
function _encode_BasicServiceCode (value: BasicServiceCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicServiceCode) { _cached_encoder_for_BasicServiceCode = $._encode_choice<BasicServiceCode>({
    "bearerService": $._encode_implicit(_TagClass.context, 2, () => _encode_BearerServiceCode, $.BER),
    "teleservice": $._encode_implicit(_TagClass.context, 3, () => _encode_TeleserviceCode, $.BER),
}, $.BER); }
    return _cached_encoder_for_BasicServiceCode(value, elGetter);
}


/* eslint-enable */
