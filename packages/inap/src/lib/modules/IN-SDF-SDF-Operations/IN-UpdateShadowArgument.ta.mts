/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { UpdateShadowArgument, _decode_UpdateShadowArgument, _encode_UpdateShadowArgument } from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta.mjs";
// export { UpdateShadowArgument, _decode_UpdateShadowArgument, _encode_UpdateShadowArgument } from "../DirectoryShadowAbstractService/UpdateShadowArgument.ta.mjs";


/**
 * @summary IN_UpdateShadowArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-UpdateShadowArgument  ::= 
 *   UpdateShadowArgument
 *     (WITH COMPONENTS {
 *        ...,
 *        toBeProtected  (WITH COMPONENTS {
 *                          ...,
 *                          updatedInfo  (IN-RefreshInformation)
 *                        })
 *      })
 * ```
 */
export
type IN_UpdateShadowArgument = UpdateShadowArgument; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_UpdateShadowArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_UpdateShadowArgument: $.ASN1Decoder<IN_UpdateShadowArgument> = _decode_UpdateShadowArgument;

/**
 * @summary Encodes a(n) IN_UpdateShadowArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_UpdateShadowArgument, encoded as an ASN.1 Element.
 */
export const _encode_IN_UpdateShadowArgument: (value: IN_UpdateShadowArgument, elGetter: $.ASN1Encoder<any>) => _Element = _encode_UpdateShadowArgument;


/* eslint-enable */
