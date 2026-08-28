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
 * @summary Priority
 * @description
 *
 * Priority of transferring an invocation or its return relative to other invocations/returns between the same pair of ROS-objects. Lower value is higher priority (ITU-T Rec. X.880 (07/94) §8.9).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Priority  ::=  INTEGER(0..MAX)
 * ```
 */
export type Priority = INTEGER;




export const _decode_Priority = $._decodeInteger;




export const _encode_Priority = $._encodeInteger;


/* eslint-enable */
