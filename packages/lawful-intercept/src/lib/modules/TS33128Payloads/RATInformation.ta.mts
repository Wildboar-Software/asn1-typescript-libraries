/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RATInformation {
    unlicensed = 1,
    nBIoT = 2,
    nRLEO = 3,
    nRMEO = 4,
    nRGEO = 5,
    nROTHERSAT = 6,
}

/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RATInformation = _enum_for_RATInformation;

/**
 * @summary RATInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RATInformation  ::=  ENUMERATED
 * {
 *     unlicensed(1),
 *     nBIoT(2),
 *     nRLEO(3),
 *     nRMEO(4),
 *     nRGEO(5),
 *     nROTHERSAT(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RATInformation = _enum_for_RATInformation;

/**
 * @summary RATInformation_unlicensed
 * @constant
 * @type {number}
 */
export
const RATInformation_unlicensed: RATInformation = RATInformation.unlicensed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unlicensed
 * @constant
 * @type {number}
 */
export
const unlicensed: RATInformation = RATInformation.unlicensed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nBIoT
 * @constant
 * @type {number}
 */
export
const RATInformation_nBIoT: RATInformation = RATInformation.nBIoT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nBIoT
 * @constant
 * @type {number}
 */
export
const nBIoT: RATInformation = RATInformation.nBIoT; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRLEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRLEO: RATInformation = RATInformation.nRLEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRLEO
 * @constant
 * @type {number}
 */
export
const nRLEO: RATInformation = RATInformation.nRLEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRMEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRMEO: RATInformation = RATInformation.nRMEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRMEO
 * @constant
 * @type {number}
 */
export
const nRMEO: RATInformation = RATInformation.nRMEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nRGEO
 * @constant
 * @type {number}
 */
export
const RATInformation_nRGEO: RATInformation = RATInformation.nRGEO; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nRGEO
 * @constant
 * @type {number}
 */
export
const nRGEO: RATInformation = RATInformation.nRGEO; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RATInformation_nROTHERSAT
 * @constant
 * @type {number}
 */
export
const RATInformation_nROTHERSAT: RATInformation = RATInformation.nROTHERSAT; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nROTHERSAT
 * @constant
 * @type {number}
 */
export
const nROTHERSAT: RATInformation = RATInformation.nROTHERSAT; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RATInformation: $.ASN1Decoder<RATInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RATInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RATInformation (el: _Element): RATInformation {
    if (!_cached_decoder_for_RATInformation) { _cached_decoder_for_RATInformation = $._decodeEnumerated; }
    return _cached_decoder_for_RATInformation(el);
}

let _cached_encoder_for_RATInformation: $.ASN1Encoder<RATInformation> | null = null;

/**
 * @summary Encodes a(n) RATInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RATInformation, encoded as an ASN.1 Element.
 */
export
function _encode_RATInformation (value: RATInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RATInformation) { _cached_encoder_for_RATInformation = $._encodeEnumerated; }
    return _cached_encoder_for_RATInformation(value, elGetter);
}


/* eslint-enable */
