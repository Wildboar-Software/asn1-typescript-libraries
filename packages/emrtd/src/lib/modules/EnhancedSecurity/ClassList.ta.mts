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
 * @summary ClassList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClassList  ::=  BIT STRING {
 *   unmarked      (0),
 *   unclassified  (1),
 *   restricted    (2),
 *   confidential  (3),
 *   secret        (4),
 *   topSecret     (5)}
 * ```
 */
export
type ClassList = BIT_STRING;

/**
 * @summary ClassList_unmarked
 * @constant
 */
export
const ClassList_unmarked: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary unmarked
 * @constant
 */
export
const unmarked: number = ClassList_unmarked; /* SHORT_NAMED_BIT */

/**
 * @summary ClassList_unclassified
 * @constant
 */
export
const ClassList_unclassified: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary unclassified
 * @constant
 */
export
const unclassified: number = ClassList_unclassified; /* SHORT_NAMED_BIT */

/**
 * @summary ClassList_restricted
 * @constant
 */
export
const ClassList_restricted: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary restricted
 * @constant
 */
export
const restricted: number = ClassList_restricted; /* SHORT_NAMED_BIT */

/**
 * @summary ClassList_confidential
 * @constant
 */
export
const ClassList_confidential: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary confidential
 * @constant
 */
export
const confidential: number = ClassList_confidential; /* SHORT_NAMED_BIT */

/**
 * @summary ClassList_secret
 * @constant
 */
export
const ClassList_secret: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary secret
 * @constant
 */
export
const secret: number = ClassList_secret; /* SHORT_NAMED_BIT */

/**
 * @summary ClassList_topSecret
 * @constant
 */
export
const ClassList_topSecret: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary topSecret
 * @constant
 */
export
const topSecret: number = ClassList_topSecret; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ClassList: $.ASN1Decoder<ClassList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClassList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClassList (el: _Element): ClassList {
    if (!_cached_decoder_for_ClassList) { _cached_decoder_for_ClassList = $._decodeBitString; }
    return _cached_decoder_for_ClassList(el);
}

let _cached_encoder_for_ClassList: $.ASN1Encoder<ClassList> | null = null;

/**
 * @summary Encodes a(n) ClassList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClassList, encoded as an ASN.1 Element.
 */
export
function _encode_ClassList (value: ClassList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClassList) { _cached_encoder_for_ClassList = $._encodeBitString; }
    return _cached_encoder_for_ClassList(value, elGetter);
}


/* eslint-enable */
