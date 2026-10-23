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
import { Name, _decode_Name, _encode_Name } from '../XSD/Name.ta.mjs';

/**
 * @summary NCName
 * @description
 *
 * Mapping of XML Schema `xsd:NCName`: a Name with no colon
 * (W3C XML Namespaces, clause 2). Local part of {@link QName}.
 * ITU-T Rec. X.694 | ISO/IEC 8825-5. X.892 Annex A.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NCName  ::=  Name
 *     (CONSTRAINED BY {
 *                  / * The Name shall be an NCName as defined in W3C XML Namespaces, 2 * / } )
 * ```
 */
export type NCName = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NCName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NCName} The decoded data structure.
 */
export const _decode_NCName: $.ASN1Decoder<NCName> = _decode_Name;

/**
 * @summary Encodes a(n) NCName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NCName, encoded as an ASN.1 Element.
 */
export const _encode_NCName: $.ASN1Encoder<NCName> = _encode_Name;


/* eslint-enable */
