/* eslint-disable */
import {
    BIT_STRING,
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
 * @summary NotificationRequests
 * @description
 *
 * Requests made of a recipient in a `RecipientSpecifier` (ITU-T X.420 (1999), §7.1.2).
 * Bits may be combined, except `rn` shall not be selected unless `nrn` is also selected.
 * If this component or `reply-requested` makes a request, the recipient OR-descriptor's
 * `formal-name` shall be present.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NotificationRequests  ::=  BIT STRING {
 *   rn(0), nrn(1), ipm-return(2), an-supported(3), suppress-an(4)}
 * ```
 */
export type NotificationRequests = BIT_STRING;

/**
 * @summary NotificationRequests_rn
 * @description
 *
 * Request a receipt notification in the circumstances of X.420 clause 8. Shall not be
 * selected unless `nrn` is also selected.
 *
 * @constant
 */
export const NotificationRequests_rn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary rn
 * @description
 *
 * Request a receipt notification in the circumstances of X.420 clause 8. Shall not be
 * selected unless `nrn` is also selected.
 *
 * @constant
 */
export const rn: number = NotificationRequests_rn; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_nrn
 * @description
 *
 * Request a non-receipt notification in the circumstances of X.420 clause 8.
 *
 * @constant
 */
export const NotificationRequests_nrn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary nrn
 * @description
 *
 * Request a non-receipt notification in the circumstances of X.420 clause 8.
 *
 * @constant
 */
export const nrn: number = NotificationRequests_nrn; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_ipm_return
 * @description
 *
 * Request that the IPM be returned in any non-receipt notification.
 *
 * @constant
 */
export const NotificationRequests_ipm_return: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ipm_return
 * @description
 *
 * Request that the IPM be returned in any non-receipt notification.
 *
 * @constant
 */
export const ipm_return: number = NotificationRequests_ipm_return; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_an_supported
 * @description
 *
 * Request that advice notifications (absence advice or change-of-address advice) are
 * conveyed within other notifications as prescribed in X.420 clause 8.
 *
 * @constant
 */
export const NotificationRequests_an_supported: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary an_supported
 * @description
 *
 * Request that advice notifications (absence advice or change-of-address advice) are
 * conveyed within other notifications as prescribed in X.420 clause 8.
 *
 * @constant
 */
export const an_supported: number = NotificationRequests_an_supported; /* SHORT_NAMED_BIT */

/**
 * @summary NotificationRequests_suppress_an
 * @description
 *
 * Request that no advice notifications are sent in response to this IPM.
 *
 * @constant
 */
export const NotificationRequests_suppress_an: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary suppress_an
 * @description
 *
 * Request that no advice notifications are sent in response to this IPM.
 *
 * @constant
 */
export const suppress_an: number = NotificationRequests_suppress_an; /* SHORT_NAMED_BIT */


export const _decode_NotificationRequests = $._decodeBitString;


export const _encode_NotificationRequests = $._encodeBitString;


/* eslint-enable */
