/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are outside the scope of this capability set
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ResponseCondition {
    intermediateResponse = 0,
    lastResponse = 1,
}

/**
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are outside the scope of this capability set
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ResponseCondition = _enum_for_ResponseCondition;

/**
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are outside the scope of this capability set
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ResponseCondition = _enum_for_ResponseCondition;

/**
 * @summary ResponseCondition_intermediateResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_intermediateResponse: ResponseCondition = ResponseCondition.intermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediateResponse
 * @constant
 * @type {number}
 */
export
const intermediateResponse: ResponseCondition = ResponseCondition.intermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseCondition_lastResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_lastResponse: ResponseCondition = ResponseCondition.lastResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastResponse
 * @constant
 * @type {number}
 */
export
const lastResponse: ResponseCondition = ResponseCondition.lastResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ResponseCondition: $.ASN1Decoder<ResponseCondition> = $._decodeEnumerated;

export
const _encode_ResponseCondition: $.ASN1Encoder<ResponseCondition> = $._encodeEnumerated;

/* eslint-enable */
