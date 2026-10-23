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
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary ThreadId
 * @description
 *
 * Names a thread: one script instance in execution. Subclass of
 * `basicSpawnerClass` and `scriptReferencer`. A launch pad
 * (or another thread, when a script invokes another) spawns it
 * and contains it. Completes only after all sub-threads succeed
 * or report an error; then it is deleted. Async launch pads
 * spawn `suspendableThread` (suspend/resume actions). Threads
 * of a synchronous launch pad are not individually
 * suspendable. ITU-T Rec. X.753 (10/97)
 * [§3.6.3](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §3.6.4, §7.1–§7.2, §8.1.2–§8.1.3, A.4, A.7.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ThreadId  ::=  ObjectInstance
 * ```
 */
export type ThreadId = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ThreadId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ThreadId} The decoded data structure.
 */
export const _decode_ThreadId: $.ASN1Decoder<ThreadId> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) ThreadId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ThreadId, encoded as an ASN.1 Element.
 */
export const _encode_ThreadId: $.ASN1Encoder<ThreadId> = _encode_ObjectInstance;


/* eslint-enable */
