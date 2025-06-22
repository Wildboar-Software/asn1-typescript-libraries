/* eslint-disable */
import {
    ENUMERATED,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
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
 * @constant
 * @type {number}
 */
export const Requirements_none: Requirements = 0; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary none
 * @constant
 * @type {number}
 */
export const none: Requirements = Requirements_none; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_2_way_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_voice: Requirements = 1; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_2_way_voice
 * @constant
 * @type {number}
 */
export const with_2_way_voice: Requirements = Requirements_with_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_reverse_video_and_2_way_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_reverse_video_and_2_way_voice: Requirements = 2; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_reverse_video_and_2_way_voice
 * @constant
 * @type {number}
 */
export const with_reverse_video_and_2_way_voice: Requirements = Requirements_with_reverse_video_and_2_way_voice; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Requirements_with_2_way_video_and_voice
 * @constant
 * @type {number}
 */
export const Requirements_with_2_way_video_and_voice: Requirements = 3; /* LONG_NAMED_ENUMERATED_VALUE */


/**
 * @summary with_2_way_video_and_voice
 * @constant
 * @type {number}
 */
export const with_2_way_video_and_voice: Requirements = Requirements_with_2_way_video_and_voice; /* SHORT_NAMED_ENUMERATED_VALUE */




export const _decode_Requirements = $._decodeEnumerated;




export const _encode_Requirements = $._encodeEnumerated;


/* eslint-enable */
