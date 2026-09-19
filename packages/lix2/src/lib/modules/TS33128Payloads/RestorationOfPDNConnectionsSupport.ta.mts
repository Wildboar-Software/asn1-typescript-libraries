/* eslint-disable */
import {
    ASN1Element as _Element,
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RestorationOfPDNConnectionsSupport
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RestorationOfPDNConnectionsSupport  ::=  BOOLEAN
 * ```
 */
export
type RestorationOfPDNConnectionsSupport = BOOLEAN; // BooleanType

let _cached_decoder_for_RestorationOfPDNConnectionsSupport: $.ASN1Decoder<RestorationOfPDNConnectionsSupport> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RestorationOfPDNConnectionsSupport
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RestorationOfPDNConnectionsSupport (el: _Element): RestorationOfPDNConnectionsSupport {
    if (!_cached_decoder_for_RestorationOfPDNConnectionsSupport) { _cached_decoder_for_RestorationOfPDNConnectionsSupport = $._decodeBoolean; }
    return _cached_decoder_for_RestorationOfPDNConnectionsSupport(el);
}

let _cached_encoder_for_RestorationOfPDNConnectionsSupport: $.ASN1Encoder<RestorationOfPDNConnectionsSupport> | null = null;

/**
 * @summary Encodes a(n) RestorationOfPDNConnectionsSupport into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RestorationOfPDNConnectionsSupport, encoded as an ASN.1 Element.
 */
export
function _encode_RestorationOfPDNConnectionsSupport (value: RestorationOfPDNConnectionsSupport, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RestorationOfPDNConnectionsSupport) { _cached_encoder_for_RestorationOfPDNConnectionsSupport = $._encodeBoolean; }
    return _cached_encoder_for_RestorationOfPDNConnectionsSupport(value, elGetter);
}


/* eslint-enable */
