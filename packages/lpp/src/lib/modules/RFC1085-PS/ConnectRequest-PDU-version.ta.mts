/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectRequest_PDU_version
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectRequest-PDU-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ConnectRequest_PDU_version = INTEGER;

/**
 * @summary ConnectRequest_PDU_version_version_1
 * @constant
 * @type {number}
 */
export
const ConnectRequest_PDU_version_version_1: ConnectRequest_PDU_version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ConnectRequest_PDU_version_version_1
 * @constant
 * @type {number}
 */
export
const version_1: ConnectRequest_PDU_version = ConnectRequest_PDU_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ConnectRequest_PDU_version: $.ASN1Decoder<ConnectRequest_PDU_version> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectRequest_PDU_version
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectRequest_PDU_version (el: _Element): ConnectRequest_PDU_version {
    if (!_cached_decoder_for_ConnectRequest_PDU_version) { _cached_decoder_for_ConnectRequest_PDU_version = $._decodeInteger; }
    return _cached_decoder_for_ConnectRequest_PDU_version(el);
}

let _cached_encoder_for_ConnectRequest_PDU_version: $.ASN1Encoder<ConnectRequest_PDU_version> | null = null;

/**
 * @summary Encodes a(n) ConnectRequest_PDU_version into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectRequest_PDU_version, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectRequest_PDU_version (value: ConnectRequest_PDU_version, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectRequest_PDU_version) { _cached_encoder_for_ConnectRequest_PDU_version = $._encodeInteger; }
    return _cached_encoder_for_ConnectRequest_PDU_version(value, elGetter);
}


/* eslint-enable */
