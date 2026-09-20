/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DiameterIdentity, _decode_DiameterIdentity, _encode_DiameterIdentity } from "../MAP-CommonDataTypes/DiameterIdentity.ta.mjs";
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary ServingNodeAddress
 * @description
 *
 * MSC, SGSN or MME number (3GPP TS 29.002 V19.1.0 clause 17.7.13).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingNodeAddress  ::=  CHOICE {
 *     msc-Number    [0] ISDN-AddressString,
 *     sgsn-Number    [1] ISDN-AddressString,
 *     mme-Number    [2] DiameterIdentity }
 * ```
 */
export
type ServingNodeAddress =
    { msc_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { sgsn_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { mme_Number: DiameterIdentity } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ServingNodeAddress: $.ASN1Decoder<ServingNodeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServingNodeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServingNodeAddress (el: _Element): ServingNodeAddress {
    if (!_cached_decoder_for_ServingNodeAddress) { _cached_decoder_for_ServingNodeAddress = $._decode_inextensible_choice<ServingNodeAddress>({
    "CONTEXT 0": [ "msc_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ],
    "CONTEXT 1": [ "sgsn_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ],
    "CONTEXT 2": [ "mme_Number", $._decode_implicit<DiameterIdentity>(() => _decode_DiameterIdentity) ]
}); }
    return _cached_decoder_for_ServingNodeAddress(el);
}

let _cached_encoder_for_ServingNodeAddress: $.ASN1Encoder<ServingNodeAddress> | null = null;

/**
 * @summary Encodes a(n) ServingNodeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServingNodeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ServingNodeAddress (value: ServingNodeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServingNodeAddress) { _cached_encoder_for_ServingNodeAddress = $._encode_choice<ServingNodeAddress>({
    "msc_Number": $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER),
    "sgsn_Number": $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER),
    "mme_Number": $._encode_implicit(_TagClass.context, 2, () => _encode_DiameterIdentity, $.BER),
}, $.BER); }
    return _cached_encoder_for_ServingNodeAddress(value, elGetter);
}


/* eslint-enable */
