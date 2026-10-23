/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "../IDMProtocolSpecification/IDM-PDU.ta.mjs";
/**
 * @summary DAP_IDM_PDUs
 * @description
 *
 * `IDM-PDU{dap-ip}`. DUA-initiated; initiator-only requests. Unbind
 * from initiator only. Unbind is destructive (outstanding results
 * lost). Either side may drop TCP at any time.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DAP-IDM-PDUs  ::=  IDM-PDU{dap-ip}
 * ```
 */
export type DAP_IDM_PDUs = IDM_PDU; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DAP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_IDM_PDUs} The decoded data structure.
 */
export const _decode_DAP_IDM_PDUs: $.ASN1Decoder<DAP_IDM_PDUs> = _decode_IDM_PDU;

/**
 * @summary Encodes a(n) DAP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_DAP_IDM_PDUs: $.ASN1Encoder<DAP_IDM_PDUs> = _encode_IDM_PDU;


/* eslint-enable */
