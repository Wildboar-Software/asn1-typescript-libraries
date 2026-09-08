/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    NumericName,
    _decode_NumericName,
    _encode_NumericName,
} from "../Q821-ASN1Module/NumericName.ta.mjs";



/**
 * @summary LogRecordId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LogRecordId  ::=  NumericName
 * ```
 */
export
type LogRecordId = NumericName; // DefinedType

let _cached_decoder_for_LogRecordId: $.ASN1Decoder<LogRecordId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LogRecordId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LogRecordId (el: _Element): LogRecordId {
    if (!_cached_decoder_for_LogRecordId) { _cached_decoder_for_LogRecordId = _decode_NumericName; }
    return _cached_decoder_for_LogRecordId(el);
}

let _cached_encoder_for_LogRecordId: $.ASN1Encoder<LogRecordId> | null = null;

/**
 * @summary Encodes a(n) LogRecordId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LogRecordId, encoded as an ASN.1 Element.
 */
export
function _encode_LogRecordId (value: LogRecordId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LogRecordId) { _cached_encoder_for_LogRecordId = _encode_NumericName; }
    return _cached_encoder_for_LogRecordId(value, elGetter);
}


/* eslint-enable */
