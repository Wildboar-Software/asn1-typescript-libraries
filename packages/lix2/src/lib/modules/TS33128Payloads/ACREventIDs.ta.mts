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
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ACREventIDs {
    targetInformation = 1,
    aCRComplete = 2,
}

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ACREventIDs  ::=  ENUMERATED
 * {
 *     targetInformation(1),
 *     aCRComplete(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const ACREventIDs = _enum_for_ACREventIDs;

/**
 * @summary ACREventIDs_targetInformation
 * @constant
 * @type {number}
 */
export
const ACREventIDs_targetInformation: ACREventIDs = ACREventIDs.targetInformation; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary targetInformation
 * @constant
 * @type {number}
 */
export
const targetInformation: ACREventIDs = ACREventIDs.targetInformation; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ACREventIDs_aCRComplete
 * @constant
 * @type {number}
 */
export
const ACREventIDs_aCRComplete: ACREventIDs = ACREventIDs.aCRComplete; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aCRComplete
 * @constant
 * @type {number}
 */
export
const aCRComplete: ACREventIDs = ACREventIDs.aCRComplete; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ACREventIDs: $.ASN1Decoder<ACREventIDs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ACREventIDs
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ACREventIDs (el: _Element): ACREventIDs {
    if (!_cached_decoder_for_ACREventIDs) { _cached_decoder_for_ACREventIDs = $._decodeEnumerated; }
    return _cached_decoder_for_ACREventIDs(el);
}

let _cached_encoder_for_ACREventIDs: $.ASN1Encoder<ACREventIDs> | null = null;

/**
 * @summary Encodes a(n) ACREventIDs into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ACREventIDs, encoded as an ASN.1 Element.
 */
export
function _encode_ACREventIDs (value: ACREventIDs, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ACREventIDs) { _cached_encoder_for_ACREventIDs = $._encodeEnumerated; }
    return _cached_encoder_for_ACREventIDs(value, elGetter);
}


/* eslint-enable */
