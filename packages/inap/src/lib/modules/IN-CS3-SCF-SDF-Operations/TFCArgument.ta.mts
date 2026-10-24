/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
// export { OPTIONALLY_PROTECTED, _get_decoder_for_OPTIONALLY_PROTECTED, _get_encoder_for_OPTIONALLY_PROTECTED } from "../EnhancedSecurity/OPTIONALLY-PROTECTED.ta.mjs";
import { TFCArgument_Type, _decode_TFCArgument_Type, _encode_TFCArgument_Type } from "../IN-CS3-SCF-SDF-Operations/TFCArgument-Type.ta.mjs";
// export { TFCArgument_Type, _decode_TFCArgument_Type, _encode_TFCArgument_Type } from "../IN-CS3-SCF-SDF-Operations/TFCArgument-Type.ta.mjs";


/**
 * @summary TFCArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TFCArgument  ::= 
 *   OPTIONALLY-PROTECTED
 *     {SEQUENCE {tfcCriteria  [0]  TFCcriteria,
 *                duration     [1] IMPLICIT Duration,
 *                controlType  [2] IMPLICIT ControlType,
 *                security     [3] IMPLICIT SecurityParameters,
 *                wasChained   [4] IMPLICIT BOOLEAN DEFAULT FALSE,
 *                ...,
 *                ...}}
 * ```
 */
export
type TFCArgument = OPTIONALLY_PROTECTED<TFCArgument_Type>; // DefinedType

let _cached_decoder_for_TFCArgument: $.ASN1Decoder<TFCArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TFCArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TFCArgument (el: _Element): TFCArgument {
    if (!_cached_decoder_for_TFCArgument) { _cached_decoder_for_TFCArgument = _get_decoder_for_OPTIONALLY_PROTECTED<TFCArgument_Type>(_decode_TFCArgument_Type); }
    return _cached_decoder_for_TFCArgument(el);
}

let _cached_encoder_for_TFCArgument: $.ASN1Encoder<TFCArgument> | null = null;

/**
 * @summary Encodes a(n) TFCArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TFCArgument, encoded as an ASN.1 Element.
 */
export
function _encode_TFCArgument (value: TFCArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TFCArgument) { _cached_encoder_for_TFCArgument = _get_encoder_for_OPTIONALLY_PROTECTED<TFCArgument_Type>(_encode_TFCArgument_Type); }
    return _cached_encoder_for_TFCArgument(value, elGetter);
}


/* eslint-enable */
