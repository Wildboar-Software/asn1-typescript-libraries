/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CoordinateShadowUpdateArgument, _decode_CoordinateShadowUpdateArgument, _encode_CoordinateShadowUpdateArgument } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta.mjs";
// export { CoordinateShadowUpdateArgument, _decode_CoordinateShadowUpdateArgument, _encode_CoordinateShadowUpdateArgument } from "../DirectoryShadowAbstractService/CoordinateShadowUpdateArgument.ta.mjs";


/**
 * @summary IN_CoordinateShadowUpdateArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-CoordinateShadowUpdateArgument  ::= 
 *   CoordinateShadowUpdateArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          updateStrategy  (standard:total | standard:incremental)
 *                        })
 *      })
 * ```
 */
export
type IN_CoordinateShadowUpdateArgument = CoordinateShadowUpdateArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_CoordinateShadowUpdateArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_CoordinateShadowUpdateArgument: $.ASN1Decoder<IN_CoordinateShadowUpdateArgument> = _decode_CoordinateShadowUpdateArgument;

/**
 * @summary Encodes a(n) IN_CoordinateShadowUpdateArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_CoordinateShadowUpdateArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_CoordinateShadowUpdateArgument: $.ASN1Encoder<IN_CoordinateShadowUpdateArgument> = _encode_CoordinateShadowUpdateArgument;


/* eslint-enable */
