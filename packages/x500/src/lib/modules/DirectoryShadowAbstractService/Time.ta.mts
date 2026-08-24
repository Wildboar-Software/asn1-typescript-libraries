/* eslint-disable */
import { ASN1Element as _Element, GeneralizedTime } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary Time
 * @description
 *
 * UTC `GeneralizedTime` with seconds present (X.680 46.3 b and c). Used
 * as the supplier-assigned last-update / update timestamp, not as a
 * consumer local clock. If a received `lastUpdate` is later than this
 * DSA's last-update → `missedPrevious`; if earlier →
 * `updateAlreadyReceived`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Time  ::=  GeneralizedTime
 * ```
 */
export type Time = GeneralizedTime; // GeneralizedTime


export const _decode_Time = $._decodeGeneralizedTime;


export const _encode_Time = $._encodeGeneralizedTime;


/* eslint-enable */
