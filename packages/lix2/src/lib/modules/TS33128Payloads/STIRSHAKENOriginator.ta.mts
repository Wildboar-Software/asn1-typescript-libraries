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
import { STIRSHAKENTN, _decode_STIRSHAKENTN, _encode_STIRSHAKENTN } from "../TS33128Payloads/STIRSHAKENTN.ta.mjs";
// export { STIRSHAKENTN, _decode_STIRSHAKENTN, _encode_STIRSHAKENTN } from "../TS33128Payloads/STIRSHAKENTN.ta.mjs";


/**
 * @summary STIRSHAKENOriginator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * STIRSHAKENOriginator  ::=  CHOICE
 * {
 *     telephoneNumber [1] STIRSHAKENTN,
 *     sTIRSHAKENURI   [2] UTF8String
 * }
 * ```
 */
export
type STIRSHAKENOriginator =
    { telephoneNumber: STIRSHAKENTN } /* CHOICE_ALT_ROOT */
    | { sTIRSHAKENURI: UTF8String } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_STIRSHAKENOriginator: $.ASN1Decoder<STIRSHAKENOriginator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) STIRSHAKENOriginator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_STIRSHAKENOriginator (el: _Element): STIRSHAKENOriginator {
    if (!_cached_decoder_for_STIRSHAKENOriginator) { _cached_decoder_for_STIRSHAKENOriginator = $._decode_inextensible_choice<STIRSHAKENOriginator>({
    "CONTEXT 1": [ "telephoneNumber", $._decode_explicit<STIRSHAKENTN>(() => _decode_STIRSHAKENTN) ],
    "CONTEXT 2": [ "sTIRSHAKENURI", $._decode_implicit<UTF8String>(() => $._decodeUTF8String) ]
}); }
    return _cached_decoder_for_STIRSHAKENOriginator(el);
}

let _cached_encoder_for_STIRSHAKENOriginator: $.ASN1Encoder<STIRSHAKENOriginator> | null = null;

/**
 * @summary Encodes a(n) STIRSHAKENOriginator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The STIRSHAKENOriginator, encoded as an ASN.1 Element.
 */
export
function _encode_STIRSHAKENOriginator (value: STIRSHAKENOriginator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_STIRSHAKENOriginator) { _cached_encoder_for_STIRSHAKENOriginator = $._encode_choice<STIRSHAKENOriginator>({
    "telephoneNumber": $._encode_explicit(_TagClass.context, 1, () => _encode_STIRSHAKENTN, $.BER),
    "sTIRSHAKENURI": $._encode_implicit(_TagClass.context, 2, () => $._encodeUTF8String, $.BER),
}, $.BER); }
    return _cached_encoder_for_STIRSHAKENOriginator(value, elGetter);
}


/* eslint-enable */
