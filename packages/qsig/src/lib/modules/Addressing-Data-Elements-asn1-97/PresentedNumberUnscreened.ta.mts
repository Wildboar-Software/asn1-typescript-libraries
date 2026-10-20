/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";


/**
 * @summary PresentedNumberUnscreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedNumberUnscreened  ::=  CHOICE {
 *     presentationAllowedAddress [0] PartyNumber,
 *     presentationRestricted [1] IMPLICIT NULL,
 *     numberNotAvailableDueToInterworking [2] IMPLICIT NULL,
 *     presentationRestrictedAddress [3] PartyNumber
 * }
 * ```
 */
export
type PresentedNumberUnscreened =
    { presentationAllowedAddress: PartyNumber } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueToInterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedAddress: PartyNumber } /* CHOICE_ALT_ROOT */;

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
    "CONTEXT 0": [ "presentationAllowedAddress", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueToInterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedAddress", $._decode_explicit<PartyNumber>(() => _decode_PartyNumber) ]
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
    "presentationAllowedAddress": $._encode_explicit(_TagClass.context, 0, () => _encode_PartyNumber, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueToInterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedAddress": $._encode_explicit(_TagClass.context, 3, () => _encode_PartyNumber, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedNumberUnscreened(value, elGetter);
}


/* eslint-enable */
