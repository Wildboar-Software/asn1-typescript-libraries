/* eslint-disable */
import {
    type ENUMERATED
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
 * Party associated with the user data in the CS HI3 report. The module names
 * the four roles and does not further define them.
 * 
 * 3GPP TS 33.108, annex B.6.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UMTS-Content-Report-initiator ::= ENUMERATED {
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
type UMTS_Content_Report_initiator = _enum_for_UMTS_Content_Report_initiator | ENUMERATED;

/**
 * @summary UMTS_Content_Report_initiator_originating_party
 * @description
 * 
 * Originating party. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_originating_party: _enum_for_UMTS_Content_Report_initiator.originating_party = _enum_for_UMTS_Content_Report_initiator.originating_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary originating_party
 * @description
 * 
 * Originating party. Annex B.6.
 * @constant
 * @type {number}
 */
export
const originating_party: _enum_for_UMTS_Content_Report_initiator.originating_party = UMTS_Content_Report_initiator_originating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_terminating_party
 * @description
 * 
 * Terminating party. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_terminating_party: _enum_for_UMTS_Content_Report_initiator.terminating_party = _enum_for_UMTS_Content_Report_initiator.terminating_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary terminating_party
 * @description
 * 
 * Terminating party. Annex B.6.
 * @constant
 * @type {number}
 */
export
const terminating_party: _enum_for_UMTS_Content_Report_initiator.terminating_party = UMTS_Content_Report_initiator_terminating_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_forwarded_to_party
 * @description
 * 
 * Forwarded-to party. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_forwarded_to_party: _enum_for_UMTS_Content_Report_initiator.forwarded_to_party = _enum_for_UMTS_Content_Report_initiator.forwarded_to_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary forwarded_to_party
 * @description
 * 
 * Forwarded-to party. Annex B.6.
 * @constant
 * @type {number}
 */
export
const forwarded_to_party: _enum_for_UMTS_Content_Report_initiator.forwarded_to_party = UMTS_Content_Report_initiator_forwarded_to_party; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UMTS_Content_Report_initiator_undefined_party
 * @description
 * 
 * Party is undefined. 3GPP TS 33.108, annex B.6.
 * @constant
 * @type {number}
 */
export
const UMTS_Content_Report_initiator_undefined_party: _enum_for_UMTS_Content_Report_initiator.undefined_party = _enum_for_UMTS_Content_Report_initiator.undefined_party; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary undefined_party
 * @description
 * 
 * Party is undefined. Annex B.6.
 * @constant
 * @type {number}
 */
export
const undefined_party: _enum_for_UMTS_Content_Report_initiator.undefined_party = UMTS_Content_Report_initiator_undefined_party; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_UMTS_Content_Report_initiator: $.ASN1Decoder<UMTS_Content_Report_initiator> = $._decodeEnumerated;
export const _encode_UMTS_Content_Report_initiator: $.ASN1Encoder<UMTS_Content_Report_initiator> = $._encodeEnumerated;


/* eslint-enable */
