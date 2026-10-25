/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_MCServiceEstablishmentType {
    onDemand = 1,
    preEstablished = 2,
}

/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type MCServiceEstablishmentType = _enum_for_MCServiceEstablishmentType;

/**
 * @summary MCServiceEstablishmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceEstablishmentType  ::=  ENUMERATED
 * {
 *     onDemand(1),
 *     preEstablished(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const MCServiceEstablishmentType: typeof _enum_for_MCServiceEstablishmentType = _enum_for_MCServiceEstablishmentType;

/**
 * @summary MCServiceEstablishmentType_onDemand
 * @constant
 * @type {number}
 */
export
const MCServiceEstablishmentType_onDemand: _enum_for_MCServiceEstablishmentType.onDemand = MCServiceEstablishmentType.onDemand; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary onDemand
 * @constant
 * @type {number}
 */
export
const onDemand: _enum_for_MCServiceEstablishmentType.onDemand = MCServiceEstablishmentType.onDemand; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary MCServiceEstablishmentType_preEstablished
 * @constant
 * @type {number}
 */
export
const MCServiceEstablishmentType_preEstablished: _enum_for_MCServiceEstablishmentType.preEstablished = MCServiceEstablishmentType.preEstablished; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary preEstablished
 * @constant
 * @type {number}
 */
export
const preEstablished: _enum_for_MCServiceEstablishmentType.preEstablished = MCServiceEstablishmentType.preEstablished; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_MCServiceEstablishmentType: $.ASN1Decoder<MCServiceEstablishmentType> = $._decodeEnumerated;
export const _encode_MCServiceEstablishmentType: $.ASN1Encoder<MCServiceEstablishmentType> = $._encodeEnumerated;


/* eslint-enable */
