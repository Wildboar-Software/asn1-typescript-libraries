/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_UMTS_Content_Report_initiator {
    originating_party = 0,
    terminating_party = 1,
    forwarded_to_party = 2,
    undefined_party = 3,
}

/**
 * @summary UMTS_Content_Report_initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTS-Content-Report-initiator ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type UMTS_Content_Report_initiator = _enum_for_UMTS_Content_Report_initiator | ENUMERATED;

/**
 * @summary UMTS_Content_Report_initiator_originating_party
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_originating_party: UMTS_Content_Report_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @constant
 * @type {number}
 */
export
const originating_party: UMTS_Content_Report_initiator = UMTS_Content_Report_initiator_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_terminating_party
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_terminating_party: UMTS_Content_Report_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @constant
 * @type {number}
 */
export
const terminating_party: UMTS_Content_Report_initiator = UMTS_Content_Report_initiator_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_forwarded_to_party
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_forwarded_to_party: UMTS_Content_Report_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_party
 * @constant
 * @type {number}
 */
export
const forwarded_to_party: UMTS_Content_Report_initiator = UMTS_Content_Report_initiator_forwarded_to_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_undefined_party
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_undefined_party: UMTS_Content_Report_initiator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @constant
 * @type {number}
 */
export
const undefined_party: UMTS_Content_Report_initiator = UMTS_Content_Report_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_UMTS_Content_Report_initiator: $.ASN1Decoder<UMTS_Content_Report_initiator> = $._decodeEnumerated;

export const _encode_UMTS_Content_Report_initiator: $.ASN1Encoder<UMTS_Content_Report_initiator> = $._encodeEnumerated;


/* eslint-enable */
