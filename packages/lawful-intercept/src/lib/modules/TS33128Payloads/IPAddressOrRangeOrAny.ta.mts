/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { IPMask, _decode_IPMask, _encode_IPMask } from "../TS33128Payloads/IPMask.ta.mjs";
// export { IPMask, _decode_IPMask, _encode_IPMask } from "../TS33128Payloads/IPMask.ta.mjs";
import { AnyIPAddress, _decode_AnyIPAddress, _encode_AnyIPAddress } from "../TS33128Payloads/AnyIPAddress.ta.mjs";
// export { AnyIPAddress, _enum_for_AnyIPAddress, AnyIPAddress_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AnyIPAddress, _encode_AnyIPAddress } from "../TS33128Payloads/AnyIPAddress.ta.mjs";


/**
 * @summary IPAddressOrRangeOrAny
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddressOrRangeOrAny  ::=  CHOICE
 * {
 *     iPAddress      [1] IPAddress,
 *     ipAddressRange [2] IPMask,
 *     anyIPAddress   [3] AnyIPAddress
 * }
 * ```
 */
export
type IPAddressOrRangeOrAny =
    /**
     * @description
     *
     * Indicates the conditional destination IPv4 address or destination IPv6
     * address field in the PDU header to the destination IP address of the
     * intercepted SIP message (see ETSI TS 103 221-2 [8] clause 5.3). (3GPP TS
     * 33.128, clause 7.12.4.3.4.)
     */
    { iPAddress: IPAddress } /* CHOICE_ALT_ROOT */
    | { ipAddressRange: IPMask } /* CHOICE_ALT_ROOT */
    | { anyIPAddress: AnyIPAddress } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IPAddressOrRangeOrAny: $.ASN1Decoder<IPAddressOrRangeOrAny> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddressOrRangeOrAny
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddressOrRangeOrAny (el: _Element): IPAddressOrRangeOrAny {
    if (!_cached_decoder_for_IPAddressOrRangeOrAny) { _cached_decoder_for_IPAddressOrRangeOrAny = $._decode_extensible_choice<IPAddressOrRangeOrAny>({
    "CONTEXT 1": [ "iPAddress", $._decode_explicit<IPAddress>(() => _decode_IPAddress) ],
    "CONTEXT 2": [ "ipAddressRange", $._decode_implicit<IPMask>(() => _decode_IPMask) ],
    "CONTEXT 3": [ "anyIPAddress", $._decode_implicit<AnyIPAddress>(() => _decode_AnyIPAddress) ]
}); }
    return _cached_decoder_for_IPAddressOrRangeOrAny(el);
}

let _cached_encoder_for_IPAddressOrRangeOrAny: $.ASN1Encoder<IPAddressOrRangeOrAny> | null = null;

/**
 * @summary Encodes a(n) IPAddressOrRangeOrAny into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddressOrRangeOrAny, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddressOrRangeOrAny (value: IPAddressOrRangeOrAny, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddressOrRangeOrAny) { _cached_encoder_for_IPAddressOrRangeOrAny = $._encode_choice<IPAddressOrRangeOrAny>({
    "iPAddress": $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER),
    "ipAddressRange": $._encode_implicit(_TagClass.context, 2, () => _encode_IPMask, $.BER),
    "anyIPAddress": $._encode_implicit(_TagClass.context, 3, () => _encode_AnyIPAddress, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPAddressOrRangeOrAny(value, elGetter);
}


/* eslint-enable */
