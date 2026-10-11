/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_SMSNFType {
    sMSGMSC = 1,
    iWMSC = 2,
    sMSRouter = 3,
}

/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type SMSNFType = _enum_for_SMSNFType;

/**
 * @summary SMSNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMSNFType  ::=  ENUMERATED
 * {
 *     sMSGMSC(1),
 *     iWMSC(2),
 *     sMSRouter(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const SMSNFType = _enum_for_SMSNFType;

/**
 * @summary SMSNFType_sMSGMSC
 * @constant
 * @type {number}
 */
export
const SMSNFType_sMSGMSC: SMSNFType = SMSNFType.sMSGMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSGMSC
 * @constant
 * @type {number}
 */
export
const sMSGMSC: SMSNFType = SMSNFType.sMSGMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSNFType_iWMSC
 * @constant
 * @type {number}
 */
export
const SMSNFType_iWMSC: SMSNFType = SMSNFType.iWMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iWMSC
 * @constant
 * @type {number}
 */
export
const iWMSC: SMSNFType = SMSNFType.iWMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary SMSNFType_sMSRouter
 * @constant
 * @type {number}
 */
export
const SMSNFType_sMSRouter: SMSNFType = SMSNFType.sMSRouter; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMSRouter
 * @constant
 * @type {number}
 */
export
const sMSRouter: SMSNFType = SMSNFType.sMSRouter; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_SMSNFType: $.ASN1Decoder<SMSNFType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMSNFType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMSNFType (el: _Element): SMSNFType {
    if (!_cached_decoder_for_SMSNFType) { _cached_decoder_for_SMSNFType = $._decodeEnumerated; }
    return _cached_decoder_for_SMSNFType(el);
}

let _cached_encoder_for_SMSNFType: $.ASN1Encoder<SMSNFType> | null = null;

/**
 * @summary Encodes a(n) SMSNFType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMSNFType, encoded as an ASN.1 Element.
 */
export
function _encode_SMSNFType (value: SMSNFType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMSNFType) { _cached_encoder_for_SMSNFType = $._encodeEnumerated; }
    return _cached_encoder_for_SMSNFType(value, elGetter);
}


/* eslint-enable */
