/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";
// export { PartialRecordType, _enum_for_PartialRecordType, PartialRecordType_timeLimit /* IMPORTED_LONG_ENUMERATION_ITEM */, timeLimit /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_serviceChange /* IMPORTED_LONG_ENUMERATION_ITEM */, serviceChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_locationChange /* IMPORTED_LONG_ENUMERATION_ITEM */, locationChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_classmarkChange /* IMPORTED_LONG_ENUMERATION_ITEM */, classmarkChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_aocParmChange /* IMPORTED_LONG_ENUMERATION_ITEM */, aocParmChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_radioChannelChange /* IMPORTED_LONG_ENUMERATION_ITEM */, radioChannelChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_hSCSDParmChange /* IMPORTED_LONG_ENUMERATION_ITEM */, hSCSDParmChange /* IMPORTED_SHORT_ENUMERATION_ITEM */, PartialRecordType_changeOfCAMELDestination /* IMPORTED_LONG_ENUMERATION_ITEM */, changeOfCAMELDestination /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PartialRecordType, _encode_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary PartialRecordTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialRecordTypes  ::=  SET  OF
 *    PartialRecordType
 * ```
 */
export
type PartialRecordTypes = PartialRecordType[]; // SetOfType

let _cached_decoder_for_PartialRecordTypes: $.ASN1Decoder<PartialRecordTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartialRecordTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartialRecordTypes (el: _Element): PartialRecordTypes {
    if (!_cached_decoder_for_PartialRecordTypes) { _cached_decoder_for_PartialRecordTypes = $._decodeSetOf<PartialRecordType>(() => _decode_PartialRecordType); }
    return _cached_decoder_for_PartialRecordTypes(el);
}

let _cached_encoder_for_PartialRecordTypes: $.ASN1Encoder<PartialRecordTypes> | null = null;

/**
 * @summary Encodes a(n) PartialRecordTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialRecordTypes, encoded as an ASN.1 Element.
 */
export
function _encode_PartialRecordTypes (value: PartialRecordTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartialRecordTypes) { _cached_encoder_for_PartialRecordTypes = $._encodeSetOf<PartialRecordType>(() => _encode_PartialRecordType, $.BER); }
    return _cached_encoder_for_PartialRecordTypes(value, elGetter);
}


/* eslint-enable */
