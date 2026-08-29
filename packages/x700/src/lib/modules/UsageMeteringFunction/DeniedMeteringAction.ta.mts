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


/**
 * @summary DeniedMeteringAction
 * @description
 *
 * Specific-error of start, suspend, or resume metering when
 * collection is complete and the data object's procedural
 * status is `terminating` (Table 1 STA3). ITU-T Rec. X.742
 * (04/95)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.742-199504-I), A.8.
 *
 * - `canNotStart` (0): start metering refused.
 * - `canNotSuspend` (1): suspend metering refused.
 * - `canNotResume` (2): resume metering refused.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DeniedMeteringAction {
    canNotStart = 0,
    canNotSuspend = 1,
    canNotResume = 2,
}


/**
 * @summary DeniedMeteringAction
 * @description
 *
 * Specific-error of start, suspend, or resume metering when
 * collection is complete and the data object's procedural
 * status is `terminating` (Table 1 STA3). ITU-T Rec. X.742
 * (04/95)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.742-199504-I), A.8.
 *
 * - `canNotStart` (0): start metering refused.
 * - `canNotSuspend` (1): suspend metering refused.
 * - `canNotResume` (2): resume metering refused.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```
 *
 * @enum {number}
 */
export type DeniedMeteringAction = _enum_for_DeniedMeteringAction;


/**
 * @summary DeniedMeteringAction
 * @description
 *
 * Specific-error of start, suspend, or resume metering when
 * collection is complete and the data object's procedural
 * status is `terminating` (Table 1 STA3). ITU-T Rec. X.742
 * (04/95)
 * [§8.4.1](https://www.itu.int/rec/T-REC-X.742-199504-I), A.8.
 *
 * - `canNotStart` (0): start metering refused.
 * - `canNotSuspend` (1): suspend metering refused.
 * - `canNotResume` (2): resume metering refused.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeniedMeteringAction  ::=  ENUMERATED {
 *   canNotStart(0), canNotSuspend(1), canNotResume(2)}
 * ```
 *
 * @enum {number}
 */
export const DeniedMeteringAction = _enum_for_DeniedMeteringAction;


/**
 * @summary DeniedMeteringAction_canNotStart
 * @description
 *
 * Start metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotStart
 * @description
 *
 * Start metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const canNotStart: DeniedMeteringAction =
    DeniedMeteringAction.canNotStart; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeniedMeteringAction_canNotSuspend
 * @description
 *
 * Suspend metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotSuspend
 * @description
 *
 * Suspend metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const canNotSuspend: DeniedMeteringAction =
    DeniedMeteringAction.canNotSuspend; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary DeniedMeteringAction_canNotResume
 * @description
 *
 * Resume metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const DeniedMeteringAction_canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary canNotResume
 * @description
 *
 * Resume metering refused while procedural status is
 * `terminating`. ITU-T Rec. X.742 (04/95) §8.4.1, Table 1.
 *
 * @constant
 * @type {number}
 */
export const canNotResume: DeniedMeteringAction =
    DeniedMeteringAction.canNotResume; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_DeniedMeteringAction = $._decodeEnumerated;




export const _encode_DeniedMeteringAction = $._encodeEnumerated;


/* eslint-enable */
