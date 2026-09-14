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
 * How the entry was created. `simple` (0) TakeControl; `modifier`
 * (1) AttachToSemaphore on another confirmed service.
 * ISO 9506-1:2003 §16.1.3.2, §16.8.1.2.1.2. ISO 9506-2:2003
 * §16.8.3.
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
 * @description
 *
 * Created by TakeControl (or local action). ISO 9506-1:2003
 * §16.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_simple: SemaphoreEntry_entryClass = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_simple
 * @description
 *
 * Created by TakeControl (or local action). ISO 9506-1:2003
 * §16.1.3.2.
 *
 * @constant
 * @type {number}
 */
export
const simple: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_simple; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @description
 *
 * Created by a confirmed service with AttachToSemaphore in
 * `listOfModifiers`. Control is released when that service
 * finishes. ISO 9506-1:2003 §16.1.3.2, §16.9.
 *
 * @constant
 * @type {number}
 */
export
const SemaphoreEntry_entryClass_modifier: SemaphoreEntry_entryClass = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SemaphoreEntry_entryClass_modifier
 * @description
 *
 * Created by a confirmed service with AttachToSemaphore in
 * `listOfModifiers`. Control is released when that service
 * finishes. ISO 9506-1:2003 §16.1.3.2, §16.9.
 *
 * @constant
 * @type {number}
 */
export
const modifier: SemaphoreEntry_entryClass = SemaphoreEntry_entryClass_modifier; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SemaphoreEntry_entryClass = $._decodeInteger;
export const _encode_SemaphoreEntry_entryClass = $._encodeInteger;


/* eslint-enable */
