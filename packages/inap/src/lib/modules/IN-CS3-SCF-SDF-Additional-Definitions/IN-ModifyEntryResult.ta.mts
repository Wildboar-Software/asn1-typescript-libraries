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

/**
 * @summary Decodes an ASN.1 element into a(n) IN_ModifyEntryResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_ModifyEntryResult: $.ASN1Decoder<IN_ModifyEntryResult> = _decode_ModifyEntryResult;

/**
 * @summary Encodes a(n) IN_ModifyEntryResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_ModifyEntryResult, encoded as an ASN.1 Element.
 */
export const _encode_IN_ModifyEntryResult: $.ASN1Encoder<IN_ModifyEntryResult> = _encode_ModifyEntryResult;


/* eslint-enable */
