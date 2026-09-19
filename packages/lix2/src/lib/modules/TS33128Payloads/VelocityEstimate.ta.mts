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
import { HorizontalVelocity, _decode_HorizontalVelocity, _encode_HorizontalVelocity } from "../TS33128Payloads/HorizontalVelocity.ta.mjs";
// export { HorizontalVelocity, _decode_HorizontalVelocity, _encode_HorizontalVelocity } from "../TS33128Payloads/HorizontalVelocity.ta.mjs";
import { HorizontalWithVerticalVelocity, _decode_HorizontalWithVerticalVelocity, _encode_HorizontalWithVerticalVelocity } from "../TS33128Payloads/HorizontalWithVerticalVelocity.ta.mjs";
// export { HorizontalWithVerticalVelocity, _decode_HorizontalWithVerticalVelocity, _encode_HorizontalWithVerticalVelocity } from "../TS33128Payloads/HorizontalWithVerticalVelocity.ta.mjs";
import { HorizontalVelocityWithUncertainty, _decode_HorizontalVelocityWithUncertainty, _encode_HorizontalVelocityWithUncertainty } from "../TS33128Payloads/HorizontalVelocityWithUncertainty.ta.mjs";
// export { HorizontalVelocityWithUncertainty, _decode_HorizontalVelocityWithUncertainty, _encode_HorizontalVelocityWithUncertainty } from "../TS33128Payloads/HorizontalVelocityWithUncertainty.ta.mjs";
import { HorizontalWithVerticalVelocityAndUncertainty, _decode_HorizontalWithVerticalVelocityAndUncertainty, _encode_HorizontalWithVerticalVelocityAndUncertainty } from "../TS33128Payloads/HorizontalWithVerticalVelocityAndUncertainty.ta.mjs";
// export { HorizontalWithVerticalVelocityAndUncertainty, _decode_HorizontalWithVerticalVelocityAndUncertainty, _encode_HorizontalWithVerticalVelocityAndUncertainty } from "../TS33128Payloads/HorizontalWithVerticalVelocityAndUncertainty.ta.mjs";


/**
 * @summary VelocityEstimate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VelocityEstimate  ::=  CHOICE
 * {
 *     horVelocity                         [1] HorizontalVelocity,
 *     horWithVertVelocity                 [2] HorizontalWithVerticalVelocity,
 *     horVelocityWithUncertainty          [3] HorizontalVelocityWithUncertainty,
 *     horWithVertVelocityAndUncertainty   [4] HorizontalWithVerticalVelocityAndUncertainty
 * }
 * ```
 */
export
type VelocityEstimate =
    { horVelocity: HorizontalVelocity } /* CHOICE_ALT_ROOT */
    | { horWithVertVelocity: HorizontalWithVerticalVelocity } /* CHOICE_ALT_ROOT */
    | { horVelocityWithUncertainty: HorizontalVelocityWithUncertainty } /* CHOICE_ALT_ROOT */
    | { horWithVertVelocityAndUncertainty: HorizontalWithVerticalVelocityAndUncertainty } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_VelocityEstimate: $.ASN1Decoder<VelocityEstimate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VelocityEstimate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VelocityEstimate (el: _Element): VelocityEstimate {
    if (!_cached_decoder_for_VelocityEstimate) { _cached_decoder_for_VelocityEstimate = $._decode_inextensible_choice<VelocityEstimate>({
    "CONTEXT 1": [ "horVelocity", $._decode_implicit<HorizontalVelocity>(() => _decode_HorizontalVelocity) ],
    "CONTEXT 2": [ "horWithVertVelocity", $._decode_implicit<HorizontalWithVerticalVelocity>(() => _decode_HorizontalWithVerticalVelocity) ],
    "CONTEXT 3": [ "horVelocityWithUncertainty", $._decode_implicit<HorizontalVelocityWithUncertainty>(() => _decode_HorizontalVelocityWithUncertainty) ],
    "CONTEXT 4": [ "horWithVertVelocityAndUncertainty", $._decode_implicit<HorizontalWithVerticalVelocityAndUncertainty>(() => _decode_HorizontalWithVerticalVelocityAndUncertainty) ]
}); }
    return _cached_decoder_for_VelocityEstimate(el);
}

let _cached_encoder_for_VelocityEstimate: $.ASN1Encoder<VelocityEstimate> | null = null;

/**
 * @summary Encodes a(n) VelocityEstimate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VelocityEstimate, encoded as an ASN.1 Element.
 */
export
function _encode_VelocityEstimate (value: VelocityEstimate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VelocityEstimate) { _cached_encoder_for_VelocityEstimate = $._encode_choice<VelocityEstimate>({
    "horVelocity": $._encode_implicit(_TagClass.context, 1, () => _encode_HorizontalVelocity, $.BER),
    "horWithVertVelocity": $._encode_implicit(_TagClass.context, 2, () => _encode_HorizontalWithVerticalVelocity, $.BER),
    "horVelocityWithUncertainty": $._encode_implicit(_TagClass.context, 3, () => _encode_HorizontalVelocityWithUncertainty, $.BER),
    "horWithVertVelocityAndUncertainty": $._encode_implicit(_TagClass.context, 4, () => _encode_HorizontalWithVerticalVelocityAndUncertainty, $.BER),
}, $.BER); }
    return _cached_encoder_for_VelocityEstimate(value, elGetter);
}


/* eslint-enable */
