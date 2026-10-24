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
  type AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_MANDATORY_FOR_KDC
 * @description
 *
 * Authorization-data wrapper (`ad-type` 8). Encapsulated
 * elements MUST be interpreted by the KDC; unknown embedded
 * types cause the KDC to reject the request ([RFC 4120 §5.2.6.4](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.6.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-MANDATORY-FOR-KDC     ::=  AuthorizationData
 * ```
 */
export type AD_MANDATORY_FOR_KDC = AuthorizationData; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AD_MANDATORY_FOR_KDC
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_MANDATORY_FOR_KDC} The decoded data structure.
 */
export const _decode_AD_MANDATORY_FOR_KDC: $.ASN1Decoder<AD_MANDATORY_FOR_KDC> = _decode_AuthorizationData;

/**
 * @summary Encodes a(n) AD_MANDATORY_FOR_KDC into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_MANDATORY_FOR_KDC, encoded as an ASN.1 Element.
 */
export const _encode_AD_MANDATORY_FOR_KDC: $.ASN1Encoder<AD_MANDATORY_FOR_KDC> = _encode_AuthorizationData;


/* eslint-enable */
