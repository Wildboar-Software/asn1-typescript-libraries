/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseType {
    radioNetworkLayer = 0,
    transportLayer = 1,
    nAS = 2,
    protocol = 3,
    miscellaneous = 4,
}

/**
 * @summary CauseType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
type CauseType = _enum_for_CauseType;

/**
 * @summary CauseType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseType   ::=  ENUMERATED {
 *    radioNetworkLayer    ( 0 ),
 *    transportLayer       ( 1 ),
 *    nAS                  ( 2 ),
 *    protocol             ( 3 ),
 *    miscellaneous        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const CauseType = _enum_for_CauseType;

/**
 * @summary CauseType_radioNetworkLayer
 * @constant
 * @type {number}
 */
export
const CauseType_radioNetworkLayer: CauseType = CauseType.radioNetworkLayer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary radioNetworkLayer
 * @constant
 * @type {number}
 */
export
const radioNetworkLayer: CauseType = CauseType.radioNetworkLayer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_transportLayer
 * @constant
 * @type {number}
 */
export
const CauseType_transportLayer: CauseType = CauseType.transportLayer; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary transportLayer
 * @constant
 * @type {number}
 */
export
const transportLayer: CauseType = CauseType.transportLayer; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_nAS
 * @constant
 * @type {number}
 */
export
const CauseType_nAS: CauseType = CauseType.nAS; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nAS
 * @constant
 * @type {number}
 */
export
const nAS: CauseType = CauseType.nAS; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_protocol
 * @constant
 * @type {number}
 */
export
const CauseType_protocol: CauseType = CauseType.protocol; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary protocol
 * @constant
 * @type {number}
 */
export
const protocol: CauseType = CauseType.protocol; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseType_miscellaneous
 * @constant
 * @type {number}
 */
export
const CauseType_miscellaneous: CauseType = CauseType.miscellaneous; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary miscellaneous
 * @constant
 * @type {number}
 */
export
const miscellaneous: CauseType = CauseType.miscellaneous; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_CauseType: $.ASN1Decoder<CauseType> = $._decodeEnumerated;

export
const _encode_CauseType: $.ASN1Encoder<CauseType> = $._encodeEnumerated;

/* eslint-enable */
