/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
const CallProcessingOperationCorrelationID: typeof _enum_for_CallProcessingOperationCorrelationID = _enum_for_CallProcessingOperationCorrelationID;

/**
 * @summary CallProcessingOperationCorrelationID_aLERTing
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_aLERTing: _enum_for_CallProcessingOperationCorrelationID.aLERTing = CallProcessingOperationCorrelationID.aLERTing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLERTing
 * @constant
 * @type {number}
 */
export
const aLERTing: _enum_for_CallProcessingOperationCorrelationID.aLERTing = CallProcessingOperationCorrelationID.aLERTing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_sETUP
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_sETUP: _enum_for_CallProcessingOperationCorrelationID.sETUP = CallProcessingOperationCorrelationID.sETUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sETUP
 * @constant
 * @type {number}
 */
export
const sETUP: _enum_for_CallProcessingOperationCorrelationID.sETUP = CallProcessingOperationCorrelationID.sETUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_cONNect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_cONNect: _enum_for_CallProcessingOperationCorrelationID.cONNect = CallProcessingOperationCorrelationID.cONNect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONNect
 * @constant
 * @type {number}
 */
export
const cONNect: _enum_for_CallProcessingOperationCorrelationID.cONNect = CallProcessingOperationCorrelationID.cONNect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_dISConnect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_dISConnect: _enum_for_CallProcessingOperationCorrelationID.dISConnect = CallProcessingOperationCorrelationID.dISConnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISConnect
 * @constant
 * @type {number}
 */
export
const dISConnect: _enum_for_CallProcessingOperationCorrelationID.dISConnect = CallProcessingOperationCorrelationID.dISConnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELease
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELease: _enum_for_CallProcessingOperationCorrelationID.rELease = CallProcessingOperationCorrelationID.rELease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease: _enum_for_CallProcessingOperationCorrelationID.rELease = CallProcessingOperationCorrelationID.rELease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_rELeaseCOMPlete: _enum_for_CallProcessingOperationCorrelationID.rELeaseCOMPlete = CallProcessingOperationCorrelationID.rELeaseCOMPlete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete: _enum_for_CallProcessingOperationCorrelationID.rELeaseCOMPlete = CallProcessingOperationCorrelationID.rELeaseCOMPlete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperationCorrelationID_fACility
 * @constant
 * @type {number}
 */
export
const CallProcessingOperationCorrelationID_fACility: _enum_for_CallProcessingOperationCorrelationID.fACility = CallProcessingOperationCorrelationID.fACility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility: _enum_for_CallProcessingOperationCorrelationID.fACility = CallProcessingOperationCorrelationID.fACility; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_CallProcessingOperationCorrelationID(el: _Element): CallProcessingOperationCorrelationID {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case CallProcessingOperationCorrelationID.aLERTing: return CallProcessingOperationCorrelationID.aLERTing;
        case CallProcessingOperationCorrelationID.sETUP: return CallProcessingOperationCorrelationID.sETUP;
        case CallProcessingOperationCorrelationID.cONNect: return CallProcessingOperationCorrelationID.cONNect;
        case CallProcessingOperationCorrelationID.dISConnect: return CallProcessingOperationCorrelationID.dISConnect;
        case CallProcessingOperationCorrelationID.rELease: return CallProcessingOperationCorrelationID.rELease;
        case CallProcessingOperationCorrelationID.rELeaseCOMPlete: return CallProcessingOperationCorrelationID.rELeaseCOMPlete;
        case CallProcessingOperationCorrelationID.fACility: return CallProcessingOperationCorrelationID.fACility;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for CallProcessingOperationCorrelationID.",
                el,
            );
    }
}

export
const _encode_CallProcessingOperationCorrelationID: $.ASN1Encoder<CallProcessingOperationCorrelationID> = $._encodeEnumerated as $.ASN1Encoder<CallProcessingOperationCorrelationID>;

/* eslint-enable */
