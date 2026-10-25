/* eslint-disable */
import {
    type ENUMERATED,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


export enum _enum_for_Requirements {
    none = 0,
    with_2_way_voice = 1,
    with_reverse_video_and_2_way_voice = 2,
    with_2_way_video_and_voice = 3,
}


/**
 * @summary Requirements
 * @description
 *
 * Voice and video needed for the operation or session. Omitted
 * defaults to `none`. ITU-T Rec. X.1080.1 (05/2018)
 * [§10.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I),
 * §11.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Requirements  ::=  ENUMERATED {
 *   none                               (0),
 *   with-2-way-voice                   (1),
 *   with-reverse-video-and-2-way-voice (2),
 *   with-2-way-video-and-voice         (3),
 *   ... }
 * ```
 *
 * @enum {number}
 */
export type Requirements = _enum_for_Requirements | ENUMERATED;


/**
 * @summary Requirements_none
 * @description
 *
 * No voice or video. ITU-T Rec. X.1080.1 (05/2018) §10.1 c).
 *
 * @constant
 * @type {number}
 */
export const Requirements_none = _enum_for_Requirements.none; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary none
 * @description
 *
 * No voice or video. ITU-T Rec. X.1080.1 (05/2018) §10.1 c).
 *
 * @constant
 * @type {number}
 */
export const none = Requirements_none; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_2_way_voice
 * @description
 *
 * Two-way voice. Permits `&Voice-options`. ITU-T Rec. X.1080.1
 * (05/2018) §10.1 d).
 *
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_voice = _enum_for_Requirements.with_2_way_voice; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_2_way_voice
 * @description
 *
 * Two-way voice. Permits `&Voice-options`. ITU-T Rec. X.1080.1
 * (05/2018) §10.1 d).
 *
 * @constant
 * @type {number}
 */
export const with_2_way_voice = Requirements_with_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_reverse_video_and_2_way_voice
 * @description
 *
 * Reverse video plus two-way voice. Permits `&Voice-options` and
 * `&Video-options`. ITU-T Rec. X.1080.1 (05/2018) §10.1 d)–e).
 *
 * @constant
 * @type {number}
 */
export const Requirements_with_reverse_video_and_2_way_voice = _enum_for_Requirements.with_reverse_video_and_2_way_voice; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_reverse_video_and_2_way_voice
 * @description
 *
 * Reverse video plus two-way voice. Permits `&Voice-options` and
 * `&Video-options`. ITU-T Rec. X.1080.1 (05/2018) §10.1 d)–e).
 *
 * @constant
 * @type {number}
 */
export const with_reverse_video_and_2_way_voice = Requirements_with_reverse_video_and_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_2_way_video_and_voice
 * @description
 *
 * Two-way video and voice. Permits `&Voice-options` and
 * `&Video-options`. ITU-T Rec. X.1080.1 (05/2018) §10.1 d)–e).
 *
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_video_and_voice = _enum_for_Requirements.with_2_way_video_and_voice; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_2_way_video_and_voice
 * @description
 *
 * Two-way video and voice. Permits `&Voice-options` and
 * `&Video-options`. ITU-T Rec. X.1080.1 (05/2018) §10.1 d)–e).
 *
 * @constant
 * @type {number}
 */
export const with_2_way_video_and_voice = Requirements_with_2_way_video_and_voice; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Requirements = $._decodeEnumerated;




export const _encode_Requirements = $._encodeEnumerated;


/* eslint-enable */
