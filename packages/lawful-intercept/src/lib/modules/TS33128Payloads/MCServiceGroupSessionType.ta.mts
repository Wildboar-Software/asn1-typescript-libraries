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
const MCServiceGroupSessionType = _enum_for_MCServiceGroupSessionType;

/**
 * @summary MCServiceGroupSessionType_chat
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_chat = MCServiceGroupSessionType.chat satisfies MCServiceGroupSessionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary chat
 * @constant
 * @type {number}
 */
export
const chat = MCServiceGroupSessionType.chat satisfies MCServiceGroupSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_preArranged
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_preArranged = MCServiceGroupSessionType.preArranged satisfies MCServiceGroupSessionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preArranged
 * @constant
 * @type {number}
 */
export
const preArranged = MCServiceGroupSessionType.preArranged satisfies MCServiceGroupSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceGroupSessionType_adHoc
 * @constant
 * @type {number}
 */
export
const MCServiceGroupSessionType_adHoc = MCServiceGroupSessionType.adHoc satisfies MCServiceGroupSessionType; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary adHoc
 * @constant
 * @type {number}
 */
export
const adHoc = MCServiceGroupSessionType.adHoc satisfies MCServiceGroupSessionType; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MCServiceGroupSessionType: $.ASN1Decoder<MCServiceGroupSessionType> = $._decodeEnumerated;
export const _encode_MCServiceGroupSessionType: $.ASN1Encoder<MCServiceGroupSessionType> = $._encodeEnumerated;


/* eslint-enable */
