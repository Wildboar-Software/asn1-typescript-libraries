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
 * @summary ControlledTestRequestType
 * @description
 *
 * Whether a controlled test request creates independent tests or one related
 * test. independent (0): one or more tests, each a single TO (a request with
 * only one TO is always independent). related (1): one test of more than one
 * related TO; all share one invocation id which shall use the TARR+integer
 * form. Selects Independent vs Related response (and error) syntax. ITU-T Rec.
 * X.745 (11/93) §7.2.1, 8.4.2.1.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export enum _enum_for_ControlledTestRequestType {
    independent = 0,
    related = 1,
}

/**
 * @summary ControlledTestRequestType
 * @description
 *
 * Whether a controlled test request creates independent tests or one related
 * test. independent (0): one or more tests, each a single TO (a request with
 * only one TO is always independent). related (1): one test of more than one
 * related TO; all share one invocation id which shall use the TARR+integer
 * form. Selects Independent vs Related response (and error) syntax. ITU-T Rec.
 * X.745 (11/93) §7.2.1, 8.4.2.1.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export type ControlledTestRequestType = _enum_for_ControlledTestRequestType;

/**
 * @summary ControlledTestRequestType
 * @description
 *
 * Whether a controlled test request creates independent tests or one related
 * test. independent (0): one or more tests, each a single TO (a request with
 * only one TO is always independent). related (1): one test of more than one
 * related TO; all share one invocation id which shall use the TARR+integer
 * form. Selects Independent vs Related response (and error) syntax. ITU-T Rec.
 * X.745 (11/93) §7.2.1, 8.4.2.1.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ControlledTestRequestType  ::=  ENUMERATED {independent(0), related(1)}
 * ```
 *
 * @enum {number}
 */
export const ControlledTestRequestType = _enum_for_ControlledTestRequestType;

/**
 * @summary ControlledTestRequestType_independent
 * @description
 *
 * Multiple tests, each one TO. Response uses independentTestResponseList. ITU-T
 * Rec. X.745 (11/93) §7.2.1, 8.4.3.1.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary independent
 * @description
 *
 * Multiple tests, each one TO. Response uses independentTestResponseList. ITU-T
 * Rec. X.745 (11/93) §7.2.1, 8.4.3.1.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const independent: ControlledTestRequestType =
    ControlledTestRequestType.independent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlledTestRequestType_related
 * @description
 *
 * One test of more than one related TO. Response uses relatedTestResponse;
 * invocation id shall be TARR+integer. ITU-T Rec. X.745 (11/93) §7.2.1,
 * 8.4.3.2.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const ControlledTestRequestType_related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary related
 * @description
 *
 * One test of more than one related TO. Response uses relatedTestResponse;
 * invocation id shall be TARR+integer. ITU-T Rec. X.745 (11/93) §7.2.1,
 * 8.4.3.2.
 * [§7.2.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * @constant
 * @type {number}
 */
export const related: ControlledTestRequestType =
    ControlledTestRequestType.related; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_ControlledTestRequestType = $._decodeEnumerated;


export const _encode_ControlledTestRequestType = $._encodeEnumerated;


/* eslint-enable */
