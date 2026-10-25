/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RATInformation {
    unlicensed = 1,
    nBIoT = 2,
    nRLEO = 3,
    nRMEO = 4,
    nRGEO = 5,
    nROTHERSAT = 6,
}

/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RATInformation = _enum_for_RATInformation;

/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RATInformation = _enum_for_RATInformation;

/**
 * @summary RATInformation_unlicensed
 * @constant
 * @type {number}
 */
export
const RATInformation_unlicensed = RATInformation.unlicensed satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlicensed
 * @constant
 * @type {number}
 */
export
const unlicensed = RATInformation.unlicensed satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nBIoT
 * @constant
 * @type {number}
 */
export
const RATInformation_nBIoT = RATInformation.nBIoT satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIoT
 * @constant
 * @type {number}
 */
export
const nBIoT = RATInformation.nBIoT satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRLEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRLEO = RATInformation.nRLEO satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRLEO
 * @constant
 * @type {number}
 */
export
const nRLEO = RATInformation.nRLEO satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRMEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRMEO = RATInformation.nRMEO satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRMEO
 * @constant
 * @type {number}
 */
export
const nRMEO = RATInformation.nRMEO satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRGEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRGEO = RATInformation.nRGEO satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRGEO
 * @constant
 * @type {number}
 */
export
const nRGEO = RATInformation.nRGEO satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nROTHERSAT
 * @constant
 * @type {number}
 */
export
const RATInformation_nROTHERSAT = RATInformation.nROTHERSAT satisfies RATInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nROTHERSAT
 * @constant
 * @type {number}
 */
export
const nROTHERSAT = RATInformation.nROTHERSAT satisfies RATInformation; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RATInformation: $.ASN1Decoder<RATInformation> = $._decodeEnumerated;
export const _encode_RATInformation: $.ASN1Encoder<RATInformation> = $._encodeEnumerated;


/* eslint-enable */
