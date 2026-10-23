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
import { QName, _decode_QName, _encode_QName } from '../XSD/QName.ta.mjs';

/**
 * @summary NOTATION
 * @description
 *
 * Mapping of XML Schema `xsd:NOTATION` (a QName).
 * ITU-T Rec. X.694 | ISO/IEC 8825-5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NOTATION  ::=  QName
 * ```
 */
export type NOTATION = QName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) NOTATION
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NOTATION} The decoded data structure.
 */
export const _decode_NOTATION: $.ASN1Decoder<NOTATION> = _decode_QName;

/**
 * @summary Encodes a(n) NOTATION into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NOTATION, encoded as an ASN.1 Element.
 */
export const _encode_NOTATION: $.ASN1Encoder<NOTATION> = _encode_QName;


/* eslint-enable */
