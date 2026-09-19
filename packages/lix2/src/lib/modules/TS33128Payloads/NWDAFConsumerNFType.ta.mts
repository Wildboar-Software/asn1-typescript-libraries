/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFConsumerNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFConsumerNFType  ::=  ENUMERATED
 * {
 *     pCF(1),
 *     nSSF(2),
 *     aMF(3),
 *     sMF(4),
 *     nEF(5),
 *     aF(6),
 *     lMF(7),
 *     oAM(8),
 *     nWDAF(9),
 *     dCCF(10),
 *     cEF(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NWDAFConsumerNFType {
    pCF = 1,
    nSSF = 2,
    aMF = 3,
    sMF = 4,
    nEF = 5,
    aF = 6,
    lMF = 7,
    oAM = 8,
    nWDAF = 9,
    dCCF = 10,
    cEF = 11,
}

/**
 * @summary NWDAFConsumerNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFConsumerNFType  ::=  ENUMERATED
 * {
 *     pCF(1),
 *     nSSF(2),
 *     aMF(3),
 *     sMF(4),
 *     nEF(5),
 *     aF(6),
 *     lMF(7),
 *     oAM(8),
 *     nWDAF(9),
 *     dCCF(10),
 *     cEF(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NWDAFConsumerNFType = _enum_for_NWDAFConsumerNFType;

/**
 * @summary NWDAFConsumerNFType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NWDAFConsumerNFType  ::=  ENUMERATED
 * {
 *     pCF(1),
 *     nSSF(2),
 *     aMF(3),
 *     sMF(4),
 *     nEF(5),
 *     aF(6),
 *     lMF(7),
 *     oAM(8),
 *     nWDAF(9),
 *     dCCF(10),
 *     cEF(11)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NWDAFConsumerNFType = _enum_for_NWDAFConsumerNFType;

/**
 * @summary NWDAFConsumerNFType_pCF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_pCF: NWDAFConsumerNFType = NWDAFConsumerNFType.pCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pCF
 * @constant
 * @type {number}
 */
export
const pCF: NWDAFConsumerNFType = NWDAFConsumerNFType.pCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nSSF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nSSF: NWDAFConsumerNFType = NWDAFConsumerNFType.nSSF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSSF
 * @constant
 * @type {number}
 */
export
const nSSF: NWDAFConsumerNFType = NWDAFConsumerNFType.nSSF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_aMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_aMF: NWDAFConsumerNFType = NWDAFConsumerNFType.aMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMF
 * @constant
 * @type {number}
 */
export
const aMF: NWDAFConsumerNFType = NWDAFConsumerNFType.aMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_sMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_sMF: NWDAFConsumerNFType = NWDAFConsumerNFType.sMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMF
 * @constant
 * @type {number}
 */
export
const sMF: NWDAFConsumerNFType = NWDAFConsumerNFType.sMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nEF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nEF: NWDAFConsumerNFType = NWDAFConsumerNFType.nEF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nEF
 * @constant
 * @type {number}
 */
export
const nEF: NWDAFConsumerNFType = NWDAFConsumerNFType.nEF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_aF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_aF: NWDAFConsumerNFType = NWDAFConsumerNFType.aF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aF
 * @constant
 * @type {number}
 */
export
const aF: NWDAFConsumerNFType = NWDAFConsumerNFType.aF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_lMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_lMF: NWDAFConsumerNFType = NWDAFConsumerNFType.lMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lMF
 * @constant
 * @type {number}
 */
export
const lMF: NWDAFConsumerNFType = NWDAFConsumerNFType.lMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_oAM
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_oAM: NWDAFConsumerNFType = NWDAFConsumerNFType.oAM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAM
 * @constant
 * @type {number}
 */
export
const oAM: NWDAFConsumerNFType = NWDAFConsumerNFType.oAM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nWDAF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nWDAF: NWDAFConsumerNFType = NWDAFConsumerNFType.nWDAF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWDAF
 * @constant
 * @type {number}
 */
export
const nWDAF: NWDAFConsumerNFType = NWDAFConsumerNFType.nWDAF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_dCCF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_dCCF: NWDAFConsumerNFType = NWDAFConsumerNFType.dCCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dCCF
 * @constant
 * @type {number}
 */
export
const dCCF: NWDAFConsumerNFType = NWDAFConsumerNFType.dCCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_cEF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_cEF: NWDAFConsumerNFType = NWDAFConsumerNFType.cEF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cEF
 * @constant
 * @type {number}
 */
export
const cEF: NWDAFConsumerNFType = NWDAFConsumerNFType.cEF; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NWDAFConsumerNFType: $.ASN1Decoder<NWDAFConsumerNFType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NWDAFConsumerNFType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NWDAFConsumerNFType (el: _Element): NWDAFConsumerNFType {
    if (!_cached_decoder_for_NWDAFConsumerNFType) { _cached_decoder_for_NWDAFConsumerNFType = $._decodeEnumerated; }
    return _cached_decoder_for_NWDAFConsumerNFType(el);
}

let _cached_encoder_for_NWDAFConsumerNFType: $.ASN1Encoder<NWDAFConsumerNFType> | null = null;

/**
 * @summary Encodes a(n) NWDAFConsumerNFType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWDAFConsumerNFType, encoded as an ASN.1 Element.
 */
export
function _encode_NWDAFConsumerNFType (value: NWDAFConsumerNFType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NWDAFConsumerNFType) { _cached_encoder_for_NWDAFConsumerNFType = $._encodeEnumerated; }
    return _cached_encoder_for_NWDAFConsumerNFType(value, elGetter);
}


/* eslint-enable */
