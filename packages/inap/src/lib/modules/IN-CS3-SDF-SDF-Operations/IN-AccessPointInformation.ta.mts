/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";
// export { AccessPointInformation, _decode_AccessPointInformation, _encode_AccessPointInformation } from "../DistributedOperations/AccessPointInformation.ta.mjs";


/**
 * @summary IN_AccessPointInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-AccessPointInformation  ::= 
 *   AccessPointInformation(WITH COMPONENTS {
 *                            ...,
 *                            protocolInformation  ABSENT
 *                          })
 * ```
 */
export
type IN_AccessPointInformation = AccessPointInformation; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_AccessPointInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_AccessPointInformation: $.ASN1Decoder<IN_AccessPointInformation> = _decode_AccessPointInformation;

/**
 * @summary Encodes a(n) IN_AccessPointInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_AccessPointInformation, encoded as an ASN.1 Element.
 */
export const _encode_IN_AccessPointInformation: (value: IN_AccessPointInformation, elGetter: $.ASN1Encoder<any>) => _Element = _encode_AccessPointInformation;


/* eslint-enable */
