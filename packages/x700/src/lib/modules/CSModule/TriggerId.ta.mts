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
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary TriggerId
 * @description
 *
 * Identifies the trigger that started script execution (action,
 * scheduler, notification, or local action). Carried in the
 * trigger, suspend, resume, and terminate actions and in
 * result notifications. Terminate action information is this
 * type alone. ITU-T Rec. X.753 (10/97)
 * [§3.6.8](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §7.2, §8.3, §9.4, A.4, A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TriggerId  ::=  ObjectInstance
 * ```
 */
export type TriggerId = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TriggerId} The decoded data structure.
 */
export const _decode_TriggerId: $.ASN1Decoder<TriggerId> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) TriggerId into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerId, encoded as an ASN.1 Element.
 */
export const _encode_TriggerId: $.ASN1Encoder<TriggerId> = _encode_ObjectInstance;


/* eslint-enable */
