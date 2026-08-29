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
 * @summary DenialGranularity
 * @description
 *
 * Level at which denial of access is exhibited
 * (`denialGranularity` on access control rules). Ignored
 * (forced to the whole request) for invalid initiator-bound
 * ACI and for global-rule denials. If unspecified, default
 * granularity is local policy; request-level is recommended
 * for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.4, A.5.10.
 *
 * Values:
 * - `request` (0): deny the entire request if any target is
 *   denied; no operations on any associated target.
 * - `object` (1): deny that managed object if any of its
 *   operations/attributes is denied; other objects in the
 *   request may proceed. CMIS has no object-level denial
 *   response for multiple-object selection (note in
 *   §7.4.6.4).
 * - `attribute` (2): deny only the specific attribute;
 *   other attributes and objects may proceed.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_DenialGranularity {
    request = 0,
    object = 1,
    attribute = 2,
}

/**
 * @summary DenialGranularity
 * @description
 *
 * Level at which denial of access is exhibited
 * (`denialGranularity` on access control rules). Ignored
 * (forced to the whole request) for invalid initiator-bound
 * ACI and for global-rule denials. If unspecified, default
 * granularity is local policy; request-level is recommended
 * for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.4, A.5.10.
 *
 * Values:
 * - `request` (0): deny the entire request if any target is
 *   denied; no operations on any associated target.
 * - `object` (1): deny that managed object if any of its
 *   operations/attributes is denied; other objects in the
 *   request may proceed. CMIS has no object-level denial
 *   response for multiple-object selection (note in
 *   §7.4.6.4).
 * - `attribute` (2): deny only the specific attribute;
 *   other attributes and objects may proceed.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export type DenialGranularity = _enum_for_DenialGranularity;

/**
 * @summary DenialGranularity
 * @description
 *
 * Level at which denial of access is exhibited
 * (`denialGranularity` on access control rules). Ignored
 * (forced to the whole request) for invalid initiator-bound
 * ACI and for global-rule denials. If unspecified, default
 * granularity is local policy; request-level is recommended
 * for least privilege. ITU-T Rec. X.741 (04/95)
 * [§7.4.6.1](https://www.itu.int/rec/T-REC-X.741-199504-I),
 * §8.1.2.1.4, A.5.10.
 *
 * Values:
 * - `request` (0): deny the entire request if any target is
 *   denied; no operations on any associated target.
 * - `object` (1): deny that managed object if any of its
 *   operations/attributes is denied; other objects in the
 *   request may proceed. CMIS has no object-level denial
 *   response for multiple-object selection (note in
 *   §7.4.6.4).
 * - `attribute` (2): deny only the specific attribute;
 *   other attributes and objects may proceed.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DenialGranularity  ::=  ENUMERATED {request(0), object(1), attribute(2)}
 * ```
 *
 * @enum {number}
 */
export const DenialGranularity = _enum_for_DenialGranularity;

/**
 * @summary DenialGranularity_request
 * @description
 *
 * Entire request denied if any target is denied. Forced for
 * invalid initiator-bound ACI and global-rule denials.
 * Recommended default for least privilege. X.741 §7.4.6.1,
 * A.5.10.
 *
 * @constant
 * @type {number}
 */
export const DenialGranularity_request: DenialGranularity =
    DenialGranularity.request; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @description
 *
 * Entire request denied if any target is denied. X.741
 * §7.4.6.1, A.5.10.
 *
 * @constant
 * @type {number}
 */
export const request: DenialGranularity =
    DenialGranularity.request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialGranularity_object
 * @description
 *
 * Deny that managed object if any of its operations or
 * attributes is denied; other objects in the request may
 * proceed. X.741 §7.4.6.1, A.5.10.
 *
 * @constant
 * @type {number}
 */
export const DenialGranularity_object: DenialGranularity =
    DenialGranularity.object; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary object
 * @description
 *
 * Deny that managed object if any of its operations or
 * attributes is denied. X.741 §7.4.6.1, A.5.10.
 *
 * @constant
 * @type {number}
 */
export const object: DenialGranularity =
    DenialGranularity.object; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DenialGranularity_attribute
 * @description
 *
 * Deny only the specific attribute; other attributes and
 * objects may proceed. X.741 §7.4.6.1, A.5.10.
 *
 * @constant
 * @type {number}
 */
export const DenialGranularity_attribute: DenialGranularity =
    DenialGranularity.attribute; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary attribute
 * @description
 *
 * Deny only the specific attribute. X.741 §7.4.6.1, A.5.10.
 *
 * @constant
 * @type {number}
 */
export const attribute: DenialGranularity =
    DenialGranularity.attribute; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_DenialGranularity = $._decodeEnumerated;


export const _encode_DenialGranularity = $._encodeEnumerated;


/* eslint-enable */
