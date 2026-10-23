/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";
// export { RequestShadowUpdateResult, _decode_RequestShadowUpdateResult, _encode_RequestShadowUpdateResult } from "../DirectoryShadowAbstractService/RequestShadowUpdateResult.ta.mjs";


/**
 * @summary IN_RequestShadowUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RequestShadowUpdateResult  ::= 
 *   RequestShadowUpdateResult(WITH COMPONENTS {
 *                               ...,
 *                               null  PRESENT
 *                             })
 * ```
 */
export
type IN_RequestShadowUpdateResult = RequestShadowUpdateResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RequestShadowUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_RequestShadowUpdateResult: $.ASN1Decoder<IN_RequestShadowUpdateResult> = _decode_RequestShadowUpdateResult;

/**
 * @summary Encodes a(n) IN_RequestShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RequestShadowUpdateResult, encoded as an ASN.1 Element.
 */
export const _encode_IN_RequestShadowUpdateResult: (value: IN_RequestShadowUpdateResult, elGetter: $.ASN1Encoder<any>) => _Element = _encode_RequestShadowUpdateResult;


/* eslint-enable */
