/* eslint-disable */
import {
  OCTET_STRING,
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

/**
 * @summary LDAPOID
 * @description
 *
 * UTF-8 dotted-decimal `<numericoid>` (RFC 4512), e.g. `1.3.6.1.4.1.1466.1.2.3`.
 * Encoded as OCTET STRING, not ASN.1 OBJECT IDENTIFIER. Short names
 * (`descr`) are not permitted here.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPOID  ::=  OCTET STRING
 * ```
 */
export type LDAPOID = OCTET_STRING; // OctetStringType

/**
 * @summary Decodes an ASN.1 element into a(n) LDAPOID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPOID} The decoded data structure.
 */
export const _decode_LDAPOID: $.ASN1Decoder<LDAPOID> = $._decodeOctetString;

/**
 * @summary Encodes a(n) LDAPOID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPOID, encoded as an ASN.1 Element.
 */
export const _encode_LDAPOID: $.ASN1Encoder<LDAPOID> = $._encodeOctetString;

/* eslint-enable */
