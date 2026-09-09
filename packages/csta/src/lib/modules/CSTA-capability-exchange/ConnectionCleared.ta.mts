/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionCleared
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionCleared  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     chargingInfo                 ( 2),     -- optional parameters
 *     numberUnitsNumberOfChargingUnits     ( 3),     -- optional parameters
 *     numberUnitsTypeOfUnits             ( 4),     -- optional parameters
 *     numberUnitsNumberOfCurrencyUnits     ( 5),     -- optional parameters
 *     typeOfChargingInfoSubTotal         ( 6),     -- optional parameters
 *     typeOfChargingInfoTotal         ( 7),     -- optional parameters
 *     chargingMultiplierAThousandth         ( 8),     -- optional parameters
 *     chargingMultiplierAHundredth         ( 9),     -- optional parameters
 *     chargingMultiplierATenth         (10),     -- optional parameters
 *     chargingMultiplierOne             (11),     -- optional parameters
 *     chargingMultiplierTen             (12),     -- optional parameters
 *     chargingMultiplierHundred         (13),     -- optional parameters
 *     chargingMultiplierThousand         (14),     -- optional parameters
 *     servicesPermitted             (15),     -- optional parameters
 *     mediaCallCharacteristics         (16),     -- optional parameters
 *     callCharacteristics             (17),     -- optional parameters
 *     droppedConnectionInfo             (18),     -- optional parameters
 *     callLinkageData             (20),     -- optional parameters
 *     languagePreferences            (21),     -- optional parameters
 *     deviceHistory                (22),     -- optional parameters
 *     privateData                 (19),     -- optional parameters
 *     locationInfoList            (23) }
 * ```
 */
export
type ConnectionCleared = BIT_STRING;

/**
 * @summary ConnectionCleared_correlatorData
 * @constant
 */
export
const ConnectionCleared_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 */
export
const correlatorData: number = ConnectionCleared_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_userData
 * @constant
 */
export
const ConnectionCleared_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 */
export
const userData: number = ConnectionCleared_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingInfo
 * @constant
 */
export
const ConnectionCleared_chargingInfo: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary chargingInfo
 * @constant
 */
export
const chargingInfo: number = ConnectionCleared_chargingInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const ConnectionCleared_numberUnitsNumberOfChargingUnits: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const numberUnitsNumberOfChargingUnits: number = ConnectionCleared_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsTypeOfUnits
 * @constant
 */
export
const ConnectionCleared_numberUnitsTypeOfUnits: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 */
export
const numberUnitsTypeOfUnits: number = ConnectionCleared_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const ConnectionCleared_numberUnitsNumberOfCurrencyUnits: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const numberUnitsNumberOfCurrencyUnits: number = ConnectionCleared_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_typeOfChargingInfoSubTotal
 * @constant
 */
export
const ConnectionCleared_typeOfChargingInfoSubTotal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 */
export
const typeOfChargingInfoSubTotal: number = ConnectionCleared_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_typeOfChargingInfoTotal
 * @constant
 */
export
const ConnectionCleared_typeOfChargingInfoTotal: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 */
export
const typeOfChargingInfoTotal: number = ConnectionCleared_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierAThousandth
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierAThousandth: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 */
export
const chargingMultiplierAThousandth: number = ConnectionCleared_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierAHundredth
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierAHundredth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 */
export
const chargingMultiplierAHundredth: number = ConnectionCleared_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierATenth
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierATenth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 */
export
const chargingMultiplierATenth: number = ConnectionCleared_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierOne
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierOne: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 */
export
const chargingMultiplierOne: number = ConnectionCleared_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierTen
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierTen: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 */
export
const chargingMultiplierTen: number = ConnectionCleared_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierHundred
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierHundred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 */
export
const chargingMultiplierHundred: number = ConnectionCleared_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierThousand
 * @constant
 */
export
const ConnectionCleared_chargingMultiplierThousand: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 */
export
const chargingMultiplierThousand: number = ConnectionCleared_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_servicesPermitted
 * @constant
 */
export
const ConnectionCleared_servicesPermitted: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = ConnectionCleared_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_mediaCallCharacteristics
 * @constant
 */
export
const ConnectionCleared_mediaCallCharacteristics: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 */
export
const mediaCallCharacteristics: number = ConnectionCleared_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_callCharacteristics
 * @constant
 */
export
const ConnectionCleared_callCharacteristics: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 */
export
const callCharacteristics: number = ConnectionCleared_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_droppedConnectionInfo
 * @constant
 */
export
const ConnectionCleared_droppedConnectionInfo: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary droppedConnectionInfo
 * @constant
 */
export
const droppedConnectionInfo: number = ConnectionCleared_droppedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_callLinkageData
 * @constant
 */
export
const ConnectionCleared_callLinkageData: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 */
export
const callLinkageData: number = ConnectionCleared_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_languagePreferences
 * @constant
 */
export
const ConnectionCleared_languagePreferences: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 */
export
const languagePreferences: number = ConnectionCleared_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_deviceHistory
 * @constant
 */
export
const ConnectionCleared_deviceHistory: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 */
export
const deviceHistory: number = ConnectionCleared_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_privateData
 * @constant
 */
export
const ConnectionCleared_privateData: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = ConnectionCleared_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_locationInfoList
 * @constant
 */
export
const ConnectionCleared_locationInfoList: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 */
export
const locationInfoList: number = ConnectionCleared_locationInfoList; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ConnectionCleared: $.ASN1Decoder<ConnectionCleared> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionCleared
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionCleared (el: _Element): ConnectionCleared {
    if (!_cached_decoder_for_ConnectionCleared) { _cached_decoder_for_ConnectionCleared = $._decodeBitString; }
    return _cached_decoder_for_ConnectionCleared(el);
}

let _cached_encoder_for_ConnectionCleared: $.ASN1Encoder<ConnectionCleared> | null = null;

/**
 * @summary Encodes a(n) ConnectionCleared into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionCleared, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionCleared (value: ConnectionCleared, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionCleared) { _cached_encoder_for_ConnectionCleared = $._encodeBitString; }
    return _cached_encoder_for_ConnectionCleared(value, elGetter);
}


/* eslint-enable */
