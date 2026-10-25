/* eslint-disable */
import {
  type INTEGER,
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
 * @summary UnsignedInt
 * @description
 *
 * Maps the C type `uint32_t` (0..4294967295). Conversion is
 * the corresponding 32-bit unsigned integer. Used for link
 * numbers, request/notification identifiers, and
 * `BioAPI-RETURN`. X.1083 §15.1.5.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UnsignedInt  ::=  INTEGER(0..max-unsigned-int)
 * ```
 */
export type UnsignedInt = INTEGER;




export const _decode_UnsignedInt: $.ASN1Decoder<INTEGER> = $._decodeInteger;




export const _encode_UnsignedInt: $.ASN1Encoder<INTEGER> = $._encodeInteger;


/* eslint-enable */
