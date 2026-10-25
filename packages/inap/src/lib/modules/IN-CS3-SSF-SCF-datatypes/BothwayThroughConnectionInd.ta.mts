/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BothwayThroughConnectionInd {
    bothwayPathRequired = 0,
    bothwayPathNotRequired = 1,
}

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
type BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
const BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd_bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathRequired = BothwayThroughConnectionInd.bothwayPathRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathRequired = BothwayThroughConnectionInd.bothwayPathRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BothwayThroughConnectionInd_bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathNotRequired = BothwayThroughConnectionInd.bothwayPathNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathNotRequired = BothwayThroughConnectionInd.bothwayPathNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_BothwayThroughConnectionInd(el: _Element): BothwayThroughConnectionInd {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case BothwayThroughConnectionInd.bothwayPathRequired: return BothwayThroughConnectionInd.bothwayPathRequired;
        case BothwayThroughConnectionInd.bothwayPathNotRequired: return BothwayThroughConnectionInd.bothwayPathNotRequired;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for BothwayThroughConnectionInd.",
                el,
            );
    }
}

export
const _encode_BothwayThroughConnectionInd: $.ASN1Encoder<BothwayThroughConnectionInd> = $._encodeEnumerated as $.ASN1Encoder<BothwayThroughConnectionInd>;

/* eslint-enable */
