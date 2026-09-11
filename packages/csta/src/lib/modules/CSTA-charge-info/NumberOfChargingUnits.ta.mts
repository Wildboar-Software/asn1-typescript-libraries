/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    ASN1Element as _Element
} from "@wildboar/asn1";
import { NumberOfChargingUnits_Item, _decode_NumberOfChargingUnits_Item, _encode_NumberOfChargingUnits_Item } from "../CSTA-charge-info/NumberOfChargingUnits-Item.ta.mjs";



/**
 * @summary NumberOfChargingUnits
 * @description
 *
 * Repeated charging-unit counts, possibly of different types. ECMA-269 §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfChargingUnits  ::=  SEQUENCE OF SEQUENCE
 * {     chargingUnits         INTEGER,
 *     typeOfUnits         OCTET STRING     OPTIONAL }
 * ```
 */
export
type NumberOfChargingUnits = NumberOfChargingUnits_Item[]; // SequenceOfType

let _cached_decoder_for_NumberOfChargingUnits: $.ASN1Decoder<NumberOfChargingUnits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfChargingUnits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfChargingUnits (el: _Element): NumberOfChargingUnits {
    if (!_cached_decoder_for_NumberOfChargingUnits) { _cached_decoder_for_NumberOfChargingUnits = $._decodeSequenceOf<NumberOfChargingUnits_Item>(() => _decode_NumberOfChargingUnits_Item); }
    return _cached_decoder_for_NumberOfChargingUnits(el);
}

let _cached_encoder_for_NumberOfChargingUnits: $.ASN1Encoder<NumberOfChargingUnits> | null = null;

/**
 * @summary Encodes a(n) NumberOfChargingUnits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfChargingUnits, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfChargingUnits (value: NumberOfChargingUnits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfChargingUnits) { _cached_encoder_for_NumberOfChargingUnits = $._encodeSequenceOf<NumberOfChargingUnits_Item>(() => _encode_NumberOfChargingUnits_Item, $.BER); }
    return _cached_encoder_for_NumberOfChargingUnits(value, elGetter);
}


/* eslint-enable */
