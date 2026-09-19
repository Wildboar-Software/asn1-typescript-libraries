/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";
// export { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../PKIX1Explicit88/AlgorithmIdentifier.ta.mjs";


/**
 * @summary TD_DH_PARAMETERS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TD-DH-PARAMETERS  ::=  SEQUENCE OF AlgorithmIdentifier
 * ```
 */
export
type TD_DH_PARAMETERS = AlgorithmIdentifier[]; // SequenceOfType

let _cached_decoder_for_TD_DH_PARAMETERS: $.ASN1Decoder<TD_DH_PARAMETERS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TD_DH_PARAMETERS
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TD_DH_PARAMETERS (el: _Element): TD_DH_PARAMETERS {
    if (!_cached_decoder_for_TD_DH_PARAMETERS) { _cached_decoder_for_TD_DH_PARAMETERS = $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier); }
    return _cached_decoder_for_TD_DH_PARAMETERS(el);
}

let _cached_encoder_for_TD_DH_PARAMETERS: $.ASN1Encoder<TD_DH_PARAMETERS> | null = null;

/**
 * @summary Encodes a(n) TD_DH_PARAMETERS into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TD_DH_PARAMETERS, encoded as an ASN.1 Element.
 */
export
function _encode_TD_DH_PARAMETERS (value: TD_DH_PARAMETERS, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TD_DH_PARAMETERS) { _cached_encoder_for_TD_DH_PARAMETERS = $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER); }
    return _cached_encoder_for_TD_DH_PARAMETERS(value, elGetter);
}


/* eslint-enable */
