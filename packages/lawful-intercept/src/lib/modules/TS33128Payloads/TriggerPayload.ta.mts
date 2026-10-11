/* eslint-disable */
import {
    ASN1Element as _Element,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerPayload
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerPayload  ::=  OCTET STRING
 * ```
 */
export
type TriggerPayload = OCTET_STRING; // OctetStringType

let _cached_decoder_for_TriggerPayload: $.ASN1Decoder<TriggerPayload> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerPayload
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerPayload (el: _Element): TriggerPayload {
    if (!_cached_decoder_for_TriggerPayload) { _cached_decoder_for_TriggerPayload = $._decodeOctetString; }
    return _cached_decoder_for_TriggerPayload(el);
}

let _cached_encoder_for_TriggerPayload: $.ASN1Encoder<TriggerPayload> | null = null;

/**
 * @summary Encodes a(n) TriggerPayload into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerPayload, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerPayload (value: TriggerPayload, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerPayload) { _cached_encoder_for_TriggerPayload = $._encodeOctetString; }
    return _cached_encoder_for_TriggerPayload(value, elGetter);
}


/* eslint-enable */
