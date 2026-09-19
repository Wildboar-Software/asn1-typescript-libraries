/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSOtherMessageIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSOtherMessageIndication  ::=  BOOLEAN
 * ```
 */
export
type SMSOtherMessageIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_SMSOtherMessageIndication: $.ASN1Decoder<SMSOtherMessageIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSOtherMessageIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSOtherMessageIndication (el: _Element): SMSOtherMessageIndication {
    if (!_cached_decoder_for_SMSOtherMessageIndication) { _cached_decoder_for_SMSOtherMessageIndication = $._decodeBoolean; }
    return _cached_decoder_for_SMSOtherMessageIndication(el);
}

let _cached_encoder_for_SMSOtherMessageIndication: $.ASN1Encoder<SMSOtherMessageIndication> | null = null;

/**
 * @summary Encodes a(n) SMSOtherMessageIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSOtherMessageIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SMSOtherMessageIndication (value: SMSOtherMessageIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSOtherMessageIndication) { _cached_encoder_for_SMSOtherMessageIndication = $._encodeBoolean; }
    return _cached_encoder_for_SMSOtherMessageIndication(value, elGetter);
}


/* eslint-enable */
