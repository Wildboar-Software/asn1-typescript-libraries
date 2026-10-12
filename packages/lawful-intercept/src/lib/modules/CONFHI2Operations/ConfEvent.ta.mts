/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ConfEvent {
    confStartSuccessfull = 1,
    confStartUnsuccessfull = 2,
    startOfInterceptionConferenceActive = 3,
    confPartyJoinSuccessfull = 4,
    confPartyJoinUnsuccessfull = 5,
    confPartyLeaveSuccessfull = 6,
    confPartyLeaveUnsuccessfull = 7,
    confPartyBearerModifySuccessfull = 8,
    confPartyBearerModifyUnsuccessfull = 9,
    confEndSuccessfull = 10,
    confEndUnsuccessfull = 11,
    confServCreation = 12,
    confServUpdate = 13,
}

/**
 * @summary ConfEvent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConfEvent  ::=  ENUMERATED
 * {
 *     confStartSuccessfull                     (1),
 *     confStartUnsuccessfull                    (2),
 *     startOfInterceptionConferenceActive        (3),
 *     confPartyJoinSuccessfull                (4),
 *     confPartyJoinUnsuccessfull                (5),
 *     confPartyLeaveSuccessfull                (6),
 *     confPartyLeaveUnsuccessfull                (7),
 *     confPartyBearerModifySuccessfull        (8),
 *     confPartyBearerModifyUnsuccessfull        (9),
 *     confEndSuccessfull                         (10),
 *     confEndUnsuccessfull                    (11),
 *     confServCreation                         (12),
 *     confServUpdate                             (13),
 *     ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ConfEvent = _enum_for_ConfEvent | ENUMERATED;

/**
 * @summary ConfEvent_confStartSuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confStartSuccessfull: ConfEvent = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confStartSuccessfull
 * @constant
 * @type {number}
 */
export
const confStartSuccessfull: ConfEvent = ConfEvent_confStartSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confStartUnsuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confStartUnsuccessfull: ConfEvent = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confStartUnsuccessfull
 * @constant
 * @type {number}
 */
export
const confStartUnsuccessfull: ConfEvent = ConfEvent_confStartUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_startOfInterceptionConferenceActive
 * @constant
 * @type {number}
 */
export
const ConfEvent_startOfInterceptionConferenceActive: ConfEvent = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionConferenceActive
 * @constant
 * @type {number}
 */
export
const startOfInterceptionConferenceActive: ConfEvent = ConfEvent_startOfInterceptionConferenceActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyJoinSuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyJoinSuccessfull: ConfEvent = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyJoinSuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyJoinSuccessfull: ConfEvent = ConfEvent_confPartyJoinSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyJoinUnsuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyJoinUnsuccessfull: ConfEvent = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyJoinUnsuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyJoinUnsuccessfull: ConfEvent = ConfEvent_confPartyJoinUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyLeaveSuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyLeaveSuccessfull: ConfEvent = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyLeaveSuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyLeaveSuccessfull: ConfEvent = ConfEvent_confPartyLeaveSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyLeaveUnsuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyLeaveUnsuccessfull: ConfEvent = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyLeaveUnsuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyLeaveUnsuccessfull: ConfEvent = ConfEvent_confPartyLeaveUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyBearerModifySuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyBearerModifySuccessfull: ConfEvent = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyBearerModifySuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyBearerModifySuccessfull: ConfEvent = ConfEvent_confPartyBearerModifySuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyBearerModifyUnsuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyBearerModifyUnsuccessfull: ConfEvent = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyBearerModifyUnsuccessfull
 * @constant
 * @type {number}
 */
export
const confPartyBearerModifyUnsuccessfull: ConfEvent = ConfEvent_confPartyBearerModifyUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confEndSuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confEndSuccessfull: ConfEvent = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confEndSuccessfull
 * @constant
 * @type {number}
 */
export
const confEndSuccessfull: ConfEvent = ConfEvent_confEndSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confEndUnsuccessfull
 * @constant
 * @type {number}
 */
export
const ConfEvent_confEndUnsuccessfull: ConfEvent = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confEndUnsuccessfull
 * @constant
 * @type {number}
 */
export
const confEndUnsuccessfull: ConfEvent = ConfEvent_confEndUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confServCreation
 * @constant
 * @type {number}
 */
export
const ConfEvent_confServCreation: ConfEvent = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confServCreation
 * @constant
 * @type {number}
 */
export
const confServCreation: ConfEvent = ConfEvent_confServCreation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confServUpdate
 * @constant
 * @type {number}
 */
export
const ConfEvent_confServUpdate: ConfEvent = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confServUpdate
 * @constant
 * @type {number}
 */
export
const confServUpdate: ConfEvent = ConfEvent_confServUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ConfEvent: $.ASN1Decoder<ConfEvent> = $._decodeEnumerated;
export const _encode_ConfEvent: $.ASN1Encoder<ConfEvent> = $._encodeEnumerated;


/* eslint-enable */
