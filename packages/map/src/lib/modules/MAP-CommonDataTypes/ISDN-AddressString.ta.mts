/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_AddressString, _encode_AddressString, AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";



/**
 * @summary ISDN_AddressString
 * @description
 *
 * ISDN number as an `AddressString` constrained to 1..`maxISDN-AddressLength`
 * (9 octets). Same first-octet NAI/NPI layout and TBCD digits as
 * `AddressString`. Used for MSC/HLR/VLR/SGSN numbers, MSISDN, and similar E.164
 * identities.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.2.17).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ISDN-AddressString  ::=  
 *     AddressString (SIZE (1..maxISDN-AddressLength))
 * ```
 */
export
type ISDN_AddressString = AddressString; // DefinedType

let _cached_decoder_for_ISDN_AddressString: $.ASN1Decoder<ISDN_AddressString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ISDN_AddressString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ISDN_AddressString (el: _Element): ISDN_AddressString {
    if (!_cached_decoder_for_ISDN_AddressString) { _cached_decoder_for_ISDN_AddressString = _decode_AddressString; }
    return _cached_decoder_for_ISDN_AddressString(el);
}

let _cached_encoder_for_ISDN_AddressString: $.ASN1Encoder<ISDN_AddressString> | null = null;

/**
 * @summary Encodes a(n) ISDN_AddressString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ISDN_AddressString, encoded as an ASN.1 Element.
 */
export
function _encode_ISDN_AddressString (value: ISDN_AddressString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ISDN_AddressString) { _cached_encoder_for_ISDN_AddressString = _encode_AddressString; }
    return _cached_encoder_for_ISDN_AddressString(value, elGetter);
}


/* eslint-enable */
