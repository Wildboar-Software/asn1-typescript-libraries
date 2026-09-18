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
 * @summary ENQcontent_vteChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ENQcontent-vteChoice ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ENQcontent_vteChoice = INTEGER;

/**
 * @summary ENQcontent_vteChoice_draft
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_draft: ENQcontent_vteChoice = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_draft
 * @constant
 * @type {number}
 */
export
const draft: ENQcontent_vteChoice = ENQcontent_vteChoice_draft; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_current: ENQcontent_vteChoice = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_current
 * @constant
 * @type {number}
 */
export
const current: ENQcontent_vteChoice = ENQcontent_vteChoice_current; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @constant
 * @type {number}
 */
export
const ENQcontent_vteChoice_either: ENQcontent_vteChoice = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ENQcontent_vteChoice_either
 * @constant
 * @type {number}
 */
export
const either: ENQcontent_vteChoice = ENQcontent_vteChoice_either; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ENQcontent_vteChoice: $.ASN1Decoder<ENQcontent_vteChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ENQcontent_vteChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ENQcontent_vteChoice (el: _Element): ENQcontent_vteChoice {
    if (!_cached_decoder_for_ENQcontent_vteChoice) { _cached_decoder_for_ENQcontent_vteChoice = $._decodeInteger; }
    return _cached_decoder_for_ENQcontent_vteChoice(el);
}

let _cached_encoder_for_ENQcontent_vteChoice: $.ASN1Encoder<ENQcontent_vteChoice> | null = null;

/**
 * @summary Encodes a(n) ENQcontent_vteChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ENQcontent_vteChoice, encoded as an ASN.1 Element.
 */
export
function _encode_ENQcontent_vteChoice (value: ENQcontent_vteChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ENQcontent_vteChoice) { _cached_encoder_for_ENQcontent_vteChoice = $._encodeInteger; }
    return _cached_encoder_for_ENQcontent_vteChoice(value, elGetter);
}


/* eslint-enable */
