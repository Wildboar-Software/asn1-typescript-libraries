/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDNHandoverIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDNHandoverIndication  ::=  BOOLEAN
 * ```
 */
export
type PDNHandoverIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) PDNHandoverIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_PDNHandoverIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) PDNHandoverIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDNHandoverIndication, encoded as an ASN.1 Element.
 */
export const _encode_PDNHandoverIndication = $._encodeBoolean;


/* eslint-enable */
