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
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";


/**
 * @summary PresentedNumberUnscreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedNumberUnscreened  ::=  CHOICE {
 *   presentationAllowedNumber            [0]  PartyNumber,
 *   presentationRestricted               [1] IMPLICIT NULL,
 *   numberNotAvailableDueToInterworking  [2] IMPLICIT NULL,
 *   presentationRestrictedNumber         [3]  PartyNumber
 * }
 * ```
 */
export
type PresentedNumberUnscreened =
    { presentationAllowedNumber: PartyNumber } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueToInterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedNumber: PartyNumber } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentedNumberUnscreened: $.ASN1Decoder<PresentedNumberUnscreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentedNumberUnscreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentedNumberUnscreened (el: _Element): PresentedNumberUnscreened {
    if (!_cached_decoder_for_PresentedNumberUnscreened) { _cached_decoder_for_PresentedNumberUnscreened = $._decode_inextensible_choice<PresentedNumberUnscreened>({
    "CONTEXT 0": [ "presentationAllowedNumber", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueToInterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedNumber", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ]
}); }
    return _cached_decoder_for_PresentedNumberUnscreened(el);
}

let _cached_encoder_for_PresentedNumberUnscreened: $.ASN1Encoder<PresentedNumberUnscreened> | null = null;

/**
 * @summary Encodes a(n) PresentedNumberUnscreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentedNumberUnscreened, encoded as an ASN.1 Element.
 */
export
function _encode_PresentedNumberUnscreened (value: PresentedNumberUnscreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentedNumberUnscreened) { _cached_encoder_for_PresentedNumberUnscreened = $._encode_choice<PresentedNumberUnscreened>({
    "presentationAllowedNumber": $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueToInterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedNumber": $._encode_explicit(_TagClass.context, 3, () => _encode_PartyNumber, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedNumberUnscreened(value, elGetter);
}


/* eslint-enable */
