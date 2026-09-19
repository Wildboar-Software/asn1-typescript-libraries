/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SutrsRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SutrsRecord  ::=  InternationalString
 * ```
 */
export
type SutrsRecord = InternationalString; // DefinedType

let _cached_decoder_for_SutrsRecord: $.ASN1Decoder<SutrsRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SutrsRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SutrsRecord (el: _Element): SutrsRecord {
    if (!_cached_decoder_for_SutrsRecord) { _cached_decoder_for_SutrsRecord = _decode_InternationalString; }
    return _cached_decoder_for_SutrsRecord(el);
}

let _cached_encoder_for_SutrsRecord: $.ASN1Encoder<SutrsRecord> | null = null;

/**
 * @summary Encodes a(n) SutrsRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SutrsRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SutrsRecord (value: SutrsRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SutrsRecord) { _cached_encoder_for_SutrsRecord = _encode_InternationalString; }
    return _cached_encoder_for_SutrsRecord(value, elGetter);
}


/* eslint-enable */
