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
 * @summary SetRequest_PDU
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SetRequest-PDU  ::=  [3] IMPLICIT PDU
 * ```
 */
export
type SetRequest_PDU = PDU; // DefinedType

let _cached_decoder_for_SetRequest_PDU: $.ASN1Decoder<SetRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetRequest_PDU
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SetRequest_PDU} The decoded data structure.
 */
export
function _decode_SetRequest_PDU (el: _Element): SetRequest_PDU {
    if (!_cached_decoder_for_SetRequest_PDU) { _cached_decoder_for_SetRequest_PDU = $._decode_implicit<SetRequest_PDU>(() => _decode_PDU); }
    return _cached_decoder_for_SetRequest_PDU(el);
}

let _cached_encoder_for_SetRequest_PDU: $.ASN1Encoder<SetRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) SetRequest_PDU into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_SetRequest_PDU (value: SetRequest_PDU, elGetter: $.ASN1Encoder<SetRequest_PDU>): _Element {
    if (!_cached_encoder_for_SetRequest_PDU) { _cached_encoder_for_SetRequest_PDU = $._encode_implicit(_TagClass.context, 3, () => _encode_PDU, $.BER); }
    return _cached_encoder_for_SetRequest_PDU(value, elGetter);
}


/* eslint-enable */
