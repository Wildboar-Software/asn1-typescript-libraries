/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IMSIUnauthenticatedIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IMSIUnauthenticatedIndication  ::=  BOOLEAN
 * ```
 */
export
type IMSIUnauthenticatedIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_IMSIUnauthenticatedIndication: $.ASN1Decoder<IMSIUnauthenticatedIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IMSIUnauthenticatedIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IMSIUnauthenticatedIndication (el: _Element): IMSIUnauthenticatedIndication {
    if (!_cached_decoder_for_IMSIUnauthenticatedIndication) { _cached_decoder_for_IMSIUnauthenticatedIndication = $._decodeBoolean; }
    return _cached_decoder_for_IMSIUnauthenticatedIndication(el);
}

let _cached_encoder_for_IMSIUnauthenticatedIndication: $.ASN1Encoder<IMSIUnauthenticatedIndication> | null = null;

/**
 * @summary Encodes a(n) IMSIUnauthenticatedIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IMSIUnauthenticatedIndication, encoded as an ASN.1 Element.
 */
export
function _encode_IMSIUnauthenticatedIndication (value: IMSIUnauthenticatedIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IMSIUnauthenticatedIndication) { _cached_encoder_for_IMSIUnauthenticatedIndication = $._encodeBoolean; }
    return _cached_encoder_for_IMSIUnauthenticatedIndication(value, elGetter);
}


/* eslint-enable */
