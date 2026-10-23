/* eslint-disable */
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
const BothwayThroughConnectionInd_bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BothwayThroughConnectionInd_bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_BothwayThroughConnectionInd: $.ASN1Decoder<BothwayThroughConnectionInd> = $._decodeEnumerated;

export
const _encode_BothwayThroughConnectionInd: $.ASN1Encoder<BothwayThroughConnectionInd> = $._encodeEnumerated;

/* eslint-enable */
