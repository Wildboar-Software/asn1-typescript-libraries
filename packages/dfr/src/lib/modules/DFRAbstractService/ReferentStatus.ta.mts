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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ReferentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentStatus  ::=  ENUMERATED {
 *     not-changed-since-produce (0),
 *     changed-since-produce (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ReferentStatus {
    not_changed_since_produce = 0,
    changed_since_produce = 1,
}

/**
 * @summary ReferentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentStatus  ::=  ENUMERATED {
 *     not-changed-since-produce (0),
 *     changed-since-produce (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ReferentStatus = _enum_for_ReferentStatus;

/**
 * @summary ReferentStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReferentStatus  ::=  ENUMERATED {
 *     not-changed-since-produce (0),
 *     changed-since-produce (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ReferentStatus = _enum_for_ReferentStatus;

/**
 * @summary ReferentStatus_not_changed_since_produce
 * @constant
 * @type {number}
 */
export
const ReferentStatus_not_changed_since_produce: ReferentStatus = ReferentStatus.not_changed_since_produce; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary not_changed_since_produce
 * @constant
 * @type {number}
 */
export
const not_changed_since_produce: ReferentStatus = ReferentStatus.not_changed_since_produce; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ReferentStatus_changed_since_produce
 * @constant
 * @type {number}
 */
export
const ReferentStatus_changed_since_produce: ReferentStatus = ReferentStatus.changed_since_produce; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary changed_since_produce
 * @constant
 * @type {number}
 */
export
const changed_since_produce: ReferentStatus = ReferentStatus.changed_since_produce; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ReferentStatus = $._decodeEnumerated;
export const _encode_ReferentStatus = $._encodeEnumerated;


/* eslint-enable */
