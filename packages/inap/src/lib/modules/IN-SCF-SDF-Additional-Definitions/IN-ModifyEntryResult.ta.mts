/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ModifyEntryResult, _decode_ModifyEntryResult, _encode_ModifyEntryResult } from "../DirectoryAbstractService/ModifyEntryResult.ta.mjs";
// export { ModifyEntryResult, _decode_ModifyEntryResult, _encode_ModifyEntryResult } from "../DirectoryAbstractService/ModifyEntryResult.ta.mjs";


/**
 * @summary IN_ModifyEntryResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-ModifyEntryResult  ::= 
 *   ModifyEntryResult
 * ```
 */
export
type IN_ModifyEntryResult = ModifyEntryResult; // DefinedType

let _cached_decoder_for_IN_ModifyEntryResult: $.ASN1Decoder<IN_ModifyEntryResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ModifyEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IN_ModifyEntryResult (el: _Element): IN_ModifyEntryResult {
    if (!_cached_decoder_for_IN_ModifyEntryResult) { _cached_decoder_for_IN_ModifyEntryResult = _decode_ModifyEntryResult; }
    return _cached_decoder_for_IN_ModifyEntryResult(el);
}

let _cached_encoder_for_IN_ModifyEntryResult: $.ASN1Encoder<IN_ModifyEntryResult> | null = null;

/**
 * @summary Encodes a(n) IN_ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ModifyEntryResult, encoded as an ASN.1 Element.
 */
export
function _encode_IN_ModifyEntryResult (value: IN_ModifyEntryResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IN_ModifyEntryResult) { _cached_encoder_for_IN_ModifyEntryResult = _encode_ModifyEntryResult; }
    return _cached_encoder_for_IN_ModifyEntryResult(value, elGetter);
}


/* eslint-enable */
