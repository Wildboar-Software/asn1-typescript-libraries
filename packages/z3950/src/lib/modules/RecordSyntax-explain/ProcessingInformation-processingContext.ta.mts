/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ProcessingInformation_processingContext
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessingInformation-processingContext ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ProcessingInformation_processingContext = INTEGER;

/**
 * @summary ProcessingInformation_processingContext_access
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_access: ProcessingInformation_processingContext = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_access
 * @constant
 * @type {number}
 */
export
const access: ProcessingInformation_processingContext = ProcessingInformation_processingContext_access; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_search
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_search: ProcessingInformation_processingContext = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_search
 * @constant
 * @type {number}
 */
export
const search: ProcessingInformation_processingContext = ProcessingInformation_processingContext_search; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_retrieval
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_retrieval: ProcessingInformation_processingContext = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_retrieval
 * @constant
 * @type {number}
 */
export
const retrieval: ProcessingInformation_processingContext = ProcessingInformation_processingContext_retrieval; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_presentation
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_record_presentation: ProcessingInformation_processingContext = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_presentation
 * @constant
 * @type {number}
 */
export
const record_presentation: ProcessingInformation_processingContext = ProcessingInformation_processingContext_record_presentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_handling
 * @constant
 * @type {number}
 */
export
const ProcessingInformation_processingContext_record_handling: ProcessingInformation_processingContext = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ProcessingInformation_processingContext_record_handling
 * @constant
 * @type {number}
 */
export
const record_handling: ProcessingInformation_processingContext = ProcessingInformation_processingContext_record_handling; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ProcessingInformation_processingContext = $._decodeInteger;
export const _encode_ProcessingInformation_processingContext = $._encodeInteger;


/* eslint-enable */
