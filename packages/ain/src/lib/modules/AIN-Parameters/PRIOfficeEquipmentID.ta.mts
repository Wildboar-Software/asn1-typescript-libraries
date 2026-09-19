/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PRIOfficeEquipmentID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PRIOfficeEquipmentID  ::=  IA5String(SIZE(1..12))
 * ```
 */
export
type PRIOfficeEquipmentID = IA5String; // IA5String

let _cached_decoder_for_PRIOfficeEquipmentID: $.ASN1Decoder<PRIOfficeEquipmentID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PRIOfficeEquipmentID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PRIOfficeEquipmentID (el: _Element): PRIOfficeEquipmentID {
    if (!_cached_decoder_for_PRIOfficeEquipmentID) { _cached_decoder_for_PRIOfficeEquipmentID = $._decodeIA5String; }
    return _cached_decoder_for_PRIOfficeEquipmentID(el);
}

let _cached_encoder_for_PRIOfficeEquipmentID: $.ASN1Encoder<PRIOfficeEquipmentID> | null = null;

/**
 * @summary Encodes a(n) PRIOfficeEquipmentID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PRIOfficeEquipmentID, encoded as an ASN.1 Element.
 */
export
function _encode_PRIOfficeEquipmentID (value: PRIOfficeEquipmentID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PRIOfficeEquipmentID) { _cached_encoder_for_PRIOfficeEquipmentID = $._encodeIA5String; }
    return _cached_encoder_for_PRIOfficeEquipmentID(value, elGetter);
}


/* eslint-enable */
