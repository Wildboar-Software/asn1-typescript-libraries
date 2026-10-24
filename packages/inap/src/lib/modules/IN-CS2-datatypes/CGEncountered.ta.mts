/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CGEncountered {
    noCGencountered = 0,
    manualCGencountered = 1,
    scpOverload = 2,
}

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
type CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CGEncountered  ::=  ENUMERATED {
 *   noCGencountered(0), manualCGencountered(1), scpOverload(2)}
 * ```
 * 
 * @enum {number}
 */
export
const CGEncountered = _enum_for_CGEncountered;

/**
 * @summary CGEncountered_noCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCGencountered
 * @constant
 * @type {number}
 */
export
const noCGencountered: CGEncountered = CGEncountered.noCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_manualCGencountered
 * @constant
 * @type {number}
 */
export
const CGEncountered_manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary manualCGencountered
 * @constant
 * @type {number}
 */
export
const manualCGencountered: CGEncountered = CGEncountered.manualCGencountered; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CGEncountered_scpOverload
 * @constant
 * @type {number}
 */
export
const CGEncountered_scpOverload: CGEncountered = CGEncountered.scpOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary scpOverload
 * @constant
 * @type {number}
 */
export
const scpOverload: CGEncountered = CGEncountered.scpOverload; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_CGEncountered(el: _Element): CGEncountered {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case CGEncountered.noCGencountered: return CGEncountered.noCGencountered;
        case CGEncountered.manualCGencountered: return CGEncountered.manualCGencountered;
        case CGEncountered.scpOverload: return CGEncountered.scpOverload;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for CGEncountered.",
                el,
            );
    }
}

export
const _encode_CGEncountered: $.ASN1Encoder<CGEncountered> = $._encodeEnumerated as $.ASN1Encoder<CGEncountered>;

/* eslint-enable */
