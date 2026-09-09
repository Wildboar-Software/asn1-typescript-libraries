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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



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
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_sgsn: AdditionalNetworkResource = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgsn
 * @constant
 * @type {number}
 */
export
const sgsn: AdditionalNetworkResource = AdditionalNetworkResource_sgsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ggsn
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ggsn: AdditionalNetworkResource = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ggsn
 * @constant
 * @type {number}
 */
export
const ggsn: AdditionalNetworkResource = AdditionalNetworkResource_ggsn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gmlc
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gmlc: AdditionalNetworkResource = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gmlc
 * @constant
 * @type {number}
 */
export
const gmlc: AdditionalNetworkResource = AdditionalNetworkResource_gmlc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_gsmSCF
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_gsmSCF: AdditionalNetworkResource = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary gsmSCF
 * @constant
 * @type {number}
 */
export
const gsmSCF: AdditionalNetworkResource = AdditionalNetworkResource_gsmSCF; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_nplr
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_nplr: AdditionalNetworkResource = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary nplr
 * @constant
 * @type {number}
 */
export
const nplr: AdditionalNetworkResource = AdditionalNetworkResource_nplr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_auc
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_auc: AdditionalNetworkResource = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary auc
 * @constant
 * @type {number}
 */
export
const auc: AdditionalNetworkResource = AdditionalNetworkResource_auc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_ue
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_ue: AdditionalNetworkResource = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ue
 * @constant
 * @type {number}
 */
export
const ue: AdditionalNetworkResource = AdditionalNetworkResource_ue; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AdditionalNetworkResource_mme
 * @constant
 * @type {number}
 */
export
const AdditionalNetworkResource_mme: AdditionalNetworkResource = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary mme
 * @constant
 * @type {number}
 */
export
const mme: AdditionalNetworkResource = AdditionalNetworkResource_mme; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AdditionalNetworkResource: $.ASN1Decoder<AdditionalNetworkResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalNetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalNetworkResource (el: _Element): AdditionalNetworkResource {
    if (!_cached_decoder_for_AdditionalNetworkResource) { _cached_decoder_for_AdditionalNetworkResource = $._decodeEnumerated; }
    return _cached_decoder_for_AdditionalNetworkResource(el);
}

let _cached_encoder_for_AdditionalNetworkResource: $.ASN1Encoder<AdditionalNetworkResource> | null = null;

/**
 * @summary Encodes a(n) AdditionalNetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalNetworkResource, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalNetworkResource (value: AdditionalNetworkResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalNetworkResource) { _cached_encoder_for_AdditionalNetworkResource = $._encodeEnumerated; }
    return _cached_encoder_for_AdditionalNetworkResource(value, elGetter);
}


/* eslint-enable */
