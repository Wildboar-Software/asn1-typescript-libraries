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
 * @summary Profiles
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Profiles  ::=  BIT STRING
 * {     basicTelephonyProfile                 ( 0),
 *     routeingProfile                 ( 1),
 *     level1aVoiceBrowserProfile            ( 2),
 *     level1bVoiceBrowserProfile            ( 3),
 *     level2VoiceBrowserProfile            ( 4),
 *     minimalUaCSTACallControlProfile            ( 5),
 *     basicUaCSTACallControlProfile            ( 6),
 *     advancedUaCSTACallControlProfile        ( 7),
 *     conferencingUaCSTACallControlProfile        ( 8),
 *     basicUaCSTADeviceFeatureProfile            ( 9),
 *     advancedUaCSTADeviceFeatureProfile        (10),
 *     speakerUACSTADeviceFeatureProfile        (11),
 *     basicSpeechServiceProfile            (12),
 *     advancedSpeechServiceProfile            (13) }
 * ```
 */
export
type Profiles = BIT_STRING;

/**
 * @summary Profiles_basicTelephonyProfile
 * @constant
 */
export
const Profiles_basicTelephonyProfile: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary basicTelephonyProfile
 * @constant
 */
export
const basicTelephonyProfile: number = Profiles_basicTelephonyProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_routeingProfile
 * @constant
 */
export
const Profiles_routeingProfile: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary routeingProfile
 * @constant
 */
export
const routeingProfile: number = Profiles_routeingProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_level1aVoiceBrowserProfile
 * @constant
 */
export
const Profiles_level1aVoiceBrowserProfile: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary level1aVoiceBrowserProfile
 * @constant
 */
export
const level1aVoiceBrowserProfile: number = Profiles_level1aVoiceBrowserProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_level1bVoiceBrowserProfile
 * @constant
 */
export
const Profiles_level1bVoiceBrowserProfile: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary level1bVoiceBrowserProfile
 * @constant
 */
export
const level1bVoiceBrowserProfile: number = Profiles_level1bVoiceBrowserProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_level2VoiceBrowserProfile
 * @constant
 */
export
const Profiles_level2VoiceBrowserProfile: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary level2VoiceBrowserProfile
 * @constant
 */
export
const level2VoiceBrowserProfile: number = Profiles_level2VoiceBrowserProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_minimalUaCSTACallControlProfile
 * @constant
 */
export
const Profiles_minimalUaCSTACallControlProfile: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary minimalUaCSTACallControlProfile
 * @constant
 */
export
const minimalUaCSTACallControlProfile: number = Profiles_minimalUaCSTACallControlProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_basicUaCSTACallControlProfile
 * @constant
 */
export
const Profiles_basicUaCSTACallControlProfile: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary basicUaCSTACallControlProfile
 * @constant
 */
export
const basicUaCSTACallControlProfile: number = Profiles_basicUaCSTACallControlProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_advancedUaCSTACallControlProfile
 * @constant
 */
export
const Profiles_advancedUaCSTACallControlProfile: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary advancedUaCSTACallControlProfile
 * @constant
 */
export
const advancedUaCSTACallControlProfile: number = Profiles_advancedUaCSTACallControlProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_conferencingUaCSTACallControlProfile
 * @constant
 */
export
const Profiles_conferencingUaCSTACallControlProfile: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary conferencingUaCSTACallControlProfile
 * @constant
 */
export
const conferencingUaCSTACallControlProfile: number = Profiles_conferencingUaCSTACallControlProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_basicUaCSTADeviceFeatureProfile
 * @constant
 */
export
const Profiles_basicUaCSTADeviceFeatureProfile: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary basicUaCSTADeviceFeatureProfile
 * @constant
 */
export
const basicUaCSTADeviceFeatureProfile: number = Profiles_basicUaCSTADeviceFeatureProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_advancedUaCSTADeviceFeatureProfile
 * @constant
 */
export
const Profiles_advancedUaCSTADeviceFeatureProfile: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary advancedUaCSTADeviceFeatureProfile
 * @constant
 */
export
const advancedUaCSTADeviceFeatureProfile: number = Profiles_advancedUaCSTADeviceFeatureProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_speakerUACSTADeviceFeatureProfile
 * @constant
 */
export
const Profiles_speakerUACSTADeviceFeatureProfile: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary speakerUACSTADeviceFeatureProfile
 * @constant
 */
export
const speakerUACSTADeviceFeatureProfile: number = Profiles_speakerUACSTADeviceFeatureProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_basicSpeechServiceProfile
 * @constant
 */
export
const Profiles_basicSpeechServiceProfile: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary basicSpeechServiceProfile
 * @constant
 */
export
const basicSpeechServiceProfile: number = Profiles_basicSpeechServiceProfile; /* SHORT_NAMED_BIT */

/**
 * @summary Profiles_advancedSpeechServiceProfile
 * @constant
 */
export
const Profiles_advancedSpeechServiceProfile: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary advancedSpeechServiceProfile
 * @constant
 */
export
const advancedSpeechServiceProfile: number = Profiles_advancedSpeechServiceProfile; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Profiles: $.ASN1Decoder<Profiles> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Profiles
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Profiles (el: _Element): Profiles {
    if (!_cached_decoder_for_Profiles) { _cached_decoder_for_Profiles = $._decodeBitString; }
    return _cached_decoder_for_Profiles(el);
}

let _cached_encoder_for_Profiles: $.ASN1Encoder<Profiles> | null = null;

/**
 * @summary Encodes a(n) Profiles into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Profiles, encoded as an ASN.1 Element.
 */
export
function _encode_Profiles (value: Profiles, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Profiles) { _cached_encoder_for_Profiles = $._encodeBitString; }
    return _cached_encoder_for_Profiles(value, elGetter);
}


/* eslint-enable */
