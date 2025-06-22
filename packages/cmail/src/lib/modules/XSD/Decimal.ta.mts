/* eslint-disable */
import {
  REAL,
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
 * @summary Decimal
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Decimal  ::=  REAL    (0 | WITH COMPONENTS {..., base(10)})
 * ```
 */
export type Decimal = REAL; // RealType




export const _decode_Decimal = $._decodeReal;




export const _encode_Decimal = $._encodeReal;


/* eslint-enable */
