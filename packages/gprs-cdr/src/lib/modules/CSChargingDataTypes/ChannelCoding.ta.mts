/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ChannelCoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChannelCoding  ::=  ENUMERATED {
 *    tchF4800     ( 1 ),
 *    tchF9600     ( 2 ),
 *    tchF14400    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ChannelCoding {
    tchF4800 = 1,
    tchF9600 = 2,
    tchF14400 = 3,
}

/**
 * @summary ChannelCoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChannelCoding  ::=  ENUMERATED {
 *    tchF4800     ( 1 ),
 *    tchF9600     ( 2 ),
 *    tchF14400    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
type ChannelCoding = _enum_for_ChannelCoding;

/**
 * @summary ChannelCoding
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChannelCoding  ::=  ENUMERATED {
 *    tchF4800     ( 1 ),
 *    tchF9600     ( 2 ),
 *    tchF14400    ( 3 ) }
 * ```
 * 
 * @enum {number}
 */
export
const ChannelCoding = _enum_for_ChannelCoding;

/**
 * @summary ChannelCoding_tchF4800
 * @constant
 * @type {number}
 */
export
const ChannelCoding_tchF4800 = ChannelCoding.tchF4800 satisfies ChannelCoding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tchF4800
 * @constant
 * @type {number}
 */
export
const tchF4800 = ChannelCoding.tchF4800 satisfies ChannelCoding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChannelCoding_tchF9600
 * @constant
 * @type {number}
 */
export
const ChannelCoding_tchF9600 = ChannelCoding.tchF9600 satisfies ChannelCoding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tchF9600
 * @constant
 * @type {number}
 */
export
const tchF9600 = ChannelCoding.tchF9600 satisfies ChannelCoding; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ChannelCoding_tchF14400
 * @constant
 * @type {number}
 */
export
const ChannelCoding_tchF14400 = ChannelCoding.tchF14400 satisfies ChannelCoding; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tchF14400
 * @constant
 * @type {number}
 */
export
const tchF14400 = ChannelCoding.tchF14400 satisfies ChannelCoding; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_ChannelCoding: $.ASN1Decoder<ChannelCoding> = $._decodeEnumerated;

export
const _encode_ChannelCoding: $.ASN1Encoder<ChannelCoding> = $._encodeEnumerated;

/* eslint-enable */
