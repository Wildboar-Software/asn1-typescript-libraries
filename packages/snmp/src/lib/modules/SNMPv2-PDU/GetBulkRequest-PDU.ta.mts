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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { BulkPDU, _decode_BulkPDU, _encode_BulkPDU } from "../SNMPv2-PDU/BulkPDU.ta.mjs";
/**
 * @summary GetBulkRequest_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GetBulkRequest-PDU  ::=  [5] IMPLICIT BulkPDU
 * ```
 */
export
type GetBulkRequest_PDU = BulkPDU; // DefinedType

let _cached_decoder_for_GetBulkRequest_PDU: $.ASN1Decoder<GetBulkRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetBulkRequest_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {GetBulkRequest_PDU} The decoded data structure.
 */
export
function _decode_GetBulkRequest_PDU (el: _Element) {
    if (!_cached_decoder_for_GetBulkRequest_PDU) { _cached_decoder_for_GetBulkRequest_PDU = $._decode_implicit<GetBulkRequest_PDU>(() => _decode_BulkPDU); }
    return _cached_decoder_for_GetBulkRequest_PDU(el);
}

let _cached_encoder_for_GetBulkRequest_PDU: $.ASN1Encoder<GetBulkRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) GetBulkRequest_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetBulkRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_GetBulkRequest_PDU (value: GetBulkRequest_PDU, elGetter: $.ASN1Encoder<GetBulkRequest_PDU>) {
    if (!_cached_encoder_for_GetBulkRequest_PDU) { _cached_encoder_for_GetBulkRequest_PDU = $._encode_implicit(_TagClass.context, 5, () => _encode_BulkPDU, $.BER); }
    return _cached_encoder_for_GetBulkRequest_PDU(value, elGetter);
}


/* eslint-enable */
