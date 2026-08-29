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
 * @summary Induced
 * @description
 *
 * Induced reporting triggers and notification causes: a
 * metering action, data-object deletion, or a change of the
 * control object's operational state.
 *
 * - `start` (0): start metering completed (re-initializes
 *   usage parameters; clears `suspended`).
 * - `suspend` (1): suspend metering completed (usage held
 *   constant; control status `suspended`).
 * - `resume` (2): resume metering completed (does not
 *   re-initialize).
 * - `delete` (3): data object is being deleted; if this
 *   trigger is set, a usage report is emitted first and
 *   procedural status is `terminating`.
 * - `disabled` (4): control-object operational state became
 *   disabled.
 * - `enabled` (5): control-object operational state became
 *   enabled.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.1.3](https://www.itu.int/rec/T-REC-X.742-199504-I),
 * §7.2.4, Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_Induced {
    start = 0,
    suspend = 1,
    resume = 2,
    delete_ = 3,
    disabled = 4,
    enabled = 5,
}

/**
 * @summary Induced
 * @description
 *
 * Induced reporting triggers and notification causes: a
 * metering action, data-object deletion, or a change of the
 * control object's operational state.
 *
 * - `start` (0): start metering completed (re-initializes
 *   usage parameters; clears `suspended`).
 * - `suspend` (1): suspend metering completed (usage held
 *   constant; control status `suspended`).
 * - `resume` (2): resume metering completed (does not
 *   re-initialize).
 * - `delete` (3): data object is being deleted; if this
 *   trigger is set, a usage report is emitted first and
 *   procedural status is `terminating`.
 * - `disabled` (4): control-object operational state became
 *   disabled.
 * - `enabled` (5): control-object operational state became
 *   enabled.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.1.3](https://www.itu.int/rec/T-REC-X.742-199504-I),
 * §7.2.4, Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 *
 * @enum {number}
 */
export type Induced = _enum_for_Induced;

/**
 * @summary Induced
 * @description
 *
 * Induced reporting triggers and notification causes: a
 * metering action, data-object deletion, or a change of the
 * control object's operational state.
 *
 * - `start` (0): start metering completed (re-initializes
 *   usage parameters; clears `suspended`).
 * - `suspend` (1): suspend metering completed (usage held
 *   constant; control status `suspended`).
 * - `resume` (2): resume metering completed (does not
 *   re-initialize).
 * - `delete` (3): data object is being deleted; if this
 *   trigger is set, a usage report is emitted first and
 *   procedural status is `terminating`.
 * - `disabled` (4): control-object operational state became
 *   disabled.
 * - `enabled` (5): control-object operational state became
 *   enabled.
 *
 * ITU-T Rec. X.742 (04/95)
 * [§8.1.3](https://www.itu.int/rec/T-REC-X.742-199504-I),
 * §7.2.4, Table 1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Induced  ::=  ENUMERATED {
 *   start(0), suspend(1), resume(2), delete(3), disabled(4), enabled(5)
 * }
 * ```
 *
 * @enum {number}
 */
export const Induced = _enum_for_Induced;

/**
 * @summary Induced_start
 * @description
 *
 * Start metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const Induced_start: Induced =
    Induced.start; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary start
 * @description
 *
 * Start metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const start: Induced = Induced.start; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_suspend
 * @description
 *
 * Suspend metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const Induced_suspend: Induced =
    Induced.suspend; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary suspend
 * @description
 *
 * Suspend metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const suspend: Induced =
    Induced.suspend; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_resume
 * @description
 *
 * Resume metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const Induced_resume: Induced =
    Induced.resume; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resume
 * @description
 *
 * Resume metering completed. ITU-T Rec. X.742 (04/95) §8.1.4.
 *
 * @constant
 * @type {number}
 */
export const resume: Induced =
    Induced.resume; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_delete_
 * @description
 *
 * Data object is being deleted (`delete` in ASN.1). ITU-T Rec.
 * X.742 (04/95) §7.2.4, Table 1.
 *
 * @constant
 * @type {number}
 */
export const Induced_delete_: Induced =
    Induced.delete_; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary delete_
 * @description
 *
 * Data object is being deleted (`delete` in ASN.1). ITU-T Rec.
 * X.742 (04/95) §7.2.4, Table 1.
 *
 * @constant
 * @type {number}
 */
export const delete_: Induced =
    Induced.delete_; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_disabled
 * @description
 *
 * Control-object operational state became disabled. ITU-T Rec.
 * X.742 (04/95) §8.1.3.
 *
 * @constant
 * @type {number}
 */
export const Induced_disabled: Induced =
    Induced.disabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary disabled
 * @description
 *
 * Control-object operational state became disabled. ITU-T Rec.
 * X.742 (04/95) §8.1.3.
 *
 * @constant
 * @type {number}
 */
export const disabled: Induced =
    Induced.disabled; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Induced_enabled
 * @description
 *
 * Control-object operational state became enabled. ITU-T Rec.
 * X.742 (04/95) §8.1.3.
 *
 * @constant
 * @type {number}
 */
export const Induced_enabled: Induced =
    Induced.enabled; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary enabled
 * @description
 *
 * Control-object operational state became enabled. ITU-T Rec.
 * X.742 (04/95) §8.1.3.
 *
 * @constant
 * @type {number}
 */
export const enabled: Induced =
    Induced.enabled; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_Induced = $._decodeEnumerated;


export const _encode_Induced = $._encodeEnumerated;


/* eslint-enable */
