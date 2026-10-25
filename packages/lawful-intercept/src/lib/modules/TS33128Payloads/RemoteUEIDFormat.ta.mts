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
const RemoteUEIDFormat: typeof _enum_for_RemoteUEIDFormat = _enum_for_RemoteUEIDFormat;

/**
 * @summary RemoteUEIDFormat_nAI
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_nAI: _enum_for_RemoteUEIDFormat.nAI = RemoteUEIDFormat.nAI; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAI
 * @constant
 * @type {number}
 */
export
const nAI: _enum_for_RemoteUEIDFormat.nAI = RemoteUEIDFormat.nAI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RemoteUEIDFormat_sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const RemoteUEIDFormat_sixtyFourBitString: _enum_for_RemoteUEIDFormat.sixtyFourBitString = RemoteUEIDFormat.sixtyFourBitString; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sixtyFourBitString
 * @constant
 * @type {number}
 */
export
const sixtyFourBitString: _enum_for_RemoteUEIDFormat.sixtyFourBitString = RemoteUEIDFormat.sixtyFourBitString; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_RemoteUEIDFormat: $.ASN1Decoder<RemoteUEIDFormat> = $._decodeEnumerated;
export const _encode_RemoteUEIDFormat: $.ASN1Encoder<RemoteUEIDFormat> = $._encodeEnumerated;


/* eslint-enable */
