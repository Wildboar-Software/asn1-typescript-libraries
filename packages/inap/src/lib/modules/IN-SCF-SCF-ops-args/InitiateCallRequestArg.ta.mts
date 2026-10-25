/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { InitiateCallRequestArg_Type, _decode_InitiateCallRequestArg_Type, _encode_InitiateCallRequestArg_Type } from "../IN-SCF-SCF-ops-args/InitiateCallRequestArg-Type.ta.mjs";
// export { InitiateCallRequestArg_Type, _decode_InitiateCallRequestArg_Type, _encode_InitiateCallRequestArg_Type } from "../IN-SCF-SCF-ops-args/InitiateCallRequestArg-Type.ta.mjs";


/**
 * @summary InitiateCallRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallRequestArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {requestedType           [0]  RequestedType OPTIONAL,
 *                destinationRelatedInfo
 *                  [1]  SEQUENCE SIZE (1..2) OF DestinationRelatedInfo
 *                    type OPTIONAL,
 *                securityParameters      [2]  SecurityParameters OPTIONAL,
 *                extensions              [3]  Extensions OPTIONAL,
 *                ...}}
 * ```
 */
export
type InitiateCallRequestArg = OPTIONALLY_PROTECTED<InitiateCallRequestArg_Type>; // DefinedType

let _cached_decoder_for_InitiateCallRequestArg: $.ASN1Decoder<InitiateCallRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallRequestArg (el: _Element): InitiateCallRequestArg {
    if (!_cached_decoder_for_InitiateCallRequestArg) { _cached_decoder_for_InitiateCallRequestArg = _get_decoder_for_OPTIONALLY_PROTECTED<InitiateCallRequestArg_Type>(_decode_InitiateCallRequestArg_Type); }
    return _cached_decoder_for_InitiateCallRequestArg(el);
}

let _cached_encoder_for_InitiateCallRequestArg: $.ASN1Encoder<InitiateCallRequestArg> | null = null;

/**
 * @summary Encodes a(n) InitiateCallRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallRequestArg (value: InitiateCallRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallRequestArg) { _cached_encoder_for_InitiateCallRequestArg = _get_encoder_for_OPTIONALLY_PROTECTED<InitiateCallRequestArg_Type>(_encode_InitiateCallRequestArg_Type); }
    return _cached_encoder_for_InitiateCallRequestArg(value, elGetter);
}


/* eslint-enable */
