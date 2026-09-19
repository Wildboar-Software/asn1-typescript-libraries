/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StreamFormat
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamFormat  ::= 
 *     INTEGER {
 *         unsignedInt8                  ( 0), -- 00000 00 0
 *         unsignedInt16BigEndian        ( 2), -- 00000 01 0
 *         unsignedInt16LittleEndian     ( 3), -- 00000 01 1
 *         unsignedInt32BigEndian        ( 4), -- 00000 10 0
 *         unsignedInt32LittleEndian     ( 5), -- 00000 10 1
 *         unsignedInt64BigEndian        ( 6), -- 00000 11 0
 *         unsignedInt64LittleEndian     ( 7), -- 00000 11 1
 *         signedInt8                    ( 8), -- 00001 00 0
 *         signedInt16BigEndian          (10), -- 00001 01 0
 *         signedInt16LittleEndian       (11), -- 00001 01 1
 *         signedInt32BigEndian          (12), -- 00001 10 0
 *         signedInt32LittleEndian       (13), -- 00001 10 1
 *         signedInt64BigEndian          (14), -- 00001 11 0
 *         signedInt64LittleEndian       (15), -- 00001 11 1
 *         ieeeFloat32BigEndian          (20), -- 00010 10 0
 *         ieeeFloat32LittleEndian       (21), -- 00010 10 1
 *         ieeeFloat64BigEndian          (22), -- 00010 11 0
 *         ieeeFloat64LittleEndian       (23)  -- 00010 11 1
 *     }
 * ```
 */
export
type StreamFormat = INTEGER;

/**
 * @summary StreamFormat_unsignedInt8
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt8: StreamFormat = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt8
 * @constant
 * @type {number}
 */
export
const unsignedInt8: StreamFormat = StreamFormat_unsignedInt8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt16BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt16BigEndian: StreamFormat = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt16BigEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt16BigEndian: StreamFormat = StreamFormat_unsignedInt16BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt16LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt16LittleEndian: StreamFormat = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt16LittleEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt16LittleEndian: StreamFormat = StreamFormat_unsignedInt16LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt32BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt32BigEndian: StreamFormat = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt32BigEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt32BigEndian: StreamFormat = StreamFormat_unsignedInt32BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt32LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt32LittleEndian: StreamFormat = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt32LittleEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt32LittleEndian: StreamFormat = StreamFormat_unsignedInt32LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt64BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt64BigEndian: StreamFormat = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt64BigEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt64BigEndian: StreamFormat = StreamFormat_unsignedInt64BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt64LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_unsignedInt64LittleEndian: StreamFormat = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_unsignedInt64LittleEndian
 * @constant
 * @type {number}
 */
export
const unsignedInt64LittleEndian: StreamFormat = StreamFormat_unsignedInt64LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt8
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt8: StreamFormat = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt8
 * @constant
 * @type {number}
 */
export
const signedInt8: StreamFormat = StreamFormat_signedInt8; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt16BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt16BigEndian: StreamFormat = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt16BigEndian
 * @constant
 * @type {number}
 */
export
const signedInt16BigEndian: StreamFormat = StreamFormat_signedInt16BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt16LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt16LittleEndian: StreamFormat = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt16LittleEndian
 * @constant
 * @type {number}
 */
export
const signedInt16LittleEndian: StreamFormat = StreamFormat_signedInt16LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt32BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt32BigEndian: StreamFormat = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt32BigEndian
 * @constant
 * @type {number}
 */
export
const signedInt32BigEndian: StreamFormat = StreamFormat_signedInt32BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt32LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt32LittleEndian: StreamFormat = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt32LittleEndian
 * @constant
 * @type {number}
 */
export
const signedInt32LittleEndian: StreamFormat = StreamFormat_signedInt32LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt64BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt64BigEndian: StreamFormat = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt64BigEndian
 * @constant
 * @type {number}
 */
export
const signedInt64BigEndian: StreamFormat = StreamFormat_signedInt64BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt64LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_signedInt64LittleEndian: StreamFormat = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_signedInt64LittleEndian
 * @constant
 * @type {number}
 */
export
const signedInt64LittleEndian: StreamFormat = StreamFormat_signedInt64LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat32BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_ieeeFloat32BigEndian: StreamFormat = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat32BigEndian
 * @constant
 * @type {number}
 */
export
const ieeeFloat32BigEndian: StreamFormat = StreamFormat_ieeeFloat32BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat32LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_ieeeFloat32LittleEndian: StreamFormat = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat32LittleEndian
 * @constant
 * @type {number}
 */
export
const ieeeFloat32LittleEndian: StreamFormat = StreamFormat_ieeeFloat32LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat64BigEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_ieeeFloat64BigEndian: StreamFormat = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat64BigEndian
 * @constant
 * @type {number}
 */
export
const ieeeFloat64BigEndian: StreamFormat = StreamFormat_ieeeFloat64BigEndian; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat64LittleEndian
 * @constant
 * @type {number}
 */
export
const StreamFormat_ieeeFloat64LittleEndian: StreamFormat = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StreamFormat_ieeeFloat64LittleEndian
 * @constant
 * @type {number}
 */
export
const ieeeFloat64LittleEndian: StreamFormat = StreamFormat_ieeeFloat64LittleEndian; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_StreamFormat: $.ASN1Decoder<StreamFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StreamFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StreamFormat (el: _Element): StreamFormat {
    if (!_cached_decoder_for_StreamFormat) { _cached_decoder_for_StreamFormat = $._decodeInteger; }
    return _cached_decoder_for_StreamFormat(el);
}

let _cached_encoder_for_StreamFormat: $.ASN1Encoder<StreamFormat> | null = null;

/**
 * @summary Encodes a(n) StreamFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StreamFormat, encoded as an ASN.1 Element.
 */
export
function _encode_StreamFormat (value: StreamFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StreamFormat) { _cached_encoder_for_StreamFormat = $._encodeInteger; }
    return _cached_encoder_for_StreamFormat(value, elGetter);
}


/* eslint-enable */
