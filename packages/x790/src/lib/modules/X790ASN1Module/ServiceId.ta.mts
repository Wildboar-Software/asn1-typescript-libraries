/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type NameType,
    _decode_NameType,
    _encode_NameType,
} from "../X790ASN1Module/NameType.ta.mjs";



/**
 * @summary ServiceId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceId  ::=  NameType
 * ```
 */
export
type ServiceId = NameType; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ServiceId: $.ASN1Decoder<ServiceId> = _decode_NameType;

/**
 * @summary Encodes a(n) ServiceId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceId, encoded as an ASN.1 Element.
 */
export const _encode_ServiceId: $.ASN1Encoder<ServiceId> = _encode_NameType;


/* eslint-enable */
