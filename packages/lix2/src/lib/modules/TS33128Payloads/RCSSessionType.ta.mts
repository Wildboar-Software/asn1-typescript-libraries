/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionType {
    largeMessageStandalone = 1,
    oneTo1Chat = 2,
}

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionType  ::=  ENUMERATED
 * {
 *     largeMessageStandalone(1),
 *     oneTo1Chat(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionType = _enum_for_RCSSessionType;

/**
 * @summary RCSSessionType_largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const RCSSessionType_largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary largeMessageStandalone
 * @constant
 * @type {number}
 */
export
const largeMessageStandalone: RCSSessionType = RCSSessionType.largeMessageStandalone; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionType_oneTo1Chat
 * @constant
 * @type {number}
 */
export
const RCSSessionType_oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oneTo1Chat
 * @constant
 * @type {number}
 */
export
const oneTo1Chat: RCSSessionType = RCSSessionType.oneTo1Chat; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RCSSessionType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RCSSessionType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionType, encoded as an ASN.1 Element.
 */
export const _encode_RCSSessionType = $._encodeEnumerated;


/* eslint-enable */
