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
  EncryptedData,
  _decode_EncryptedData,
  _encode_EncryptedData,
} from '../KerberosV5Spec2/EncryptedData.ta.mjs';

/**
 * @summary PA_ENC_TIMESTAMP
 * @description
 *
 * Encrypted timestamp pre-authentication (`padata-type` 2):
 * `EncryptedData` containing `PA-ENC-TS-ENC`, encrypted with the
 * client's secret key and key usage 1 ([RFC 4120 §5.2.7.2](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.7.2)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PA-ENC-TIMESTAMP         ::=  EncryptedData
 * ```
 */
export type PA_ENC_TIMESTAMP = EncryptedData; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) PA_ENC_TIMESTAMP
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PA_ENC_TIMESTAMP} The decoded data structure.
 */
export const _decode_PA_ENC_TIMESTAMP: $.ASN1Decoder<PA_ENC_TIMESTAMP> = _decode_EncryptedData;

/**
 * @summary Encodes a(n) PA_ENC_TIMESTAMP into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PA_ENC_TIMESTAMP, encoded as an ASN.1 Element.
 */
export const _encode_PA_ENC_TIMESTAMP: $.ASN1Encoder<PA_ENC_TIMESTAMP> = _encode_EncryptedData;


/* eslint-enable */
