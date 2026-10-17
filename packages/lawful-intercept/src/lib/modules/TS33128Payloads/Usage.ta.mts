/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Usage
 * @description
 * 
 * The Usage represents the type of usage made of the location measurement from
 * the UE, the Usage is derived from the data present in the Usage type defined
 * in TS 29.572 [24] clause 6.1.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Usage {
    /**
     * @description
     *
     * Not successful.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.55.
     */
    unsuccess = 1,
    /**
     * @description
     *
     * Successful result not used.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.55.
     */
    successResultsNotUsed = 2,
    /**
     * @description
     *
     * Successful result used to verify the location estimate.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.55.
     */
    successResultsUsedToVerifyLocation = 3,
    /**
     * @description
     *
     * Successful result used to generate the location estimate.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.55.
     */
    successResultsUsedToGenerateLocation = 4,
    /**
     * @description
     *
     * Successful method not determined.
     *
     * 3GPP TS 33.128, clause 7.3.3.2.55.
     */
    successMethodNotDetermined = 5,
}

/**
 * @summary Usage
 * @description
 * 
 * The Usage represents the type of usage made of the location measurement from
 * the UE, the Usage is derived from the data present in the Usage type defined
 * in TS 29.572 [24] clause 6.1.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Usage = _enum_for_Usage;

/**
 * @summary Usage
 * @description
 * 
 * The Usage represents the type of usage made of the location measurement from
 * the UE, the Usage is derived from the data present in the Usage type defined
 * in TS 29.572 [24] clause 6.1.6.3.9.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Usage  ::=  ENUMERATED
 * {
 *     unsuccess(1),
 *     successResultsNotUsed(2),
 *     successResultsUsedToVerifyLocation(3),
 *     successResultsUsedToGenerateLocation(4),
 *     successMethodNotDetermined(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const Usage = _enum_for_Usage;

/**
 * @summary Usage_unsuccess
 * @description
 *
 * Not successful.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const Usage_unsuccess: Usage = Usage.unsuccess; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unsuccess
 * @description
 *
 * Not successful.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const unsuccess: Usage = Usage.unsuccess; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsNotUsed
 * @description
 *
 * Successful result not used.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const Usage_successResultsNotUsed: Usage = Usage.successResultsNotUsed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsNotUsed
 * @description
 *
 * Successful result not used.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const successResultsNotUsed: Usage = Usage.successResultsNotUsed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsUsedToVerifyLocation
 * @description
 *
 * Successful result used to verify the location estimate.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const Usage_successResultsUsedToVerifyLocation: Usage = Usage.successResultsUsedToVerifyLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsUsedToVerifyLocation
 * @description
 *
 * Successful result used to verify the location estimate.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const successResultsUsedToVerifyLocation: Usage = Usage.successResultsUsedToVerifyLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successResultsUsedToGenerateLocation
 * @description
 *
 * Successful result used to generate the location estimate.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const Usage_successResultsUsedToGenerateLocation: Usage = Usage.successResultsUsedToGenerateLocation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successResultsUsedToGenerateLocation
 * @description
 *
 * Successful result used to generate the location estimate.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const successResultsUsedToGenerateLocation: Usage = Usage.successResultsUsedToGenerateLocation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Usage_successMethodNotDetermined
 * @description
 *
 * Successful method not determined.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const Usage_successMethodNotDetermined: Usage = Usage.successMethodNotDetermined; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary successMethodNotDetermined
 * @description
 *
 * Successful method not determined.
 *
 * 3GPP TS 33.128, clause 7.3.3.2.55.
 *
 * @constant
 * @type {number}
 */
export
const successMethodNotDetermined: Usage = Usage.successMethodNotDetermined; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Usage: $.ASN1Decoder<Usage> = $._decodeEnumerated;
export const _encode_Usage: $.ASN1Encoder<Usage> = $._encodeEnumerated;


/* eslint-enable */
