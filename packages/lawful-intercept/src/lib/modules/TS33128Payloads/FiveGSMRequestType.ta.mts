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
const FiveGSMRequestType: typeof _enum_for_FiveGSMRequestType = _enum_for_FiveGSMRequestType;

/**
 * @summary FiveGSMRequestType_initialRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialRequest: _enum_for_FiveGSMRequestType.initialRequest = FiveGSMRequestType.initialRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialRequest
 * @constant
 * @type {number}
 */
export
const initialRequest: _enum_for_FiveGSMRequestType.initialRequest = FiveGSMRequestType.initialRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingPDUSession: _enum_for_FiveGSMRequestType.existingPDUSession = FiveGSMRequestType.existingPDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingPDUSession
 * @constant
 * @type {number}
 */
export
const existingPDUSession: _enum_for_FiveGSMRequestType.existingPDUSession = FiveGSMRequestType.existingPDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_initialEmergencyRequest: _enum_for_FiveGSMRequestType.initialEmergencyRequest = FiveGSMRequestType.initialEmergencyRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialEmergencyRequest
 * @constant
 * @type {number}
 */
export
const initialEmergencyRequest: _enum_for_FiveGSMRequestType.initialEmergencyRequest = FiveGSMRequestType.initialEmergencyRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_existingEmergencyPDUSession: _enum_for_FiveGSMRequestType.existingEmergencyPDUSession = FiveGSMRequestType.existingEmergencyPDUSession; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary existingEmergencyPDUSession
 * @constant
 * @type {number}
 */
export
const existingEmergencyPDUSession: _enum_for_FiveGSMRequestType.existingEmergencyPDUSession = FiveGSMRequestType.existingEmergencyPDUSession; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_modificationRequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_modificationRequest: _enum_for_FiveGSMRequestType.modificationRequest = FiveGSMRequestType.modificationRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary modificationRequest
 * @constant
 * @type {number}
 */
export
const modificationRequest: _enum_for_FiveGSMRequestType.modificationRequest = FiveGSMRequestType.modificationRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_reserved
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_reserved: _enum_for_FiveGSMRequestType.reserved = FiveGSMRequestType.reserved; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary reserved
 * @constant
 * @type {number}
 */
export
const reserved: _enum_for_FiveGSMRequestType.reserved = FiveGSMRequestType.reserved; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary FiveGSMRequestType_mAPDURequest
 * @constant
 * @type {number}
 */
export
const FiveGSMRequestType_mAPDURequest: _enum_for_FiveGSMRequestType.mAPDURequest = FiveGSMRequestType.mAPDURequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mAPDURequest
 * @constant
 * @type {number}
 */
export
const mAPDURequest: _enum_for_FiveGSMRequestType.mAPDURequest = FiveGSMRequestType.mAPDURequest; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_FiveGSMRequestType: $.ASN1Decoder<FiveGSMRequestType> = $._decodeEnumerated;
export const _encode_FiveGSMRequestType: $.ASN1Encoder<FiveGSMRequestType> = $._encodeEnumerated;


/* eslint-enable */
