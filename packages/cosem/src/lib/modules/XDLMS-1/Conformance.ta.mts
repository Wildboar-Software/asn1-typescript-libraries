/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BIT_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary Conformance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conformance  ::=  [APPLICATION 31] IMPLICIT BIT STRING --(SIZE(24))
 * {
 * -- the bit is set when the corresponding service or functionality is available
 *   reserved0                     (0),
 *   reserved1                     (1),
 *   reserved2                     (2),
 *   read                          (3),
 *   write                         (4),
 *   unconfirmed-write             (5),
 *   reserved6                     (6),
 *   reserved7                     (7),
 *   attribute0-supported-with-SET (8),
 *   priority-mgmt-supported       (9),
 *   attribute0-supported-with-GET (10),
 *   block-transfer-with-get       (11),
 *   block-transfer-with-set       (12),
 *   block-transfer-with-action    (13),
 *   multiple-references           (14),
 *   information-report            (15),
 *   reserved16                    (16),
 *   reserved17                    (17),
 *   parameterized-access          (18),
 *   get                           (19),
 *   set                           (20),
 *   selective-access              (21),
 *   event-notification            (22),
 *   action                        (23)
 * }
 * ```
 */
export
type Conformance = BIT_STRING;

/**
 * @summary Conformance_reserved0
 * @constant
 */
export
const Conformance_reserved0: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary reserved0
 * @constant
 */
export
const reserved0: number = Conformance_reserved0; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved1
 * @constant
 */
export
const Conformance_reserved1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary reserved1
 * @constant
 */
export
const reserved1: number = Conformance_reserved1; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved2
 * @constant
 */
export
const Conformance_reserved2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary reserved2
 * @constant
 */
export
const reserved2: number = Conformance_reserved2; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_read
 * @constant
 */
export
const Conformance_read: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary read
 * @constant
 */
export
const read: number = Conformance_read; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_write
 * @constant
 */
export
const Conformance_write: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary write
 * @constant
 */
export
const write: number = Conformance_write; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_unconfirmed_write
 * @constant
 */
export
const Conformance_unconfirmed_write: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary unconfirmed_write
 * @constant
 */
export
const unconfirmed_write: number = Conformance_unconfirmed_write; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved6
 * @constant
 */
export
const Conformance_reserved6: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary reserved6
 * @constant
 */
export
const reserved6: number = Conformance_reserved6; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved7
 * @constant
 */
export
const Conformance_reserved7: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary reserved7
 * @constant
 */
export
const reserved7: number = Conformance_reserved7; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_attribute0_supported_with_SET
 * @constant
 */
export
const Conformance_attribute0_supported_with_SET: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary attribute0_supported_with_SET
 * @constant
 */
export
const attribute0_supported_with_SET: number = Conformance_attribute0_supported_with_SET; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_priority_mgmt_supported
 * @constant
 */
export
const Conformance_priority_mgmt_supported: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary priority_mgmt_supported
 * @constant
 */
export
const priority_mgmt_supported: number = Conformance_priority_mgmt_supported; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_attribute0_supported_with_GET
 * @constant
 */
export
const Conformance_attribute0_supported_with_GET: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary attribute0_supported_with_GET
 * @constant
 */
export
const attribute0_supported_with_GET: number = Conformance_attribute0_supported_with_GET; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_block_transfer_with_get
 * @constant
 */
export
const Conformance_block_transfer_with_get: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary block_transfer_with_get
 * @constant
 */
export
const block_transfer_with_get: number = Conformance_block_transfer_with_get; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_block_transfer_with_set
 * @constant
 */
export
const Conformance_block_transfer_with_set: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary block_transfer_with_set
 * @constant
 */
export
const block_transfer_with_set: number = Conformance_block_transfer_with_set; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_block_transfer_with_action
 * @constant
 */
export
const Conformance_block_transfer_with_action: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary block_transfer_with_action
 * @constant
 */
export
const block_transfer_with_action: number = Conformance_block_transfer_with_action; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_multiple_references
 * @constant
 */
export
const Conformance_multiple_references: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary multiple_references
 * @constant
 */
export
const multiple_references: number = Conformance_multiple_references; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_information_report
 * @constant
 */
export
const Conformance_information_report: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary information_report
 * @constant
 */
export
const information_report: number = Conformance_information_report; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved16
 * @constant
 */
export
const Conformance_reserved16: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary reserved16
 * @constant
 */
export
const reserved16: number = Conformance_reserved16; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_reserved17
 * @constant
 */
export
const Conformance_reserved17: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary reserved17
 * @constant
 */
export
const reserved17: number = Conformance_reserved17; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_parameterized_access
 * @constant
 */
export
const Conformance_parameterized_access: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary parameterized_access
 * @constant
 */
export
const parameterized_access: number = Conformance_parameterized_access; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_get_
 * @constant
 */
export
const Conformance_get_: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary get_
 * @constant
 */
export
const get_: number = Conformance_get_; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_set_
 * @constant
 */
export
const Conformance_set_: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary set_
 * @constant
 */
export
const set_: number = Conformance_set_; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_selective_access
 * @constant
 */
export
const Conformance_selective_access: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary selective_access
 * @constant
 */
export
const selective_access: number = Conformance_selective_access; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_event_notification
 * @constant
 */
export
const Conformance_event_notification: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary event_notification
 * @constant
 */
export
const event_notification: number = Conformance_event_notification; /* SHORT_NAMED_BIT */

/**
 * @summary Conformance_action
 * @constant
 */
export
const Conformance_action: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary action
 * @constant
 */
export
const action: number = Conformance_action; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Conformance: $.ASN1Decoder<Conformance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conformance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Conformance (el: _Element): Conformance {
    if (!_cached_decoder_for_Conformance) { _cached_decoder_for_Conformance = $._decode_implicit<Conformance>(() => $._decodeBitString); }
    return _cached_decoder_for_Conformance(el);
}

let _cached_encoder_for_Conformance: $.ASN1Encoder<Conformance> | null = null;

/**
 * @summary Encodes a(n) Conformance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conformance, encoded as an ASN.1 Element.
 */
export
function _encode_Conformance (value: Conformance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Conformance) { _cached_encoder_for_Conformance = $._encode_implicit(_TagClass.application, 31, () => $._encodeBitString, $.BER); }
    return _cached_encoder_for_Conformance(value, elGetter);
}


/* eslint-enable */
