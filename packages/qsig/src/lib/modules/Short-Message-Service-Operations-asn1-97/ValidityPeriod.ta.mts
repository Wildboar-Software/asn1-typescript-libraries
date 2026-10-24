/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ValidityPeriodRel, _decode_ValidityPeriodRel, _encode_ValidityPeriodRel } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodRel.ta.mjs";
import { type ValidityPeriodAbs, _decode_ValidityPeriodAbs, _encode_ValidityPeriodAbs } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodAbs.ta.mjs";
import { ValidityPeriodEnh, _decode_ValidityPeriodEnh, _encode_ValidityPeriodEnh } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodEnh.ta.mjs";

/**
 * @summary ValidityPeriod
 * @description
 *
 * How long the Sending User considers the Short Message valid (ECMA-325
 * §E.1.2.2). The Service Centre keeps it and keeps trying until this period
 * ends, then deletes it. `validityPeriodRel` uses Table E.2.
 * `validityPeriodAbs` is an absolute ISO 8601 time. `validityPeriodEnh` is
 * one-shot and/or an alternate encoding. If `smsSubmit` omits the element, the
 * Service Centre uses an implementation-specific default (§6.5.3.2.1 NOTE 6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-325/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ValidityPeriod  ::=  CHOICE {
 *     validityPeriodRel [0] IMPLICIT ValidityPeriodRel,
 *     validityPeriodAbs [1] IMPLICIT ValidityPeriodAbs,
 *     validityPeriodEnh [2] IMPLICIT ValidityPeriodEnh
 * }
 * ```
 */
export
type ValidityPeriod =
    { validityPeriodRel: ValidityPeriodRel } /* CHOICE_ALT_ROOT */
    | { validityPeriodAbs: ValidityPeriodAbs } /* CHOICE_ALT_ROOT */
    | { validityPeriodEnh: ValidityPeriodEnh } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ValidityPeriod: $.ASN1Decoder<ValidityPeriod> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ValidityPeriod
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ValidityPeriod (el: _Element): ValidityPeriod {
    if (!_cached_decoder_for_ValidityPeriod) { _cached_decoder_for_ValidityPeriod = $._decode_inextensible_choice<ValidityPeriod>({
    "CONTEXT 0": [ "validityPeriodRel", $._decode_implicit<ValidityPeriodRel>(() => _decode_ValidityPeriodRel) ],
    "CONTEXT 1": [ "validityPeriodAbs", $._decode_implicit<ValidityPeriodAbs>(() => _decode_ValidityPeriodAbs) ],
    "CONTEXT 2": [ "validityPeriodEnh", $._decode_implicit<ValidityPeriodEnh>(() => _decode_ValidityPeriodEnh) ]
}); }
    return _cached_decoder_for_ValidityPeriod(el);
}

let _cached_encoder_for_ValidityPeriod: $.ASN1Encoder<ValidityPeriod> | null = null;

/**
 * @summary Encodes a(n) ValidityPeriod into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ValidityPeriod, encoded as an ASN.1 Element.
 */
export
function _encode_ValidityPeriod (value: ValidityPeriod, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ValidityPeriod) { _cached_encoder_for_ValidityPeriod = $._encode_choice<ValidityPeriod>({
    "validityPeriodRel": $._encode_implicit(_TagClass.context, 0, () => _encode_ValidityPeriodRel, $.BER),
    "validityPeriodAbs": $._encode_implicit(_TagClass.context, 1, () => _encode_ValidityPeriodAbs, $.BER),
    "validityPeriodEnh": $._encode_implicit(_TagClass.context, 2, () => _encode_ValidityPeriodEnh, $.BER),
}, $.BER); }
    return _cached_encoder_for_ValidityPeriod(value, elGetter);
}

/* eslint-enable */
