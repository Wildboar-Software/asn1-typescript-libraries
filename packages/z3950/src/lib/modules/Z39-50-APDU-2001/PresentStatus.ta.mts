/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PresentStatus
 * @description
 *
 * Disposition of the retrieval phase. Mandatory on a Present
 * response, where it refers to the aggregate Present response. On a
 * Search response it occurs if and only if the search succeeded.
 * Failure requires one or more non-surrogate diagnostics (exactly one
 * when version 2 is in force). §3.2.2.1.11, §3.2.3.1.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PresentStatus  ::=  [27] IMPLICIT INTEGER{
 *     success     (0),
 *     partial-1   (1),
 *     partial-2   (2),
 *     partial-3   (3),
 *     partial-4   (4),
 *     failure     (5)
 * }
 * ```
 */
export
type PresentStatus = INTEGER;

/**
 * @summary PresentStatus_success
 * @description
 *
 * Value 0. All expected response records are available. On a Search
 * response, when the client asked for no records (small-set bound 0
 * and large-set bound 1) and none were sent, use this value.
 * §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_success: PresentStatus = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_success
 * @description
 *
 * Short name for `PresentStatus_success`. Value 0: all expected
 * response records are available. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const success: PresentStatus = PresentStatus_success; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_1
 * @description
 *
 * Value 1. Not all expected response records can be returned because
 * access control terminated the request. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_1: PresentStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_1
 * @description
 *
 * Short name for `PresentStatus_partial_1`. Value 1: access control
 * stopped the request before all expected records were returned.
 * §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const partial_1: PresentStatus = PresentStatus_partial_1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_2
 * @description
 *
 * Value 2. Not all expected response records can be returned because
 * they will not fit within the preferred message size. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_2: PresentStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_2
 * @description
 *
 * Short name for `PresentStatus_partial_2`. Value 2: records will not
 * fit in the preferred message size. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const partial_2: PresentStatus = PresentStatus_partial_2; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_3
 * @description
 *
 * Value 3. Not all expected records can be returned because resource
 * control stopped the request at the client's request: either a
 * Resource-control response of "do not continue", or a
 * Trigger-resource-control that terminated the operation. The
 * corresponding facility must have been negotiated. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_3: PresentStatus = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_3
 * @description
 *
 * Short name for `PresentStatus_partial_3`. Value 3: resource control
 * stopped the request at the client's request. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const partial_3: PresentStatus = PresentStatus_partial_3; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_4
 * @description
 *
 * Value 4. Not all expected records can be returned because the
 * server stopped the request for resource constraints, on its own.
 * Does not require resource control to have been negotiated.
 * §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_partial_4: PresentStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_partial_4
 * @description
 *
 * Short name for `PresentStatus_partial_4`. Value 4: the server
 * stopped the request for resource constraints. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const partial_4: PresentStatus = PresentStatus_partial_4; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_failure
 * @description
 *
 * Value 5. None of the expected response records can be returned.
 * One or more non-surrogate diagnostics are returned (exactly one
 * when version 2 is in force). §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const PresentStatus_failure: PresentStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PresentStatus_failure
 * @description
 *
 * Short name for `PresentStatus_failure`. Value 5: none of the
 * expected response records can be returned. §3.2.2.1.11.
 *
 * @constant
 * @type {number}
 */
export
const failure: PresentStatus = PresentStatus_failure; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_PresentStatus: $.ASN1Decoder<PresentStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PresentStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PresentStatus (el: _Element): PresentStatus {
    if (!_cached_decoder_for_PresentStatus) { _cached_decoder_for_PresentStatus = $._decode_implicit<PresentStatus>(() => $._decodeInteger); }
    return _cached_decoder_for_PresentStatus(el);
}

let _cached_encoder_for_PresentStatus: $.ASN1Encoder<PresentStatus> | null = null;

/**
 * @summary Encodes a(n) PresentStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PresentStatus, encoded as an ASN.1 Element.
 */
export
function _encode_PresentStatus (value: PresentStatus, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PresentStatus) { _cached_encoder_for_PresentStatus = $._encode_implicit(_TagClass.context, 27, () => $._encode_implicit(_TagClass.context, 27, () => $._encodeInteger, $.BER), $.BER); }
    return _cached_encoder_for_PresentStatus(value, elGetter);
}


/* eslint-enable */
