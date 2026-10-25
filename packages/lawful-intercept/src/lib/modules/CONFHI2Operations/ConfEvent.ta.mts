/* eslint-disable */
import {
    type ENUMERATED
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
 * Conference event that caused the IRI. Table 11.1 assigns the HI2 record type.
 * Reporting of participant signalling that manages features such as mute is for
 * further study. 3GPP TS 33.108, clause 11.5.
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
 * @description
 * 
 * Successful start: the first party joins, or accesses the conference and waits
 * for a host. Also when a conference that is itself the target starts.
 * IRI-BEGIN. 3GPP TS 33.108, clause 11.5.1.2, tables 11.1 and 11.3.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confStartSuccessfull: _enum_for_ConfEvent.confStartSuccessfull = _enum_for_ConfEvent.confStartSuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confStartSuccessfull
 * @description
 * 
 * Successful conference start. IRI-BEGIN. 3GPP TS 33.108, clause 11.5.1.2.
 * 
 * @constant
 * @type {number}
 */
export
const confStartSuccessfull: _enum_for_ConfEvent.confStartSuccessfull = ConfEvent_confStartSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confStartUnsuccessfull
 * @description
 * 
 * Conference failed to start, for example because no party joined. Applies to a
 * target-provisioned conference or a conference that is the target. IRI-REPORT.
 * The failure reason is required. 3GPP TS 33.108, clause 11.5.1.5, tables 11.1
 * and 11.13.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confStartUnsuccessfull: _enum_for_ConfEvent.confStartUnsuccessfull = _enum_for_ConfEvent.confStartUnsuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confStartUnsuccessfull
 * @description
 * 
 * Unsuccessful conference start. IRI-REPORT. 3GPP TS 33.108, clause 11.5.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const confStartUnsuccessfull: _enum_for_ConfEvent.confStartUnsuccessfull = ConfEvent_confStartUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_startOfInterceptionConferenceActive
 * @description
 * 
 * Interception activated during an ongoing conference. IRI-BEGIN, built from
 * retained information when the AS/MRFC does not know about another activation.
 * Do not send it to an LEMF that was already intercepting that target or
 * conference. 3GPP TS 33.108, clause 11.5.1.2, tables 11.1 and 11.4.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_startOfInterceptionConferenceActive: _enum_for_ConfEvent.startOfInterceptionConferenceActive = _enum_for_ConfEvent.startOfInterceptionConferenceActive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary startOfInterceptionConferenceActive
 * @description
 * 
 * Interception started on an active conference. IRI-BEGIN. 3GPP TS 33.108,
 * clause 11.5.1.2.
 * 
 * @constant
 * @type {number}
 */
export
const startOfInterceptionConferenceActive: _enum_for_ConfEvent.startOfInterceptionConferenceActive = ConfEvent_startOfInterceptionConferenceActive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyJoinSuccessfull
 * @description
 * 
 * A party joined the target's conference, or a conference that is the target.
 * IRI-CONTINUE. The joining party's identity and supported bearers are
 * required. 3GPP TS 33.108, clause 11.5.1.3, tables 11.1 and 11.5.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyJoinSuccessfull: _enum_for_ConfEvent.confPartyJoinSuccessfull = _enum_for_ConfEvent.confPartyJoinSuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyJoinSuccessfull
 * @description
 * 
 * Party joined the conference. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyJoinSuccessfull: _enum_for_ConfEvent.confPartyJoinSuccessfull = ConfEvent_confPartyJoinSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyJoinUnsuccessfull
 * @description
 * 
 * A party failed to join. IRI-CONTINUE. The joining identity and the failure
 * reason are required. 3GPP TS 33.108, clause 11.5.1.3, tables 11.1 and 11.6.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyJoinUnsuccessfull: _enum_for_ConfEvent.confPartyJoinUnsuccessfull = _enum_for_ConfEvent.confPartyJoinUnsuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyJoinUnsuccessfull
 * @description
 * 
 * Party failed to join. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyJoinUnsuccessfull: _enum_for_ConfEvent.confPartyJoinUnsuccessfull = ConfEvent_confPartyJoinUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyLeaveSuccessfull
 * @description
 * 
 * A party left, disconnected, or was removed. IRI-CONTINUE. Identity, leave
 * cause, and the bearers that party supported are required. 3GPP TS 33.108,
 * clause 11.5.1.3, tables 11.1 and 11.7.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyLeaveSuccessfull: _enum_for_ConfEvent.confPartyLeaveSuccessfull = _enum_for_ConfEvent.confPartyLeaveSuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyLeaveSuccessfull
 * @description
 * 
 * Party left or was removed. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyLeaveSuccessfull: _enum_for_ConfEvent.confPartyLeaveSuccessfull = ConfEvent_confPartyLeaveSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyLeaveUnsuccessfull
 * @description
 * 
 * An attempt to leave, or to drop another party, failed. IRI-CONTINUE. The
 * identity and the failure reason are required. 3GPP TS 33.108, clause
 * 11.5.1.3, tables 11.1 and 11.8.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyLeaveUnsuccessfull: _enum_for_ConfEvent.confPartyLeaveUnsuccessfull = _enum_for_ConfEvent.confPartyLeaveUnsuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyLeaveUnsuccessfull
 * @description
 * 
 * Party leave or drop failed. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyLeaveUnsuccessfull: _enum_for_ConfEvent.confPartyLeaveUnsuccessfull = ConfEvent_confPartyLeaveUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyBearerModifySuccessfull
 * @description
 * 
 * A party added, removed, or changed conference media. IRI-CONTINUE. The acting
 * party, the kind of change, and the affected parties are required. 3GPP TS
 * 33.108, clause 11.5.1.3, tables 11.1 and 11.9.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyBearerModifySuccessfull: _enum_for_ConfEvent.confPartyBearerModifySuccessfull = _enum_for_ConfEvent.confPartyBearerModifySuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyBearerModifySuccessfull
 * @description
 * 
 * Conference media changed. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyBearerModifySuccessfull: _enum_for_ConfEvent.confPartyBearerModifySuccessfull = ConfEvent_confPartyBearerModifySuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confPartyBearerModifyUnsuccessfull
 * @description
 * 
 * An attempt to add, remove, or change conference media failed. IRI-CONTINUE.
 * The acting party, the attempted change, and the failure reason are required.
 * 3GPP TS 33.108, clause 11.5.1.3, tables 11.1 and 11.10.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confPartyBearerModifyUnsuccessfull: _enum_for_ConfEvent.confPartyBearerModifyUnsuccessfull = _enum_for_ConfEvent.confPartyBearerModifyUnsuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confPartyBearerModifyUnsuccessfull
 * @description
 * 
 * Conference media change failed. IRI-CONTINUE. 3GPP TS 33.108, clause
 * 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confPartyBearerModifyUnsuccessfull: _enum_for_ConfEvent.confPartyBearerModifyUnsuccessfull = ConfEvent_confPartyBearerModifyUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confEndSuccessfull
 * @description
 * 
 * The target's conference, or a conference that is the target, ended (last
 * party left, or the conference server terminated it). IRI-END. Initiator and
 * end reason are required. 3GPP TS 33.108, clause 11.5.1.4, tables 11.1 and
 * 11.12.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confEndSuccessfull: _enum_for_ConfEvent.confEndSuccessfull = _enum_for_ConfEvent.confEndSuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confEndSuccessfull
 * @description
 * 
 * Conference ended. IRI-END. 3GPP TS 33.108, clause 11.5.1.4.
 * 
 * @constant
 * @type {number}
 */
export
const confEndSuccessfull: _enum_for_ConfEvent.confEndSuccessfull = ConfEvent_confEndSuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confEndUnsuccessfull
 * @description
 * 
 * An attempt to end the conference failed. IRI-CONTINUE, not an end record.
 * Initiator and failure reason are required. 3GPP TS 33.108, clause 11.5.1.3,
 * tables 11.1 and 11.11.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confEndUnsuccessfull: _enum_for_ConfEvent.confEndUnsuccessfull = _enum_for_ConfEvent.confEndUnsuccessfull; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confEndUnsuccessfull
 * @description
 * 
 * Conference end failed. IRI-CONTINUE. 3GPP TS 33.108, clause 11.5.1.3.
 * 
 * @constant
 * @type {number}
 */
export
const confEndUnsuccessfull: _enum_for_ConfEvent.confEndUnsuccessfull = ConfEvent_confEndUnsuccessfull; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confServCreation
 * @description
 * 
 * The target provisioned or requested creation of a conference. IRI-REPORT,
 * including future conferences. Not a communication event. 3GPP TS 33.108,
 * clause 11.5.1.5, tables 11.1 and 11.14.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confServCreation: _enum_for_ConfEvent.confServCreation = _enum_for_ConfEvent.confServCreation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confServCreation
 * @description
 * 
 * Conference provisioned or requested. IRI-REPORT. 3GPP TS 33.108, clause
 * 11.5.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const confServCreation: _enum_for_ConfEvent.confServCreation = ConfEvent_confServCreation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ConfEvent_confServUpdate
 * @description
 * 
 * The target provisioned or requested an update of a conference, including
 * modify or delete. IRI-REPORT. 3GPP TS 33.108, clause 11.5.1.5, tables 11.1
 * and 11.15.
 * 
 * @constant
 * @type {number}
 */
export
const ConfEvent_confServUpdate: _enum_for_ConfEvent.confServUpdate = _enum_for_ConfEvent.confServUpdate; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary confServUpdate
 * @description
 * 
 * Provisioned conference updated. IRI-REPORT. 3GPP TS 33.108, clause 11.5.1.5.
 * 
 * @constant
 * @type {number}
 */
export
const confServUpdate: _enum_for_ConfEvent.confServUpdate = ConfEvent_confServUpdate; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ConfEvent: $.ASN1Decoder<ConfEvent> = $._decodeEnumerated;
export const _encode_ConfEvent: $.ASN1Encoder<ConfEvent> = $._encodeEnumerated;


/* eslint-enable */
