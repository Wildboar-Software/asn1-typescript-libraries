/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSRPMessageReference
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSRPMessageReference  ::=  INTEGER (0..255)
 * ```
 */
export
type SMSRPMessageReference = INTEGER;

let _cached_decoder_for_SMSRPMessageReference: $.ASN1Decoder<SMSRPMessageReference> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSRPMessageReference
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSRPMessageReference (el: _Element): SMSRPMessageReference {
    if (!_cached_decoder_for_SMSRPMessageReference) { _cached_decoder_for_SMSRPMessageReference = $._decodeInteger; }
    return _cached_decoder_for_SMSRPMessageReference(el);
}

let _cached_encoder_for_SMSRPMessageReference: $.ASN1Encoder<SMSRPMessageReference> | null = null;

/**
 * @summary Encodes a(n) SMSRPMessageReference into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSRPMessageReference, encoded as an ASN.1 Element.
 */
export
function _encode_SMSRPMessageReference (value: SMSRPMessageReference, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSRPMessageReference) { _cached_encoder_for_SMSRPMessageReference = $._encodeInteger; }
    return _cached_encoder_for_SMSRPMessageReference(value, elGetter);
}


/* eslint-enable */
