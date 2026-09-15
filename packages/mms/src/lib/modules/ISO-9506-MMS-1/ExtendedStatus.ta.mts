/* eslint-disable */
import {
    BIT_STRING,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ExtendedStatus
 * @description
 * 
 * Companion-standard Extended Status (`csr`): four-bit string of VMD booleans
 * `&safety-Interlocks-Violated`, `&any-Resource-Power-On`,
 * `&all-Resources-Calibrated`, and `&local-Control`. Present in Status Response
 * only if `csr` has been negotiated. SIZE(4). ISO 9506-1:2003
 * §7.2.1.30–§7.2.1.33, §10.2.5; ISO 9506-2:2003 §10.2.3.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtendedStatus  ::=  BIT STRING {
 *    safetyInterlocksViolated         (0),
 *    anyPhysicalResourcePowerOn       (1),
 *    allPhysicalResourcesCalibrated   (2),
 *    localControl                     (3) } (SIZE(4))
 * ```
 */
export
type ExtendedStatus = BIT_STRING;

/**
 * @summary ExtendedStatus_safetyInterlocksViolated
 * @description
 *
 * Bit 0: `&safety-Interlocks-Violated`. True if safety interlocks have been
 * violated since last reset (robots and similar). Reset method is a local
 * matter. `csr` only. ISO 9506-1:2003 §7.2.1.30, §10.2.5.
 *
 * @constant
 */
export
const ExtendedStatus_safetyInterlocksViolated: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary safetyInterlocksViolated
 * @description
 *
 * Bit 0: `&safety-Interlocks-Violated`. True if safety interlocks have been
 * violated since last reset. `csr` only. ISO 9506-1:2003 §7.2.1.30, §10.2.5.
 *
 * @constant
 */
export
const safetyInterlocksViolated: number = ExtendedStatus_safetyInterlocksViolated; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_anyPhysicalResourcePowerOn
 * @description
 *
 * Bit 1: `&any-Resource-Power-On`. Logical OR of power-on across physical
 * resources. `csr` only. ISO 9506-1:2003 §7.2.1.31, §10.2.5.
 *
 * @constant
 */
export
const ExtendedStatus_anyPhysicalResourcePowerOn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary anyPhysicalResourcePowerOn
 * @description
 *
 * Bit 1: `&any-Resource-Power-On`. True if any physical resource has power
 * applied. `csr` only. ISO 9506-1:2003 §7.2.1.31, §10.2.5.
 *
 * @constant
 */
export
const anyPhysicalResourcePowerOn: number = ExtendedStatus_anyPhysicalResourcePowerOn; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_allPhysicalResourcesCalibrated
 * @description
 *
 * Bit 2: `&all-Resources-Calibrated`. True if every physical resource that has
 * calibration is calibrated. `csr` only. ISO 9506-1:2003 §7.2.1.32, §10.2.5.
 *
 * @constant
 */
export
const ExtendedStatus_allPhysicalResourcesCalibrated: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary allPhysicalResourcesCalibrated
 * @description
 *
 * Bit 2: `&all-Resources-Calibrated`. `csr` only. ISO 9506-1:2003 §7.2.1.32,
 * §10.2.5.
 *
 * @constant
 */
export
const allPhysicalResourcesCalibrated: number = ExtendedStatus_allPhysicalResourcesCalibrated; /* SHORT_NAMED_BIT */

/**
 * @summary ExtendedStatus_localControl
 * @description
 *
 * Bit 3: `&local-Control`. True if a local agent (operator or automatic
 * procedure) has control of any physical resource, inhibiting remote control.
 * Interrelated with Operation State and Logical Status (ISO 9506-1:2003 Table
 * 6). `csr` only. ISO 9506-1:2003 §7.2.1.33, §10.2.5.
 *
 * @constant
 */
export
const ExtendedStatus_localControl: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary localControl
 * @description
 *
 * Bit 3: `&local-Control`. True if a local agent has control of any physical
 * resource. `csr` only. ISO 9506-1:2003 §7.2.1.33, §10.2.5.
 *
 * @constant
 */
export
const localControl: number = ExtendedStatus_localControl; /* SHORT_NAMED_BIT */
export const _decode_ExtendedStatus = $._decodeBitString;
export const _encode_ExtendedStatus = $._encodeBitString;


/* eslint-enable */
