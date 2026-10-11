/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMFMAAcceptedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMFMAAcceptedIndication  ::=  BOOLEAN
 * ```
 */
export
type SMFMAAcceptedIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_SMFMAAcceptedIndication: $.ASN1Decoder<SMFMAAcceptedIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMFMAAcceptedIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMFMAAcceptedIndication (el: _Element): SMFMAAcceptedIndication {
    if (!_cached_decoder_for_SMFMAAcceptedIndication) { _cached_decoder_for_SMFMAAcceptedIndication = $._decodeBoolean; }
    return _cached_decoder_for_SMFMAAcceptedIndication(el);
}

let _cached_encoder_for_SMFMAAcceptedIndication: $.ASN1Encoder<SMFMAAcceptedIndication> | null = null;

/**
 * @summary Encodes a(n) SMFMAAcceptedIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMFMAAcceptedIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SMFMAAcceptedIndication (value: SMFMAAcceptedIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMFMAAcceptedIndication) { _cached_encoder_for_SMFMAAcceptedIndication = $._encodeBoolean; }
    return _cached_encoder_for_SMFMAAcceptedIndication(value, elGetter);
}


/* eslint-enable */
