/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceGroupSessionType {
    chat = 1,
    preArranged = 2,
    adHoc = 3,
}

/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceGroupSessionType = _enum_for_MCServiceGroupSessionType;

/**
 * @summary MCServiceGroupSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceGroupSessionType  ::=  ENUMERATED
 * {
 *     chat(1),
 *     preArranged(2),
 *     adHoc(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceGroupSessionType: typeof _enum_for_MCServiceGroupSessionType = _enum_for_MCServiceGroupSessionType;

/**
 * @summary MCServiceGroupSessionType_chat
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_chat: _enum_for_MCServiceGroupSessionType.chat = MCServiceGroupSessionType.chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chat
 * @constant
 * @type {number}
 */
export
const chat: _enum_for_MCServiceGroupSessionType.chat = MCServiceGroupSessionType.chat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_preArranged
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_preArranged: _enum_for_MCServiceGroupSessionType.preArranged = MCServiceGroupSessionType.preArranged; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preArranged
 * @constant
 * @type {number}
 */
export
const preArranged: _enum_for_MCServiceGroupSessionType.preArranged = MCServiceGroupSessionType.preArranged; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_adHoc
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_adHoc: _enum_for_MCServiceGroupSessionType.adHoc = MCServiceGroupSessionType.adHoc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adHoc
 * @constant
 * @type {number}
 */
export
const adHoc: _enum_for_MCServiceGroupSessionType.adHoc = MCServiceGroupSessionType.adHoc; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MCServiceGroupSessionType: $.ASN1Decoder<MCServiceGroupSessionType> = $._decodeEnumerated;
export const _encode_MCServiceGroupSessionType: $.ASN1Encoder<MCServiceGroupSessionType> = $._encodeEnumerated;


/* eslint-enable */
