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
const BothwayThroughConnectionInd: typeof _enum_for_BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd_bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathRequired: _enum_for_BothwayThroughConnectionInd.bothwayPathRequired = BothwayThroughConnectionInd.bothwayPathRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathRequired: _enum_for_BothwayThroughConnectionInd.bothwayPathRequired = BothwayThroughConnectionInd.bothwayPathRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BothwayThroughConnectionInd_bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathNotRequired: _enum_for_BothwayThroughConnectionInd.bothwayPathNotRequired = BothwayThroughConnectionInd.bothwayPathNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathNotRequired: _enum_for_BothwayThroughConnectionInd.bothwayPathNotRequired = BothwayThroughConnectionInd.bothwayPathNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_BothwayThroughConnectionInd: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_BothwayThroughConnectionInd: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
