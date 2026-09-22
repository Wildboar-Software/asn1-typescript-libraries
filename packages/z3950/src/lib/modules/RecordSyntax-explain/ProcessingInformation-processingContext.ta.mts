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

let _cached_decoder_for_ProcessingInformation_processingContext: $.ASN1Decoder<ProcessingInformation_processingContext> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessingInformation_processingContext
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProcessingInformation_processingContext (el: _Element): ProcessingInformation_processingContext {
    if (!_cached_decoder_for_ProcessingInformation_processingContext) { _cached_decoder_for_ProcessingInformation_processingContext = $._decodeInteger; }
    return _cached_decoder_for_ProcessingInformation_processingContext(el);
}

let _cached_encoder_for_ProcessingInformation_processingContext: $.ASN1Encoder<ProcessingInformation_processingContext> | null = null;

/**
 * @summary Encodes a(n) ProcessingInformation_processingContext into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessingInformation_processingContext, encoded as an ASN.1 Element.
 */
export
function _encode_ProcessingInformation_processingContext (value: ProcessingInformation_processingContext, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProcessingInformation_processingContext) { _cached_encoder_for_ProcessingInformation_processingContext = $._encodeInteger; }
    return _cached_encoder_for_ProcessingInformation_processingContext(value, elGetter);
}


/* eslint-enable */
