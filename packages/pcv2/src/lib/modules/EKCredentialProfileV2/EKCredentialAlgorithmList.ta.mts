/* eslint-disable */
import {
    ASN1Element as _Element,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EKCredentialAlgorithmList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EKCredentialAlgorithmList  ::=  SEQUENCE OF OBJECT IDENTIFIER
 * ```
 */
export
type EKCredentialAlgorithmList = OBJECT_IDENTIFIER[]; // SequenceOfType

let _cached_decoder_for_EKCredentialAlgorithmList: $.ASN1Decoder<EKCredentialAlgorithmList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EKCredentialAlgorithmList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EKCredentialAlgorithmList (el: _Element): EKCredentialAlgorithmList {
    if (!_cached_decoder_for_EKCredentialAlgorithmList) { _cached_decoder_for_EKCredentialAlgorithmList = $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier); }
    return _cached_decoder_for_EKCredentialAlgorithmList(el);
}

let _cached_encoder_for_EKCredentialAlgorithmList: $.ASN1Encoder<EKCredentialAlgorithmList> | null = null;

/**
 * @summary Encodes a(n) EKCredentialAlgorithmList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EKCredentialAlgorithmList, encoded as an ASN.1 Element.
 */
export
function _encode_EKCredentialAlgorithmList (value: EKCredentialAlgorithmList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EKCredentialAlgorithmList) { _cached_encoder_for_EKCredentialAlgorithmList = $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER); }
    return _cached_encoder_for_EKCredentialAlgorithmList(value, elGetter);
}


/* eslint-enable */
