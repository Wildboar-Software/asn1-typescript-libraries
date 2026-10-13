/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_Umts_Cs_Event {
    call_establishment = 1,
    answer = 2,
    supplementary_Service = 3,
    handover = 4,
    release = 5,
    sMS = 6,
    location_update = 7,
    subscriber_Controlled_Input = 8,
    hLR_Subscriber_Record_Change = 9,
    serving_System = 10,
    cancel_Location = 11,
    register_Location = 12,
    location_Information_Request = 13,
}

/**
 * @summary Umts_Cs_Event
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Umts-Cs-Event  ::=  ENUMERATED
 * {
 *     call-establishment                (1),
 *     answer                            (2),
 *     supplementary-Service            (3),
 *     handover                        (4),
 *     release                            (5),
 *     sMS                                (6),
 *     location-update                    (7),
 *     subscriber-Controlled-Input     (8),
 *     ...,
 *     hLR-Subscriber-Record-Change    (9),
 *     serving-System                    (10),
 *     cancel-Location                    (11),
 *     register-Location                (12),
 *     location-Information-Request    (13)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type Umts_Cs_Event = _enum_for_Umts_Cs_Event | ENUMERATED;

/**
 * @summary Umts_Cs_Event_call_establishment
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_call_establishment: Umts_Cs_Event = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary call_establishment
 * @constant
 * @type {number}
 */
export
const call_establishment: Umts_Cs_Event = Umts_Cs_Event_call_establishment; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_answer
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_answer: Umts_Cs_Event = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary answer
 * @constant
 * @type {number}
 */
export
const answer: Umts_Cs_Event = Umts_Cs_Event_answer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_supplementary_Service
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_supplementary_Service: Umts_Cs_Event = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary supplementary_Service
 * @constant
 * @type {number}
 */
export
const supplementary_Service: Umts_Cs_Event = Umts_Cs_Event_supplementary_Service; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_handover
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_handover: Umts_Cs_Event = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary handover
 * @constant
 * @type {number}
 */
export
const handover: Umts_Cs_Event = Umts_Cs_Event_handover; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_release
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_release: Umts_Cs_Event = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary release
 * @constant
 * @type {number}
 */
export
const release: Umts_Cs_Event = Umts_Cs_Event_release; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_sMS
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_sMS: Umts_Cs_Event = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMS
 * @constant
 * @type {number}
 */
export
const sMS: Umts_Cs_Event = Umts_Cs_Event_sMS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_location_update
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_location_update: Umts_Cs_Event = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_update
 * @constant
 * @type {number}
 */
export
const location_update: Umts_Cs_Event = Umts_Cs_Event_location_update; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_subscriber_Controlled_Input
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_subscriber_Controlled_Input: Umts_Cs_Event = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriber_Controlled_Input
 * @constant
 * @type {number}
 */
export
const subscriber_Controlled_Input: Umts_Cs_Event = Umts_Cs_Event_subscriber_Controlled_Input; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_hLR_Subscriber_Record_Change
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_hLR_Subscriber_Record_Change: Umts_Cs_Event = 9; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hLR_Subscriber_Record_Change
 * @constant
 * @type {number}
 */
export
const hLR_Subscriber_Record_Change: Umts_Cs_Event = Umts_Cs_Event_hLR_Subscriber_Record_Change; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_serving_System
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_serving_System: Umts_Cs_Event = 10; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary serving_System
 * @constant
 * @type {number}
 */
export
const serving_System: Umts_Cs_Event = Umts_Cs_Event_serving_System; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_cancel_Location
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_cancel_Location: Umts_Cs_Event = 11; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel_Location
 * @constant
 * @type {number}
 */
export
const cancel_Location: Umts_Cs_Event = Umts_Cs_Event_cancel_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_register_Location
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_register_Location: Umts_Cs_Event = 12; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary register_Location
 * @constant
 * @type {number}
 */
export
const register_Location: Umts_Cs_Event = Umts_Cs_Event_register_Location; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Umts_Cs_Event_location_Information_Request
 * @constant
 * @type {number}
 */
export
const Umts_Cs_Event_location_Information_Request: Umts_Cs_Event = 13; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary location_Information_Request
 * @constant
 * @type {number}
 */
export
const location_Information_Request: Umts_Cs_Event = Umts_Cs_Event_location_Information_Request; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_Umts_Cs_Event: $.ASN1Decoder<Umts_Cs_Event> = $._decodeEnumerated;
export const _encode_Umts_Cs_Event: $.ASN1Encoder<Umts_Cs_Event> = $._encodeEnumerated;


/* eslint-enable */
