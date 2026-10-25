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
    type ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
/**
 * @summary PrimaryObject
 * @description
 *
 * Syntax of the `primaryObject` attribute: name of the managed
 * object in the primary role of a change-over relationship. GET
 * only. ITU-T Rec. X.751 (11/95)
 * [§8.5.1](https://www.itu.int/rec/T-REC-X.751-199511-I), A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryObject  ::=  ObjectInstance
 * ```
 */
export type PrimaryObject = ObjectInstance; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryObject
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryObject} The decoded data structure.
 */
export const _decode_PrimaryObject: $.ASN1Decoder<PrimaryObject> = _decode_ObjectInstance;

/**
 * @summary Encodes a(n) PrimaryObject into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryObject, encoded as an ASN.1 Element.
 */
export const _encode_PrimaryObject: $.ASN1Encoder<PrimaryObject> = _encode_ObjectInstance;


/* eslint-enable */
