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
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ControlType {
    sCPOverloaded = 0,
    manuallyInitiated = 1,
    destinationOverload = 2,
}

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ControlType = _enum_for_ControlType;

/**
 * @summary ControlType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlType  ::=  ENUMERATED {
 *   sCPOverloaded(0), manuallyInitiated(1), destinationOverload(2)
 * 
 * -- other values for further study (FFS)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ControlType = _enum_for_ControlType;

/**
 * @summary ControlType_sCPOverloaded
 * @constant
 * @type {number}
 */
export
const ControlType_sCPOverloaded = ControlType.sCPOverloaded satisfies ControlType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCPOverloaded
 * @constant
 * @type {number}
 */
export
const sCPOverloaded = ControlType.sCPOverloaded satisfies ControlType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_manuallyInitiated
 * @constant
 * @type {number}
 */
export
const ControlType_manuallyInitiated = ControlType.manuallyInitiated satisfies ControlType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manuallyInitiated
 * @constant
 * @type {number}
 */
export
const manuallyInitiated = ControlType.manuallyInitiated satisfies ControlType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_destinationOverload
 * @constant
 * @type {number}
 */
export
const ControlType_destinationOverload = ControlType.destinationOverload satisfies ControlType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationOverload
 * @constant
 * @type {number}
 */
export
const destinationOverload = ControlType.destinationOverload satisfies ControlType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ControlType = $._decodeEnumerated;
export const _encode_ControlType = $._encodeEnumerated;


/* eslint-enable */
