/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { GenericAddress, _decode_GenericAddress, _encode_GenericAddress } from "../AIN-Parameters/GenericAddress.ta.mjs";
// export { GenericAddress, _decode_GenericAddress, _encode_GenericAddress } from "../AIN-Parameters/GenericAddress.ta.mjs";


/**
 * @summary GenericAddressList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GenericAddressList  ::=  [107] IMPLICIT SEQUENCE SIZE(1..5) OF GenericAddress
 * ```
 */
export
type GenericAddressList = GenericAddress[]; // SequenceOfType

let _cached_decoder_for_GenericAddressList: $.ASN1Decoder<GenericAddressList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GenericAddressList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GenericAddressList (el: _Element): GenericAddressList {
    if (!_cached_decoder_for_GenericAddressList) { _cached_decoder_for_GenericAddressList = $._decode_implicit<GenericAddressList>(() => $._decodeSequenceOf<GenericAddress>(() => _decode_GenericAddress)); }
    return _cached_decoder_for_GenericAddressList(el);
}

let _cached_encoder_for_GenericAddressList: $.ASN1Encoder<GenericAddressList> | null = null;

/**
 * @summary Encodes a(n) GenericAddressList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GenericAddressList, encoded as an ASN.1 Element.
 */
export
function _encode_GenericAddressList (value: GenericAddressList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GenericAddressList) { _cached_encoder_for_GenericAddressList = $._encode_implicit(_TagClass.context, 107, () => $._encodeSequenceOf<GenericAddress>(() => _encode_GenericAddress, $.BER), $.BER); }
    return _cached_encoder_for_GenericAddressList(value, elGetter);
}


/* eslint-enable */
