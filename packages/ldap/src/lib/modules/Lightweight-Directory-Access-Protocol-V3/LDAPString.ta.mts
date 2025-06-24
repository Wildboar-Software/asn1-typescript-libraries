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
 * @summary LDAPString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LDAPString  ::=  OCTET STRING
 * ```
 */
export type LDAPString = OCTET_STRING; // OctetStringType


/**
 * @summary Decodes an ASN.1 element into a(n) LDAPString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LDAPString} The decoded data structure.
 */
export const _decode_LDAPString: $.ASN1Decoder<LDAPString> = $._decodeOctetString;


/**
 * @summary Encodes a(n) LDAPString into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LDAPString, encoded as an ASN.1 Element.
 */
export const _encode_LDAPString: $.ASN1Encoder<LDAPString> = $._encodeOctetString;

/* eslint-enable */
