/* eslint-disable */
import { ASN1Element as _Element, ASN1ConstructionError as _ConstructionError } from "@wildboar/asn1";
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
 * -- additional values are for further study.
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
 * -- additional values are for further study.
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
 * -- additional values are for further study.
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
function _decode_ResponseCondition(el: _Element): ResponseCondition {
    const enumerated = $._decodeEnumerated(el);
    switch (enumerated) {
        case ResponseCondition.intermediateResponse: return ResponseCondition.intermediateResponse;
        case ResponseCondition.lastResponse: return ResponseCondition.lastResponse;
        default:
            throw new _ConstructionError(
                "Invalid ENUMERATED value " + enumerated + " for ResponseCondition.",
                el,
            );
    }
}

export
const _encode_ResponseCondition: $.ASN1Encoder<ResponseCondition> = $._encodeEnumerated as $.ASN1Encoder<ResponseCondition>;

/* eslint-enable */
