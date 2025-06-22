/* eslint-disable */
import {
  TIME,
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
 * @summary Date_Time
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Date-Time  ::=  TIME ((SETTINGS "Basic=Date-Time Date=YMD Year=Basic Time=HMS Midnight = Start Local-or-UTC=Z"))
 * ```
 */
export type Date_Time = TIME; // TimeType


export const _decode_Date_Time = $._decodeTime;


export const _encode_Date_Time = $._encodeTime;


/* eslint-enable */
