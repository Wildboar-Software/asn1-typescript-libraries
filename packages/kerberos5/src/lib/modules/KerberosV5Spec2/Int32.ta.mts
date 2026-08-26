/* eslint-disable */
import {
  INTEGER,
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
 * @summary Int32
 * @description
 *
 * Signed integer representable in 32 bits
 * (−2147483648..2147483647) ([RFC 4120 §5.2.4](https://datatracker.ietf.org/doc/html/rfc4120#section-5.2.4)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Int32            ::=  INTEGER (-2147483648..2147483647)
 * ```
 */
export type Int32 = INTEGER;




export const _decode_Int32 = $._decodeInteger;




export const _encode_Int32 = $._encodeInteger;


/* eslint-enable */
