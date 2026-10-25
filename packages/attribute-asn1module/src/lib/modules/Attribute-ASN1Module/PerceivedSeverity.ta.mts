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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PerceivedSeverity
 * @description
 *
 * Perceived severity of an alarm. `indeterminate` when none of the other values
 * can be assigned. Semantics: ITU-T Rec. X.733 | ISO/IEC 10164-4 Perceived
 * Severity. MATCHES FOR EQUALITY. `{smi2AttributeID 17}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.12, §14.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
const _enum_for_PerceivedSeverity = {
    indeterminate: 0,
    critical: 1,
    major: 2,
    minor: 3,
    warning: 4,
    cleared: 5,
} as const;

export
type _enum_for_PerceivedSeverity = (typeof _enum_for_PerceivedSeverity)[keyof typeof _enum_for_PerceivedSeverity];

/**
 * @summary PerceivedSeverity
 * @description
 *
 * Perceived severity of an alarm. `indeterminate` when none of the other values
 * can be assigned. Semantics: ITU-T Rec. X.733 | ISO/IEC 10164-4 Perceived
 * Severity. MATCHES FOR EQUALITY. `{smi2AttributeID 17}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.12, §14.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
type PerceivedSeverity = _enum_for_PerceivedSeverity;

/**
 * @summary PerceivedSeverity
 * @description
 *
 * Perceived severity of an alarm. `indeterminate` when none of the other values
 * can be assigned. Semantics: ITU-T Rec. X.733 | ISO/IEC 10164-4 Perceived
 * Severity. MATCHES FOR EQUALITY. `{smi2AttributeID 17}`. ITU-T Rec. X.721
 * (02/92) §10.7.1.12, §14.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PerceivedSeverity  ::=  ENUMERATED {
 *   indeterminate(0),
 *   -- used when it is not possible to assign the following values
 *   critical(1), major(2), minor(3), warning(4), cleared(5)}
 * ```
 *
 * @enum {number}
 */
export
const PerceivedSeverity: typeof _enum_for_PerceivedSeverity = _enum_for_PerceivedSeverity;

/**
 * @summary PerceivedSeverity_indeterminate
 * @description
 *
 * None of the other values can be assigned. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_indeterminate: 0 = PerceivedSeverity.indeterminate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary indeterminate
 * @description
 *
 * None of the other values can be assigned. ITU-T Rec. X.721 (02/92) §14.2;
 * ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const indeterminate: 0 = PerceivedSeverity.indeterminate; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_critical
 * @description
 *
 * Service-affecting condition; immediate corrective action required. ITU-T Rec.
 * X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_critical: 1 = PerceivedSeverity.critical; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary critical
 * @description
 *
 * Service-affecting condition; immediate corrective action required. ITU-T Rec.
 * X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const critical: 1 = PerceivedSeverity.critical; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_major
 * @description
 *
 * Service-affecting condition; urgent corrective action required. ITU-T Rec.
 * X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_major: 2 = PerceivedSeverity.major; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary major
 * @description
 *
 * Service-affecting condition; urgent corrective action required. ITU-T Rec.
 * X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const major: 2 = PerceivedSeverity.major; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_minor
 * @description
 *
 * Not currently service-affecting; corrective action needed to stop a more
 * serious fault. ITU-T Rec. X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 |
 * ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_minor: 3 = PerceivedSeverity.minor; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary minor
 * @description
 *
 * Not currently service-affecting; corrective action needed to stop a more
 * serious fault. ITU-T Rec. X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 |
 * ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const minor: 3 = PerceivedSeverity.minor; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_warning
 * @description
 *
 * Potential or impending service-affecting fault; diagnose and correct to
 * prevent degradation. ITU-T Rec. X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 |
 * ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_warning: 4 = PerceivedSeverity.warning; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary warning
 * @description
 *
 * Potential or impending service-affecting fault; diagnose and correct to
 * prevent degradation. ITU-T Rec. X.721 (02/92) §10.7.1.12; ITU-T Rec. X.733 |
 * ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const warning: 4 = PerceivedSeverity.warning; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PerceivedSeverity_cleared
 * @description
 *
 * Clears one or more previously reported alarms. ITU-T Rec. X.721 (02/92)
 * §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const PerceivedSeverity_cleared: 5 = PerceivedSeverity.cleared; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cleared
 * @description
 *
 * Clears one or more previously reported alarms. ITU-T Rec. X.721 (02/92)
 * §10.7.1.12; ITU-T Rec. X.733 | ISO/IEC 10164-4 §8.1.2.3.
 *
 * @constant
 * @type {number}
 */
export
const cleared: 5 = PerceivedSeverity.cleared; /* SHORT_NAMED_ENUMERATED_VALUE */


export function _decode_PerceivedSeverity(el: _Element): PerceivedSeverity {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case PerceivedSeverity.indeterminate: return PerceivedSeverity.indeterminate;
        case PerceivedSeverity.critical: return PerceivedSeverity.critical;
        case PerceivedSeverity.major: return PerceivedSeverity.major;
        case PerceivedSeverity.minor: return PerceivedSeverity.minor;
        case PerceivedSeverity.warning: return PerceivedSeverity.warning;
        case PerceivedSeverity.cleared: return PerceivedSeverity.cleared;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for PerceivedSeverity.",
                el,
            );
    }
}


export const _encode_PerceivedSeverity: $.ASN1Encoder<PerceivedSeverity> = $._encodeEnumerated as $.ASN1Encoder<PerceivedSeverity>;


/* eslint-enable */
