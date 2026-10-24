/* eslint-disable */
import {
    NULL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements-asn1-97/Address.ta.mjs";

/**
 * @summary PresentedAddressUnscreened
 * @description
 *
 * A party number and optional subaddress, with no screening indicator, together
 * with a presentation instruction (ECMA-165 Annex B Table B.1).
 * `presentationAllowedAddress` carries the number or address and allows
 * presentation. `presentationRestricted` and
 * `numberNotAvailableDueToInterworking` carry no number.
 * `presentationRestrictedAddress` still carries the number or address and
 * indicates that presentation is restricted. Table B.1 does not say which
 * alternative a PINX chooses.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedAddressUnscreened  ::=  CHOICE {
 *     presentationAllowedAddress [0] IMPLICIT Address,
 *     presentationRestricted [1] IMPLICIT NULL,
 *     numberNotAvailableDueToInterworking [2] IMPLICIT NULL,
 *     presentationRestrictedAddress [3] IMPLICIT Address
 * }
 * ```
 */
export
type PresentedAddressUnscreened =
    { presentationAllowedAddress: Address } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueToInterworking: NULL } /* CHOICE_ALT_ROOT */
    | { presentationRestrictedAddress: Address } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PresentedAddressUnscreened: $.ASN1Decoder<PresentedAddressUnscreened> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentedAddressUnscreened
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentedAddressUnscreened (el: _Element): PresentedAddressUnscreened {
    if (!_cached_decoder_for_PresentedAddressUnscreened) { _cached_decoder_for_PresentedAddressUnscreened = $._decode_inextensible_choice<PresentedAddressUnscreened>({
    "CONTEXT 0": [ "presentationAllowedAddress", $._decode_implicit<Address>(() => _decode_Address) ],
    "CONTEXT 1": [ "presentationRestricted", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 2": [ "numberNotAvailableDueToInterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 3": [ "presentationRestrictedAddress", $._decode_implicit<Address>(() => _decode_Address) ]
}); }
    return _cached_decoder_for_PresentedAddressUnscreened(el);
}

let _cached_encoder_for_PresentedAddressUnscreened: $.ASN1Encoder<PresentedAddressUnscreened> | null = null;

/**
 * @summary Encodes a(n) PresentedAddressUnscreened into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentedAddressUnscreened, encoded as an ASN.1 Element.
 */
export
function _encode_PresentedAddressUnscreened (value: PresentedAddressUnscreened, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentedAddressUnscreened) { _cached_encoder_for_PresentedAddressUnscreened = $._encode_choice<PresentedAddressUnscreened>({
    "presentationAllowedAddress": $._encode_implicit(_TagClass.context, 0, () => _encode_Address, $.BER),
    "presentationRestricted": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
    "numberNotAvailableDueToInterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_Address, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedAddressUnscreened(value, elGetter);
}

/* eslint-enable */
