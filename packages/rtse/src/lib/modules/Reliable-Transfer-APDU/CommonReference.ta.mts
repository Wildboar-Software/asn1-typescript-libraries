/* eslint-disable */
import {
  UTCTime,
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
 * @summary CommonReference
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CommonReference  ::=  UTCTime
 * ```
 */
export type CommonReference = UTCTime; // UTCTime




export const _decode_CommonReference = $._decodeUTCTime;




export const _encode_CommonReference = $._encodeUTCTime;


/* eslint-enable */
