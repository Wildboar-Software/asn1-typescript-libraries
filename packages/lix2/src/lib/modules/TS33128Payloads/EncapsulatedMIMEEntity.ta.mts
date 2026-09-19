/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EncapsulatedMIMEEntity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedMIMEEntity  ::=  UTF8String
 * ```
 */
export
type EncapsulatedMIMEEntity = UTF8String; // UTF8String

let _cached_decoder_for_EncapsulatedMIMEEntity: $.ASN1Decoder<EncapsulatedMIMEEntity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedMIMEEntity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulatedMIMEEntity (el: _Element): EncapsulatedMIMEEntity {
    if (!_cached_decoder_for_EncapsulatedMIMEEntity) { _cached_decoder_for_EncapsulatedMIMEEntity = $._decodeUTF8String; }
    return _cached_decoder_for_EncapsulatedMIMEEntity(el);
}

let _cached_encoder_for_EncapsulatedMIMEEntity: $.ASN1Encoder<EncapsulatedMIMEEntity> | null = null;

/**
 * @summary Encodes a(n) EncapsulatedMIMEEntity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedMIMEEntity, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulatedMIMEEntity (value: EncapsulatedMIMEEntity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulatedMIMEEntity) { _cached_encoder_for_EncapsulatedMIMEEntity = $._encodeUTF8String; }
    return _cached_encoder_for_EncapsulatedMIMEEntity(value, elGetter);
}


/* eslint-enable */
