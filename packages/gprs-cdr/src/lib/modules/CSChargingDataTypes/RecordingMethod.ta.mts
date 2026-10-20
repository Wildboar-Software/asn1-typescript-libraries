/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RecordingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordingMethod  ::=  ENUMERATED {
 *    inCallRecord    ( 0 ),
 *    inSSRecord      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RecordingMethod {
    inCallRecord = 0,
    inSSRecord = 1,
}

/**
 * @summary RecordingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordingMethod  ::=  ENUMERATED {
 *    inCallRecord    ( 0 ),
 *    inSSRecord      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
type RecordingMethod = _enum_for_RecordingMethod;

/**
 * @summary RecordingMethod
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordingMethod  ::=  ENUMERATED {
 *    inCallRecord    ( 0 ),
 *    inSSRecord      ( 1 ) }
 * ```
 * 
 * @enum {number}
 */
export
const RecordingMethod = _enum_for_RecordingMethod;

/**
 * @summary RecordingMethod_inCallRecord
 * @constant
 * @type {number}
 */
export
const RecordingMethod_inCallRecord: RecordingMethod = RecordingMethod.inCallRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCallRecord
 * @constant
 * @type {number}
 */
export
const inCallRecord: RecordingMethod = RecordingMethod.inCallRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RecordingMethod_inSSRecord
 * @constant
 * @type {number}
 */
export
const RecordingMethod_inSSRecord: RecordingMethod = RecordingMethod.inSSRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inSSRecord
 * @constant
 * @type {number}
 */
export
const inSSRecord: RecordingMethod = RecordingMethod.inSSRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RecordingMethod: $.ASN1Decoder<RecordingMethod> = $._decodeEnumerated;

export
const _encode_RecordingMethod: $.ASN1Encoder<RecordingMethod> = $._encodeEnumerated;

/* eslint-enable */
