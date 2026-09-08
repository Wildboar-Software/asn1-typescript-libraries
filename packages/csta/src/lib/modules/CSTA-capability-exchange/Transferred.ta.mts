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
 * @summary Transferred
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Transferred  ::=  BIT STRING
 * {     transferredConnectionsEndpointDeviceID         ( 0),     -- optional parameters
 *     transferredConnectionsResultingConnectionInfo     ( 1),     -- optional parameters
 *     userData                     ( 2),     -- optional parameters
 *     chargingInfo                     ( 3),     -- optional parameters
 *     numberUnitsNumberOfChargingUnits         ( 4),     -- optional parameters
 *     numberUnitsTypeOfUnits                 ( 5),     -- optional parameters
 *     numberUnitsNumberOfCurrencyUnits         ( 6),     -- optional parameters
 *     typeOfChargingInfoSubTotal             ( 7),     -- optional parameters
 *     typeOfChargingInfoTotal             ( 8),     -- optional parameters
 *     chargingMultiplierAThousandth             ( 9),     -- optional parameters
 *     chargingMultiplierAHundredth             (10),     -- optional parameters
 *     chargingMultiplierATenth             (11),     -- optional parameters
 *     chargingMultiplierOne                 (12),     -- optional parameters
 *     chargingMultiplierTen                 (13),     -- optional parameters
 *     chargingMultiplierHundred             (14),     -- optional parameters
 *     chargingMultiplierThousand             (15),     -- optional parameters
 *     servicesPermitted                 (16),     -- optional parameters
 *     mediaCallCharacteristics             (17),     -- optional parameters
 *     callCharacteristics                 (18),     -- optional parameters
 *     connectionInfo                     (19),     -- optional parameters
 *     languagePreferences                (21),     -- optional parameters
 *     deviceHistory                    (22),     -- optional parameters
 *     privateData                     (20) }
 * ```
 */
export
type Transferred = BIT_STRING;

/**
 * @summary Transferred_transferredConnectionsEndpointDeviceID
 * @constant
 */
export
const Transferred_transferredConnectionsEndpointDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary transferredConnectionsEndpointDeviceID
 * @constant
 */
export
const transferredConnectionsEndpointDeviceID: number = Transferred_transferredConnectionsEndpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_transferredConnectionsResultingConnectionInfo
 * @constant
 */
export
const Transferred_transferredConnectionsResultingConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary transferredConnectionsResultingConnectionInfo
 * @constant
 */
export
const transferredConnectionsResultingConnectionInfo: number = Transferred_transferredConnectionsResultingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_userData
 * @constant
 */
export
const Transferred_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = Transferred_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingInfo
 * @constant
 */
export
const Transferred_chargingInfo: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary chargingInfo
 * @constant
 */
export
const chargingInfo: number = Transferred_chargingInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const Transferred_numberUnitsNumberOfChargingUnits: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const numberUnitsNumberOfChargingUnits: number = Transferred_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsTypeOfUnits
 * @constant
 */
export
const Transferred_numberUnitsTypeOfUnits: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 */
export
const numberUnitsTypeOfUnits: number = Transferred_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const Transferred_numberUnitsNumberOfCurrencyUnits: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const numberUnitsNumberOfCurrencyUnits: number = Transferred_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_typeOfChargingInfoSubTotal
 * @constant
 */
export
const Transferred_typeOfChargingInfoSubTotal: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 */
export
const typeOfChargingInfoSubTotal: number = Transferred_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_typeOfChargingInfoTotal
 * @constant
 */
export
const Transferred_typeOfChargingInfoTotal: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 */
export
const typeOfChargingInfoTotal: number = Transferred_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierAThousandth
 * @constant
 */
export
const Transferred_chargingMultiplierAThousandth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 */
export
const chargingMultiplierAThousandth: number = Transferred_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierAHundredth
 * @constant
 */
export
const Transferred_chargingMultiplierAHundredth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 */
export
const chargingMultiplierAHundredth: number = Transferred_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierATenth
 * @constant
 */
export
const Transferred_chargingMultiplierATenth: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 */
export
const chargingMultiplierATenth: number = Transferred_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierOne
 * @constant
 */
export
const Transferred_chargingMultiplierOne: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 */
export
const chargingMultiplierOne: number = Transferred_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierTen
 * @constant
 */
export
const Transferred_chargingMultiplierTen: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 */
export
const chargingMultiplierTen: number = Transferred_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierHundred
 * @constant
 */
export
const Transferred_chargingMultiplierHundred: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 */
export
const chargingMultiplierHundred: number = Transferred_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierThousand
 * @constant
 */
export
const Transferred_chargingMultiplierThousand: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 */
export
const chargingMultiplierThousand: number = Transferred_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_servicesPermitted
 * @constant
 */
export
const Transferred_servicesPermitted: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = Transferred_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_mediaCallCharacteristics
 * @constant
 */
export
const Transferred_mediaCallCharacteristics: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = Transferred_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_callCharacteristics
 * @constant
 */
export
const Transferred_callCharacteristics: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = Transferred_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_connectionInfo
 * @constant
 */
export
const Transferred_connectionInfo: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 */
export
const connectionInfo: number = Transferred_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_languagePreferences
 * @constant
 */
export
const Transferred_languagePreferences: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = Transferred_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_deviceHistory
 * @constant
 */
export
const Transferred_deviceHistory: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = Transferred_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_privateData
 * @constant
 */
export
const Transferred_privateData: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Transferred_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Transferred: $.ASN1Decoder<Transferred> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Transferred
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Transferred (el: _Element): Transferred {
    if (!_cached_decoder_for_Transferred) { _cached_decoder_for_Transferred = $._decodeBitString; }
    return _cached_decoder_for_Transferred(el);
}

let _cached_encoder_for_Transferred: $.ASN1Encoder<Transferred> | null = null;

/**
 * @summary Encodes a(n) Transferred into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Transferred, encoded as an ASN.1 Element.
 */
export
function _encode_Transferred (value: Transferred, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Transferred) { _cached_encoder_for_Transferred = $._encodeBitString; }
    return _cached_encoder_for_Transferred(value, elGetter);
}


/* eslint-enable */
