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



/**
 * @summary ProtocolId
 * @description
 *
 * Protocol to which the associated External Signal Information conforms.
 * Defined values: 04.08 (`gsm-0408`), 08.06 (`gsm-0806`), and ETS 300 102-1 /
 * EDSS1 (`ets-300102-1`). Value 3 (`gsm-BSSMAP`) is reserved and must not be
 * used.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.9.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ProtocolId {
    gsm_0408 = 1,
    gsm_0806 = 2,
    gsm_BSSMAP = 3,
    ets_300102_1 = 4,
}

/**
 * @summary ProtocolId
 * @description
 *
 * Protocol to which the associated External Signal Information conforms.
 * Defined values: 04.08 (`gsm-0408`), 08.06 (`gsm-0806`), and ETS 300 102-1 /
 * EDSS1 (`ets-300102-1`). Value 3 (`gsm-BSSMAP`) is reserved and must not be
 * used.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.9.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
type ProtocolId = _enum_for_ProtocolId;

/**
 * @summary ProtocolId
 * @description
 *
 * Protocol to which the associated External Signal Information conforms.
 * Defined values: 04.08 (`gsm-0408`), 08.06 (`gsm-0806`), and ETS 300 102-1 /
 * EDSS1 (`ets-300102-1`). Value 3 (`gsm-BSSMAP`) is reserved and must not be
 * used.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.9.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProtocolId  ::=  ENUMERATED {
 *     gsm-0408  (1),
 *     gsm-0806  (2),
 *     gsm-BSSMAP  (3),
 *     -- Value 3 is reserved and must not be used
 *     ets-300102-1  (4)}
 * ```
 * 
 * @enum {number}
 */
export
const ProtocolId = _enum_for_ProtocolId;

/**
 * @summary ProtocolId_gsm_0408
 * @description
 *
 * 04.08 protocol (value 1). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_0408: ProtocolId = ProtocolId.gsm_0408; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_0408
 * @description
 *
 * 04.08 protocol (value 1). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const gsm_0408: ProtocolId = ProtocolId.gsm_0408; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_gsm_0806
 * @description
 *
 * 08.06 protocol (value 2). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_0806: ProtocolId = ProtocolId.gsm_0806; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_0806
 * @description
 *
 * 08.06 protocol (value 2). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const gsm_0806: ProtocolId = ProtocolId.gsm_0806; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_gsm_BSSMAP
 * @description
 *
 * Reserved; must not be used (value 3). (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const ProtocolId_gsm_BSSMAP: ProtocolId = ProtocolId.gsm_BSSMAP; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsm_BSSMAP
 * @description
 *
 * Reserved; must not be used (value 3). (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const gsm_BSSMAP: ProtocolId = ProtocolId.gsm_BSSMAP; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ProtocolId_ets_300102_1
 * @description
 *
 * ETS 300 102-1 (EDSS1) (value 4). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const ProtocolId_ets_300102_1: ProtocolId = ProtocolId.ets_300102_1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ets_300102_1
 * @description
 *
 * ETS 300 102-1 (EDSS1) (value 4). (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and
 * 7.6.9.7).
 *
 * @constant
 * @type {number}
 */
export
const ets_300102_1: ProtocolId = ProtocolId.ets_300102_1; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) ProtocolId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_ProtocolId = $._decodeEnumerated;

/**
 * @summary Encodes a(n) ProtocolId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProtocolId, encoded as an ASN.1 Element.
 */
export const _encode_ProtocolId = $._encodeEnumerated;


/* eslint-enable */
