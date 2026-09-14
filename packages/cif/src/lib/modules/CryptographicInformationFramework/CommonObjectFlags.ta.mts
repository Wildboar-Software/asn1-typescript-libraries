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
 * @summary CommonObjectFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonObjectFlags  ::=  BIT STRING {
 *       private            (0),
 *       modifiable         (1),
 *       internal           (2)
 * }
 * ```
 */
export
type CommonObjectFlags = BIT_STRING;

/**
 * @summary CommonObjectFlags_private_
 * @constant
 */
export
const CommonObjectFlags_private_: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary private_
 * @constant
 */
export
const private_: number = CommonObjectFlags_private_; /* SHORT_NAMED_BIT */

/**
 * @summary CommonObjectFlags_modifiable
 * @constant
 */
export
const CommonObjectFlags_modifiable: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary modifiable
 * @constant
 */
export
const modifiable: number = CommonObjectFlags_modifiable; /* SHORT_NAMED_BIT */

/**
 * @summary CommonObjectFlags_internal
 * @constant
 */
export
const CommonObjectFlags_internal: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary internal
 * @constant
 */
export
const internal: number = CommonObjectFlags_internal; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CommonObjectFlags: $.ASN1Decoder<CommonObjectFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CommonObjectFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CommonObjectFlags (el: _Element): CommonObjectFlags {
    if (!_cached_decoder_for_CommonObjectFlags) { _cached_decoder_for_CommonObjectFlags = $._decodeBitString; }
    return _cached_decoder_for_CommonObjectFlags(el);
}

let _cached_encoder_for_CommonObjectFlags: $.ASN1Encoder<CommonObjectFlags> | null = null;

/**
 * @summary Encodes a(n) CommonObjectFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CommonObjectFlags, encoded as an ASN.1 Element.
 */
export
function _encode_CommonObjectFlags (value: CommonObjectFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CommonObjectFlags) { _cached_encoder_for_CommonObjectFlags = $._encodeBitString; }
    return _cached_encoder_for_CommonObjectFlags(value, elGetter);
}


/* eslint-enable */
