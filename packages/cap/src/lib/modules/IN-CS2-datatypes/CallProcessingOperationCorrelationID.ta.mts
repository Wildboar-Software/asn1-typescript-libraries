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
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallProcessingOperationCorrelationID {
    aLERTing = 1,
    sETUP = 5,
    cONNect = 7,
    dISConnect = 69,
    rELease = 77,
    rELeaseCOMPlete = 90,
    fACility = 98,
}

/**
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
type CallProcessingOperationCorrelationID = _enum_for_CallProcessingOperationCorrelationID;

/**
 * @summary CallProcessingOperationCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperationCorrelationID  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
const CallProcessingOperationCorrelationID = _enum_for_CallProcessingOperationCorrelationID;

/**
 * @summary CallProcessingOperationCorrelationID_aLERTing
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_aLERTing = CallProcessingOperationCorrelationID.aLERTing satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLERTing
 * @constant
 * @type {number}
 */
export
const aLERTing = CallProcessingOperationCorrelationID.aLERTing satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_sETUP
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_sETUP = CallProcessingOperationCorrelationID.sETUP satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sETUP
 * @constant
 * @type {number}
 */
export
const sETUP = CallProcessingOperationCorrelationID.sETUP satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_cONNect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_cONNect = CallProcessingOperationCorrelationID.cONNect satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONNect
 * @constant
 * @type {number}
 */
export
const cONNect = CallProcessingOperationCorrelationID.cONNect satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_dISConnect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_dISConnect = CallProcessingOperationCorrelationID.dISConnect satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISConnect
 * @constant
 * @type {number}
 */
export
const dISConnect = CallProcessingOperationCorrelationID.dISConnect satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELease
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELease = CallProcessingOperationCorrelationID.rELease satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease = CallProcessingOperationCorrelationID.rELease satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELeaseCOMPlete = CallProcessingOperationCorrelationID.rELeaseCOMPlete satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete = CallProcessingOperationCorrelationID.rELeaseCOMPlete satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_fACility
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_fACility = CallProcessingOperationCorrelationID.fACility satisfies CallProcessingOperationCorrelationID; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility = CallProcessingOperationCorrelationID.fACility satisfies CallProcessingOperationCorrelationID; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_CallProcessingOperationCorrelationID = $._decodeEnumerated;
export const _encode_CallProcessingOperationCorrelationID = $._encodeEnumerated;


/* eslint-enable */
