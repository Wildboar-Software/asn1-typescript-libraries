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
import { AvailabilityStatus_Item, _decode_AvailabilityStatus_Item, _encode_AvailabilityStatus_Item } from "../Attribute-ASN1Module/AvailabilityStatus-Item.ta.mjs";
/* START_OF_SYMBOL_DEFINITION AvailabilityStatus */
/**
 * @summary AvailabilityStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AvailabilityStatus  ::= 
 *   SET OF
 *     INTEGER {inTest(0), failed(1), powerOff(2), offLine(3), offDuty(4),
 *              dependency(5), degraded(6), notInstalled(7), logFull(8)}
 * ```
 */
export
type AvailabilityStatus = AvailabilityStatus_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION AvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus */
let _cached_decoder_for_AvailabilityStatus: $.ASN1Decoder<AvailabilityStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_AvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) AvailabilityStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailabilityStatus} The decoded data structure.
 */
export
function _decode_AvailabilityStatus (el: _Element) {
    if (!_cached_decoder_for_AvailabilityStatus) { _cached_decoder_for_AvailabilityStatus = $._decodeSetOf<AvailabilityStatus_Item>(() => _decode_AvailabilityStatus_Item); }
    return _cached_decoder_for_AvailabilityStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_AvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus */
let _cached_encoder_for_AvailabilityStatus: $.ASN1Encoder<AvailabilityStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_AvailabilityStatus */

/* START_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus */
/**
 * @summary Encodes a(n) AvailabilityStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailabilityStatus, encoded as an ASN.1 Element.
 */
export
function _encode_AvailabilityStatus (value: AvailabilityStatus, elGetter: $.ASN1Encoder<AvailabilityStatus>) {
    if (!_cached_encoder_for_AvailabilityStatus) { _cached_encoder_for_AvailabilityStatus = $._encodeSetOf<AvailabilityStatus_Item>(() => _encode_AvailabilityStatus_Item, $.BER); }
    return _cached_encoder_for_AvailabilityStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_AvailabilityStatus */

/* eslint-enable */
