/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ModemType {
    v18 = 0,
    v22 = 1,
    v22bis = 2,
    v32 = 3,
    v32bis = 4,
    v34 = 5,
    v90 = 6,
    v91 = 7,
    synchISDN = 8,
}

/**
 * @summary ModemType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModemType  ::=  ENUMERATED
 *     {
 *         v18(0),
 *         v22(1),
 *         v22bis(2),
 *         v32(3),
 *         v32bis(4),
 *         v34(5),
 *         v90(6),
 *         v91(7),
 *         synchISDN(8),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type ModemType = _enum_for_ModemType | ENUMERATED;

/**
 * @summary ModemType_v18
 * @constant
 * @type {number}
 */
export
const ModemType_v18: ModemType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v18
 * @constant
 * @type {number}
 */
export
const v18: ModemType = ModemType_v18; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v22
 * @constant
 * @type {number}
 */
export
const ModemType_v22: ModemType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22
 * @constant
 * @type {number}
 */
export
const v22: ModemType = ModemType_v22; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v22bis
 * @constant
 * @type {number}
 */
export
const ModemType_v22bis: ModemType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v22bis
 * @constant
 * @type {number}
 */
export
const v22bis: ModemType = ModemType_v22bis; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v32
 * @constant
 * @type {number}
 */
export
const ModemType_v32: ModemType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32
 * @constant
 * @type {number}
 */
export
const v32: ModemType = ModemType_v32; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v32bis
 * @constant
 * @type {number}
 */
export
const ModemType_v32bis: ModemType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v32bis
 * @constant
 * @type {number}
 */
export
const v32bis: ModemType = ModemType_v32bis; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v34
 * @constant
 * @type {number}
 */
export
const ModemType_v34: ModemType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v34
 * @constant
 * @type {number}
 */
export
const v34: ModemType = ModemType_v34; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v90
 * @constant
 * @type {number}
 */
export
const ModemType_v90: ModemType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v90
 * @constant
 * @type {number}
 */
export
const v90: ModemType = ModemType_v90; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_v91
 * @constant
 * @type {number}
 */
export
const ModemType_v91: ModemType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v91
 * @constant
 * @type {number}
 */
export
const v91: ModemType = ModemType_v91; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ModemType_synchISDN
 * @constant
 * @type {number}
 */
export
const ModemType_synchISDN: ModemType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary synchISDN
 * @constant
 * @type {number}
 */
export
const synchISDN: ModemType = ModemType_synchISDN; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ModemType: $.ASN1Decoder<ModemType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModemType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModemType (el: _Element): ModemType {
    if (!_cached_decoder_for_ModemType) { _cached_decoder_for_ModemType = $._decodeEnumerated; }
    return _cached_decoder_for_ModemType(el);
}

let _cached_encoder_for_ModemType: $.ASN1Encoder<ModemType> | null = null;

/**
 * @summary Encodes a(n) ModemType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModemType, encoded as an ASN.1 Element.
 */
export
function _encode_ModemType (value: ModemType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModemType) { _cached_encoder_for_ModemType = $._encodeEnumerated; }
    return _cached_encoder_for_ModemType(value, elGetter);
}


/* eslint-enable */
