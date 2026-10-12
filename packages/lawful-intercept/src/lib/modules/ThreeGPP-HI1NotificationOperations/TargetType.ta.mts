/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_TargetType {
    mSISDN = 0,
    iMSI = 1,
    iMEI = 2,
    e164_Format = 3,
    nAI = 4,
    sip_URI = 5,
    tel_URI = 6,
    iMPU = 7,
    iMPI = 8,
}

/**
 * @summary TargetType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetType  ::=  ENUMERATED
 * {
 *     mSISDN(0),
 *     iMSI(1),
 *     iMEI(2),
 *     e164-Format(3),
 *     nAI(4),
 *     sip-URI(5),
 *     tel-URI(6),
 *     iMPU (7),
 *     iMPI (8),
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetType = _enum_for_TargetType | ENUMERATED;

/**
 * @summary TargetType_mSISDN
 * @constant
 * @type {number}
 */
export
const TargetType_mSISDN: TargetType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mSISDN
 * @constant
 * @type {number}
 */
export
const mSISDN: TargetType = TargetType_mSISDN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMSI
 * @constant
 * @type {number}
 */
export
const TargetType_iMSI: TargetType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMSI
 * @constant
 * @type {number}
 */
export
const iMSI: TargetType = TargetType_iMSI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMEI
 * @constant
 * @type {number}
 */
export
const TargetType_iMEI: TargetType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMEI
 * @constant
 * @type {number}
 */
export
const iMEI: TargetType = TargetType_iMEI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_e164_Format
 * @constant
 * @type {number}
 */
export
const TargetType_e164_Format: TargetType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary e164_Format
 * @constant
 * @type {number}
 */
export
const e164_Format: TargetType = TargetType_e164_Format; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_nAI
 * @constant
 * @type {number}
 */
export
const TargetType_nAI: TargetType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAI
 * @constant
 * @type {number}
 */
export
const nAI: TargetType = TargetType_nAI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_sip_URI
 * @constant
 * @type {number}
 */
export
const TargetType_sip_URI: TargetType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sip_URI
 * @constant
 * @type {number}
 */
export
const sip_URI: TargetType = TargetType_sip_URI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_tel_URI
 * @constant
 * @type {number}
 */
export
const TargetType_tel_URI: TargetType = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tel_URI
 * @constant
 * @type {number}
 */
export
const tel_URI: TargetType = TargetType_tel_URI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMPU
 * @constant
 * @type {number}
 */
export
const TargetType_iMPU: TargetType = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMPU
 * @constant
 * @type {number}
 */
export
const iMPU: TargetType = TargetType_iMPU; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetType_iMPI
 * @constant
 * @type {number}
 */
export
const TargetType_iMPI: TargetType = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iMPI
 * @constant
 * @type {number}
 */
export
const iMPI: TargetType = TargetType_iMPI; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TargetType: $.ASN1Decoder<TargetType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetType (el: _Element): TargetType {
    if (!_cached_decoder_for_TargetType) { _cached_decoder_for_TargetType = $._decodeEnumerated; }
    return _cached_decoder_for_TargetType(el);
}

let _cached_encoder_for_TargetType: $.ASN1Encoder<TargetType> | null = null;

/**
 * @summary Encodes a(n) TargetType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetType, encoded as an ASN.1 Element.
 */
export
function _encode_TargetType (value: TargetType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetType) { _cached_encoder_for_TargetType = $._encodeEnumerated; }
    return _cached_encoder_for_TargetType(value, elGetter);
}


/* eslint-enable */
