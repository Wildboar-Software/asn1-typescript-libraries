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
 * @summary Retrieved
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Retrieved  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     servicesPermitted             ( 1),     -- optional parameters
 *     mediaCallCharacteristics         ( 2),     -- optional parameters
 *     callCharacteristics             ( 3),     -- optional parameters
 *     retrievedConnectionInfo         ( 4),     -- optional parameters
 *     callLinkageData             ( 6),     -- optional parameters
 *     languagePreferences            ( 7),     -- optional parameters
 *     deviceHistory                ( 8),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     locationInfoLiist            ( 9) }
 * ```
 */
export
type Retrieved = BIT_STRING;

/**
 * @summary Retrieved_correlatorData
 * @constant
 */
export
const Retrieved_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = Retrieved_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_servicesPermitted
 * @constant
 */
export
const Retrieved_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Retrieved_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_mediaCallCharacteristics
 * @constant
 */
export
const Retrieved_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Retrieved_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_callCharacteristics
 * @constant
 */
export
const Retrieved_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Retrieved_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_retrievedConnectionInfo
 * @constant
 */
export
const Retrieved_retrievedConnectionInfo: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary retrievedConnectionInfo
 * @constant
 */
export
const retrievedConnectionInfo: number = Retrieved_retrievedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_callLinkageData
 * @constant
 */
export
const Retrieved_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 */
export
const callLinkageData: number = Retrieved_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_languagePreferences
 * @constant
 */
export
const Retrieved_languagePreferences: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Retrieved_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_deviceHistory
 * @constant
 */
export
const Retrieved_deviceHistory: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Retrieved_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_privateData
 * @constant
 */
export
const Retrieved_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Retrieved_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_locationInfoLiist
 * @constant
 */
export
const Retrieved_locationInfoLiist: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoLiist
 * @constant
 */
export
const locationInfoLiist: number = Retrieved_locationInfoLiist; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Retrieved: $.ASN1Decoder<Retrieved> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Retrieved
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Retrieved (el: _Element): Retrieved {
    if (!_cached_decoder_for_Retrieved) { _cached_decoder_for_Retrieved = $._decodeBitString; }
    return _cached_decoder_for_Retrieved(el);
}

let _cached_encoder_for_Retrieved: $.ASN1Encoder<Retrieved> | null = null;

/**
 * @summary Encodes a(n) Retrieved into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Retrieved, encoded as an ASN.1 Element.
 */
export
function _encode_Retrieved (value: Retrieved, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Retrieved) { _cached_encoder_for_Retrieved = $._encodeBitString; }
    return _cached_encoder_for_Retrieved(value, elGetter);
}


/* eslint-enable */
