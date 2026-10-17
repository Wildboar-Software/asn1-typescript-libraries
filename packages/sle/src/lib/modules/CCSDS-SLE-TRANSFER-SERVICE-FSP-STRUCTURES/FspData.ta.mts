/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SpaceLinkDataUnit, _decode_SpaceLinkDataUnit, _encode_SpaceLinkDataUnit } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/SpaceLinkDataUnit.ta.mjs";


/**
 * @summary FspData
 * @description
 * 
 * The Space Packet carried by FSP-TRANSFER-DATA. Annex A types it as a
 * space-link data unit, an octet string of length 1 to 65536. The Packet is
 * destined for the space element. Its version, type, APID, and length are
 * checked as section 3.6.2.18 specifies.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.15 and 3.6.2.18, and annex A2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FspData                  ::=    SpaceLinkDataUnit
 * ```
 */
export
type FspData = SpaceLinkDataUnit; // DefinedType

let _cached_decoder_for_FspData: $.ASN1Decoder<FspData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FspData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FspData (el: _Element): FspData {
    if (!_cached_decoder_for_FspData) { _cached_decoder_for_FspData = _decode_SpaceLinkDataUnit; }
    return _cached_decoder_for_FspData(el);
}

let _cached_encoder_for_FspData: $.ASN1Encoder<FspData> | null = null;

/**
 * @summary Encodes a(n) FspData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FspData, encoded as an ASN.1 Element.
 */
export
function _encode_FspData (value: FspData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FspData) { _cached_encoder_for_FspData = _encode_SpaceLinkDataUnit; }
    return _cached_encoder_for_FspData(value, elGetter);
}


/* eslint-enable */
