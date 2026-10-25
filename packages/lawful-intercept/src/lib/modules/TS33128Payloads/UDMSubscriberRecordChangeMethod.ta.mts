/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UDMSubscriberRecordChangeMethod {
    /**
     * @description
     *
     * Indicates that PEI is the identifier changed as part of the service
     * operation.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    pEIChange = 1,
    /**
     * @description
     *
     * Indicates that SUPI is the identifier changed as part of the service
     * operation.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    sUPIChange = 2,
    /**
     * @description
     *
     * Indicates that GPSI is the identifier changed as part of the service
     * operation.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    gPSIChange = 3,
    /**
     * @description
     *
     * Used when UE de-provisioning is the cause of the service operation.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    uEDeprovisioning = 4,
    /**
     * @description
     *
     * Used when no information is available.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    unknown = 5,
    /**
     * @description
     *
     * Indicates that NSSAI or CAG ID is changed as part of the service
     * operation.
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    serviceIDChange = 6,
    /**
     * @description
     *
     * Indicates that multiple identifiers have been changed with one service
     * operation (e.g. pEIChange and gPSIChange).
     *
     * 3GPP TS 33.128, clause 7.2.2.3.3.
     */
    multipleIDChanges = 7,
}

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMSubscriberRecordChangeMethod  ::=  ENUMERATED
 * {
 *     pEIChange(1),
 *     sUPIChange(2),
 *     gPSIChange(3),
 *     uEDeprovisioning(4),
 *     unknown(5),
 *     serviceIDChange(6),
 *     multipleIDChanges(7)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UDMSubscriberRecordChangeMethod = _enum_for_UDMSubscriberRecordChangeMethod;

/**
 * @summary UDMSubscriberRecordChangeMethod_pEIChange
 * @description
 *
 * Indicates that PEI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_pEIChange = UDMSubscriberRecordChangeMethod.pEIChange satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pEIChange
 * @description
 *
 * Indicates that PEI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const pEIChange = UDMSubscriberRecordChangeMethod.pEIChange satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_sUPIChange
 * @description
 *
 * Indicates that SUPI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_sUPIChange = UDMSubscriberRecordChangeMethod.sUPIChange satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sUPIChange
 * @description
 *
 * Indicates that SUPI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const sUPIChange = UDMSubscriberRecordChangeMethod.sUPIChange satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_gPSIChange
 * @description
 *
 * Indicates that GPSI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_gPSIChange = UDMSubscriberRecordChangeMethod.gPSIChange satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gPSIChange
 * @description
 *
 * Indicates that GPSI is the identifier changed as part of the service
 * operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const gPSIChange = UDMSubscriberRecordChangeMethod.gPSIChange satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_uEDeprovisioning
 * @description
 *
 * Used when UE de-provisioning is the cause of the service operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_uEDeprovisioning = UDMSubscriberRecordChangeMethod.uEDeprovisioning satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uEDeprovisioning
 * @description
 *
 * Used when UE de-provisioning is the cause of the service operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const uEDeprovisioning = UDMSubscriberRecordChangeMethod.uEDeprovisioning satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_unknown
 * @description
 *
 * Used when no information is available.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_unknown = UDMSubscriberRecordChangeMethod.unknown satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknown
 * @description
 *
 * Used when no information is available.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const unknown = UDMSubscriberRecordChangeMethod.unknown satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_serviceIDChange
 * @description
 *
 * Indicates that NSSAI or CAG ID is changed as part of the service operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_serviceIDChange = UDMSubscriberRecordChangeMethod.serviceIDChange satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serviceIDChange
 * @description
 *
 * Indicates that NSSAI or CAG ID is changed as part of the service operation.
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const serviceIDChange = UDMSubscriberRecordChangeMethod.serviceIDChange satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UDMSubscriberRecordChangeMethod_multipleIDChanges
 * @description
 *
 * Indicates that multiple identifiers have been changed with one service
 * operation (e.g. pEIChange and gPSIChange).
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const UDMSubscriberRecordChangeMethod_multipleIDChanges = UDMSubscriberRecordChangeMethod.multipleIDChanges satisfies UDMSubscriberRecordChangeMethod; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary multipleIDChanges
 * @description
 *
 * Indicates that multiple identifiers have been changed with one service
 * operation (e.g. pEIChange and gPSIChange).
 *
 * 3GPP TS 33.128, clause 7.2.2.3.3.
 *
 * @constant
 * @type {number}
 */
export
const multipleIDChanges = UDMSubscriberRecordChangeMethod.multipleIDChanges satisfies UDMSubscriberRecordChangeMethod; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UDMSubscriberRecordChangeMethod: $.ASN1Decoder<UDMSubscriberRecordChangeMethod> = $._decodeEnumerated;
export const _encode_UDMSubscriberRecordChangeMethod: $.ASN1Encoder<UDMSubscriberRecordChangeMethod> = $._encodeEnumerated;


/* eslint-enable */
