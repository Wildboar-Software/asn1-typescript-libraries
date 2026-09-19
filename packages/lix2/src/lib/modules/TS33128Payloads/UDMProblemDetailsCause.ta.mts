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
import { UDMDefinedCause, _enum_for_UDMDefinedCause, UDMDefinedCause_userNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, userNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_dataNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, dataNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_contextNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, contextNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_subscriptionNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMDefinedCause, _encode_UDMDefinedCause } from "../TS33128Payloads/UDMDefinedCause.ta.mjs";
// export { UDMDefinedCause, _enum_for_UDMDefinedCause, UDMDefinedCause_userNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, userNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_dataNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, dataNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_contextNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, contextNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_subscriptionNotFound /* IMPORTED_LONG_ENUMERATION_ITEM */, subscriptionNotFound /* IMPORTED_SHORT_ENUMERATION_ITEM */, UDMDefinedCause_other /* IMPORTED_LONG_ENUMERATION_ITEM */, other /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_UDMDefinedCause, _encode_UDMDefinedCause } from "../TS33128Payloads/UDMDefinedCause.ta.mjs";
import { UDMProblemDetailsOtherCause, _decode_UDMProblemDetailsOtherCause, _encode_UDMProblemDetailsOtherCause } from "../TS33128Payloads/UDMProblemDetailsOtherCause.ta.mjs";
// export { UDMProblemDetailsOtherCause, _decode_UDMProblemDetailsOtherCause, _encode_UDMProblemDetailsOtherCause } from "../TS33128Payloads/UDMProblemDetailsOtherCause.ta.mjs";


/**
 * @summary UDMProblemDetailsCause
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProblemDetailsCause  ::=  CHOICE
 * {
 *     uDMDefinedCause       [1] UDMDefinedCause,
 *     otherCause            [2] UDMProblemDetailsOtherCause
 * }
 * ```
 */
export
type UDMProblemDetailsCause =
    { uDMDefinedCause: UDMDefinedCause } /* CHOICE_ALT_ROOT */
    | { otherCause: UDMProblemDetailsOtherCause } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_UDMProblemDetailsCause: $.ASN1Decoder<UDMProblemDetailsCause> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProblemDetailsCause
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProblemDetailsCause (el: _Element): UDMProblemDetailsCause {
    if (!_cached_decoder_for_UDMProblemDetailsCause) { _cached_decoder_for_UDMProblemDetailsCause = $._decode_inextensible_choice<UDMProblemDetailsCause>({
    "CONTEXT 1": [ "uDMDefinedCause", $._decode_implicit<UDMDefinedCause>(() => _decode_UDMDefinedCause) ],
    "CONTEXT 2": [ "otherCause", $._decode_implicit<UDMProblemDetailsOtherCause>(() => _decode_UDMProblemDetailsOtherCause) ]
}); }
    return _cached_decoder_for_UDMProblemDetailsCause(el);
}

let _cached_encoder_for_UDMProblemDetailsCause: $.ASN1Encoder<UDMProblemDetailsCause> | null = null;

/**
 * @summary Encodes a(n) UDMProblemDetailsCause into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProblemDetailsCause, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProblemDetailsCause (value: UDMProblemDetailsCause, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProblemDetailsCause) { _cached_encoder_for_UDMProblemDetailsCause = $._encode_choice<UDMProblemDetailsCause>({
    "uDMDefinedCause": $._encode_implicit(_TagClass.context, 1, () => _encode_UDMDefinedCause, $.BER),
    "otherCause": $._encode_implicit(_TagClass.context, 2, () => _encode_UDMProblemDetailsOtherCause, $.BER),
}, $.BER); }
    return _cached_encoder_for_UDMProblemDetailsCause(value, elGetter);
}


/* eslint-enable */
