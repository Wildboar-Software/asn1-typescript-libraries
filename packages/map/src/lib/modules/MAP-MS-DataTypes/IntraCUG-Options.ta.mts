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
 * @summary IntraCUG_Options
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_IntraCUG_Options {
    noCUG_Restrictions = 0,
    cugIC_CallBarred = 1,
    cugOG_CallBarred = 2,
}

/**
 * @summary IntraCUG_Options
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type IntraCUG_Options = _enum_for_IntraCUG_Options;

/**
 * @summary IntraCUG_Options
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IntraCUG-Options  ::=  ENUMERATED {
 *     noCUG-Restrictions  (0),
 *     cugIC-CallBarred  (1),
 *     cugOG-CallBarred  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const IntraCUG_Options = _enum_for_IntraCUG_Options;

/**
 * @summary IntraCUG_Options_noCUG_Restrictions
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_noCUG_Restrictions: IntraCUG_Options = IntraCUG_Options.noCUG_Restrictions; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary noCUG_Restrictions
 * @constant
 * @type {number}
 */
export
const noCUG_Restrictions: IntraCUG_Options = IntraCUG_Options.noCUG_Restrictions; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntraCUG_Options_cugIC_CallBarred
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_cugIC_CallBarred: IntraCUG_Options = IntraCUG_Options.cugIC_CallBarred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cugIC_CallBarred
 * @constant
 * @type {number}
 */
export
const cugIC_CallBarred: IntraCUG_Options = IntraCUG_Options.cugIC_CallBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary IntraCUG_Options_cugOG_CallBarred
 * @constant
 * @type {number}
 */
export
const IntraCUG_Options_cugOG_CallBarred: IntraCUG_Options = IntraCUG_Options.cugOG_CallBarred; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cugOG_CallBarred
 * @constant
 * @type {number}
 */
export
const cugOG_CallBarred: IntraCUG_Options = IntraCUG_Options.cugOG_CallBarred; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_IntraCUG_Options: $.ASN1Decoder<IntraCUG_Options> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IntraCUG_Options
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IntraCUG_Options (el: _Element): IntraCUG_Options {
    if (!_cached_decoder_for_IntraCUG_Options) { _cached_decoder_for_IntraCUG_Options = $._decodeEnumerated; }
    return _cached_decoder_for_IntraCUG_Options(el);
}

let _cached_encoder_for_IntraCUG_Options: $.ASN1Encoder<IntraCUG_Options> | null = null;

/**
 * @summary Encodes a(n) IntraCUG_Options into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IntraCUG_Options, encoded as an ASN.1 Element.
 */
export
function _encode_IntraCUG_Options (value: IntraCUG_Options, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IntraCUG_Options) { _cached_encoder_for_IntraCUG_Options = $._encodeEnumerated; }
    return _cached_encoder_for_IntraCUG_Options(value, elGetter);
}


/* eslint-enable */
