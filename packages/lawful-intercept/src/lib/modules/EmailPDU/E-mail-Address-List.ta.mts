/* eslint-disable */
import {
    type ASN1Element as _Element,
    type UTF8String,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary E_mail_Address_List
 * @description
 *
 * Zero to 1023 email addresses, each a UTF-8 string of 0 to 255 characters.
 *
 * Every address is the text intercepted, which may be unqualified. The
 * mediation function does not rewrite it (requirement E.1.4). From version
 * 3.13.1 an address may conform to IETF RFC 6530. On a messaging party
 * identity, this alternative is one or more addresses; IETF RFC 5322, IETF RFC
 * 5321, IETF RFC 3696, and IETF RFC 6530 define the address form.
 *
 * ETSI TS 102 232-2 V3.16.1 (2023-03), clauses 7.2, 7.3, and 8.6.
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223202/03.16.01_60/ts_10223202v031601p.pdf
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
