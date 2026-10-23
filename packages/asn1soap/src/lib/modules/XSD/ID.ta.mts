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
import { NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.mjs';

/**
 * @summary ID
 * @description
 *
 * Mapping of XML Schema `xsd:ID` (an NCName).
 * ITU-T Rec. X.694 | ISO/IEC 8825-5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ID  ::=  NCName
 * ```
 */
export type ID = NCName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ID} The decoded data structure.
 */
export const _decode_ID: $.ASN1Decoder<ID> = _decode_NCName;

/**
 * @summary Encodes a(n) ID into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ID, encoded as an ASN.1 Element.
 */
export const _encode_ID: $.ASN1Encoder<ID> = _encode_NCName;


/* eslint-enable */
