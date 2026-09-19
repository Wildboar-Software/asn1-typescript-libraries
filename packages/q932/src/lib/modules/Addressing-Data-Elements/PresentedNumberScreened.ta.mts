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
import { NumberScreened, _decode_NumberScreened, _encode_NumberScreened } from "../Addressing-Data-Elements/NumberScreened.ta.mjs";
// export { NumberScreened, _decode_NumberScreened, _encode_NumberScreened } from "../Addressing-Data-Elements/NumberScreened.ta.mjs";


/**
 * @summary PresentedNumberScreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedNumberScreened  ::=  CHOICE {
 *   presentationAllowedNumber            [0] IMPLICIT NumberScreened,
 *   presentationRestricted               [1] IMPLICIT NULL,
 *   numberNotAvailableDueToInterworking  [2] IMPLICIT NULL,
 *   presentationRestrictedNumber         [3] IMPLICIT NumberScreened
 * }
 * ```
 */
export
type PresentedNumberScreened =
    { presentationAllowedNumber: NumberScreened } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueToInterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedNumber: NumberScreened } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentedNumberScreened: $.ASN1Decoder<PresentedNumberScreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentedNumberScreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentedNumberScreened (el: _Element): PresentedNumberScreened {
    if (!_cached_decoder_for_PresentedNumberScreened) { _cached_decoder_for_PresentedNumberScreened = $._decode_inextensible_choice<PresentedNumberScreened>({
    "CONTEXT 0": [ "presentationAllowedNumber", $._decode_implicit<NumberScreened>(() => _decode_NumberScreened) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueToInterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedNumber", $._decode_implicit<NumberScreened>(() => _decode_NumberScreened) ]
}); }
    return _cached_decoder_for_PresentedNumberScreened(el);
}

let _cached_encoder_for_PresentedNumberScreened: $.ASN1Encoder<PresentedNumberScreened> | null = null;

/**
 * @summary Encodes a(n) PresentedNumberScreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentedNumberScreened, encoded as an ASN.1 Element.
 */
export
function _encode_PresentedNumberScreened (value: PresentedNumberScreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentedNumberScreened) { _cached_encoder_for_PresentedNumberScreened = $._encode_choice<PresentedNumberScreened>({
    "presentationAllowedNumber": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberScreened, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueToInterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedNumber": $._encode_implicit(_TagClass.context, 3, () => _encode_NumberScreened, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedNumberScreened(value, elGetter);
}


/* eslint-enable */
