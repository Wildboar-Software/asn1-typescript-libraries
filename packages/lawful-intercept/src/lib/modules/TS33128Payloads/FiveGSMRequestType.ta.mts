/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * Type of request as described in TS 24.501 [13] clause 9.11.3.47, if
 * available. Otherwise depending on the REJECT event the following request type
 * shall be reported: PDU SESSION ESTABLISHMENT REJECT: The request type shall
 * be set to the one reported within the PDU SESSION ESTABLISHMENT or if there
 * hasn't been one reported or is no longer available it should be set to
 * "initial request". PDU SESSION MODIFICATION REJECT: "modification request".
 * PDU SESSION RELEASE REJECT: no request type shall be set. PDU SESSION
 * MODIFICATION COMMAND REJECT: "modification request".
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_FiveGSMRequestType {
    initialRequest = 1,
    existingPDUSession = 2,
    initialEmergencyRequest = 3,
    existingEmergencyPDUSession = 4,
    modificationRequest = 5,
    reserved = 6,
    mAPDURequest = 7,
}

/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * Type of request as described in TS 24.501 [13] clause 9.11.3.47, if
 * available. Otherwise depending on the REJECT event the following request type
 * shall be reported: PDU SESSION ESTABLISHMENT REJECT: The request type shall
 * be set to the one reported within the PDU SESSION ESTABLISHMENT or if there
 * hasn't been one reported or is no longer available it should be set to
 * "initial request". PDU SESSION MODIFICATION REJECT: "modification request".
 * PDU SESSION RELEASE REJECT: no request type shall be set. PDU SESSION
 * MODIFICATION COMMAND REJECT: "modification request".
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type FiveGSMRequestType = _enum_for_FiveGSMRequestType;

/**
 * @summary FiveGSMRequestType
 * @description
 * 
 * Type of request as described in TS 24.501 [13] clause 9.11.3.47, if
 * available. Otherwise depending on the REJECT event the following request type
 * shall be reported: PDU SESSION ESTABLISHMENT REJECT: The request type shall
 * be set to the one reported within the PDU SESSION ESTABLISHMENT or if there
 * hasn't been one reported or is no longer available it should be set to
 * "initial request". PDU SESSION MODIFICATION REJECT: "modification request".
 * PDU SESSION RELEASE REJECT: no request type shall be set. PDU SESSION
 * MODIFICATION COMMAND REJECT: "modification request".
 *
 * 3GPP TS 33.128, clause 6.2.3.2.6.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FiveGSMRequestType  ::=  ENUMERATED
 * {
 *     initialRequest(1),
 *     existingPDUSession(2),
 *     initialEmergencyRequest(3),
 *     existingEmergencyPDUSession(4),
 *     modificationRequest(5),
 *     reserved(6),
 *     mAPDURequest(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const FiveGSMRequestType = _enum_for_FiveGSMRequestType;

/**
 * @summary FiveGSMRequestType_initialRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialRequest = FiveGSMRequestType.initialRequest satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRequest
 * @constant
 * @type {number}
 */
export
const initialRequest = FiveGSMRequestType.initialRequest satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingPDUSession = FiveGSMRequestType.existingPDUSession satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingPDUSession
 * @constant
 * @type {number}
 */
export
const existingPDUSession = FiveGSMRequestType.existingPDUSession satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialEmergencyRequest = FiveGSMRequestType.initialEmergencyRequest satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const initialEmergencyRequest = FiveGSMRequestType.initialEmergencyRequest satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingEmergencyPDUSession = FiveGSMRequestType.existingEmergencyPDUSession satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const existingEmergencyPDUSession = FiveGSMRequestType.existingEmergencyPDUSession satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_modificationRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_modificationRequest = FiveGSMRequestType.modificationRequest satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationRequest
 * @constant
 * @type {number}
 */
export
const modificationRequest = FiveGSMRequestType.modificationRequest satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_reserved
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_reserved = FiveGSMRequestType.reserved satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved = FiveGSMRequestType.reserved satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_mAPDURequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_mAPDURequest = FiveGSMRequestType.mAPDURequest satisfies FiveGSMRequestType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAPDURequest
 * @constant
 * @type {number}
 */
export
const mAPDURequest = FiveGSMRequestType.mAPDURequest satisfies FiveGSMRequestType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGSMRequestType: $.ASN1Decoder<FiveGSMRequestType> = $._decodeEnumerated;
export const _encode_FiveGSMRequestType: $.ASN1Encoder<FiveGSMRequestType> = $._encodeEnumerated;


/* eslint-enable */
