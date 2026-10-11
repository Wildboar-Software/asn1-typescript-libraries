/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SUPIUnauthenticatedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SUPIUnauthenticatedIndication  ::=  BOOLEAN
 * ```
 */
export
type SUPIUnauthenticatedIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_SUPIUnauthenticatedIndication: $.ASN1Decoder<SUPIUnauthenticatedIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SUPIUnauthenticatedIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SUPIUnauthenticatedIndication (el: _Element): SUPIUnauthenticatedIndication {
    if (!_cached_decoder_for_SUPIUnauthenticatedIndication) { _cached_decoder_for_SUPIUnauthenticatedIndication = $._decodeBoolean; }
    return _cached_decoder_for_SUPIUnauthenticatedIndication(el);
}

let _cached_encoder_for_SUPIUnauthenticatedIndication: $.ASN1Encoder<SUPIUnauthenticatedIndication> | null = null;

/**
 * @summary Encodes a(n) SUPIUnauthenticatedIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SUPIUnauthenticatedIndication, encoded as an ASN.1 Element.
 */
export
function _encode_SUPIUnauthenticatedIndication (value: SUPIUnauthenticatedIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SUPIUnauthenticatedIndication) { _cached_encoder_for_SUPIUnauthenticatedIndication = $._encodeBoolean; }
    return _cached_encoder_for_SUPIUnauthenticatedIndication(value, elGetter);
}


/* eslint-enable */
