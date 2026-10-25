/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { TransferSTSIArg_Type, _decode_TransferSTSIArg_Type, _encode_TransferSTSIArg_Type } from "../IN-SCF-SCF-ops-args/TransferSTSIArg-Type.ta.mjs";
// export { TransferSTSIArg_Type, _decode_TransferSTSIArg_Type, _encode_TransferSTSIArg_Type } from "../IN-SCF-SCF-ops-args/TransferSTSIArg-Type.ta.mjs";


/**
 * @summary TransferSTSIArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransferSTSIArg  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {sSIInfo             SSIInfo,
 *                securityParameters  [2]  SecurityParameters OPTIONAL,
 *                ...,
 *                ...,
 *                extensions          [3]  Extensions OPTIONAL
 *     }}
 * ```
 */
export
type TransferSTSIArg = OPTIONALLY_PROTECTED<TransferSTSIArg_Type>; // DefinedType

let _cached_decoder_for_TransferSTSIArg: $.ASN1Decoder<TransferSTSIArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TransferSTSIArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TransferSTSIArg (el: _Element): TransferSTSIArg {
    if (!_cached_decoder_for_TransferSTSIArg) { _cached_decoder_for_TransferSTSIArg = _get_decoder_for_OPTIONALLY_PROTECTED<TransferSTSIArg_Type>(_decode_TransferSTSIArg_Type); }
    return _cached_decoder_for_TransferSTSIArg(el);
}

let _cached_encoder_for_TransferSTSIArg: $.ASN1Encoder<TransferSTSIArg> | null = null;

/**
 * @summary Encodes a(n) TransferSTSIArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TransferSTSIArg, encoded as an ASN.1 Element.
 */
export
function _encode_TransferSTSIArg (value: TransferSTSIArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TransferSTSIArg) { _cached_encoder_for_TransferSTSIArg = _get_encoder_for_OPTIONALLY_PROTECTED<TransferSTSIArg_Type>(_encode_TransferSTSIArg_Type); }
    return _cached_encoder_for_TransferSTSIArg(value, elGetter);
}


/* eslint-enable */
