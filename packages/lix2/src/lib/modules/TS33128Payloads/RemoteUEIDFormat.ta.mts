/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RemoteUEIDFormat {
    nAI = 1,
    sixtyFourBitString = 2,
}

/**
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RemoteUEIDFormat = _enum_for_RemoteUEIDFormat;

/**
 * @summary RemoteUEIDFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RemoteUEIDFormat  ::=  ENUMERATED
 * {
 *     nAI(1),
 *     sixtyFourBitString(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RemoteUEIDFormat = _enum_for_RemoteUEIDFormat;

/**
 * @summary RemoteUEIDFormat_nAI
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_nAI: RemoteUEIDFormat = RemoteUEIDFormat.nAI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAI
 * @constant
 * @type {number}
 */
export
const nAI: RemoteUEIDFormat = RemoteUEIDFormat.nAI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDFormat_sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_sixtyFourBitString: RemoteUEIDFormat = RemoteUEIDFormat.sixtyFourBitString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const sixtyFourBitString: RemoteUEIDFormat = RemoteUEIDFormat.sixtyFourBitString; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) RemoteUEIDFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_RemoteUEIDFormat = $._decodeEnumerated;

/**
 * @summary Encodes a(n) RemoteUEIDFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RemoteUEIDFormat, encoded as an ASN.1 Element.
 */
export const _encode_RemoteUEIDFormat = $._encodeEnumerated;


/* eslint-enable */
