/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { NetworkCapabilityArg_Type, _decode_NetworkCapabilityArg_Type, _encode_NetworkCapabilityArg_Type } from "../IN-CS2-SCF-SCF-ops-args/NetworkCapabilityArg-Type.ta.mjs";
// export { NetworkCapabilityArg_Type, _decode_NetworkCapabilityArg_Type, _encode_NetworkCapabilityArg_Type } from "../IN-CS2-SCF-SCF-ops-args/NetworkCapabilityArg-Type.ta.mjs";


/**
 * @summary NetworkCapabilityArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkCapabilityArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {bearerCapabilities        [0]  BearerCapabilities OPTIONAL,
 *                highLayerCompatibilities  [1]  HighLayerCompatibilities OPTIONAL,
 *                supplementaryServices     [2]  SupplementaryServices OPTIONAL,
 *                securityParameters        [3]  SecurityParameters OPTIONAL,
 *                extensions
 *                  [4]  SEQUENCE OF
 *                         ExtensionField OPTIONAL,
 *                ...}}
 * ```
 */
export
type NetworkCapabilityArg = OPTIONALLY_PROTECTED<NetworkCapabilityArg_Type>; // DefinedType

let _cached_decoder_for_NetworkCapabilityArg: $.ASN1Decoder<NetworkCapabilityArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkCapabilityArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkCapabilityArg (el: _Element): NetworkCapabilityArg {
    if (!_cached_decoder_for_NetworkCapabilityArg) { _cached_decoder_for_NetworkCapabilityArg = _get_decoder_for_OPTIONALLY_PROTECTED<NetworkCapabilityArg_Type>(_decode_NetworkCapabilityArg_Type); }
    return _cached_decoder_for_NetworkCapabilityArg(el);
}

let _cached_encoder_for_NetworkCapabilityArg: $.ASN1Encoder<NetworkCapabilityArg> | null = null;

/**
 * @summary Encodes a(n) NetworkCapabilityArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkCapabilityArg, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkCapabilityArg (value: NetworkCapabilityArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkCapabilityArg) { _cached_encoder_for_NetworkCapabilityArg = _get_encoder_for_OPTIONALLY_PROTECTED<NetworkCapabilityArg_Type>(_encode_NetworkCapabilityArg_Type); }
    return _cached_encoder_for_NetworkCapabilityArg(value, elGetter);
}


/* eslint-enable */
