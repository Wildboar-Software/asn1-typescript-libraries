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
  Date_Time,
  _decode_Date_Time,
  _encode_Date_Time,
} from '../CBEFF-DATA-ELEMENTS/Date-Time.ta.mjs';
/**
 * @summary BDBCreationDate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BDBCreationDate  ::=
 *   Date-Time
 * ```
 */
export type BDBCreationDate = Date_Time; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BDBCreationDate
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BDBCreationDate} The decoded data structure.
 */
export const _decode_BDBCreationDate: $.ASN1Decoder<BDBCreationDate> = _decode_Date_Time;

/**
 * @summary Encodes a(n) BDBCreationDate into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BDBCreationDate, encoded as an ASN.1 Element.
 */
export const _encode_BDBCreationDate: $.ASN1Encoder<BDBCreationDate> = _encode_Date_Time;


/* eslint-enable */
