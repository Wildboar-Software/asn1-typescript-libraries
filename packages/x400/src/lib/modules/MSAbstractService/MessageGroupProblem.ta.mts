/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem */
/**
 * @summary MessageGroupProblem
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageGroupProblem  ::=  INTEGER {
 *   name-not-registered(0), name-already-registered(1), parent-not-registered(2),
 *   group-not-empty(3), name-in-use(4), child-group-registered(5),
 *   group-depth-exceeded(6)}(0..ub-error-reasons)
 * ```
 */
export type MessageGroupProblem = INTEGER;
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_name_not_registered */
/**
 * @summary MessageGroupProblem_name_not_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_not_registered: MessageGroupProblem = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_name_not_registered */

/* START_OF_SYMBOL_DEFINITION name_not_registered */
/**
 * @summary MessageGroupProblem_name_not_registered
 * @constant
 * @type {number}
 */
export const name_not_registered: MessageGroupProblem = MessageGroupProblem_name_not_registered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION name_not_registered */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_name_already_registered */
/**
 * @summary MessageGroupProblem_name_already_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_already_registered: MessageGroupProblem = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_name_already_registered */

/* START_OF_SYMBOL_DEFINITION name_already_registered */
/**
 * @summary MessageGroupProblem_name_already_registered
 * @constant
 * @type {number}
 */
export const name_already_registered: MessageGroupProblem = MessageGroupProblem_name_already_registered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION name_already_registered */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_parent_not_registered */
/**
 * @summary MessageGroupProblem_parent_not_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_parent_not_registered: MessageGroupProblem = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_parent_not_registered */

/* START_OF_SYMBOL_DEFINITION parent_not_registered */
/**
 * @summary MessageGroupProblem_parent_not_registered
 * @constant
 * @type {number}
 */
export const parent_not_registered: MessageGroupProblem = MessageGroupProblem_parent_not_registered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION parent_not_registered */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_group_not_empty */
/**
 * @summary MessageGroupProblem_group_not_empty
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_group_not_empty: MessageGroupProblem = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_group_not_empty */

/* START_OF_SYMBOL_DEFINITION group_not_empty */
/**
 * @summary MessageGroupProblem_group_not_empty
 * @constant
 * @type {number}
 */
export const group_not_empty: MessageGroupProblem = MessageGroupProblem_group_not_empty; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION group_not_empty */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_name_in_use */
/**
 * @summary MessageGroupProblem_name_in_use
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_name_in_use: MessageGroupProblem = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_name_in_use */

/* START_OF_SYMBOL_DEFINITION name_in_use */
/**
 * @summary MessageGroupProblem_name_in_use
 * @constant
 * @type {number}
 */
export const name_in_use: MessageGroupProblem = MessageGroupProblem_name_in_use; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION name_in_use */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_child_group_registered */
/**
 * @summary MessageGroupProblem_child_group_registered
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_child_group_registered: MessageGroupProblem = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_child_group_registered */

/* START_OF_SYMBOL_DEFINITION child_group_registered */
/**
 * @summary MessageGroupProblem_child_group_registered
 * @constant
 * @type {number}
 */
export const child_group_registered: MessageGroupProblem = MessageGroupProblem_child_group_registered; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION child_group_registered */

/* START_OF_SYMBOL_DEFINITION MessageGroupProblem_group_depth_exceeded */
/**
 * @summary MessageGroupProblem_group_depth_exceeded
 * @constant
 * @type {number}
 */
export const MessageGroupProblem_group_depth_exceeded: MessageGroupProblem = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION MessageGroupProblem_group_depth_exceeded */

/* START_OF_SYMBOL_DEFINITION group_depth_exceeded */
/**
 * @summary MessageGroupProblem_group_depth_exceeded
 * @constant
 * @type {number}
 */
export const group_depth_exceeded: MessageGroupProblem = MessageGroupProblem_group_depth_exceeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION group_depth_exceeded */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupProblem */
let _cached_decoder_for_MessageGroupProblem: $.ASN1Decoder<MessageGroupProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MessageGroupProblem */

/* START_OF_SYMBOL_DEFINITION _decode_MessageGroupProblem */
/**
 * @summary Decodes an ASN.1 element into a(n) MessageGroupProblem
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MessageGroupProblem} The decoded data structure.
 */
export function _decode_MessageGroupProblem(el: _Element) {
    if (!_cached_decoder_for_MessageGroupProblem) {
        _cached_decoder_for_MessageGroupProblem = $._decodeInteger;
    }
    return _cached_decoder_for_MessageGroupProblem(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MessageGroupProblem */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupProblem */
let _cached_encoder_for_MessageGroupProblem: $.ASN1Encoder<MessageGroupProblem> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MessageGroupProblem */

/* START_OF_SYMBOL_DEFINITION _encode_MessageGroupProblem */
/**
 * @summary Encodes a(n) MessageGroupProblem into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MessageGroupProblem, encoded as an ASN.1 Element.
 */
export function _encode_MessageGroupProblem(
    value: MessageGroupProblem,
    elGetter: $.ASN1Encoder<MessageGroupProblem>
) {
    if (!_cached_encoder_for_MessageGroupProblem) {
        _cached_encoder_for_MessageGroupProblem = $._encodeInteger;
    }
    return _cached_encoder_for_MessageGroupProblem(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MessageGroupProblem */

/* eslint-enable */
