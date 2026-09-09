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
const ControlType_sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sCPOverloaded
 * @constant
 * @type {number}
 */
export
const sCPOverloaded: ControlType = ControlType.sCPOverloaded; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_manuallyInitiated
 * @constant
 * @type {number}
 */
export
const ControlType_manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manuallyInitiated
 * @constant
 * @type {number}
 */
export
const manuallyInitiated: ControlType = ControlType.manuallyInitiated; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ControlType_destinationOverload
 * @constant
 * @type {number}
 */
export
const ControlType_destinationOverload: ControlType = ControlType.destinationOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary destinationOverload
 * @constant
 * @type {number}
 */
export
const destinationOverload: ControlType = ControlType.destinationOverload; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ControlType = $._decodeEnumerated;
export const _encode_ControlType = $._encodeEnumerated;


/* eslint-enable */
