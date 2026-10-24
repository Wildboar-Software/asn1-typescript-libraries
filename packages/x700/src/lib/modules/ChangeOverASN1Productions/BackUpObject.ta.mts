/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta.mjs';
/**
 * @summary BackUpObject
 * @description
 *
 * Specific-error syntax for `alreadyBackedUp`: names the object
 * already providing back-up (or `noObject` if none). ITU-T Rec.
 * X.751 (11/95)
 * [§8.7.1](https://www.itu.int/rec/T-REC-X.751-199511-I), A.6,
 * Annex B (as corrected by Cor.1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackUpObject  ::=  OptionalObject
 * ```
 */
export type BackUpObject = OptionalObject; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BackUpObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackUpObject} The decoded data structure.
 */
export const _decode_BackUpObject: $.ASN1Decoder<BackUpObject> = _decode_OptionalObject;

/**
 * @summary Encodes a(n) BackUpObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackUpObject, encoded as an ASN.1 Element.
 */
export const _encode_BackUpObject: $.ASN1Encoder<BackUpObject> = _encode_OptionalObject;


/* eslint-enable */
