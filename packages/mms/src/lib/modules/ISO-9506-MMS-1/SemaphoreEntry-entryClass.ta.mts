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
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SemaphoreEntry_entryClass
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SemaphoreEntry-entryClass ::= INTEGER {
 *     simple (0),
 *     modifier (1)
 * } (0..1)
 * ```
 */
export
type SemaphoreEntry_entryClass = INTEGER;

/**
 * @summary SemaphoreEntry_entryClass_simple
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_simple: SemaphoreEntry_entryClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_simple
 * @constant
 * @type {number}
 */
export
const simple: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_modifier: SemaphoreEntry_entryClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @constant
 * @type {number}
 */
export
const modifier: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_modifier; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SemaphoreEntry_entryClass = (el: _Element): SemaphoreEntry_entryClass => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? Number(value) : value;
    if (n < 0 || n > 1) {
        throw new ASN1OverflowError("SemaphoreEntry_entryClass violates INTEGER range constraint");
    }
    return value;
};
export const _encode_SemaphoreEntry_entryClass = $._encodeInteger;


/* eslint-enable */
