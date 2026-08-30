/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AreaType {
    countryCode = 0,
    plmnId = 1,
    locationAreaId = 2,
    routingAreaId = 3,
    cellGlobalId = 4,
    utranCellId = 5,
}

/**
 * @summary AreaType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AreaType  ::=  ENUMERATED {
 *     countryCode    (0),
 *     plmnId    (1),
 *     locationAreaId    (2),
 *     routingAreaId    (3),
 *     cellGlobalId    (4),
 *     ...,
 *     utranCellId    (5) }
 * ```
 * 
 * @enum {number}
 */
export
type AreaType = _enum_for_AreaType | ENUMERATED;

/**
 * @summary AreaType_countryCode
 * @constant
 * @type {number}
 */
export
const AreaType_countryCode: AreaType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary countryCode
 * @constant
 * @type {number}
 */
export
const countryCode: AreaType = AreaType_countryCode; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AreaType_plmnId
 * @constant
 * @type {number}
 */
export
const AreaType_plmnId: AreaType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmnId
 * @constant
 * @type {number}
 */
export
const plmnId: AreaType = AreaType_plmnId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AreaType_locationAreaId
 * @constant
 * @type {number}
 */
export
const AreaType_locationAreaId: AreaType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary locationAreaId
 * @constant
 * @type {number}
 */
export
const locationAreaId: AreaType = AreaType_locationAreaId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AreaType_routingAreaId
 * @constant
 * @type {number}
 */
export
const AreaType_routingAreaId: AreaType = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary routingAreaId
 * @constant
 * @type {number}
 */
export
const routingAreaId: AreaType = AreaType_routingAreaId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AreaType_cellGlobalId
 * @constant
 * @type {number}
 */
export
const AreaType_cellGlobalId: AreaType = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cellGlobalId
 * @constant
 * @type {number}
 */
export
const cellGlobalId: AreaType = AreaType_cellGlobalId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AreaType_utranCellId
 * @constant
 * @type {number}
 */
export
const AreaType_utranCellId: AreaType = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary utranCellId
 * @constant
 * @type {number}
 */
export
const utranCellId: AreaType = AreaType_utranCellId; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AreaType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AreaType = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AreaType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AreaType, encoded as an ASN.1 Element.
 */
export const _encode_AreaType = $._encodeEnumerated;


/* eslint-enable */
