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
import { type NCName, _decode_NCName, _encode_NCName } from '../XSD/NCName.ta.mjs';

/**
 * @summary ENTITY
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ENTITY  ::=  NCName
 * ```
 */
export type ENTITY = NCName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ENTITY
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ENTITY} The decoded data structure.
 */
export const _decode_ENTITY: $.ASN1Decoder<ENTITY> = _decode_NCName;

/**
 * @summary Encodes a(n) ENTITY into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENTITY, encoded as an ASN.1 Element.
 */
export const _encode_ENTITY: $.ASN1Encoder<ENTITY> = _encode_NCName;


/* eslint-enable */
