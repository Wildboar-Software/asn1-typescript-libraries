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
const RATInformation: typeof _enum_for_RATInformation = _enum_for_RATInformation;

/**
 * @summary RATInformation_unlicensed
 * @constant
 * @type {number}
 */
export
const RATInformation_unlicensed: _enum_for_RATInformation.unlicensed = RATInformation.unlicensed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlicensed
 * @constant
 * @type {number}
 */
export
const unlicensed: _enum_for_RATInformation.unlicensed = RATInformation.unlicensed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nBIoT
 * @constant
 * @type {number}
 */
export
const RATInformation_nBIoT: _enum_for_RATInformation.nBIoT = RATInformation.nBIoT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIoT
 * @constant
 * @type {number}
 */
export
const nBIoT: _enum_for_RATInformation.nBIoT = RATInformation.nBIoT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRLEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRLEO: _enum_for_RATInformation.nRLEO = RATInformation.nRLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRLEO
 * @constant
 * @type {number}
 */
export
const nRLEO: _enum_for_RATInformation.nRLEO = RATInformation.nRLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRMEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRMEO: _enum_for_RATInformation.nRMEO = RATInformation.nRMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRMEO
 * @constant
 * @type {number}
 */
export
const nRMEO: _enum_for_RATInformation.nRMEO = RATInformation.nRMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRGEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRGEO: _enum_for_RATInformation.nRGEO = RATInformation.nRGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRGEO
 * @constant
 * @type {number}
 */
export
const nRGEO: _enum_for_RATInformation.nRGEO = RATInformation.nRGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nROTHERSAT
 * @constant
 * @type {number}
 */
export
const RATInformation_nROTHERSAT: _enum_for_RATInformation.nROTHERSAT = RATInformation.nROTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nROTHERSAT
 * @constant
 * @type {number}
 */
export
const nROTHERSAT: _enum_for_RATInformation.nROTHERSAT = RATInformation.nROTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RATInformation: $.ASN1Decoder<RATInformation> = $._decodeEnumerated;
export const _encode_RATInformation: $.ASN1Encoder<RATInformation> = $._encodeEnumerated;


/* eslint-enable */
