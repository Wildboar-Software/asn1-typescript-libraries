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
 * @summary IPMAutoForwardOptions
 * @description
 *
 * Registration options for IPM auto-forward (ITU-T X.420 (1999), §19.8). If both
 * `preserve-retrieval-status` and `delete-delivered-object` are set, the IPMS-MS shall not
 * accept the registration and returns a Register-MS-error.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMAutoForwardOptions  ::=  BIT STRING {
 *   forward-all-object-types(0), -- forward-all-object-types 'one', forward IPMs only 'zero'
 *   include-returned-content(1), -- include-returned-content 'one', exclude 'zero'
 *   include-returned-ipm(2), -- include-returned-ipm 'one', exclude 'zero'
 *   forwarded-content-prohibited(3), -- forwarded-content-prohibited 'one', allowed'zero'
 *   preserve-retrieval-status(4), -- preserve-retrieval-status 'one', change 'zero'
 *   delete-delivered-object(5)
 * }
 * ```
 */
export type IPMAutoForwardOptions = BIT_STRING;

/**
 * @summary IPMAutoForwardOptions_forward_all_object_types
 * @description
 *
 * Set: no restriction on the types of delivered object that this registration will
 * auto-forward. Unset: only IPMs are auto-forwarded.
 *
 * @constant
 */
export const IPMAutoForwardOptions_forward_all_object_types: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary forward_all_object_types
 * @description
 *
 * Set: no restriction on the types of delivered object that this registration will
 * auto-forward. Unset: only IPMs are auto-forwarded.
 *
 * @constant
 */
export const forward_all_object_types: number = IPMAutoForwardOptions_forward_all_object_types; /* SHORT_NAMED_BIT */

/**
 * @summary IPMAutoForwardOptions_include_returned_content
 * @description
 *
 * Set: if the delivered object is a Report containing returned-content, include that
 * returned-content in the Report body part of the forwarding IPM. Unset: returned-content
 * shall not be included.
 *
 * @constant
 */
export const IPMAutoForwardOptions_include_returned_content: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary include_returned_content
 * @description
 *
 * Set: if the delivered object is a Report containing returned-content, include that
 * returned-content in the Report body part of the forwarding IPM. Unset: returned-content
 * shall not be included.
 *
 * @constant
 */
export const include_returned_content: number = IPMAutoForwardOptions_include_returned_content; /* SHORT_NAMED_BIT */

/**
 * @summary IPMAutoForwardOptions_include_returned_ipm
 * @description
 *
 * Set: if the delivered object is an NRN containing returned-IPM, include that
 * returned-IPM in the Notification body part of the forwarding IPM. Unset: returned-IPM
 * shall not be included.
 *
 * @constant
 */
export const IPMAutoForwardOptions_include_returned_ipm: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary include_returned_ipm
 * @description
 *
 * Set: if the delivered object is an NRN containing returned-IPM, include that
 * returned-IPM in the Notification body part of the forwarding IPM. Unset: returned-IPM
 * shall not be included.
 *
 * @constant
 */
export const include_returned_ipm: number = IPMAutoForwardOptions_include_returned_ipm; /* SHORT_NAMED_BIT */

/**
 * @summary IPMAutoForwardOptions_forwarded_content_prohibited
 * @description
 *
 * Set: the IPMS-MS shall not use the forwarded-content body part type to auto-forward a
 * delivered message (e.g. when that recipient is known not to handle that body part type).
 *
 * @constant
 */
export const IPMAutoForwardOptions_forwarded_content_prohibited: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary forwarded_content_prohibited
 * @description
 *
 * Set: the IPMS-MS shall not use the forwarded-content body part type to auto-forward a
 * delivered message (e.g. when that recipient is known not to handle that body part type).
 *
 * @constant
 */
export const forwarded_content_prohibited: number = IPMAutoForwardOptions_forwarded_content_prohibited; /* SHORT_NAMED_BIT */

/**
 * @summary IPMAutoForwardOptions_preserve_retrieval_status
 * @description
 *
 * Set: leave the delivered object's retrieval-status unchanged. Unset: if retrieval-status
 * is still `new`, set it to `processed`. Must not be combined with
 * `delete-delivered-object`.
 *
 * @constant
 */
export const IPMAutoForwardOptions_preserve_retrieval_status: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary preserve_retrieval_status
 * @description
 *
 * Set: leave the delivered object's retrieval-status unchanged. Unset: if retrieval-status
 * is still `new`, set it to `processed`. Must not be combined with
 * `delete-delivered-object`.
 *
 * @constant
 */
export const preserve_retrieval_status: number = IPMAutoForwardOptions_preserve_retrieval_status; /* SHORT_NAMED_BIT */

/**
 * @summary IPMAutoForwardOptions_delete_delivered_object
 * @description
 *
 * Set: delete the delivered object after successful auto-forwarding. Unset: do not delete
 * it. Must not be combined with `preserve-retrieval-status`.
 *
 * @constant
 */
export const IPMAutoForwardOptions_delete_delivered_object: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary delete_delivered_object
 * @description
 *
 * Set: delete the delivered object after successful auto-forwarding. Unset: do not delete
 * it. Must not be combined with `preserve-retrieval-status`.
 *
 * @constant
 */
export const delete_delivered_object: number = IPMAutoForwardOptions_delete_delivered_object; /* SHORT_NAMED_BIT */


export const _decode_IPMAutoForwardOptions = $._decodeBitString;


export const _encode_IPMAutoForwardOptions = $._encodeBitString;


/* eslint-enable */
