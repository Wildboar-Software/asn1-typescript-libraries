/* eslint-disable */
import {
  type TIME,
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

export const _decode_Date_Time: $.ASN1Decoder<string> = $._decodeTime;

export const _encode_Date_Time: $.ASN1Encoder<string> = $._encodeTime;

/* eslint-enable */
