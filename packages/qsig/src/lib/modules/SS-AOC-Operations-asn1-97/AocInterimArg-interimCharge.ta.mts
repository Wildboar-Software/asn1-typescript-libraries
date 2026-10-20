/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AocInterimArg_interimCharge_specificCurrency, _decode_AocInterimArg_interimCharge_specificCurrency, _encode_AocInterimArg_interimCharge_specificCurrency } from "../SS-AOC-Operations-asn1-97/AocInterimArg-interimCharge-specificCurrency.ta.mjs";
// export { AocInterimArg_interimCharge_specificCurrency, _decode_AocInterimArg_interimCharge_specificCurrency, _encode_AocInterimArg_interimCharge_specificCurrency } from "../SS-AOC-Operations-asn1-97/AocInterimArg-interimCharge-specificCurrency.ta.mjs";


/**
 * @summary AocInterimArg_interimCharge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocInterimArg-interimCharge ::= CHOICE {
 *     chargeNotAvailable [0] IMPLICIT NULL,
 *     freeOfCharge [1] IMPLICIT NULL,
 *     specificCurrency SEQUENCE {
 *         recordedCurrency [1] IMPLICIT RecordedCurrency,
 *         interimBillingId [2] IMPLICIT InterimBillingId OPTIONAL
 *     }
 * }
 * ```
 */
export
type AocInterimArg_interimCharge =
    { chargeNotAvailable: NULL } /* CHOICE_ALT_ROOT */
    | { freeOfCharge: NULL } /* CHOICE_ALT_ROOT */
    | { specificCurrency: AocInterimArg_interimCharge_specificCurrency } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AocInterimArg_interimCharge: $.ASN1Decoder<AocInterimArg_interimCharge> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocInterimArg_interimCharge
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocInterimArg_interimCharge (el: _Element): AocInterimArg_interimCharge {
    if (!_cached_decoder_for_AocInterimArg_interimCharge) { _cached_decoder_for_AocInterimArg_interimCharge = $._decode_inextensible_choice<AocInterimArg_interimCharge>({
    "CONTEXT 0": [ "chargeNotAvailable", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "freeOfCharge", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "UNIVERSAL 16": [ "specificCurrency", _decode_AocInterimArg_interimCharge_specificCurrency ]
}); }
    return _cached_decoder_for_AocInterimArg_interimCharge(el);
}

let _cached_encoder_for_AocInterimArg_interimCharge: $.ASN1Encoder<AocInterimArg_interimCharge> | null = null;

/**
 * @summary Encodes a(n) AocInterimArg_interimCharge into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocInterimArg_interimCharge, encoded as an ASN.1 Element.
 */
export
function _encode_AocInterimArg_interimCharge (value: AocInterimArg_interimCharge, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocInterimArg_interimCharge) { _cached_encoder_for_AocInterimArg_interimCharge = $._encode_choice<AocInterimArg_interimCharge>({
    "chargeNotAvailable": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "freeOfCharge": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "specificCurrency": _encode_AocInterimArg_interimCharge_specificCurrency,
}, $.BER); }
    return _cached_encoder_for_AocInterimArg_interimCharge(value, elGetter);
}


/* eslint-enable */
