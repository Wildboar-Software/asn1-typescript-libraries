/* eslint-disable */
import {
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

// THIS MODULE WAS CREATED MANUALLY.

/* START_OF_SYMBOL_DEFINITION _enum_for_Priority */
/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority ::= [APPLICATION 7]  ENUMERATED {normal(0), non-urgent(1), urgent(2)}
 * ```@enum {number}
 */
export enum _enum_for_Priority {
    normal = 0,
    non_urgent = 1,
    urgent = 2,
}
/* END_OF_SYMBOL_DEFINITION _enum_for_Priority */

/* START_OF_SYMBOL_DEFINITION Priority */
/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority ::= [APPLICATION 7]  ENUMERATED {normal(0), non-urgent(1), urgent(2)}
 * ```@enum {number}
 */
export type Priority = _enum_for_Priority;
/* END_OF_SYMBOL_DEFINITION Priority */

/* START_OF_SYMBOL_DEFINITION Priority_normal */
/**
 * @summary Priority_normal
 * @constant
 * @type {number}
 */
export const Priority_normal: Priority = _enum_for_Priority.normal; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Priority_normal */

/* START_OF_SYMBOL_DEFINITION Priority_non_urgent */
/**
 * @summary Priority_non_urgent
 * @constant
 * @type {number}
 */
export const Priority_non_urgent: Priority = _enum_for_Priority.non_urgent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Priority_non_urgent */

/* START_OF_SYMBOL_DEFINITION Priority_urgent */
/**
 * @summary Priority_urgent
 * @constant
 * @type {number}
 */
export const Priority_urgent: Priority = _enum_for_Priority.urgent; /* LONG_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION Priority_urgent */


/* START_OF_SYMBOL_DEFINITION normal */
/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const normal: Priority = _enum_for_Priority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION normal */

/* START_OF_SYMBOL_DEFINITION non_urgent */
/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const non_urgent: Priority = _enum_for_Priority.non_urgent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION non_urgent */

/* START_OF_SYMBOL_DEFINITION urgent */
/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const urgent: Priority = _enum_for_Priority.urgent; /* SHORT_NAMED_ENUMERATED_VALUE */
/* END_OF_SYMBOL_DEFINITION urgent */



/* START_OF_SYMBOL_DEFINITION _decode_Priority */
/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Priority} The decoded data structure.
 */
 export function _decode_Priority (el: _Element) {
    return $._decodeEnumerated(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Priority */

/* START_OF_SYMBOL_DEFINITION _encode_Priority */
/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export function _encode_Priority(
    value: Priority,
    elGetter: $.ASN1Encoder<Priority>
) {
    return $._encode_implicit(
        _TagClass.application,
        7,
        () => $._encodeEnumerated,
        $.BER,
    )(value, $.BER);
}

/* END_OF_SYMBOL_DEFINITION _encode_Priority */

/* eslint-enable */