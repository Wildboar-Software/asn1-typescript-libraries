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
  ValidationPolicy,
  _decode_ValidationPolicy,
  _encode_ValidationPolicy,
} from '../SCVP-2009/ValidationPolicy.ta.mjs';
/**
 * @summary RespValidationPolicy
 * @description
 *
 * Validation policy echoed in `CVResponse` (`RespValidationPolicy`
 * is `ValidationPolicy`) ([RFC 5055 §4.5](https://datatracker.ietf.org/doc/html/rfc5055#section-4.5)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RespValidationPolicy  ::=  ValidationPolicy
 * ```
 */
export type RespValidationPolicy = ValidationPolicy; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RespValidationPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RespValidationPolicy} The decoded data structure.
 */
export const _decode_RespValidationPolicy: $.ASN1Decoder<RespValidationPolicy> = _decode_ValidationPolicy;

/**
 * @summary Encodes a(n) RespValidationPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RespValidationPolicy, encoded as an ASN.1 Element.
 */
export const _encode_RespValidationPolicy: $.ASN1Encoder<RespValidationPolicy> = _encode_ValidationPolicy;


/* eslint-enable */
