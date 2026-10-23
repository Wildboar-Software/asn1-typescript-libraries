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
  SignedInt,
  _decode_SignedInt,
  _encode_SignedInt,
} from '../BIP/SignedInt.ta.mjs';

/**
 * @summary BioAPI_DB_HANDLE
 * @description
 *
 * BSP database handle. C `BioAPI_DB_INVALID_HANDLE` is −1;
 * `BioAPI_DB_DEFAULT_HANDLE` is 0. X.1083 adds no further PDU
 * semantics.
 *
 * ITU-T Rec. X.1083 (11/2007)
 * [§15.26](https://www.itu.int/rec/T-REC-X.1083-200711-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BioAPI-DB-HANDLE  ::=  SignedInt
 * ```
 */
export type BioAPI_DB_HANDLE = SignedInt; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) BioAPI_DB_HANDLE
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BioAPI_DB_HANDLE} The decoded data structure.
 */
export const _decode_BioAPI_DB_HANDLE: $.ASN1Decoder<BioAPI_DB_HANDLE> = _decode_SignedInt;

/**
 * @summary Encodes a(n) BioAPI_DB_HANDLE into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BioAPI_DB_HANDLE, encoded as an ASN.1 Element.
 */
export const _encode_BioAPI_DB_HANDLE: $.ASN1Encoder<BioAPI_DB_HANDLE> = _encode_SignedInt;


/* eslint-enable */
