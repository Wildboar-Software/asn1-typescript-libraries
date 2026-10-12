/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TxGrantedStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TxGrantedStatus  ::=  BOOLEAN
 * ```
 */
export
type TxGrantedStatus = BOOLEAN; // BooleanType

let _cached_decoder_for_TxGrantedStatus: $.ASN1Decoder<TxGrantedStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TxGrantedStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TxGrantedStatus (el: _Element): TxGrantedStatus {
    if (!_cached_decoder_for_TxGrantedStatus) { _cached_decoder_for_TxGrantedStatus = $._decodeBoolean; }
    return _cached_decoder_for_TxGrantedStatus(el);
}

let _cached_encoder_for_TxGrantedStatus: $.ASN1Encoder<TxGrantedStatus> | null = null;

/**
 * @summary Encodes a(n) TxGrantedStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TxGrantedStatus, encoded as an ASN.1 Element.
 */
export
function _encode_TxGrantedStatus (value: TxGrantedStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TxGrantedStatus) { _cached_encoder_for_TxGrantedStatus = $._encodeBoolean; }
    return _cached_encoder_for_TxGrantedStatus(value, elGetter);
}


/* eslint-enable */
