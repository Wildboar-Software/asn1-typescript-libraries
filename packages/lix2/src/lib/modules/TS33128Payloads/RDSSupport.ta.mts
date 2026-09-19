/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RDSSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RDSSupport  ::=  BOOLEAN
 * ```
 */
export
type RDSSupport = BOOLEAN; // BooleanType

let _cached_decoder_for_RDSSupport: $.ASN1Decoder<RDSSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RDSSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RDSSupport (el: _Element): RDSSupport {
    if (!_cached_decoder_for_RDSSupport) { _cached_decoder_for_RDSSupport = $._decodeBoolean; }
    return _cached_decoder_for_RDSSupport(el);
}

let _cached_encoder_for_RDSSupport: $.ASN1Encoder<RDSSupport> | null = null;

/**
 * @summary Encodes a(n) RDSSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RDSSupport, encoded as an ASN.1 Element.
 */
export
function _encode_RDSSupport (value: RDSSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RDSSupport) { _cached_encoder_for_RDSSupport = $._encodeBoolean; }
    return _cached_encoder_for_RDSSupport(value, elGetter);
}


/* eslint-enable */
