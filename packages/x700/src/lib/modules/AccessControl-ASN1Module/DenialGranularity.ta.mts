/* eslint-disable */
import {
    type ASN1Element as _Element,
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
export const DenialGranularity: typeof _enum_for_DenialGranularity = _enum_for_DenialGranularity;

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
export const DenialGranularity_request: _enum_for_DenialGranularity.request =
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
export const request: _enum_for_DenialGranularity.request =
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
export const DenialGranularity_object: _enum_for_DenialGranularity.object =
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
export const object: _enum_for_DenialGranularity.object =
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
export const DenialGranularity_attribute: _enum_for_DenialGranularity.attribute =
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
export const attribute: _enum_for_DenialGranularity.attribute =
    DenialGranularity.attribute; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_DenialGranularity(el: _Element): DenialGranularity {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case DenialGranularity.request: return DenialGranularity.request;
        case DenialGranularity.object: return DenialGranularity.object;
        case DenialGranularity.attribute: return DenialGranularity.attribute;
        default:
            throw new _ConstructionError(
                'Invalid ENUMERATED value ' + enumerated + ' for DenialGranularity.',
                el,
            );
    }
}


export const _encode_DenialGranularity: $.ASN1Encoder<DenialGranularity> = $._encodeEnumerated as $.ASN1Encoder<DenialGranularity>;


/* eslint-enable */
