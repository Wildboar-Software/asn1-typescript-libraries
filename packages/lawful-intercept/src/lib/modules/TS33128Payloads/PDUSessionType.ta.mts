/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionType
 * @description
 * 
 * Identifies selected PDU session type, see TS 24.501 [13] clause 9.11.4.11.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDUSessionType {
    iPv4 = 1,
    iPv6 = 2,
    iPv4v6 = 3,
    unstructured = 4,
    ethernet = 5,
}

/**
 * @summary PDUSessionType
 * @description
 * 
 * Identifies selected PDU session type, see TS 24.501 [13] clause 9.11.4.11.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PDUSessionType = _enum_for_PDUSessionType;

/**
 * @summary PDUSessionType
 * @description
 * 
 * Identifies selected PDU session type, see TS 24.501 [13] clause 9.11.4.11.
 *
 * 3GPP TS 33.128, clause 6.2.3.2.2.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED
 * {
 *     iPv4(1),
 *     iPv6(2),
 *     iPv4v6(3),
 *     unstructured(4),
 *     ethernet(5)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PDUSessionType: typeof _enum_for_PDUSessionType = _enum_for_PDUSessionType;

/**
 * @summary PDUSessionType_iPv4
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4: _enum_for_PDUSessionType.iPv4 = PDUSessionType.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: _enum_for_PDUSessionType.iPv4 = PDUSessionType.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv6: _enum_for_PDUSessionType.iPv6 = PDUSessionType.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: _enum_for_PDUSessionType.iPv6 = PDUSessionType.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv4v6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4v6: _enum_for_PDUSessionType.iPv4v6 = PDUSessionType.iPv4v6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4v6
 * @constant
 * @type {number}
 */
export
const iPv4v6: _enum_for_PDUSessionType.iPv4v6 = PDUSessionType.iPv4v6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_unstructured
 * @constant
 * @type {number}
 */
export
const PDUSessionType_unstructured: _enum_for_PDUSessionType.unstructured = PDUSessionType.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: _enum_for_PDUSessionType.unstructured = PDUSessionType.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_ethernet
 * @constant
 * @type {number}
 */
export
const PDUSessionType_ethernet: _enum_for_PDUSessionType.ethernet = PDUSessionType.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: _enum_for_PDUSessionType.ethernet = PDUSessionType.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PDUSessionType: $.ASN1Decoder<PDUSessionType> = $._decodeEnumerated;
export const _encode_PDUSessionType: $.ASN1Encoder<PDUSessionType> = $._encodeEnumerated;


/* eslint-enable */
