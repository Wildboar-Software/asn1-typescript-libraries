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
  AuthorizationData,
  _decode_AuthorizationData,
  _encode_AuthorizationData,
} from '../KerberosV5Spec2/AuthorizationData.ta.mjs';

/**
 * @summary AD_IF_RELEVANT
 * @description
 *
 * Authorization-data wrapper (`ad-type` 1). Encapsulated
 * elements are for application servers that understand them;
 * others MAY ignore them ([RFC 4120 §5.2.6.1](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.6.1)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AD-IF-RELEVANT           ::=  AuthorizationData
 * ```
 */
export type AD_IF_RELEVANT = AuthorizationData; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AD_IF_RELEVANT
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AD_IF_RELEVANT} The decoded data structure.
 */
export const _decode_AD_IF_RELEVANT: $.ASN1Decoder<AD_IF_RELEVANT> = _decode_AuthorizationData;

/**
 * @summary Encodes a(n) AD_IF_RELEVANT into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AD_IF_RELEVANT, encoded as an ASN.1 Element.
 */
export const _encode_AD_IF_RELEVANT: $.ASN1Encoder<AD_IF_RELEVANT> = _encode_AuthorizationData;


/* eslint-enable */
