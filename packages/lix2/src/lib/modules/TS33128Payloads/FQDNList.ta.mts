/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";


/**
 * @summary FQDNList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FQDNList  ::=  SEQUENCE (SIZE(1..MAX)) OF FQDN
 * ```
 */
export
type FQDNList = FQDN[]; // SequenceOfType

let _cached_decoder_for_FQDNList: $.ASN1Decoder<FQDNList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FQDNList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FQDNList (el: _Element): FQDNList {
    if (!_cached_decoder_for_FQDNList) { _cached_decoder_for_FQDNList = $._decodeSequenceOf<FQDN>(() => _decode_FQDN); }
    return _cached_decoder_for_FQDNList(el);
}

let _cached_encoder_for_FQDNList: $.ASN1Encoder<FQDNList> | null = null;

/**
 * @summary Encodes a(n) FQDNList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FQDNList, encoded as an ASN.1 Element.
 */
export
function _encode_FQDNList (value: FQDNList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FQDNList) { _cached_encoder_for_FQDNList = $._encodeSequenceOf<FQDN>(() => _encode_FQDN, $.BER); }
    return _cached_encoder_for_FQDNList(value, elGetter);
}


/* eslint-enable */
