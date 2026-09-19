/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EPSPDNConnectionReleaseScopeIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSPDNConnectionReleaseScopeIndication  ::=  BOOLEAN
 * ```
 */
export
type EPSPDNConnectionReleaseScopeIndication = BOOLEAN; // BooleanType

let _cached_decoder_for_EPSPDNConnectionReleaseScopeIndication: $.ASN1Decoder<EPSPDNConnectionReleaseScopeIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSPDNConnectionReleaseScopeIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSPDNConnectionReleaseScopeIndication (el: _Element): EPSPDNConnectionReleaseScopeIndication {
    if (!_cached_decoder_for_EPSPDNConnectionReleaseScopeIndication) { _cached_decoder_for_EPSPDNConnectionReleaseScopeIndication = $._decodeBoolean; }
    return _cached_decoder_for_EPSPDNConnectionReleaseScopeIndication(el);
}

let _cached_encoder_for_EPSPDNConnectionReleaseScopeIndication: $.ASN1Encoder<EPSPDNConnectionReleaseScopeIndication> | null = null;

/**
 * @summary Encodes a(n) EPSPDNConnectionReleaseScopeIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSPDNConnectionReleaseScopeIndication, encoded as an ASN.1 Element.
 */
export
function _encode_EPSPDNConnectionReleaseScopeIndication (value: EPSPDNConnectionReleaseScopeIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSPDNConnectionReleaseScopeIndication) { _cached_encoder_for_EPSPDNConnectionReleaseScopeIndication = $._encodeBoolean; }
    return _cached_encoder_for_EPSPDNConnectionReleaseScopeIndication(value, elGetter);
}


/* eslint-enable */
