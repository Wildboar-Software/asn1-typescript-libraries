/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DetailedCivicAddress, _decode_DetailedCivicAddress, _encode_DetailedCivicAddress } from "../UmtsHI2Operations/DetailedCivicAddress.ta.mjs";
// export { DetailedCivicAddress, _decode_DetailedCivicAddress, _encode_DetailedCivicAddress } from "../UmtsHI2Operations/DetailedCivicAddress.ta.mjs";
import { type XmlCivicAddress, _decode_XmlCivicAddress, _encode_XmlCivicAddress } from "../UmtsHI2Operations/XmlCivicAddress.ta.mjs";
// export { XmlCivicAddress, _decode_XmlCivicAddress, _encode_XmlCivicAddress } from "../UmtsHI2Operations/XmlCivicAddress.ta.mjs";


/**
 * @summary CivicAddress
 * @description
 * 
 * Civic location of an H(e)NodeB or a WLAN hotspot, used to enrich the IRI
 * instead of the target's geographical coordinates.
 * 
 * Annex B.3 bases the elements on IETF RFC 4776 or RFC 5139, ISO 3166-1 and ISO
 * 3166-2, ISO 639-1, and UPU SB42-4, and points to TS 33.106 clause 5.11 and TS
 * 33.107 clause 4. Clause 16.3 includes the cell site's civic address when it
 * is known. The value is either a set of detailed elements or XML that conforms
 * to the February 2008 civic-location format of RFC 5139.
 * 
 * 3GPP TS 33.108, annex B.3 and clause 16.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CivicAddress  ::=  CHOICE {
 *     detailedCivicAddress        SET OF DetailedCivicAddress,
 *     xmlCivicAddress                XmlCivicAddress,
 *     ...
 * }
 * ```
 */
export
type CivicAddress =
    { detailedCivicAddress: DetailedCivicAddress[] } /* CHOICE_ALT_ROOT */
    | { xmlCivicAddress: XmlCivicAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_CivicAddress: $.ASN1Decoder<CivicAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CivicAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CivicAddress (el: _Element): CivicAddress {
    if (!_cached_decoder_for_CivicAddress) { _cached_decoder_for_CivicAddress = $._decode_extensible_choice<CivicAddress>({
    "UNIVERSAL 17": [ "detailedCivicAddress", $._decodeSetOf<DetailedCivicAddress>(() => _decode_DetailedCivicAddress) ],
    "UNIVERSAL 12": [ "xmlCivicAddress", _decode_XmlCivicAddress ]
}); }
    return _cached_decoder_for_CivicAddress(el);
}

let _cached_encoder_for_CivicAddress: $.ASN1Encoder<CivicAddress> | null = null;

/**
 * @summary Encodes a(n) CivicAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CivicAddress, encoded as an ASN.1 Element.
 */
export
function _encode_CivicAddress (value: CivicAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CivicAddress) { _cached_encoder_for_CivicAddress = $._encode_choice<CivicAddress>({
    "detailedCivicAddress": $._encodeSetOf<DetailedCivicAddress>(() => _encode_DetailedCivicAddress, $.BER),
    "xmlCivicAddress": _encode_XmlCivicAddress,
}, $.BER); }
    return _cached_encoder_for_CivicAddress(value, elGetter);
}


/* eslint-enable */
