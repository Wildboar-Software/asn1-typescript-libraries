/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type IPBinaryAddress, _decode_IPBinaryAddress, _encode_IPBinaryAddress } from "../IMSChargingDataTypes/IPBinaryAddress.ta.mjs";
import { type IPTextRepresentedAddress, _decode_IPTextRepresentedAddress, _encode_IPTextRepresentedAddress } from "../IMSChargingDataTypes/IPTextRepresentedAddress.ta.mjs";


/**
 * @summary ServedPartyIPAddress
 * @description
 *
 * IP address of the calling or called party, depending on whether the
 * P-CSCF is in contact with the calling or the called side (clause
 * 6.3.1.2). Only the P-CSCF CDR carries this field.
 *
 * 3GPP TS 32.260 V20.1.0 clause 6.3.1.2.
 *
 * This field contains the IP address of either the calling or called party,
 * depending on whether the P-CSCF is in touch with the calling or called
 * network.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.3.1.53.
 *
 * @see https://www.3gpp.org/DynaReport/32260.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServedPartyIPAddress  ::=  CHOICE {
 *    iPBinaryAddress              IPBinaryAddress,
 *    iPTextRepresentedAddress     IPTextRepresentedAddress}
 * ```
 */
export
type ServedPartyIPAddress =
    { iPBinaryAddress: IPBinaryAddress } /* CHOICE_ALT_ROOT */
    | { iPTextRepresentedAddress: IPTextRepresentedAddress } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServedPartyIPAddress: $.ASN1Decoder<ServedPartyIPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServedPartyIPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServedPartyIPAddress (el: _Element): ServedPartyIPAddress {
    if (!_cached_decoder_for_ServedPartyIPAddress) { _cached_decoder_for_ServedPartyIPAddress = $._decode_inextensible_choice<ServedPartyIPAddress>({
    "CONTEXT 0": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 1": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 4": [ "iPBinaryAddress", _decode_IPBinaryAddress ],
    "CONTEXT 2": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ],
    "CONTEXT 3": [ "iPTextRepresentedAddress", _decode_IPTextRepresentedAddress ]
}); }
    return _cached_decoder_for_ServedPartyIPAddress(el);
}

let _cached_encoder_for_ServedPartyIPAddress: $.ASN1Encoder<ServedPartyIPAddress> | null = null;

/**
 * @summary Encodes a(n) ServedPartyIPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServedPartyIPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ServedPartyIPAddress (value: ServedPartyIPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServedPartyIPAddress) { _cached_encoder_for_ServedPartyIPAddress = $._encode_choice<ServedPartyIPAddress>({
    "iPBinaryAddress": _encode_IPBinaryAddress,
    "iPTextRepresentedAddress": _encode_IPTextRepresentedAddress,
}, $.BER); }
    return _cached_encoder_for_ServedPartyIPAddress(value, elGetter);
}


/* eslint-enable */
