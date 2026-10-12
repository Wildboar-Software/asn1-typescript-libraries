/* eslint-disable */
import {
    ASN1Element as _Element,
    UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_mail_Address_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * E-mail-Address-List  ::=  SEQUENCE (SIZE (0..1023)) OF UTF8String(SIZE (0..255))
 * ```
 */
export
type E_mail_Address_List = UTF8String[]; // SequenceOfType

let _cached_decoder_for_E_mail_Address_List: $.ASN1Decoder<E_mail_Address_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) E_mail_Address_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_E_mail_Address_List (el: _Element): E_mail_Address_List {
    if (!_cached_decoder_for_E_mail_Address_List) { _cached_decoder_for_E_mail_Address_List = $._decodeSequenceOf<UTF8String>(() => $._decodeUTF8String); }
    const _value = _cached_decoder_for_E_mail_Address_List(el);
    if (_value.length > 1023) {
        throw new ASN1SizeError("E_mail_Address_List violates SIZE constraint");
    }
    for (const _item of _value) {
        if (_item.length > 255) {
            throw new ASN1SizeError("E_mail_Address_List element violates SIZE constraint");
        }
    }
    return _value;
}

let _cached_encoder_for_E_mail_Address_List: $.ASN1Encoder<E_mail_Address_List> | null = null;

/**
 * @summary Encodes a(n) E_mail_Address_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The E_mail_Address_List, encoded as an ASN.1 Element.
 */
export
function _encode_E_mail_Address_List (value: E_mail_Address_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_E_mail_Address_List) { _cached_encoder_for_E_mail_Address_List = $._encodeSequenceOf<UTF8String>(() => $._encodeUTF8String, $.BER); }
    return _cached_encoder_for_E_mail_Address_List(value, elGetter);
}


/* eslint-enable */
