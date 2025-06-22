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
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DAP-IDM-PDUs  ::=  IDM-PDU{dap-ip}
 * ```
 */
export type DAP_IDM_PDUs = IDM_PDU; // DefinedType

let _cached_decoder_for_DAP_IDM_PDUs: $.ASN1Decoder<DAP_IDM_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DAP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DAP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DAP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DAP_IDM_PDUs) {
        _cached_decoder_for_DAP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DAP_IDM_PDUs(el);
}

let _cached_encoder_for_DAP_IDM_PDUs: $.ASN1Encoder<DAP_IDM_PDUs> | null = null;

/**
 * @summary Encodes a(n) DAP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DAP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DAP_IDM_PDUs(
    value: DAP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DAP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DAP_IDM_PDUs) {
        _cached_encoder_for_DAP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DAP_IDM_PDUs(value, elGetter);
}


/* eslint-enable */
