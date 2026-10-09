/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartNotToKeep_replaceOrAppend
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartNotToKeep-replaceOrAppend ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ClientPartNotToKeep_replaceOrAppend = INTEGER;

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_replace
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_replace: ClientPartNotToKeep_replaceOrAppend = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_replace
 * @constant
 * @type {number}
 */
export
const replace: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_replace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @constant
 * @type {number}
 */
export
const ClientPartNotToKeep_replaceOrAppend_append: ClientPartNotToKeep_replaceOrAppend = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartNotToKeep_replaceOrAppend_append
 * @constant
 * @type {number}
 */
export
const append: ClientPartNotToKeep_replaceOrAppend = ClientPartNotToKeep_replaceOrAppend_append; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ClientPartNotToKeep_replaceOrAppend: $.ASN1Decoder<ClientPartNotToKeep_replaceOrAppend> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartNotToKeep_replaceOrAppend
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartNotToKeep_replaceOrAppend (el: _Element): ClientPartNotToKeep_replaceOrAppend {
    if (!_cached_decoder_for_ClientPartNotToKeep_replaceOrAppend) { _cached_decoder_for_ClientPartNotToKeep_replaceOrAppend = $._decodeInteger; }
    return _cached_decoder_for_ClientPartNotToKeep_replaceOrAppend(el);
}

let _cached_encoder_for_ClientPartNotToKeep_replaceOrAppend: $.ASN1Encoder<ClientPartNotToKeep_replaceOrAppend> | null = null;

/**
 * @summary Encodes a(n) ClientPartNotToKeep_replaceOrAppend into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartNotToKeep_replaceOrAppend, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartNotToKeep_replaceOrAppend (value: ClientPartNotToKeep_replaceOrAppend, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartNotToKeep_replaceOrAppend) { _cached_encoder_for_ClientPartNotToKeep_replaceOrAppend = $._encodeInteger; }
    return _cached_encoder_for_ClientPartNotToKeep_replaceOrAppend(value, elGetter);
}


/* eslint-enable */
