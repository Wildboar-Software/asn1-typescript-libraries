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
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseNas {
    normalRelease = 1,
    authenticationFailure = 2,
    deregister = 3,
    unspecified = 4,
}

/**
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseNas = _enum_for_CauseNas;

/**
 * @summary CauseNas
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseNas  ::=  ENUMERATED
 * {
 *     normalRelease(1),
 *     authenticationFailure(2),
 *     deregister(3),
 *     unspecified(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseNas = _enum_for_CauseNas;

/**
 * @summary CauseNas_normalRelease
 * @constant
 * @type {number}
 */
export
const CauseNas_normalRelease: CauseNas = CauseNas.normalRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CauseNas = CauseNas.normalRelease; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_authenticationFailure
 * @constant
 * @type {number}
 */
export
const CauseNas_authenticationFailure: CauseNas = CauseNas.authenticationFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary authenticationFailure
 * @constant
 * @type {number}
 */
export
const authenticationFailure: CauseNas = CauseNas.authenticationFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_deregister
 * @constant
 * @type {number}
 */
export
const CauseNas_deregister: CauseNas = CauseNas.deregister; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary deregister
 * @constant
 * @type {number}
 */
export
const deregister: CauseNas = CauseNas.deregister; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseNas_unspecified
 * @constant
 * @type {number}
 */
export
const CauseNas_unspecified: CauseNas = CauseNas.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseNas = CauseNas.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CauseNas: $.ASN1Decoder<CauseNas> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CauseNas
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CauseNas (el: _Element): CauseNas {
    if (!_cached_decoder_for_CauseNas) { _cached_decoder_for_CauseNas = $._decodeEnumerated; }
    return _cached_decoder_for_CauseNas(el);
}

let _cached_encoder_for_CauseNas: $.ASN1Encoder<CauseNas> | null = null;

/**
 * @summary Encodes a(n) CauseNas into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseNas, encoded as an ASN.1 Element.
 */
export
function _encode_CauseNas (value: CauseNas, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CauseNas) { _cached_encoder_for_CauseNas = $._encodeEnumerated; }
    return _cached_encoder_for_CauseNas(value, elGetter);
}


/* eslint-enable */
