/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NumberScreened, _decode_NumberScreened, _encode_NumberScreened } from "../Addressing-Data-Elements-asn1-97/NumberScreened.ta.mjs";

/**
 * @summary PresentedNumberScreened
 * @description
 *
 * A screened party number, without a subaddress, together with a presentation
 * instruction (ECMA-165 Annex B Table B.1). `presentationAllowedAddress`
 * carries the number or address and allows presentation.
 * `presentationRestricted` and `numberNotAvailableDueToInterworking` carry no
 * number. `presentationRestrictedAddress` still carries the number or address
 * and indicates that presentation is restricted. Table B.1 does not say which
 * alternative a PINX chooses.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedNumberScreened  ::=  CHOICE {
 *     presentationAllowedAddress [0] IMPLICIT NumberScreened,
 *     presentationRestricted [1] IMPLICIT NULL,
 *     numberNotAvailableDueToInterworking [2] IMPLICIT NULL,
 *     presentationRestrictedAddress [3] IMPLICIT NumberScreened
 * }
 * ```
 */
export
type PresentedNumberScreened =
    { presentationAllowedAddress: NumberScreened } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueToInterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedAddress: NumberScreened } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "presentationAllowedAddress", $._decode_implicit<NumberScreened>(() => _decode_NumberScreened) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueToInterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedAddress", $._decode_implicit<NumberScreened>(() => _decode_NumberScreened) ]
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
    "presentationAllowedAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_NumberScreened, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueToInterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_NumberScreened, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedNumberScreened(value, elGetter);
}

/* eslint-enable */
