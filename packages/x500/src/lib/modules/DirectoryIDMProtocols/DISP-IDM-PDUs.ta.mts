/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    type IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "../IDMProtocolSpecification/IDM-PDU.ta.mjs";
/**
 * @summary DISP_IDM_PDUs
 * @description
 *
 * `IDM-PDU{disp-ip}`. All three DISP ops on one association. Either
 * side may request or Unbind.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DISP-IDM-PDUs  ::=  IDM-PDU{disp-ip}
 * ```
 */
export type DISP_IDM_PDUs = IDM_PDU; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) DISP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DISP_IDM_PDUs} The decoded data structure.
 */
export const _decode_DISP_IDM_PDUs: $.ASN1Decoder<DISP_IDM_PDUs> = _decode_IDM_PDU;

/**
 * @summary Encodes a(n) DISP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DISP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export const _encode_DISP_IDM_PDUs: $.ASN1Encoder<DISP_IDM_PDUs> = _encode_IDM_PDU;


/* eslint-enable */
