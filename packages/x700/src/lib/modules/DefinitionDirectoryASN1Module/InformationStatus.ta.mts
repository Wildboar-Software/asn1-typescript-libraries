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
 * @summary InformationStatus
 * @description
 *
 * Lifecycle of a definition stored in the Directory (X.750 §8.6.2):
 * `active(0)` — definition is fixed and may be used;
 * `deleted(1)` — obsolete; new definitions should not reference it;
 * `preliminary(2)` — informational only; may still change (e.g. CD to
 * DIS). Syntax of `informationStatus`. ITU-T Rec. X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I),
 * [B.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_InformationStatus {
    active = 0,
    deleted = 1,
    preliminary = 2,
}

/**
 * @summary InformationStatus
 * @description
 *
 * Alias of `_enum_for_InformationStatus`. See that enum for the
 * meaning of `active`, `deleted`, and `preliminary`. ITU-T Rec.
 * X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```
 *
 * @enum {number}
 */
export type InformationStatus = _enum_for_InformationStatus;

/**
 * @summary InformationStatus
 * @description
 *
 * Runtime object equal to `_enum_for_InformationStatus`. ITU-T Rec.
 * X.750 (10/96)
 * [§8.6.2](https://www.itu.int/rec/T-REC-X.750-199610-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationStatus  ::=  ENUMERATED {active(0), deleted(1), preliminary(2)}
 * ```
 *
 * @enum {number}
 */
export const InformationStatus = _enum_for_InformationStatus;

/**
 * @summary InformationStatus_active
 * @description
 *
 * Definition is fixed and may be used. X.750 §8.6.2.
 * @constant
 * @type {number}
 */
export const InformationStatus_active: InformationStatus =
    InformationStatus.active; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary active
 * @description
 *
 * Active. Same as `InformationStatus_active`.
 * @constant
 * @type {number}
 */
export const active: InformationStatus =
    InformationStatus.active; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InformationStatus_deleted
 * @description
 *
 * Obsolete; new definitions should not reference it. X.750 §8.6.2.
 * @constant
 * @type {number}
 */
export const InformationStatus_deleted: InformationStatus =
    InformationStatus.deleted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deleted
 * @description
 *
 * Deleted. Same as `InformationStatus_deleted`.
 * @constant
 * @type {number}
 */
export const deleted: InformationStatus =
    InformationStatus.deleted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InformationStatus_preliminary
 * @description
 *
 * Informational only; may still change. X.750 §8.6.2.
 * @constant
 * @type {number}
 */
export const InformationStatus_preliminary: InformationStatus =
    InformationStatus.preliminary; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preliminary
 * @description
 *
 * Preliminary. Same as `InformationStatus_preliminary`.
 * @constant
 * @type {number}
 */
export const preliminary: InformationStatus =
    InformationStatus.preliminary; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_InformationStatus = $._decodeEnumerated;


export const _encode_InformationStatus = $._encodeEnumerated;


/* eslint-enable */
