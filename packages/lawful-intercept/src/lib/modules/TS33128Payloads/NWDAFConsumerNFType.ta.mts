/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NWDAFConsumerNFType
 * @description
 * 
 * Identifies the type of NF consumer.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of NF consumer.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
 * Identifies the type of NF consumer.
 *
 * 3GPP TS 33.128, clause 7.16.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
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
const NWDAFConsumerNFType_pCF = NWDAFConsumerNFType.pCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pCF
 * @constant
 * @type {number}
 */
export
const pCF = NWDAFConsumerNFType.pCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nSSF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nSSF = NWDAFConsumerNFType.nSSF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nSSF
 * @constant
 * @type {number}
 */
export
const nSSF = NWDAFConsumerNFType.nSSF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_aMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_aMF = NWDAFConsumerNFType.aMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aMF
 * @constant
 * @type {number}
 */
export
const aMF = NWDAFConsumerNFType.aMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_sMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_sMF = NWDAFConsumerNFType.sMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sMF
 * @constant
 * @type {number}
 */
export
const sMF = NWDAFConsumerNFType.sMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nEF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nEF = NWDAFConsumerNFType.nEF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nEF
 * @constant
 * @type {number}
 */
export
const nEF = NWDAFConsumerNFType.nEF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_aF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_aF = NWDAFConsumerNFType.aF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aF
 * @constant
 * @type {number}
 */
export
const aF = NWDAFConsumerNFType.aF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_lMF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_lMF = NWDAFConsumerNFType.lMF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lMF
 * @constant
 * @type {number}
 */
export
const lMF = NWDAFConsumerNFType.lMF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_oAM
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_oAM = NWDAFConsumerNFType.oAM; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oAM
 * @constant
 * @type {number}
 */
export
const oAM = NWDAFConsumerNFType.oAM; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_nWDAF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_nWDAF = NWDAFConsumerNFType.nWDAF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nWDAF
 * @constant
 * @type {number}
 */
export
const nWDAF = NWDAFConsumerNFType.nWDAF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_dCCF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_dCCF = NWDAFConsumerNFType.dCCF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dCCF
 * @constant
 * @type {number}
 */
export
const dCCF = NWDAFConsumerNFType.dCCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NWDAFConsumerNFType_cEF
 * @constant
 * @type {number}
 */
export
const NWDAFConsumerNFType_cEF = NWDAFConsumerNFType.cEF; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cEF
 * @constant
 * @type {number}
 */
export
const cEF = NWDAFConsumerNFType.cEF; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_NWDAFConsumerNFType: $.ASN1Decoder<NWDAFConsumerNFType> = $._decodeEnumerated;
export const _encode_NWDAFConsumerNFType: $.ASN1Encoder<NWDAFConsumerNFType> = $._encodeEnumerated;


/* eslint-enable */
