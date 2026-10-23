/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";
// export { AccessPoint, _decode_AccessPoint, _encode_AccessPoint } from "../DistributedOperations/AccessPoint.ta.mjs";


/**
 * @summary IN_AccessPoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IN-AccessPoint  ::= 
 *   AccessPoint(WITH COMPONENTS {
 *                 ...,
 *                 protocolInformation  ABSENT
 *               })
 * ```
 */
export
type IN_AccessPoint = AccessPoint; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) IN_AccessPoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_IN_AccessPoint: $.ASN1Decoder<IN_AccessPoint> = _decode_AccessPoint;

/**
 * @summary Encodes a(n) IN_AccessPoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IN_AccessPoint, encoded as an ASN.1 Element.
 */
export const _encode_IN_AccessPoint: (value: IN_AccessPoint, elGetter: $.ASN1Encoder<any>) => _Element = _encode_AccessPoint;


/* eslint-enable */
