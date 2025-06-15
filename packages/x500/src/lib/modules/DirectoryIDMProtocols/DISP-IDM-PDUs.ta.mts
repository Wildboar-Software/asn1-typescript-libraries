/* eslint-disable */
import { ASN1Element as _Element } from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    IDM_PDU,
    _decode_IDM_PDU,
    _encode_IDM_PDU,
} from "../IDMProtocolSpecification/IDM-PDU.ta.mjs";
/**
 * @summary DISP_IDM_PDUs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DISP-IDM-PDUs  ::=  IDM-PDU{disp-ip}
 * ```
 */
export type DISP_IDM_PDUs = IDM_PDU; // DefinedType

let _cached_decoder_for_DISP_IDM_PDUs: $.ASN1Decoder<DISP_IDM_PDUs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DISP_IDM_PDUs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DISP_IDM_PDUs} The decoded data structure.
 */
export function _decode_DISP_IDM_PDUs(el: _Element) {
    if (!_cached_decoder_for_DISP_IDM_PDUs) {
        _cached_decoder_for_DISP_IDM_PDUs = _decode_IDM_PDU;
    }
    return _cached_decoder_for_DISP_IDM_PDUs(el);
}

let _cached_encoder_for_DISP_IDM_PDUs: $.ASN1Encoder<DISP_IDM_PDUs> | null = null;

/**
 * @summary Encodes a(n) DISP_IDM_PDUs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DISP_IDM_PDUs, encoded as an ASN.1 Element.
 */
export function _encode_DISP_IDM_PDUs(
    value: DISP_IDM_PDUs,
    elGetter: $.ASN1Encoder<DISP_IDM_PDUs>
) {
    if (!_cached_encoder_for_DISP_IDM_PDUs) {
        _cached_encoder_for_DISP_IDM_PDUs = _encode_IDM_PDU;
    }
    return _cached_encoder_for_DISP_IDM_PDUs(value, elGetter);
}


/* eslint-enable */
