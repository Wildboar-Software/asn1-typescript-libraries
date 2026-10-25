/* eslint-disable */
import {
    type ENUMERATED
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
 * Scope of the warrant, as listed in informative annex M: voice or data or
 * both, with or without content of communication. 3GPP TS 33.108, annex M
 * (informative).
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
 * @description
 * 
 * Voice IRI and content of communication. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriCc = _enum_for_InterceptionType.voiceIriCc satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriCc
 * @description
 * 
 * Voice IRI and content. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const voiceIriCc = InterceptionType_voiceIriCc satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceIriOnly
 * @description
 * 
 * Voice IRI only, without content of communication. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceIriOnly = _enum_for_InterceptionType.voiceIriOnly satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceIriOnly
 * @description
 * 
 * Voice IRI only. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const voiceIriOnly = InterceptionType_voiceIriOnly satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriCc
 * @description
 * 
 * Data IRI and content of communication. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriCc = _enum_for_InterceptionType.dataIriCc satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriCc
 * @description
 * 
 * Data IRI and content. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const dataIriCc = InterceptionType_dataIriCc satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_dataIriOnly
 * @description
 * 
 * Data IRI only, without content of communication. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_dataIriOnly = _enum_for_InterceptionType.dataIriOnly satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dataIriOnly
 * @description
 * 
 * Data IRI only. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const dataIriOnly = InterceptionType_dataIriOnly satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriCc
 * @description
 * 
 * Voice and data IRI, with content of communication. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriCc = _enum_for_InterceptionType.voiceAndDataIriCc satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriCc
 * @description
 * 
 * Voice and data, IRI and content. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriCc = InterceptionType_voiceAndDataIriCc satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary InterceptionType_voiceAndDataIriOnly
 * @description
 * 
 * Voice and data IRI, without content of communication. 3GPP TS 33.108, annex M
 * (informative).
 * 
 * @constant
 * @type {number}
 */
export
const InterceptionType_voiceAndDataIriOnly = _enum_for_InterceptionType.voiceAndDataIriOnly satisfies InterceptionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary voiceAndDataIriOnly
 * @description
 * 
 * Voice and data IRI only. 3GPP TS 33.108, annex M (informative).
 * 
 * @constant
 * @type {number}
 */
export
const voiceAndDataIriOnly = InterceptionType_voiceAndDataIriOnly satisfies InterceptionType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InterceptionType: $.ASN1Decoder<InterceptionType> = $._decodeEnumerated;
export const _encode_InterceptionType: $.ASN1Encoder<InterceptionType> = $._encodeEnumerated;


/* eslint-enable */
