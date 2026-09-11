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
enum _enum_for_AdditionalNetworkResource {
    sgsn = 0,
    ggsn = 1,
    gmlc = 2,
    gsmSCF = 3,
    nplr = 4,
    auc = 5,
    ue = 6,
    mme = 7,
}

/**
 * @summary AdditionalNetworkResource
 * @description
 *
 * Further network-resource class: SGSN, GGSN, GMLC, gsmSCF, NPLR, AuC. The
 * ASN.1 also defines `ue` (6) and `mme` (7) after the extension marker. If an
 * unknown value is received it shall be ignored.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.10.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalNetworkResource  ::=  ENUMERATED {
 *     sgsn (0),
 *     ggsn (1),
 *     gmlc (2),
 *     gsmSCF (3),
 *     nplr (4),
 *     auc (5),
 *     ... ,
 *     ue (6),
 *     mme (7)}
 * ```
 * 
 * @enum {number}
 */
export
type AdditionalNetworkResource = _enum_for_AdditionalNetworkResource | ENUMERATED;

/**
 * @summary AdditionalNetworkResource_sgsn
 * @description
 *
 * SGSN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_sgsn: AdditionalNetworkResource = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @description
 *
 * SGSN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const sgsn: AdditionalNetworkResource = AdditionalNetworkResource_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ggsn
 * @description
 *
 * GGSN (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ggsn: AdditionalNetworkResource = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @description
 *
 * GGSN (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const ggsn: AdditionalNetworkResource = AdditionalNetworkResource_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gmlc
 * @description
 *
 * GMLC (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gmlc: AdditionalNetworkResource = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gmlc
 * @description
 *
 * GMLC (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const gmlc: AdditionalNetworkResource = AdditionalNetworkResource_gmlc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gsmSCF
 * @description
 *
 * gsmSCF (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gsmSCF: AdditionalNetworkResource = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsmSCF
 * @description
 *
 * gsmSCF (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const gsmSCF: AdditionalNetworkResource = AdditionalNetworkResource_gsmSCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_nplr
 * @description
 *
 * NPLR (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_nplr: AdditionalNetworkResource = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nplr
 * @description
 *
 * NPLR (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const nplr: AdditionalNetworkResource = AdditionalNetworkResource_nplr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_auc
 * @description
 *
 * AuC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_auc: AdditionalNetworkResource = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auc
 * @description
 *
 * AuC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.4).
 *
 * @constant
 * @type {number}
 */
export
const auc: AdditionalNetworkResource = AdditionalNetworkResource_auc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ue
 * @description
 *
 * UE (value 6). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ue: AdditionalNetworkResource = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue
 * @description
 *
 * UE (value 6). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const ue: AdditionalNetworkResource = AdditionalNetworkResource_ue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_mme
 * @description
 *
 * MME (value 7). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_mme: AdditionalNetworkResource = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme
 * @description
 *
 * MME (value 7). Unknown received values shall be ignored. (3GPP TS 29.002
 * V19.1.0 clause 17.7.8).
 *
 * @constant
 * @type {number}
 */
export
const mme: AdditionalNetworkResource = AdditionalNetworkResource_mme; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalNetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_AdditionalNetworkResource = $._decodeEnumerated;

/**
 * @summary Encodes a(n) AdditionalNetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalNetworkResource, encoded as an ASN.1 Element.
 */
export const _encode_AdditionalNetworkResource = $._encodeEnumerated;


/* eslint-enable */
