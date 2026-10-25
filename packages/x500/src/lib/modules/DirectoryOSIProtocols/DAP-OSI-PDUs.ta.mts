/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type OSI_PDU,
    _decode_OSI_PDU,
    _encode_OSI_PDU,
} from "../OSIProtocolSpecification/OSI-PDU.ta.mjs";
/**
 * @summary DAP_OSI_PDUs
 * @description
 *
 * `OSI-PDU{directoryAccessAC}`: Bind/Result/Error, operations, Unbind,
 * and presentation abort for DAP. Initiator must wait for BindResult
 * before sending operations. Abort (ARU/ARP) may be sent at any time
 * after Bind. Two concurrent Binds = two associations.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DAP-OSI-PDUs  ::=  OSI-PDU{directoryAccessAC}
 * ```
 */
export type DAP_OSI_PDUs = OSI_PDU; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DAP_OSI_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_OSI_PDUs} The decoded data structure.
 */
export const _decode_DAP_OSI_PDUs: $.ASN1Decoder<DAP_OSI_PDUs> = _decode_OSI_PDU;

/**
 * @summary Encodes a(n) DAP_OSI_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_OSI_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_DAP_OSI_PDUs: $.ASN1Encoder<DAP_OSI_PDUs> = _encode_OSI_PDU;


/* eslint-enable */
