/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ValidityPeriodRel, _decode_ValidityPeriodRel, _encode_ValidityPeriodRel } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodRel.ta.mjs";
// export { ValidityPeriodRel, _decode_ValidityPeriodRel, _encode_ValidityPeriodRel } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodRel.ta.mjs";
import { ValidityPeriodSemi, _decode_ValidityPeriodSemi, _encode_ValidityPeriodSemi } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodSemi.ta.mjs";
// export { ValidityPeriodSemi, _decode_ValidityPeriodSemi, _encode_ValidityPeriodSemi } from "../Short-Message-Service-Operations-asn1-97/ValidityPeriodSemi.ta.mjs";


/**
 * @summary EnhancedVP
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnhancedVP  ::=  CHOICE {
 *     validityPeriodRel [0] IMPLICIT ValidityPeriodRel,
 *     validityPeriodSec [1] IMPLICIT INTEGER (0..255),
 *     validityPeriodSemi [2] IMPLICIT ValidityPeriodSemi
 * }
 * ```
 */
export
type EnhancedVP =
    { validityPeriodRel: ValidityPeriodRel } /* CHOICE_ALT_ROOT */
    | { validityPeriodSec: INTEGER } /* CHOICE_ALT_ROOT */
    | { validityPeriodSemi: ValidityPeriodSemi } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EnhancedVP: $.ASN1Decoder<EnhancedVP> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnhancedVP
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnhancedVP (el: _Element): EnhancedVP {
    if (!_cached_decoder_for_EnhancedVP) { _cached_decoder_for_EnhancedVP = $._decode_inextensible_choice<EnhancedVP>({
    "CONTEXT 0": [ "validityPeriodRel", $._decode_implicit<ValidityPeriodRel>(() => _decode_ValidityPeriodRel) ],
    "CONTEXT 1": [ "validityPeriodSec", $._decode_implicit<INTEGER>(() => (el: _Element): INTEGER => {
            const _value = $._decodeInteger(el);
            if ((typeof _value === "bigint" ? (_value < 0n || _value > 255n) : (_value < 0 || _value > 255))) {
                throw new ASN1OverflowError("EnhancedVP.validityPeriodSec violates INTEGER constraint");
            }
            return _value;
        }) ],
    "CONTEXT 2": [ "validityPeriodSemi", $._decode_implicit<ValidityPeriodSemi>(() => _decode_ValidityPeriodSemi) ]
}); }
    return _cached_decoder_for_EnhancedVP(el);
}

let _cached_encoder_for_EnhancedVP: $.ASN1Encoder<EnhancedVP> | null = null;

/**
 * @summary Encodes a(n) EnhancedVP into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnhancedVP, encoded as an ASN.1 Element.
 */
export
function _encode_EnhancedVP (value: EnhancedVP, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnhancedVP) { _cached_encoder_for_EnhancedVP = $._encode_choice<EnhancedVP>({
    "validityPeriodRel": $._encode_implicit(_TagClass.context, 0, () => _encode_ValidityPeriodRel, $.BER),
    "validityPeriodSec": $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER),
    "validityPeriodSemi": $._encode_implicit(_TagClass.context, 2, () => _encode_ValidityPeriodSemi, $.BER),
}, $.BER); }
    return _cached_encoder_for_EnhancedVP(value, elGetter);
}


/* eslint-enable */
