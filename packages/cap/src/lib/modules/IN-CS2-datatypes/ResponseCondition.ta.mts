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
 * @summary ResponseCondition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResponseCondition  ::=  ENUMERATED {intermediateResponse(0), lastResponse(1)
 * 
 * -- additional values are for further study
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
 * -- additional values are for further study
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
 * -- additional values are for further study
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ResponseCondition: typeof _enum_for_ResponseCondition = _enum_for_ResponseCondition;

/**
 * @summary ResponseCondition_intermediateResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_intermediateResponse: _enum_for_ResponseCondition.intermediateResponse = ResponseCondition.intermediateResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary intermediateResponse
 * @constant
 * @type {number}
 */
export
const intermediateResponse: _enum_for_ResponseCondition.intermediateResponse = ResponseCondition.intermediateResponse; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ResponseCondition_lastResponse
 * @constant
 * @type {number}
 */
export
const ResponseCondition_lastResponse: _enum_for_ResponseCondition.lastResponse = ResponseCondition.lastResponse; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lastResponse
 * @constant
 * @type {number}
 */
export
const lastResponse: _enum_for_ResponseCondition.lastResponse = ResponseCondition.lastResponse; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ResponseCondition: $.ASN1Decoder<number> = $._decodeEnumerated;
export const _encode_ResponseCondition: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
