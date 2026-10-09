/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServerPart_updateStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerPart-updateStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ServerPart_updateStatus = INTEGER;

/**
 * @summary ServerPart_updateStatus_success
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_success: ServerPart_updateStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_success
 * @constant
 * @type {number}
 */
export
const success: ServerPart_updateStatus = ServerPart_updateStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_partial: ServerPart_updateStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_partial
 * @constant
 * @type {number}
 */
export
const partial: ServerPart_updateStatus = ServerPart_updateStatus_partial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @constant
 * @type {number}
 */
export
const ServerPart_updateStatus_failure: ServerPart_updateStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServerPart_updateStatus_failure
 * @constant
 * @type {number}
 */
export
const failure: ServerPart_updateStatus = ServerPart_updateStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ServerPart_updateStatus: $.ASN1Decoder<ServerPart_updateStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerPart_updateStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerPart_updateStatus (el: _Element): ServerPart_updateStatus {
    if (!_cached_decoder_for_ServerPart_updateStatus) { _cached_decoder_for_ServerPart_updateStatus = $._decodeInteger; }
    return _cached_decoder_for_ServerPart_updateStatus(el);
}

let _cached_encoder_for_ServerPart_updateStatus: $.ASN1Encoder<ServerPart_updateStatus> | null = null;

/**
 * @summary Encodes a(n) ServerPart_updateStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerPart_updateStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ServerPart_updateStatus (value: ServerPart_updateStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerPart_updateStatus) { _cached_encoder_for_ServerPart_updateStatus = $._encodeInteger; }
    return _cached_encoder_for_ServerPart_updateStatus(value, elGetter);
}


/* eslint-enable */
