/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UnitTime
 * @description
 *
 * Time unit for `StatisticInformationSet` numeric fields
 * (Clause 6.4.4.3.1): `millisecond`(1), `second`(2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitTime  ::=  ENUMERATED {
 *     millisecond (1),
 *     second      (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_UnitTime {
    millisecond = 1,
    second = 2,
}

/**
 * @summary UnitTime
 * @description
 *
 * Time unit for `StatisticInformationSet` numeric fields
 * (Clause 6.4.4.3.1): `millisecond`(1), `second`(2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitTime  ::=  ENUMERATED {
 *     millisecond (1),
 *     second      (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type UnitTime = _enum_for_UnitTime;

/**
 * @summary UnitTime
 * @description
 *
 * Time unit for `StatisticInformationSet` numeric fields
 * (Clause 6.4.4.3.1): `millisecond`(1), `second`(2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UnitTime  ::=  ENUMERATED {
 *     millisecond (1),
 *     second      (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const UnitTime: typeof _enum_for_UnitTime = _enum_for_UnitTime;

/**
 * @summary UnitTime_millisecond
 * @constant
 * @type {number}
 */
export
const UnitTime_millisecond: _enum_for_UnitTime.millisecond = UnitTime.millisecond; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary millisecond
 * @constant
 * @type {number}
 */
export
const millisecond: _enum_for_UnitTime.millisecond = UnitTime.millisecond; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary UnitTime_second
 * @constant
 * @type {number}
 */
export
const UnitTime_second: _enum_for_UnitTime.second = UnitTime.second; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary second
 * @constant
 * @type {number}
 */
export
const second: _enum_for_UnitTime.second = UnitTime.second; /* SHORT_NAMED_ENUMERATED_VALUE */


/**
 * @summary Decodes an ASN.1 element into a(n) UnitTime
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_UnitTime: $.ASN1Decoder<number> = $._decodeEnumerated;


/**
 * @summary Encodes a(n) UnitTime into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UnitTime, encoded as an ASN.1 Element.
 */
export const _encode_UnitTime: $.ASN1Encoder<number> = $._encodeEnumerated;


/* eslint-enable */
