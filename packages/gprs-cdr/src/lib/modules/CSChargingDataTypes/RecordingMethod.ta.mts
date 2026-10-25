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
const RecordingMethod: typeof _enum_for_RecordingMethod = _enum_for_RecordingMethod;

/**
 * @summary RecordingMethod_inCallRecord
 * @constant
 * @type {number}
 */
export
const RecordingMethod_inCallRecord: _enum_for_RecordingMethod.inCallRecord = RecordingMethod.inCallRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inCallRecord
 * @constant
 * @type {number}
 */
export
const inCallRecord: _enum_for_RecordingMethod.inCallRecord = RecordingMethod.inCallRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RecordingMethod_inSSRecord
 * @constant
 * @type {number}
 */
export
const RecordingMethod_inSSRecord: _enum_for_RecordingMethod.inSSRecord = RecordingMethod.inSSRecord; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inSSRecord
 * @constant
 * @type {number}
 */
export
const inSSRecord: _enum_for_RecordingMethod.inSSRecord = RecordingMethod.inSSRecord; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_RecordingMethod: $.ASN1Decoder<RecordingMethod> = $._decodeEnumerated;

export
const _encode_RecordingMethod: $.ASN1Encoder<RecordingMethod> = $._encodeEnumerated;

/* eslint-enable */
