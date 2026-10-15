/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { VcOrMapId, _decode_VcOrMapId, _encode_VcOrMapId } from "../CCSDS-SLE-TRANSFER-SERVICE-FSP-STRUCTURES/VcOrMapId.ta.mjs";


/**
 * @summary MapId
 * @description
 * 
 * Multiplexer Access Point identifier. Annex A types it as an integer from 0 to
 * 63, the same range as a virtual-channel identifier. The book defines MAP by
 * reference to CCSDS 232.0-B-3 and does not further define the numbering.
 * 
 * CCSDS 912.3-B-3, section 1.6.1.4 and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MapId                    ::=    VcOrMapId
 * ```
 */
export
type MapId = VcOrMapId; // DefinedType

let _cached_decoder_for_MapId: $.ASN1Decoder<MapId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MapId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MapId (el: _Element): MapId {
    if (!_cached_decoder_for_MapId) { _cached_decoder_for_MapId = _decode_VcOrMapId; }
    return _cached_decoder_for_MapId(el);
}

let _cached_encoder_for_MapId: $.ASN1Encoder<MapId> | null = null;

/**
 * @summary Encodes a(n) MapId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MapId, encoded as an ASN.1 Element.
 */
export
function _encode_MapId (value: MapId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MapId) { _cached_encoder_for_MapId = _encode_VcOrMapId; }
    return _cached_encoder_for_MapId(value, elGetter);
}


/* eslint-enable */
