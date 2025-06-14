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

/* START_OF_SYMBOL_DEFINITION DLPolicy_priority */
/**
 * @summary DLPolicy_priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy-priority ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type DLPolicy_priority = INTEGER;
/* END_OF_SYMBOL_DEFINITION DLPolicy_priority */

/* START_OF_SYMBOL_DEFINITION DLPolicy_priority_unchanged */
/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_unchanged: DLPolicy_priority = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_priority_unchanged */

/* START_OF_SYMBOL_DEFINITION unchanged */
/**
 * @summary DLPolicy_priority_unchanged
 * @constant
 * @type {number}
 */
export const unchanged: DLPolicy_priority = DLPolicy_priority_unchanged; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION unchanged */

/* START_OF_SYMBOL_DEFINITION DLPolicy_priority_normal */
/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_normal: DLPolicy_priority = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_priority_normal */

/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary DLPolicy_priority_normal
 * @constant
 * @type {number}
 */
export const normal: DLPolicy_priority = DLPolicy_priority_normal; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION DLPolicy_priority_non_urgent */
/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_non_urgent: DLPolicy_priority = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_priority_non_urgent */

/* START_OF_SYMBOL_DEFINITION non_urgent */
/**
 * @summary DLPolicy_priority_non_urgent
 * @constant
 * @type {number}
 */
export const non_urgent: DLPolicy_priority = DLPolicy_priority_non_urgent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION non_urgent */

/* START_OF_SYMBOL_DEFINITION DLPolicy_priority_urgent */
/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const DLPolicy_priority_urgent: DLPolicy_priority = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION DLPolicy_priority_urgent */

/* START_OF_SYMBOL_DEFINITION urgent */
/**
 * @summary DLPolicy_priority_urgent
 * @constant
 * @type {number}
 */
export const urgent: DLPolicy_priority = DLPolicy_priority_urgent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION urgent */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_priority */
let _cached_decoder_for_DLPolicy_priority: $.ASN1Decoder<DLPolicy_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DLPolicy_priority */

/* START_OF_SYMBOL_DEFINITION _decode_DLPolicy_priority */
/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy_priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy_priority} The decoded data structure.
 */
export function _decode_DLPolicy_priority(el: _Element) {
    if (!_cached_decoder_for_DLPolicy_priority) {
        _cached_decoder_for_DLPolicy_priority = $._decodeInteger;
    }
    return _cached_decoder_for_DLPolicy_priority(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DLPolicy_priority */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_priority */
let _cached_encoder_for_DLPolicy_priority: $.ASN1Encoder<DLPolicy_priority> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DLPolicy_priority */

/* START_OF_SYMBOL_DEFINITION _encode_DLPolicy_priority */
/**
 * @summary Encodes a(n) DLPolicy_priority into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy_priority, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy_priority(
    value: DLPolicy_priority,
    elGetter: $.ASN1Encoder<DLPolicy_priority>
) {
    if (!_cached_encoder_for_DLPolicy_priority) {
        _cached_encoder_for_DLPolicy_priority = $._encodeInteger;
    }
    return _cached_encoder_for_DLPolicy_priority(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DLPolicy_priority */

/* eslint-enable */
