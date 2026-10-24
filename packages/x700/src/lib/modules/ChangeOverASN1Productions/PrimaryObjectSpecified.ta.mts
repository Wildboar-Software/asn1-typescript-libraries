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
    type OptionalObject,
    _decode_OptionalObject,
    _encode_OptionalObject,
} from '../ChangeOverASN1Productions/OptionalObject.ta.mjs';
/**
 * @summary PrimaryObjectSpecified
 * @description
 *
 * Specific-error syntax for `changeOverCapabilityAbsent`: the named
 * object lacks the change-over capability needed for back-up
 * control. ITU-T Rec. X.751 (11/95)
 * [§8.7.3](https://www.itu.int/rec/T-REC-X.751-199511-I), A.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PrimaryObjectSpecified  ::=  OptionalObject
 * ```
 */
export type PrimaryObjectSpecified = OptionalObject; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PrimaryObjectSpecified
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PrimaryObjectSpecified} The decoded data structure.
 */
export const _decode_PrimaryObjectSpecified: $.ASN1Decoder<PrimaryObjectSpecified> = _decode_OptionalObject;

/**
 * @summary Encodes a(n) PrimaryObjectSpecified into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrimaryObjectSpecified, encoded as an ASN.1 Element.
 */
export const _encode_PrimaryObjectSpecified: $.ASN1Encoder<PrimaryObjectSpecified> = _encode_OptionalObject;


/* eslint-enable */
