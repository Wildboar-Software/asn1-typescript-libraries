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
 * @summary Conferenced
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conferenced  ::=  BIT STRING
 * {     confereceConnectionsEndpointDeviceID         ( 0),     -- optional parameters
 *     confereceConnectionsresultingConnectionInfo     ( 1),     -- optional parameters
 *     userData                     ( 2),     -- optional parameters
 *     servicesPermitted                 ( 3),     -- optional parameters
 *     mediaCallCharacteristics             ( 4),     -- optional parameters
 *     callCharacteristics                 ( 5),     -- optional parameters
 *     bridgedConnectionInfo                 ( 6),     -- optional parameters
 *     lannguagePreferences                ( 8),     -- optional parameters
 *     deviceHistory                    ( 9),     -- optional parameters
 *     privateData                     ( 7),     -- optional parameters
 *     locationInfoList                (10) }
 * ```
 */
export
type Conferenced = BIT_STRING;

/**
 * @summary Conferenced_confereceConnectionsEndpointDeviceID
 * @constant
 */
export
const Conferenced_confereceConnectionsEndpointDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary confereceConnectionsEndpointDeviceID
 * @constant
 */
export
const confereceConnectionsEndpointDeviceID: number = Conferenced_confereceConnectionsEndpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_confereceConnectionsresultingConnectionInfo
 * @constant
 */
export
const Conferenced_confereceConnectionsresultingConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary confereceConnectionsresultingConnectionInfo
 * @constant
 */
export
const confereceConnectionsresultingConnectionInfo: number = Conferenced_confereceConnectionsresultingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_userData
 * @constant
 */
export
const Conferenced_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Conferenced_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_servicesPermitted
 * @constant
 */
export
const Conferenced_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Conferenced_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_mediaCallCharacteristics
 * @constant
 */
export
const Conferenced_mediaCallCharacteristics: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Conferenced_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_callCharacteristics
 * @constant
 */
export
const Conferenced_callCharacteristics: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Conferenced_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_bridgedConnectionInfo
 * @constant
 */
export
const Conferenced_bridgedConnectionInfo: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary bridgedConnectionInfo
 * @constant
 */
export
const bridgedConnectionInfo: number = Conferenced_bridgedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_lannguagePreferences
 * @constant
 */
export
const Conferenced_lannguagePreferences: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary lannguagePreferences
 * @constant
 */
export
const lannguagePreferences: number = Conferenced_lannguagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_deviceHistory
 * @constant
 */
export
const Conferenced_deviceHistory: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Conferenced_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_privateData
 * @constant
 */
export
const Conferenced_privateData: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Conferenced_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Conferenced_locationInfoList
 * @constant
 */
export
const Conferenced_locationInfoList: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = Conferenced_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Conferenced: $.ASN1Decoder<Conferenced> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conferenced
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Conferenced (el: _Element): Conferenced {
    if (!_cached_decoder_for_Conferenced) { _cached_decoder_for_Conferenced = $._decodeBitString; }
    return _cached_decoder_for_Conferenced(el);
}

let _cached_encoder_for_Conferenced: $.ASN1Encoder<Conferenced> | null = null;

/**
 * @summary Encodes a(n) Conferenced into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conferenced, encoded as an ASN.1 Element.
 */
export
function _encode_Conferenced (value: Conferenced, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Conferenced) { _cached_encoder_for_Conferenced = $._encodeBitString; }
    return _cached_encoder_for_Conferenced(value, elGetter);
}


/* eslint-enable */
