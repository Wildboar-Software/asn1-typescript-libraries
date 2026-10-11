/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_DataType {
    iRI = 1,
    cC = 2,
    iLHI = 3,
}

/**
 * @summary DataType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataType  ::=  ENUMERATED
 * {
 *     iRI(1),
 *     cC(2),
 *     ...,
 *     iLHI(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DataType = _enum_for_DataType | ENUMERATED;

/**
 * @summary DataType_iRI
 * @constant
 * @type {number}
 */
export
const DataType_iRI: DataType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iRI
 * @constant
 * @type {number}
 */
export
const iRI: DataType = DataType_iRI; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_cC
 * @constant
 * @type {number}
 */
export
const DataType_cC: DataType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cC
 * @constant
 * @type {number}
 */
export
const cC: DataType = DataType_cC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DataType_iLHI
 * @constant
 * @type {number}
 */
export
const DataType_iLHI: DataType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iLHI
 * @constant
 * @type {number}
 */
export
const iLHI: DataType = DataType_iLHI; /* SHORT_NAMED_ENUMERATED_VALUE */

export const _decode_DataType: $.ASN1Decoder<DataType> = $._decodeEnumerated;

export const _encode_DataType: $.ASN1Encoder<DataType> = $._encodeEnumerated;


/* eslint-enable */
