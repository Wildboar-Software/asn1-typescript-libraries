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
const InterceptionType_voiceIriCc: _enum_for_InterceptionType.voiceIriCc = _enum_for_InterceptionType.voiceIriCc; /* LONG_NAMED_ENUMERATED_VALUE */

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
const voiceIriCc: _enum_for_InterceptionType.voiceIriCc = InterceptionType_voiceIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const InterceptionType_voiceIriOnly: _enum_for_InterceptionType.voiceIriOnly = _enum_for_InterceptionType.voiceIriOnly; /* LONG_NAMED_ENUMERATED_VALUE */

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
const voiceIriOnly: _enum_for_InterceptionType.voiceIriOnly = InterceptionType_voiceIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const InterceptionType_dataIriCc: _enum_for_InterceptionType.dataIriCc = _enum_for_InterceptionType.dataIriCc; /* LONG_NAMED_ENUMERATED_VALUE */

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
const dataIriCc: _enum_for_InterceptionType.dataIriCc = InterceptionType_dataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const InterceptionType_dataIriOnly: _enum_for_InterceptionType.dataIriOnly = _enum_for_InterceptionType.dataIriOnly; /* LONG_NAMED_ENUMERATED_VALUE */

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
const dataIriOnly: _enum_for_InterceptionType.dataIriOnly = InterceptionType_dataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const InterceptionType_voiceAndDataIriCc: _enum_for_InterceptionType.voiceAndDataIriCc = _enum_for_InterceptionType.voiceAndDataIriCc; /* LONG_NAMED_ENUMERATED_VALUE */

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
const voiceAndDataIriCc: _enum_for_InterceptionType.voiceAndDataIriCc = InterceptionType_voiceAndDataIriCc; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const InterceptionType_voiceAndDataIriOnly: _enum_for_InterceptionType.voiceAndDataIriOnly = _enum_for_InterceptionType.voiceAndDataIriOnly; /* LONG_NAMED_ENUMERATED_VALUE */

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
const voiceAndDataIriOnly: _enum_for_InterceptionType.voiceAndDataIriOnly = InterceptionType_voiceAndDataIriOnly; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_InterceptionType: $.ASN1Decoder<InterceptionType> = $._decodeEnumerated;
export const _encode_InterceptionType: $.ASN1Encoder<InterceptionType> = $._encodeEnumerated;


/* eslint-enable */
