/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";
// export { RefreshInformation, _decode_RefreshInformation, _encode_RefreshInformation } from "../DirectoryShadowAbstractService/RefreshInformation.ta.mjs";


/**
 * @summary IN_RefreshInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-RefreshInformation  ::= 
 *   RefreshInformation(WITH COMPONENTS {
 *                        ...,
 *                        otherStrategy  ABSENT
 *                      })
 * ```
 */
export
type IN_RefreshInformation = RefreshInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_RefreshInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_RefreshInformation: $.ASN1Decoder<IN_RefreshInformation> = _decode_RefreshInformation;

/**
 * @summary Encodes a(n) IN_RefreshInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_RefreshInformation, encoded as an ASN.1 Element.
 */
export const _encode_IN_RefreshInformation: (value: IN_RefreshInformation, elGetter: $.ASN1Encoder<any>) => _Element = _encode_RefreshInformation;


/* eslint-enable */
