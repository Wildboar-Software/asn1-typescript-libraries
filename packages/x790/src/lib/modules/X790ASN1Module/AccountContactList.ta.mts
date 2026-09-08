/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PersonReach,
    _decode_PersonReach,
    _encode_PersonReach,
} from "../X790ASN1Module/PersonReach.ta.mjs";



/**
 * @summary AccountContactList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AccountContactList  ::=  SET OF PersonReach
 * ```
 */
export
type AccountContactList = PersonReach[]; // SetOfType

let _cached_decoder_for_AccountContactList: $.ASN1Decoder<AccountContactList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AccountContactList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AccountContactList (el: _Element): AccountContactList {
    if (!_cached_decoder_for_AccountContactList) { _cached_decoder_for_AccountContactList = $._decodeSetOf<PersonReach>(() => _decode_PersonReach); }
    return _cached_decoder_for_AccountContactList(el);
}

let _cached_encoder_for_AccountContactList: $.ASN1Encoder<AccountContactList> | null = null;

/**
 * @summary Encodes a(n) AccountContactList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AccountContactList, encoded as an ASN.1 Element.
 */
export
function _encode_AccountContactList (value: AccountContactList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AccountContactList) { _cached_encoder_for_AccountContactList = $._encodeSetOf<PersonReach>(() => _encode_PersonReach, $.BER); }
    return _cached_encoder_for_AccountContactList(value, elGetter);
}


/* eslint-enable */
