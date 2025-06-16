/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

export enum _enum_for_RedirectionReason {
    recipient_assigned_alternate_recipient = 0,
    originator_requested_alternate_recipient = 1,
    recipient_MD_assigned_alternate_recipient = 2,
    directory_look_up = 3,
    alias = 4,
}

/**
 * @summary RedirectionReason
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RedirectionReason  ::=  ENUMERATED {
 *   recipient-assigned-alternate-recipient(0),
 *   originator-requested-alternate-recipient(1),
 *   recipient-MD-assigned-alternate-recipient(2),
 *   -- The following values may not be supported by implementations of earlier versions of this Service Definition
 *   directory-look-up(3), alias(4), ...
 *   }
 * ```
 *
 * @enum {number}
 */
export type RedirectionReason = _enum_for_RedirectionReason | ENUMERATED;

/**
 * @summary RedirectionReason_recipient_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_recipient_assigned_alternate_recipient: RedirectionReason = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const recipient_assigned_alternate_recipient: RedirectionReason = RedirectionReason_recipient_assigned_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RedirectionReason_originator_requested_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_originator_requested_alternate_recipient: RedirectionReason = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originator_requested_alternate_recipient
 * @constant
 * @type {number}
 */
export const originator_requested_alternate_recipient: RedirectionReason = RedirectionReason_originator_requested_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RedirectionReason_recipient_MD_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const RedirectionReason_recipient_MD_assigned_alternate_recipient: RedirectionReason = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recipient_MD_assigned_alternate_recipient
 * @constant
 * @type {number}
 */
export const recipient_MD_assigned_alternate_recipient: RedirectionReason = RedirectionReason_recipient_MD_assigned_alternate_recipient; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RedirectionReason_directory_look_up
 * @constant
 * @type {number}
 */
export const RedirectionReason_directory_look_up: RedirectionReason = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directory_look_up
 * @constant
 * @type {number}
 */
export const directory_look_up: RedirectionReason = RedirectionReason_directory_look_up; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RedirectionReason_alias
 * @constant
 * @type {number}
 */
export const RedirectionReason_alias: RedirectionReason = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary alias
 * @constant
 * @type {number}
 */
export const alias: RedirectionReason = RedirectionReason_alias; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_RedirectionReason = $._decodeEnumerated;


export const _encode_RedirectionReason = $._encodeEnumerated;


/* eslint-enable */
