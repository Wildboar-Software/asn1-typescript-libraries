/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UserSpecifiedSubaddress, _decode_UserSpecifiedSubaddress, _encode_UserSpecifiedSubaddress } from "../Addressing-Data-Elements-asn1-97/UserSpecifiedSubaddress.ta.mjs";
import { NSAPSubaddress, _decode_NSAPSubaddress, _encode_NSAPSubaddress } from "../Addressing-Data-Elements-asn1-97/NSAPSubaddress.ta.mjs";

/**
 * @summary PartySubaddress
 * @description
 *
 * Subaddress accompanying a party number (ECMA-165 Annex B Table B.1).
 * `userSpecifiedSubaddress` is not recommended. `nSAPSubaddress` follows ITU-T
 * X.213. ECMA-155 §10, which ECMA-165 relies on for PISN addressing, requires a
 * PINX to accept a subaddress and, in a pure PISN, not to alter it (§10.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartySubaddress  ::=  CHOICE {
 *     userSpecifiedSubaddress UserSpecifiedSubaddress,
 *     -- not recommended.
 *     nSAPSubaddress NSAPSubaddress
 * }
 * ```
 */
export
type PartySubaddress =
    { userSpecifiedSubaddress: UserSpecifiedSubaddress } /* CHOICE_ALT_ROOT */
    | { nSAPSubaddress: NSAPSubaddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PartySubaddress: $.ASN1Decoder<PartySubaddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartySubaddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartySubaddress (el: _Element): PartySubaddress {
    if (!_cached_decoder_for_PartySubaddress) { _cached_decoder_for_PartySubaddress = $._decode_inextensible_choice<PartySubaddress>({
    "UNIVERSAL 16": [ "userSpecifiedSubaddress", _decode_UserSpecifiedSubaddress ],
    "UNIVERSAL 4": [ "nSAPSubaddress", _decode_NSAPSubaddress ]
}); }
    return _cached_decoder_for_PartySubaddress(el);
}

let _cached_encoder_for_PartySubaddress: $.ASN1Encoder<PartySubaddress> | null = null;

/**
 * @summary Encodes a(n) PartySubaddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartySubaddress, encoded as an ASN.1 Element.
 */
export
function _encode_PartySubaddress (value: PartySubaddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartySubaddress) { _cached_encoder_for_PartySubaddress = $._encode_choice<PartySubaddress>({
    "userSpecifiedSubaddress": _encode_UserSpecifiedSubaddress,
    "nSAPSubaddress": _encode_NSAPSubaddress,
}, $.BER); }
    return _cached_encoder_for_PartySubaddress(value, elGetter);
}

/* eslint-enable */
