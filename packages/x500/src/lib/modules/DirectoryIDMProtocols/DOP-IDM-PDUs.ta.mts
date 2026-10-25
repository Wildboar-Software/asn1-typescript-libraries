/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "../IDMProtocolSpecification/IDM-PDU.ta.mjs";
/**
 * @summary DOP_IDM_PDUs
 * @description
 *
 * `IDM-PDU{dop-ip}`. Either side may request (unlike OSI DOP).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DOP-IDM-PDUs  ::=  IDM-PDU{dop-ip}
 * ```
 */
export type DOP_IDM_PDUs = IDM_PDU; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DOP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DOP_IDM_PDUs} The decoded data structure.
 */
export const _decode_DOP_IDM_PDUs: $.ASN1Decoder<DOP_IDM_PDUs> = _decode_IDM_PDU;

/**
 * @summary Encodes a(n) DOP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DOP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_DOP_IDM_PDUs: $.ASN1Encoder<DOP_IDM_PDUs> = _encode_IDM_PDU;


/* eslint-enable */
