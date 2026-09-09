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



/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_BothwayThroughConnectionInd {
    bothwayPathRequired = 0,
    bothwayPathNotRequired = 1,
}

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
type BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BothwayThroughConnectionInd  ::=  ENUMERATED {
 *   bothwayPathRequired(0), bothwayPathNotRequired(1)}
 * ```
 * 
 * @enum {number}
 */
export
const BothwayThroughConnectionInd = _enum_for_BothwayThroughConnectionInd;

/**
 * @summary BothwayThroughConnectionInd_bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary BothwayThroughConnectionInd_bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const BothwayThroughConnectionInd_bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary bothwayPathNotRequired
 * @constant
 * @type {number}
 */
export
const bothwayPathNotRequired: BothwayThroughConnectionInd = BothwayThroughConnectionInd.bothwayPathNotRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_BothwayThroughConnectionInd: $.ASN1Decoder<BothwayThroughConnectionInd> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BothwayThroughConnectionInd
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BothwayThroughConnectionInd (el: _Element): BothwayThroughConnectionInd {
    if (!_cached_decoder_for_BothwayThroughConnectionInd) { _cached_decoder_for_BothwayThroughConnectionInd = $._decodeEnumerated; }
    return _cached_decoder_for_BothwayThroughConnectionInd(el);
}

let _cached_encoder_for_BothwayThroughConnectionInd: $.ASN1Encoder<BothwayThroughConnectionInd> | null = null;

/**
 * @summary Encodes a(n) BothwayThroughConnectionInd into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BothwayThroughConnectionInd, encoded as an ASN.1 Element.
 */
export
function _encode_BothwayThroughConnectionInd (value: BothwayThroughConnectionInd, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BothwayThroughConnectionInd) { _cached_encoder_for_BothwayThroughConnectionInd = $._encodeEnumerated; }
    return _cached_encoder_for_BothwayThroughConnectionInd(value, elGetter);
}


/* eslint-enable */
