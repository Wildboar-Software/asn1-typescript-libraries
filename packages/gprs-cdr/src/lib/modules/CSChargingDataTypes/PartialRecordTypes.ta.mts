/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartialRecordType, _decode_PartialRecordType, _encode_PartialRecordType } from "../CSChargingDataTypes/PartialRecordType.ta.mjs";


/**
 * @summary PartialRecordTypes
 * @description
 *
 * This field indicates the event that caused the generation of a partial
 * record.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.64.
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
