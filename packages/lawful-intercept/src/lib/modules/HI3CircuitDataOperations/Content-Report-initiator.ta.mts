/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_Content_Report_initiator {
    originating_party = 0,
    terminating_party = 1,
    forwarded_to_party = 2,
    undefined_party = 3,
}

/**
 * @summary Content_Report_initiator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Content-Report-initiator ::= ENUMERATED
 * {
 *     originating-party(0),
 *     terminating-party(1),
 *     forwarded-to-party(2),
 *     undefined-party(3),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Content_Report_initiator = _enum_for_Content_Report_initiator | ENUMERATED;

/**
 * @summary Content_Report_initiator_originating_party
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_originating_party: Content_Report_initiator = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @constant
 * @type {number}
 */
export
const originating_party: Content_Report_initiator = Content_Report_initiator_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_terminating_party
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_terminating_party: Content_Report_initiator = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @constant
 * @type {number}
 */
export
const terminating_party: Content_Report_initiator = Content_Report_initiator_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_forwarded_to_party
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_forwarded_to_party: Content_Report_initiator = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_party
 * @constant
 * @type {number}
 */
export
const forwarded_to_party: Content_Report_initiator = Content_Report_initiator_forwarded_to_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Content_Report_initiator_undefined_party
 * @constant
 * @type {number}
 */
export
const Content_Report_initiator_undefined_party: Content_Report_initiator = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @constant
 * @type {number}
 */
export
const undefined_party: Content_Report_initiator = Content_Report_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_Content_Report_initiator: $.ASN1Decoder<Content_Report_initiator> = $._decodeEnumerated;

export const _encode_Content_Report_initiator: $.ASN1Encoder<Content_Report_initiator> = $._encodeEnumerated;

/* eslint-enable */
