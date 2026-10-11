/* eslint-disable */
import {
    ENUMERATED,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

export
enum _enum_for_InterceptionType {
    voiceIriCc = 0,
    voiceIriOnly = 1,
    dataIriCc = 2,
    dataIriOnly = 3,
    voiceAndDataIriCc = 4,
    voiceAndDataIriOnly = 5,
}

/**
 * @summary InterceptionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterceptionType  ::=  ENUMERATED
 * {
 *       voiceIriCc(0),
 *       voiceIriOnly(1),
 *       dataIriCc(2),
 *       dataIriOnly(3),
 *       voiceAndDataIriCc(4),
 *       voiceAndDataIriOnly(5),
 * ...}
 * ```
 * 
 * @enum {number}
 */
export
type InterceptionType = _enum_for_InterceptionType | ENUMERATED;

/**
 * @summary InterceptionType_voiceIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriCc: InterceptionType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriCc
 * @constant
 * @type {number}
 */
export
const voiceIriCc: InterceptionType = InterceptionType_voiceIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriOnly: InterceptionType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriOnly
 * @constant
 * @type {number}
 */
export
const voiceIriOnly: InterceptionType = InterceptionType_voiceIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriCc: InterceptionType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriCc
 * @constant
 * @type {number}
 */
export
const dataIriCc: InterceptionType = InterceptionType_dataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriOnly: InterceptionType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriOnly
 * @constant
 * @type {number}
 */
export
const dataIriOnly: InterceptionType = InterceptionType_dataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriCc
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriCc: InterceptionType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriCc
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriCc: InterceptionType = InterceptionType_voiceAndDataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriOnly
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriOnly: InterceptionType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriOnly
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriOnly: InterceptionType = InterceptionType_voiceAndDataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_InterceptionType: $.ASN1Decoder<InterceptionType> = $._decodeEnumerated;

export const _encode_InterceptionType: $.ASN1Encoder<InterceptionType> = $._encodeEnumerated;

/* eslint-enable */
