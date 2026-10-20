/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PDUSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED {
 *    iPv4v6          ( 0 ),
 *    iPv4            ( 1 ),
 *    iPv6            ( 2 ),
 *    unstructured    ( 3 ),
 *    ethernet        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PDUSessionType {
    iPv4v6 = 0,
    iPv4 = 1,
    iPv6 = 2,
    unstructured = 3,
    ethernet = 4,
}

/**
 * @summary PDUSessionType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED {
 *    iPv4v6          ( 0 ),
 *    iPv4            ( 1 ),
 *    iPv6            ( 2 ),
 *    unstructured    ( 3 ),
 *    ethernet        ( 4 ) }
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
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUSessionType  ::=  ENUMERATED {
 *    iPv4v6          ( 0 ),
 *    iPv4            ( 1 ),
 *    iPv6            ( 2 ),
 *    unstructured    ( 3 ),
 *    ethernet        ( 4 ) }
 * ```
 * 
 * @enum {number}
 */
export
const PDUSessionType = _enum_for_PDUSessionType;

/**
 * @summary PDUSessionType_iPv4v6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4v6: PDUSessionType = PDUSessionType.iPv4v6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4v6
 * @constant
 * @type {number}
 */
export
const iPv4v6: PDUSessionType = PDUSessionType.iPv4v6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv4
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv4: PDUSessionType = PDUSessionType.iPv4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv4
 * @constant
 * @type {number}
 */
export
const iPv4: PDUSessionType = PDUSessionType.iPv4; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_iPv6
 * @constant
 * @type {number}
 */
export
const PDUSessionType_iPv6: PDUSessionType = PDUSessionType.iPv6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPv6
 * @constant
 * @type {number}
 */
export
const iPv6: PDUSessionType = PDUSessionType.iPv6; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_unstructured
 * @constant
 * @type {number}
 */
export
const PDUSessionType_unstructured: PDUSessionType = PDUSessionType.unstructured; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unstructured
 * @constant
 * @type {number}
 */
export
const unstructured: PDUSessionType = PDUSessionType.unstructured; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PDUSessionType_ethernet
 * @constant
 * @type {number}
 */
export
const PDUSessionType_ethernet: PDUSessionType = PDUSessionType.ethernet; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ethernet
 * @constant
 * @type {number}
 */
export
const ethernet: PDUSessionType = PDUSessionType.ethernet; /* SHORT_NAMED_ENUMERATED_VALUE */

export
const _decode_PDUSessionType: $.ASN1Decoder<PDUSessionType> = $._decodeEnumerated;

export
const _encode_PDUSessionType: $.ASN1Encoder<PDUSessionType> = $._encodeEnumerated;

/* eslint-enable */
