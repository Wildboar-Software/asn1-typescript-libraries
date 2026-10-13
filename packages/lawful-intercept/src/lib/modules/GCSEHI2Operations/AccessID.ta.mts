/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ReservedTMGI, _decode_ReservedTMGI, _encode_ReservedTMGI } from "../GCSEHI2Operations/ReservedTMGI.ta.mjs";
// export { ReservedTMGI, _decode_ReservedTMGI, _encode_ReservedTMGI } from "../GCSEHI2Operations/ReservedTMGI.ta.mjs";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../HI2Operations/IPAddress.ta.mjs";


/**
 * @summary AccessID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccessID  ::=  CHOICE
 * {
 *         tMGI          [1] ReservedTMGI,
 *         uEIPAddress  [2] IPAddress,     
 *     ...
 * }
 * ```
 */
export
type AccessID =
    { tMGI: ReservedTMGI } /* CHOICE_ALT_ROOT */
    | { uEIPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_AccessID: $.ASN1Decoder<AccessID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccessID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccessID (el: _Element): AccessID {
    if (!_cached_decoder_for_AccessID) { _cached_decoder_for_AccessID = $._decode_extensible_choice<AccessID>({
    "CONTEXT 1": [ "tMGI", $._decode_implicit<ReservedTMGI>(() => _decode_ReservedTMGI) ],
    "CONTEXT 2": [ "uEIPAddress", $._decode_implicit<IPAddress>(() => _decode_IPAddress) ]
}); }
    return _cached_decoder_for_AccessID(el);
}

let _cached_encoder_for_AccessID: $.ASN1Encoder<AccessID> | null = null;

/**
 * @summary Encodes a(n) AccessID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccessID, encoded as an ASN.1 Element.
 */
export
function _encode_AccessID (value: AccessID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccessID) { _cached_encoder_for_AccessID = $._encode_choice<AccessID>({
    "tMGI": $._encode_implicit(_TagClass.context, 1, () => _encode_ReservedTMGI, $.BER),
    "uEIPAddress": $._encode_implicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_AccessID(value, elGetter);
}


/* eslint-enable */
