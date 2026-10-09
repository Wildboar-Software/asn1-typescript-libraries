/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
// export { IntUnit, _decode_IntUnit, _encode_IntUnit } from "../Z39-50-APDU-2001/IntUnit.ta.mjs";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";
// export { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary Period
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Period  ::=  CHOICE {
 *     unit            [1] IMPLICIT IntUnit,
 *     businessDaily   [2] IMPLICIT NULL,
 *     continuous      [3] IMPLICIT NULL,
 *     other           [4] IMPLICIT InternationalString
 * }
 * ```
 */
export
type Period =
    { unit: IntUnit } /* CHOICE_ALT_ROOT */
    | { businessDaily: NULL } /* CHOICE_ALT_ROOT */
    | { continuous: NULL } /* CHOICE_ALT_ROOT */
    | { other: InternationalString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Period: $.ASN1Decoder<Period> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Period
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Period (el: _Element): Period {
    if (!_cached_decoder_for_Period) { _cached_decoder_for_Period = $._decode_inextensible_choice<Period>({
    "CONTEXT 1": [ "unit", $._decode_implicit<IntUnit>(() => _decode_IntUnit) ],
    "CONTEXT 2": [ "businessDaily", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "continuous", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 4": [ "other", $._decode_implicit<InternationalString>(() => _decode_InternationalString) ]
}); }
    return _cached_decoder_for_Period(el);
}

let _cached_encoder_for_Period: $.ASN1Encoder<Period> | null = null;

/**
 * @summary Encodes a(n) Period into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Period, encoded as an ASN.1 Element.
 */
export
function _encode_Period (value: Period, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Period) { _cached_encoder_for_Period = $._encode_choice<Period>({
    "unit": $._encode_implicit(_TagClass.context, 1, () => _encode_IntUnit, $.BER),
    "businessDaily": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "continuous": $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER),
    "other": $._encode_implicit(_TagClass.context, 4, () => _encode_InternationalString, $.BER),
}, $.BER); }
    return _cached_encoder_for_Period(value, elGetter);
}


/* eslint-enable */
