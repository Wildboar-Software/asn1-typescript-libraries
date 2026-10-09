/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ClientPartToKeep_action
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientPartToKeep-action ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ClientPartToKeep_action = INTEGER;

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordInsert: ClientPartToKeep_action = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordInsert
 * @constant
 * @type {number}
 */
export
const recordInsert: ClientPartToKeep_action = ClientPartToKeep_action_recordInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordReplace: ClientPartToKeep_action = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordReplace
 * @constant
 * @type {number}
 */
export
const recordReplace: ClientPartToKeep_action = ClientPartToKeep_action_recordReplace; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_recordDelete: ClientPartToKeep_action = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_recordDelete
 * @constant
 * @type {number}
 */
export
const recordDelete: ClientPartToKeep_action = ClientPartToKeep_action_recordDelete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @constant
 * @type {number}
 */
export
const ClientPartToKeep_action_elementUpdate: ClientPartToKeep_action = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ClientPartToKeep_action_elementUpdate
 * @constant
 * @type {number}
 */
export
const elementUpdate: ClientPartToKeep_action = ClientPartToKeep_action_elementUpdate; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ClientPartToKeep_action: $.ASN1Decoder<ClientPartToKeep_action> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientPartToKeep_action
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientPartToKeep_action (el: _Element): ClientPartToKeep_action {
    if (!_cached_decoder_for_ClientPartToKeep_action) { _cached_decoder_for_ClientPartToKeep_action = $._decodeInteger; }
    return _cached_decoder_for_ClientPartToKeep_action(el);
}

let _cached_encoder_for_ClientPartToKeep_action: $.ASN1Encoder<ClientPartToKeep_action> | null = null;

/**
 * @summary Encodes a(n) ClientPartToKeep_action into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientPartToKeep_action, encoded as an ASN.1 Element.
 */
export
function _encode_ClientPartToKeep_action (value: ClientPartToKeep_action, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientPartToKeep_action) { _cached_encoder_for_ClientPartToKeep_action = $._encodeInteger; }
    return _cached_encoder_for_ClientPartToKeep_action(value, elGetter);
}


/* eslint-enable */
