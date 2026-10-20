/* eslint-disable */
import {
    OCTET_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPBinV6AddressWithPrefixLength, _decode_IPBinV6AddressWithPrefixLength, _encode_IPBinV6AddressWithPrefixLength } from "../GPRSChargingDataTypes/IPBinV6AddressWithPrefixLength.ta.mjs";
// export { IPBinV6AddressWithPrefixLength, _decode_IPBinV6AddressWithPrefixLength, _encode_IPBinV6AddressWithPrefixLength } from "../GPRSChargingDataTypes/IPBinV6AddressWithPrefixLength.ta.mjs";


/**
 * @summary IPBinV6AddressWithOrWithoutPrefixLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV6AddressWithOrWithoutPrefixLength  ::=  CHOICE {
 *    iPBinV6Address               [1] IMPLICIT OCTET STRING ( SIZE( 16 ) ),
 *    iPBinV6AddressWithPrefix     [4] IMPLICIT IPBinV6AddressWithPrefixLength}
 * ```
 */
export
type IPBinV6AddressWithOrWithoutPrefixLength =
    { iPBinV6Address: OCTET_STRING } /* CHOICE_ALT_ROOT */
    | { iPBinV6AddressWithPrefix: IPBinV6AddressWithPrefixLength } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_IPBinV6AddressWithOrWithoutPrefixLength: $.ASN1Decoder<IPBinV6AddressWithOrWithoutPrefixLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPBinV6AddressWithOrWithoutPrefixLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPBinV6AddressWithOrWithoutPrefixLength (el: _Element): IPBinV6AddressWithOrWithoutPrefixLength {
    if (!_cached_decoder_for_IPBinV6AddressWithOrWithoutPrefixLength) { _cached_decoder_for_IPBinV6AddressWithOrWithoutPrefixLength = $._decode_inextensible_choice<IPBinV6AddressWithOrWithoutPrefixLength>({
    "CONTEXT 1": [ "iPBinV6Address", $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString) ],
    "CONTEXT 4": [ "iPBinV6AddressWithPrefix", $._decode_implicit<IPBinV6AddressWithPrefixLength>(() => _decode_IPBinV6AddressWithPrefixLength) ]
}); }
    return _cached_decoder_for_IPBinV6AddressWithOrWithoutPrefixLength(el);
}

let _cached_encoder_for_IPBinV6AddressWithOrWithoutPrefixLength: $.ASN1Encoder<IPBinV6AddressWithOrWithoutPrefixLength> | null = null;

/**
 * @summary Encodes a(n) IPBinV6AddressWithOrWithoutPrefixLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPBinV6AddressWithOrWithoutPrefixLength, encoded as an ASN.1 Element.
 */
export
function _encode_IPBinV6AddressWithOrWithoutPrefixLength (value: IPBinV6AddressWithOrWithoutPrefixLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPBinV6AddressWithOrWithoutPrefixLength) { _cached_encoder_for_IPBinV6AddressWithOrWithoutPrefixLength = $._encode_choice<IPBinV6AddressWithOrWithoutPrefixLength>({
    "iPBinV6Address": $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER),
    "iPBinV6AddressWithPrefix": $._encode_implicit(_TagClass.context, 4, () => _encode_IPBinV6AddressWithPrefixLength, $.BER),
}, $.BER); }
    return _cached_encoder_for_IPBinV6AddressWithOrWithoutPrefixLength(value, elGetter);
}


/* eslint-enable */
