/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOtherMessageIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOtherMessageIndication  ::=  BOOLEAN
 * ```
 */
export
type SMSOtherMessageIndication = BOOLEAN; // BooleanType

/**
 * @summary Decodes an ASN.1 element into a(n) SMSOtherMessageIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_SMSOtherMessageIndication = $._decodeBoolean;

/**
 * @summary Encodes a(n) SMSOtherMessageIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSOtherMessageIndication, encoded as an ASN.1 Element.
 */
export const _encode_SMSOtherMessageIndication = $._encodeBoolean;


/* eslint-enable */
