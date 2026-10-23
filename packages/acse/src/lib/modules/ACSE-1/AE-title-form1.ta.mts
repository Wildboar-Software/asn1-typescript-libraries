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
  Name,
  _decode_Name,
  _encode_Name,
} from '../InformationFramework/Name.ta.mjs';
/**
 * @summary AE_title_form1
 * @description
 *
 * Directory Name of an AE-title. Constructed from AP-title-form1 and
 * AE-qualifier-form1 (X.665 | ISO/IEC 9834-6). Used for Directory
 * access (X.500 series). ITU-T Rec. X.227 bis (1998) §9.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AE-title-form1  ::=
 *   Name
 * ```
 */
export type AE_title_form1 = Name; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) AE_title_form1
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AE_title_form1} The decoded data structure.
 */
export const _decode_AE_title_form1: $.ASN1Decoder<AE_title_form1> = _decode_Name;

/**
 * @summary Encodes a(n) AE_title_form1 into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AE_title_form1, encoded as an ASN.1 Element.
 */
export const _encode_AE_title_form1: $.ASN1Encoder<AE_title_form1> = _encode_Name;


/* eslint-enable */
