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
 * @summary PprIds
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PprIds  ::=  BIT STRING {-- Definition of Profile Policy Rules identifiers
 *     pprUpdateControl(0), -- defines how to update PPRs via ES6
 *     ppr1(1), -- Indicator for PPR1 'Disabling of this Profile is not allowed'
 *     ppr2(2) -- Indicator for PPR2 'Deletion of this Profile is not allowed'
 * }
 * ```
 */
export
type PprIds = BIT_STRING;

/**
 * @summary PprIds_pprUpdateControl
 * @constant
 */
export
const PprIds_pprUpdateControl: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary pprUpdateControl
 * @constant
 */
export
const pprUpdateControl: number = PprIds_pprUpdateControl; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr1
 * @constant
 */
export
const PprIds_ppr1: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary ppr1
 * @constant
 */
export
const ppr1: number = PprIds_ppr1; /* SHORT_NAMED_BIT */

/**
 * @summary PprIds_ppr2
 * @constant
 */
export
const PprIds_ppr2: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary ppr2
 * @constant
 */
export
const ppr2: number = PprIds_ppr2; /* SHORT_NAMED_BIT */

let _cached_decoder_for_PprIds: $.ASN1Decoder<PprIds> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PprIds
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PprIds (el: _Element): PprIds {
    if (!_cached_decoder_for_PprIds) { _cached_decoder_for_PprIds = $._decodeBitString; }
    return _cached_decoder_for_PprIds(el);
}

let _cached_encoder_for_PprIds: $.ASN1Encoder<PprIds> | null = null;

/**
 * @summary Encodes a(n) PprIds into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PprIds, encoded as an ASN.1 Element.
 */
export
function _encode_PprIds (value: PprIds, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PprIds) { _cached_encoder_for_PprIds = $._encodeBitString; }
    return _cached_encoder_for_PprIds(value, elGetter);
}


/* eslint-enable */
