/* eslint-disable */
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
const CallProcessingOperation_aLERTing: CallProcessingOperation = CallProcessingOperation.aLERTing; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLERTing
 * @constant
 * @type {number}
 */
export
const aLERTing: CallProcessingOperation = CallProcessingOperation.aLERTing; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_sETUP
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_sETUP: CallProcessingOperation = CallProcessingOperation.sETUP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sETUP
 * @constant
 * @type {number}
 */
export
const sETUP: CallProcessingOperation = CallProcessingOperation.sETUP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_cONNect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_cONNect: CallProcessingOperation = CallProcessingOperation.cONNect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cONNect
 * @constant
 * @type {number}
 */
export
const cONNect: CallProcessingOperation = CallProcessingOperation.cONNect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_dISConnect
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_dISConnect: CallProcessingOperation = CallProcessingOperation.dISConnect; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dISConnect
 * @constant
 * @type {number}
 */
export
const dISConnect: CallProcessingOperation = CallProcessingOperation.dISConnect; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_rELease
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_rELease: CallProcessingOperation = CallProcessingOperation.rELease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELease
 * @constant
 * @type {number}
 */
export
const rELease: CallProcessingOperation = CallProcessingOperation.rELease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_rELeaseCOMPlete: CallProcessingOperation = CallProcessingOperation.rELeaseCOMPlete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rELeaseCOMPlete
 * @constant
 * @type {number}
 */
export
const rELeaseCOMPlete: CallProcessingOperation = CallProcessingOperation.rELeaseCOMPlete; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CallProcessingOperation_fACility
 * @constant
 * @type {number}
 */
export
const CallProcessingOperation_fACility: CallProcessingOperation = CallProcessingOperation.fACility; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary fACility
 * @constant
 * @type {number}
 */
export
const fACility: CallProcessingOperation = CallProcessingOperation.fACility; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CallProcessingOperation: $.ASN1Decoder<CallProcessingOperation> = $._decodeEnumerated;

export
const _encode_CallProcessingOperation: $.ASN1Encoder<CallProcessingOperation> = $._encodeEnumerated;

/* eslint-enable */
