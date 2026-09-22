/* eslint-disable */
import {
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../Addressing-Data-Elements/Address.ta.mjs";


/**
 * @summary PresentedAddressUnscreened
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentedAddressUnscreened  ::=  CHOICE {
 *   presentationAllowedAddress           [0] IMPLICIT Address,
 *   presentationRestricted               [1] IMPLICIT NULL,
 *   numberNotAvailableDueTolnterworking  [2] IMPLICIT NULL,
 *   presentationRestrictedAddress        [3] IMPLICIT Address
 * }
 * ```
 */
export
type PresentedAddressUnscreened =
    { presentationAllowedAddress: Address } /* CHOICE_ALT_ROOT */
    | { presentationRestricted: NULL } /* CHOICE_ALT_ROOT */
    | { numberNotAvailableDueTolnterworking: NULL } /* CHOICE_ALT_ROOT */
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
    "CONTEXT 2": [ "numberNotAvailableDueTolnterworking", $._decode_implicit<NULL>(() => $._decodeNull) ],
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
    "numberNotAvailableDueTolnterworking": $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER),
    "presentationRestrictedAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_Address, $.BER),
}, $.BER); }
    return _cached_encoder_for_PresentedAddressUnscreened(value, elGetter);
}


/* eslint-enable */
