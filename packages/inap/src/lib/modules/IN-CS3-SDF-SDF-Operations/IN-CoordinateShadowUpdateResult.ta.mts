/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CoordinateShadowUpdateResult, _decode_CoordinateShadowUpdateResult, _encode_CoordinateShadowUpdateResult } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta.mjs";
// export { CoordinateShadowUpdateResult, _decode_CoordinateShadowUpdateResult, _encode_CoordinateShadowUpdateResult } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateResult.ta.mjs";


/**
 * @summary IN_CoordinateShadowUpdateResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-CoordinateShadowUpdateResult  ::= 
 *   CoordinateShadowUpdateResult(WITH COMPONENTS {
 *                                  ...,
 *                                  null  PRESENT
 *                                })
 * ```
 */
export
type IN_CoordinateShadowUpdateResult = CoordinateShadowUpdateResult; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_CoordinateShadowUpdateResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_CoordinateShadowUpdateResult: $.ASN1Decoder<IN_CoordinateShadowUpdateResult> = _decode_CoordinateShadowUpdateResult;

/**
 * @summary Encodes a(n) IN_CoordinateShadowUpdateResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_CoordinateShadowUpdateResult, encoded as an ASN.1 Element.
 */
export const _encode_IN_CoordinateShadowUpdateResult: $.ASN1Encoder<IN_CoordinateShadowUpdateResult> = _encode_CoordinateShadowUpdateResult;


/* eslint-enable */
