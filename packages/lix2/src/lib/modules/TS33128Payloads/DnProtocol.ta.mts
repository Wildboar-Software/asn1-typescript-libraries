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
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_DnProtocol {
    dnsQname = 1,
    tlsSni = 2,
    tlsSan = 3,
    tlsScn = 4,
}

/**
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type DnProtocol = _enum_for_DnProtocol;

/**
 * @summary DnProtocol
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DnProtocol  ::=  ENUMERATED
 * {
 *     dnsQname(1),
 *     tlsSni(2),
 *     tlsSan(3),
 *     tlsScn(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const DnProtocol = _enum_for_DnProtocol;

/**
 * @summary DnProtocol_dnsQname
 * @constant
 * @type {number}
 */
export
const DnProtocol_dnsQname: DnProtocol = DnProtocol.dnsQname; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dnsQname
 * @constant
 * @type {number}
 */
export
const dnsQname: DnProtocol = DnProtocol.dnsQname; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSni
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSni: DnProtocol = DnProtocol.tlsSni; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSni
 * @constant
 * @type {number}
 */
export
const tlsSni: DnProtocol = DnProtocol.tlsSni; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsSan
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsSan: DnProtocol = DnProtocol.tlsSan; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsSan
 * @constant
 * @type {number}
 */
export
const tlsSan: DnProtocol = DnProtocol.tlsSan; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary DnProtocol_tlsScn
 * @constant
 * @type {number}
 */
export
const DnProtocol_tlsScn: DnProtocol = DnProtocol.tlsScn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tlsScn
 * @constant
 * @type {number}
 */
export
const tlsScn: DnProtocol = DnProtocol.tlsScn; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_DnProtocol: $.ASN1Decoder<DnProtocol> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DnProtocol
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DnProtocol (el: _Element): DnProtocol {
    if (!_cached_decoder_for_DnProtocol) { _cached_decoder_for_DnProtocol = $._decodeEnumerated; }
    return _cached_decoder_for_DnProtocol(el);
}

let _cached_encoder_for_DnProtocol: $.ASN1Encoder<DnProtocol> | null = null;

/**
 * @summary Encodes a(n) DnProtocol into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DnProtocol, encoded as an ASN.1 Element.
 */
export
function _encode_DnProtocol (value: DnProtocol, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DnProtocol) { _cached_encoder_for_DnProtocol = $._encodeEnumerated; }
    return _cached_encoder_for_DnProtocol(value, elGetter);
}


/* eslint-enable */
