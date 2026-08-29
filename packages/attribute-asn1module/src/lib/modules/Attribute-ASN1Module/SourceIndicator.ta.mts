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
 * @summary SourceIndicator
 * @description
 *
 * In notifications, whether the triggering operation was a resource operation,
 * a management operation, or unknown. MATCHES FOR EQUALITY. `{smi2AttributeID
 * 26}`. ITU-T Rec. X.721 (02/92) §8.11, §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC
 * 10164-1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```
 *
 * @enum {number}
 */
export
enum _enum_for_SourceIndicator {
    resourceOperation = 0,
    managementOperation = 1,
    unknown = 2,
}

/**
 * @summary SourceIndicator
 * @description
 *
 * In notifications, whether the triggering operation was a resource operation,
 * a management operation, or unknown. MATCHES FOR EQUALITY. `{smi2AttributeID
 * 26}`. ITU-T Rec. X.721 (02/92) §8.11, §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC
 * 10164-1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```
 *
 * @enum {number}
 */
export
type SourceIndicator = _enum_for_SourceIndicator;

/**
 * @summary SourceIndicator
 * @description
 *
 * In notifications, whether the triggering operation was a resource operation,
 * a management operation, or unknown. MATCHES FOR EQUALITY. `{smi2AttributeID
 * 26}`. ITU-T Rec. X.721 (02/92) §8.11, §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC
 * 10164-1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SourceIndicator  ::=  ENUMERATED {
 *   resourceOperation(0), managementOperation(1), unknown(2)}
 * ```
 *
 * @enum {number}
 */
export
const SourceIndicator = _enum_for_SourceIndicator;

/**
 * @summary SourceIndicator_resourceOperation
 * @description
 *
 * The change was caused by operation of the resource. ITU-T Rec. X.721 (02/92)
 * §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC 10164-1.
 *
 * @constant
 * @type {number}
 */
export
const SourceIndicator_resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary resourceOperation
 * @description
 *
 * The change was caused by operation of the resource. ITU-T Rec. X.721 (02/92)
 * §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC 10164-1.
 *
 * @constant
 * @type {number}
 */
export
const resourceOperation: SourceIndicator = SourceIndicator.resourceOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SourceIndicator_managementOperation
 * @description
 *
 * The change was caused by a management operation. ITU-T Rec. X.721 (02/92)
 * §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC 10164-1.
 *
 * @constant
 * @type {number}
 */
export
const SourceIndicator_managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary managementOperation
 * @description
 *
 * The change was caused by a management operation. ITU-T Rec. X.721 (02/92)
 * §10.7.1.21; ITU-T Rec. X.730 | ISO/IEC 10164-1.
 *
 * @constant
 * @type {number}
 */
export
const managementOperation: SourceIndicator = SourceIndicator.managementOperation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SourceIndicator_unknown
 * @description
 *
 * Source of the change is unknown. ITU-T Rec. X.721 (02/92) §10.7.1.21.
 *
 * @constant
 * @type {number}
 */
export
const SourceIndicator_unknown: SourceIndicator = SourceIndicator.unknown; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Source of the change is unknown. ITU-T Rec. X.721 (02/92) §10.7.1.21.
 *
 * @constant
 * @type {number}
 */
export
const unknown: SourceIndicator = SourceIndicator.unknown; /* SHORT_NAMED_ENUMERATED_VALUE */


export const _decode_SourceIndicator = $._decodeEnumerated;


export const _encode_SourceIndicator = $._encodeEnumerated;


/* eslint-enable */
