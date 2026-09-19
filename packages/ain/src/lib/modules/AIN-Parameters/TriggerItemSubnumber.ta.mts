/* eslint-disable */
import {
    ASN1Element as _Element,
    IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerItemSubnumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerItemSubnumber  ::=  IA5String(SIZE(1..8))
 * ```
 */
export
type TriggerItemSubnumber = IA5String; // IA5String

let _cached_decoder_for_TriggerItemSubnumber: $.ASN1Decoder<TriggerItemSubnumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerItemSubnumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerItemSubnumber (el: _Element): TriggerItemSubnumber {
    if (!_cached_decoder_for_TriggerItemSubnumber) { _cached_decoder_for_TriggerItemSubnumber = $._decodeIA5String; }
    return _cached_decoder_for_TriggerItemSubnumber(el);
}

let _cached_encoder_for_TriggerItemSubnumber: $.ASN1Encoder<TriggerItemSubnumber> | null = null;

/**
 * @summary Encodes a(n) TriggerItemSubnumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerItemSubnumber, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerItemSubnumber (value: TriggerItemSubnumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerItemSubnumber) { _cached_encoder_for_TriggerItemSubnumber = $._encodeIA5String; }
    return _cached_encoder_for_TriggerItemSubnumber(value, elGetter);
}


/* eslint-enable */
