/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_CAMELSMSInformation_defaultSMSHandling {
    continueTransaction = 0,
    releaseTransaction = 1,
}

/**
 * @summary CAMELSMSInformation_defaultSMSHandling
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMELSMSInformation-defaultSMSHandling ::= ENUMERATED {
 *    continueTransaction    ( 0 ),
 *    releaseTransaction     ( 1 ),
 *    ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CAMELSMSInformation_defaultSMSHandling = _enum_for_CAMELSMSInformation_defaultSMSHandling | ENUMERATED;

/**
 * @summary CAMELSMSInformation_defaultSMSHandling_continueTransaction
 * @constant
 * @type {number}
 */
export
const CAMELSMSInformation_defaultSMSHandling_continueTransaction: _enum_for_CAMELSMSInformation_defaultSMSHandling.continueTransaction = _enum_for_CAMELSMSInformation_defaultSMSHandling.continueTransaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary continueTransaction
 * @constant
 * @type {number}
 */
export
const continueTransaction: _enum_for_CAMELSMSInformation_defaultSMSHandling.continueTransaction = CAMELSMSInformation_defaultSMSHandling_continueTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CAMELSMSInformation_defaultSMSHandling_releaseTransaction
 * @constant
 * @type {number}
 */
export
const CAMELSMSInformation_defaultSMSHandling_releaseTransaction: _enum_for_CAMELSMSInformation_defaultSMSHandling.releaseTransaction = _enum_for_CAMELSMSInformation_defaultSMSHandling.releaseTransaction; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary releaseTransaction
 * @constant
 * @type {number}
 */
export
const releaseTransaction: _enum_for_CAMELSMSInformation_defaultSMSHandling.releaseTransaction = CAMELSMSInformation_defaultSMSHandling_releaseTransaction; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CAMELSMSInformation_defaultSMSHandling: $.ASN1Decoder<CAMELSMSInformation_defaultSMSHandling> = $._decodeEnumerated;

export
const _encode_CAMELSMSInformation_defaultSMSHandling: $.ASN1Encoder<CAMELSMSInformation_defaultSMSHandling> = $._encodeEnumerated;

/* eslint-enable */
