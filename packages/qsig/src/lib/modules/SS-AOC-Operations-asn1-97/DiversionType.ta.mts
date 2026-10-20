/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary DiversionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DiversionType {
    callForwardingUnconditional = 0,
    callForwardingBusy = 1,
    callForwardingNoReply = 2,
    callDeflection = 3,
}

/**
 * @summary DiversionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DiversionType = _enum_for_DiversionType;

/**
 * @summary DiversionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiversionType  ::=  ENUMERATED {
 *     callForwardingUnconditional(0),
 *     callForwardingBusy(1),
 *     callForwardingNoReply(2),
 *     callDeflection(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DiversionType = _enum_for_DiversionType;

/**
 * @summary DiversionType_callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const DiversionType_callForwardingUnconditional: DiversionType = DiversionType.callForwardingUnconditional; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingUnconditional
 * @constant
 * @type {number}
 */
export
const callForwardingUnconditional: DiversionType = DiversionType.callForwardingUnconditional; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callForwardingBusy
 * @constant
 * @type {number}
 */
export
const DiversionType_callForwardingBusy: DiversionType = DiversionType.callForwardingBusy; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingBusy
 * @constant
 * @type {number}
 */
export
const callForwardingBusy: DiversionType = DiversionType.callForwardingBusy; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callForwardingNoReply
 * @constant
 * @type {number}
 */
export
const DiversionType_callForwardingNoReply: DiversionType = DiversionType.callForwardingNoReply; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callForwardingNoReply
 * @constant
 * @type {number}
 */
export
const callForwardingNoReply: DiversionType = DiversionType.callForwardingNoReply; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DiversionType_callDeflection
 * @constant
 * @type {number}
 */
export
const DiversionType_callDeflection: DiversionType = DiversionType.callDeflection; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary callDeflection
 * @constant
 * @type {number}
 */
export
const callDeflection: DiversionType = DiversionType.callDeflection; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_DiversionType: $.ASN1Decoder<DiversionType> = $._decodeEnumerated;

export
const _encode_DiversionType: $.ASN1Encoder<DiversionType> = $._encodeEnumerated;

/* eslint-enable */
