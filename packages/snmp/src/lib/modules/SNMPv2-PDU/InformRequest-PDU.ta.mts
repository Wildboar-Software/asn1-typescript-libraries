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
 * @summary InformRequest_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformRequest-PDU  ::=  [6] IMPLICIT PDU
 * ```
 */
export
type InformRequest_PDU = PDU; // DefinedType

let _cached_decoder_for_InformRequest_PDU: $.ASN1Decoder<InformRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InformRequest_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformRequest_PDU} The decoded data structure.
 */
export
function _decode_InformRequest_PDU (el: _Element): InformRequest_PDU {
    if (!_cached_decoder_for_InformRequest_PDU) { _cached_decoder_for_InformRequest_PDU = $._decode_implicit<InformRequest_PDU>(() => _decode_PDU); }
    return _cached_decoder_for_InformRequest_PDU(el);
}

let _cached_encoder_for_InformRequest_PDU: $.ASN1Encoder<InformRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) InformRequest_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_InformRequest_PDU (value: InformRequest_PDU, elGetter: $.ASN1Encoder<InformRequest_PDU>): _Element {
    if (!_cached_encoder_for_InformRequest_PDU) { _cached_encoder_for_InformRequest_PDU = $._encode_implicit(_TagClass.context, 6, () => _encode_PDU, $.BER); }
    return _cached_encoder_for_InformRequest_PDU(value, elGetter);
}


/* eslint-enable */
