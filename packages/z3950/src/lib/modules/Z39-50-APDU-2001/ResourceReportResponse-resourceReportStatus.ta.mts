/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReportResponse_resourceReportStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReportResponse-resourceReportStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ResourceReportResponse_resourceReportStatus = INTEGER;

/**
 * @summary ResourceReportResponse_resourceReportStatus_success
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_success: ResourceReportResponse_resourceReportStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_success
 * @constant
 * @type {number}
 */
export
const success: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_partial
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_partial: ResourceReportResponse_resourceReportStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_partial
 * @constant
 * @type {number}
 */
export
const partial: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_partial; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_1
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_1: ResourceReportResponse_resourceReportStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_1
 * @constant
 * @type {number}
 */
export
const failure_1: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_2
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_2: ResourceReportResponse_resourceReportStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_2
 * @constant
 * @type {number}
 */
export
const failure_2: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_3
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_3: ResourceReportResponse_resourceReportStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_3
 * @constant
 * @type {number}
 */
export
const failure_3: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_4
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_4: ResourceReportResponse_resourceReportStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_4
 * @constant
 * @type {number}
 */
export
const failure_4: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_5
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_5: ResourceReportResponse_resourceReportStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_5
 * @constant
 * @type {number}
 */
export
const failure_5: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_5; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_6
 * @constant
 * @type {number}
 */
export
const ResourceReportResponse_resourceReportStatus_failure_6: ResourceReportResponse_resourceReportStatus = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ResourceReportResponse_resourceReportStatus_failure_6
 * @constant
 * @type {number}
 */
export
const failure_6: ResourceReportResponse_resourceReportStatus = ResourceReportResponse_resourceReportStatus_failure_6; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ResourceReportResponse_resourceReportStatus: $.ASN1Decoder<ResourceReportResponse_resourceReportStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResourceReportResponse_resourceReportStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResourceReportResponse_resourceReportStatus (el: _Element): ResourceReportResponse_resourceReportStatus {
    if (!_cached_decoder_for_ResourceReportResponse_resourceReportStatus) { _cached_decoder_for_ResourceReportResponse_resourceReportStatus = $._decodeInteger; }
    return _cached_decoder_for_ResourceReportResponse_resourceReportStatus(el);
}

let _cached_encoder_for_ResourceReportResponse_resourceReportStatus: $.ASN1Encoder<ResourceReportResponse_resourceReportStatus> | null = null;

/**
 * @summary Encodes a(n) ResourceReportResponse_resourceReportStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResourceReportResponse_resourceReportStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ResourceReportResponse_resourceReportStatus (value: ResourceReportResponse_resourceReportStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResourceReportResponse_resourceReportStatus) { _cached_encoder_for_ResourceReportResponse_resourceReportStatus = $._encodeInteger; }
    return _cached_encoder_for_ResourceReportResponse_resourceReportStatus(value, elGetter);
}


/* eslint-enable */
