/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CallProcessingOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperation  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CallProcessingOperation {
    aLERTing = 1,
    sETUP = 5,
    cONNect = 7,
    dISConnect = 69,
    rELease = 77,
    rELeaseCOMPlete = 90,
    fACility = 98,
}

/**
 * @summary CallProcessingOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperation  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
type CallProcessingOperation = _enum_for_CallProcessingOperation;

/**
 * @summary CallProcessingOperation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallProcessingOperation  ::=  ENUMERATED {
 *   aLERTing(1), sETUP(5), cONNect(7), dISConnect(69), rELease(77),
 *   rELeaseCOMPlete(90), fACility(98)}
 * ```
 * 
 * @enum {number}
 */
export
const CallProcessingOperation = _enum_for_CallProcessingOperation;

/**
 * @summary CallProcessingOperation_aLERTing
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_aLERTing = CallProcessingOperation.aLERTing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLERTing
 * @constant
 * @type {number}
 */
export
const aLERTing = CallProcessingOperation.aLERTing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_sETUP
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_sETUP = CallProcessingOperation.sETUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sETUP
 * @constant
 * @type {number}
 */
export
const sETUP = CallProcessingOperation.sETUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_cONNect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_cONNect = CallProcessingOperation.cONNect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONNect
 * @constant
 * @type {number}
 */
export
const cONNect = CallProcessingOperation.cONNect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_dISConnect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_dISConnect = CallProcessingOperation.dISConnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISConnect
 * @constant
 * @type {number}
 */
export
const dISConnect = CallProcessingOperation.dISConnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_rELease
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_rELease = CallProcessingOperation.rELease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease = CallProcessingOperation.rELease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_rELeaseCOMPlete = CallProcessingOperation.rELeaseCOMPlete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete = CallProcessingOperation.rELeaseCOMPlete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_fACility
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_fACility = CallProcessingOperation.fACility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility = CallProcessingOperation.fACility; /* SHORT_NAMED_ENUMERATED_VALUE */

export
function _decode_CallProcessingOperation(el: _Element): CallProcessingOperation {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case CallProcessingOperation.aLERTing: return CallProcessingOperation.aLERTing;
        case CallProcessingOperation.sETUP: return CallProcessingOperation.sETUP;
        case CallProcessingOperation.cONNect: return CallProcessingOperation.cONNect;
        case CallProcessingOperation.dISConnect: return CallProcessingOperation.dISConnect;
        case CallProcessingOperation.rELease: return CallProcessingOperation.rELease;
        case CallProcessingOperation.rELeaseCOMPlete: return CallProcessingOperation.rELeaseCOMPlete;
        case CallProcessingOperation.fACility: return CallProcessingOperation.fACility;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for CallProcessingOperation.",
                el,
            );
    }
}

export
const _encode_CallProcessingOperation: $.ASN1Encoder<CallProcessingOperation> = $._encodeEnumerated as $.ASN1Encoder<CallProcessingOperation>;

/* eslint-enable */
