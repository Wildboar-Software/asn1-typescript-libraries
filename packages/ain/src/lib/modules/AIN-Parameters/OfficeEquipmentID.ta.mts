/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OfficeEquipmentID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OfficeEquipmentID  ::=  IA5String(SIZE(1..12))
 * ```
 */
export
type OfficeEquipmentID = IA5String; // IA5String

let _cached_decoder_for_OfficeEquipmentID: $.ASN1Decoder<OfficeEquipmentID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OfficeEquipmentID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OfficeEquipmentID (el: _Element): OfficeEquipmentID {
    if (!_cached_decoder_for_OfficeEquipmentID) { _cached_decoder_for_OfficeEquipmentID = $._decodeIA5String; }
    return _cached_decoder_for_OfficeEquipmentID(el);
}

let _cached_encoder_for_OfficeEquipmentID: $.ASN1Encoder<OfficeEquipmentID> | null = null;

/**
 * @summary Encodes a(n) OfficeEquipmentID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OfficeEquipmentID, encoded as an ASN.1 Element.
 */
export
function _encode_OfficeEquipmentID (value: OfficeEquipmentID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OfficeEquipmentID) { _cached_encoder_for_OfficeEquipmentID = $._encodeIA5String; }
    return _cached_encoder_for_OfficeEquipmentID(value, elGetter);
}


/* eslint-enable */
