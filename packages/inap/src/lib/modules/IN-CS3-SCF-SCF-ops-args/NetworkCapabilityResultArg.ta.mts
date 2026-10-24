/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { NetworkCapabilityResultArg_Type, _decode_NetworkCapabilityResultArg_Type, _encode_NetworkCapabilityResultArg_Type } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityResultArg-Type.ta.mjs";
// export { NetworkCapabilityResultArg_Type, _decode_NetworkCapabilityResultArg_Type, _encode_NetworkCapabilityResultArg_Type } from "../IN-CS3-SCF-SCF-ops-args/NetworkCapabilityResultArg-Type.ta.mjs";


/**
 * @summary NetworkCapabilityResultArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapabilityResultArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {bearerCapabilities        [0]  BearerCapabilities OPTIONAL,
 *                highLayerCompatibilities  [1]  HighLayerCompatibilities OPTIONAL,
 *                supplementaryServices     [2]  SupplementaryServices OPTIONAL,
 *                securityParameters        [3]  SecurityParameters OPTIONAL,
 *                extensions                [4]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type NetworkCapabilityResultArg = OPTIONALLY_PROTECTED<NetworkCapabilityResultArg_Type>; // DefinedType

let _cached_decoder_for_NetworkCapabilityResultArg: $.ASN1Decoder<NetworkCapabilityResultArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapabilityResultArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapabilityResultArg (el: _Element): NetworkCapabilityResultArg {
    if (!_cached_decoder_for_NetworkCapabilityResultArg) { _cached_decoder_for_NetworkCapabilityResultArg = _get_decoder_for_OPTIONALLY_PROTECTED<NetworkCapabilityResultArg_Type>(_decode_NetworkCapabilityResultArg_Type); }
    return _cached_decoder_for_NetworkCapabilityResultArg(el);
}

let _cached_encoder_for_NetworkCapabilityResultArg: $.ASN1Encoder<NetworkCapabilityResultArg> | null = null;

/**
 * @summary Encodes a(n) NetworkCapabilityResultArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapabilityResultArg, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapabilityResultArg (value: NetworkCapabilityResultArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapabilityResultArg) { _cached_encoder_for_NetworkCapabilityResultArg = _get_encoder_for_OPTIONALLY_PROTECTED<NetworkCapabilityResultArg_Type>(_encode_NetworkCapabilityResultArg_Type); }
    return _cached_encoder_for_NetworkCapabilityResultArg(value, elGetter);
}


/* eslint-enable */
