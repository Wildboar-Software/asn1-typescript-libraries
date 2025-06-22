/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PDU, _decode_PDU, _encode_PDU } from "../SNMPv2-PDU/PDU.ta.mjs";
/**
 * @summary Response_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Response-PDU  ::=  [2] IMPLICIT PDU
 * ```
 */
export
type Response_PDU = PDU; // DefinedType

let _cached_decoder_for_Response_PDU: $.ASN1Decoder<Response_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Response_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Response_PDU} The decoded data structure.
 */
export
function _decode_Response_PDU (el: _Element) {
    if (!_cached_decoder_for_Response_PDU) { _cached_decoder_for_Response_PDU = $._decode_implicit<Response_PDU>(() => _decode_PDU); }
    return _cached_decoder_for_Response_PDU(el);
}

let _cached_encoder_for_Response_PDU: $.ASN1Encoder<Response_PDU> | null = null;

/**
 * @summary Encodes a(n) Response_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Response_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_Response_PDU (value: Response_PDU, elGetter: $.ASN1Encoder<Response_PDU>) {
    if (!_cached_encoder_for_Response_PDU) { _cached_encoder_for_Response_PDU = $._encode_implicit(_TagClass.context, 2, () => _encode_PDU, $.BER); }
    return _cached_encoder_for_Response_PDU(value, elGetter);
}


/* eslint-enable */
