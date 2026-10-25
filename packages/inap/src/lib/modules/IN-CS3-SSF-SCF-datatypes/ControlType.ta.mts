/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
 * --  other values are outside the scope of this capability set.
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
 * --  other values are outside the scope of this capability set.
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
 * --  other values are outside the scope of this capability set.
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

export
function _decode_ControlType(el: _Element): ControlType {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ControlType.sCPOverloaded: return ControlType.sCPOverloaded;
        case ControlType.manuallyInitiated: return ControlType.manuallyInitiated;
        case ControlType.destinationOverload: return ControlType.destinationOverload;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ControlType.",
                el,
            );
    }
}

export
const _encode_ControlType: $.ASN1Encoder<ControlType> = $._encodeEnumerated as $.ASN1Encoder<ControlType>;

/* eslint-enable */
