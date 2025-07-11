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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';

// THIS MODULE WAS CREATED MANUALLY.

/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority ::= [APPLICATION 7]  ENUMERATED {normal(0), non-urgent(1), urgent(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Priority {
    normal = 0,
    non_urgent = 1,
    urgent = 2,
}

/**
 * @summary Priority
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority ::= [APPLICATION 7]  ENUMERATED {normal(0), non-urgent(1), urgent(2)}
 * ```
 *
 * @enum {number}
 */
export type Priority = _enum_for_Priority;

/**
 * @summary Priority_normal
 * @constant
 * @type {number}
 */
export const Priority_normal: Priority = _enum_for_Priority.normal; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_non_urgent
 * @constant
 * @type {number}
 */
export const Priority_non_urgent: Priority = _enum_for_Priority.non_urgent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary Priority_urgent
 * @constant
 * @type {number}
 */
export const Priority_urgent: Priority = _enum_for_Priority.urgent; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const normal: Priority = _enum_for_Priority.normal; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const non_urgent: Priority = _enum_for_Priority.non_urgent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary normal
 * @constant
 * @type {number}
 */
 export const urgent: Priority = _enum_for_Priority.urgent; /* SHORT_NAMED_ENUMERATED_VALUE */



/**
 * @summary Decodes an ASN.1 element into a(n) Priority
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Priority} The decoded data structure.
 */
 export function _decode_Priority (el: _Element): Priority {
    return $._decodeEnumerated(el);
}

/**
 * @summary Encodes a(n) Priority into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Priority, encoded as an ASN.1 Element.
 */
export function _encode_Priority(
    value: Priority,
    elGetter: $.ASN1Encoder<Priority>
): _Element {
    return $._encode_implicit(
        _TagClass.application,
        7,
        () => $._encodeEnumerated,
        $.BER,
    )(value, elGetter);
}


/* eslint-enable */
