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
 * @summary SwAppearanceTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SwAppearanceTypes  ::=  BIT STRING
 * {     selectedStandard             ( 0),
 *     basicStandard                 ( 1),
 *     basicBridged                 ( 2),
 *     exclusiveBridged             ( 3),
 *     independentSharedBridged         ( 4),
 *     interDependentSharedBridged         ( 5) }
 * ```
 */
export
type SwAppearanceTypes = BIT_STRING;

/**
 * @summary SwAppearanceTypes_selectedStandard
 * @constant
 */
export
const SwAppearanceTypes_selectedStandard: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary selectedStandard
 * @constant
 */
export
const selectedStandard: number = SwAppearanceTypes_selectedStandard; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_basicStandard
 * @constant
 */
export
const SwAppearanceTypes_basicStandard: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary basicStandard
 * @constant
 */
export
const basicStandard: number = SwAppearanceTypes_basicStandard; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_basicBridged
 * @constant
 */
export
const SwAppearanceTypes_basicBridged: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary basicBridged
 * @constant
 */
export
const basicBridged: number = SwAppearanceTypes_basicBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_exclusiveBridged
 * @constant
 */
export
const SwAppearanceTypes_exclusiveBridged: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary exclusiveBridged
 * @constant
 */
export
const exclusiveBridged: number = SwAppearanceTypes_exclusiveBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_independentSharedBridged
 * @constant
 */
export
const SwAppearanceTypes_independentSharedBridged: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary independentSharedBridged
 * @constant
 */
export
const independentSharedBridged: number = SwAppearanceTypes_independentSharedBridged; /* SHORT_NAMED_BIT */

/**
 * @summary SwAppearanceTypes_interDependentSharedBridged
 * @constant
 */
export
const SwAppearanceTypes_interDependentSharedBridged: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary interDependentSharedBridged
 * @constant
 */
export
const interDependentSharedBridged: number = SwAppearanceTypes_interDependentSharedBridged; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SwAppearanceTypes: $.ASN1Decoder<SwAppearanceTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SwAppearanceTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SwAppearanceTypes (el: _Element): SwAppearanceTypes {
    if (!_cached_decoder_for_SwAppearanceTypes) { _cached_decoder_for_SwAppearanceTypes = $._decodeBitString; }
    return _cached_decoder_for_SwAppearanceTypes(el);
}

let _cached_encoder_for_SwAppearanceTypes: $.ASN1Encoder<SwAppearanceTypes> | null = null;

/**
 * @summary Encodes a(n) SwAppearanceTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SwAppearanceTypes, encoded as an ASN.1 Element.
 */
export
function _encode_SwAppearanceTypes (value: SwAppearanceTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SwAppearanceTypes) { _cached_encoder_for_SwAppearanceTypes = $._encodeBitString; }
    return _cached_encoder_for_SwAppearanceTypes(value, elGetter);
}


/* eslint-enable */
