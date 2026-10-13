/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationIdentifier       ::=     INTEGER
 * { rtnAllFrames                (0)
 * , rtnInsert                   (1)
 * , rtnChFrames                 (2)
 * -- rtnChFrames includes rtnMcFrames and rtnVcFrames
 * , rtnChFsh                    (3)
 * -- rtnChFsh includes rtnMcFsh and rtnVcFsh
 * , rtnChOcf                    (4)
 * -- rtnChOcf includes rtnMcOcf and rtnVcOcf
 * , rtnBitstr                   (5)    -- AOS
 * , rtnSpacePkt                 (6)
 * , fwdAosSpacePkt              (7)
 * , fwdAosVca                   (8)
 * , fwdBitstr                   (9)
 * , fwdProtoVcdu                (10)
 * , fwdInsert                   (11)
 * , fwdCVcdu                    (12)
 * , fwdTcSpacePkt               (13) -- conventional telecommand
 * , fwdTcVca                    (14) -- conventional telecommand
 * , fwdTcFrame                  (15)
 * , fwdCltu                     (16)
 * }
 * ```
 */
export
type ApplicationIdentifier = INTEGER;

/**
 * @summary ApplicationIdentifier_rtnAllFrames
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnAllFrames: ApplicationIdentifier = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnAllFrames
 * @constant
 * @type {number}
 */
export
const rtnAllFrames: ApplicationIdentifier = ApplicationIdentifier_rtnAllFrames; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnInsert
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnInsert: ApplicationIdentifier = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnInsert
 * @constant
 * @type {number}
 */
export
const rtnInsert: ApplicationIdentifier = ApplicationIdentifier_rtnInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFrames
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChFrames: ApplicationIdentifier = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFrames
 * @constant
 * @type {number}
 */
export
const rtnChFrames: ApplicationIdentifier = ApplicationIdentifier_rtnChFrames; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFsh
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChFsh: ApplicationIdentifier = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFsh
 * @constant
 * @type {number}
 */
export
const rtnChFsh: ApplicationIdentifier = ApplicationIdentifier_rtnChFsh; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChOcf
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChOcf: ApplicationIdentifier = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChOcf
 * @constant
 * @type {number}
 */
export
const rtnChOcf: ApplicationIdentifier = ApplicationIdentifier_rtnChOcf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnBitstr
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnBitstr: ApplicationIdentifier = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnBitstr
 * @constant
 * @type {number}
 */
export
const rtnBitstr: ApplicationIdentifier = ApplicationIdentifier_rtnBitstr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnSpacePkt
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnSpacePkt: ApplicationIdentifier = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnSpacePkt
 * @constant
 * @type {number}
 */
export
const rtnSpacePkt: ApplicationIdentifier = ApplicationIdentifier_rtnSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosSpacePkt
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdAosSpacePkt: ApplicationIdentifier = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosSpacePkt
 * @constant
 * @type {number}
 */
export
const fwdAosSpacePkt: ApplicationIdentifier = ApplicationIdentifier_fwdAosSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosVca
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdAosVca: ApplicationIdentifier = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosVca
 * @constant
 * @type {number}
 */
export
const fwdAosVca: ApplicationIdentifier = ApplicationIdentifier_fwdAosVca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdBitstr
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdBitstr: ApplicationIdentifier = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdBitstr
 * @constant
 * @type {number}
 */
export
const fwdBitstr: ApplicationIdentifier = ApplicationIdentifier_fwdBitstr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdProtoVcdu
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdProtoVcdu: ApplicationIdentifier = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdProtoVcdu
 * @constant
 * @type {number}
 */
export
const fwdProtoVcdu: ApplicationIdentifier = ApplicationIdentifier_fwdProtoVcdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdInsert
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdInsert: ApplicationIdentifier = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdInsert
 * @constant
 * @type {number}
 */
export
const fwdInsert: ApplicationIdentifier = ApplicationIdentifier_fwdInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCVcdu
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdCVcdu: ApplicationIdentifier = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCVcdu
 * @constant
 * @type {number}
 */
export
const fwdCVcdu: ApplicationIdentifier = ApplicationIdentifier_fwdCVcdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcSpacePkt
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcSpacePkt: ApplicationIdentifier = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcSpacePkt
 * @constant
 * @type {number}
 */
export
const fwdTcSpacePkt: ApplicationIdentifier = ApplicationIdentifier_fwdTcSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcVca
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcVca: ApplicationIdentifier = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcVca
 * @constant
 * @type {number}
 */
export
const fwdTcVca: ApplicationIdentifier = ApplicationIdentifier_fwdTcVca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcFrame
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcFrame: ApplicationIdentifier = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcFrame
 * @constant
 * @type {number}
 */
export
const fwdTcFrame: ApplicationIdentifier = ApplicationIdentifier_fwdTcFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCltu
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdCltu: ApplicationIdentifier = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCltu
 * @constant
 * @type {number}
 */
export
const fwdCltu: ApplicationIdentifier = ApplicationIdentifier_fwdCltu; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ApplicationIdentifier: $.ASN1Decoder<ApplicationIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicationIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicationIdentifier (el: _Element): ApplicationIdentifier {
    if (!_cached_decoder_for_ApplicationIdentifier) { _cached_decoder_for_ApplicationIdentifier = $._decodeInteger; }
    return _cached_decoder_for_ApplicationIdentifier(el);
}

let _cached_encoder_for_ApplicationIdentifier: $.ASN1Encoder<ApplicationIdentifier> | null = null;

/**
 * @summary Encodes a(n) ApplicationIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicationIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicationIdentifier (value: ApplicationIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicationIdentifier) { _cached_encoder_for_ApplicationIdentifier = $._encodeInteger; }
    return _cached_encoder_for_ApplicationIdentifier(value, elGetter);
}


/* eslint-enable */
