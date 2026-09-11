/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ConnectionCleared
 * @description
 * Capability bitmap for the Connection Cleared event (ECMA-269 C.6.4, ECMA-285
 * §9.10). Presence of this entry in `CallControlEvtsList` means the SF supports
 * that event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `ConnectionCleared_correlatorData`.
 */
export
const correlatorData: number = ConnectionCleared_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.4).
 */
export
const ConnectionCleared_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `ConnectionCleared_userData`.
 */
export
const userData: number = ConnectionCleared_userData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingInfo: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary chargingInfo
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingInfo`.
 */
export
const chargingInfo: number = ConnectionCleared_chargingInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsNumberOfChargingUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_numberUnitsNumberOfChargingUnits: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 * @description
 * Alias of `ConnectionCleared_numberUnitsNumberOfChargingUnits`.
 */
export
const numberUnitsNumberOfChargingUnits: number = ConnectionCleared_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsTypeOfUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_numberUnitsTypeOfUnits: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 * @description
 * Alias of `ConnectionCleared_numberUnitsTypeOfUnits`.
 */
export
const numberUnitsTypeOfUnits: number = ConnectionCleared_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_numberUnitsNumberOfCurrencyUnits: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Alias of `ConnectionCleared_numberUnitsNumberOfCurrencyUnits`.
 */
export
const numberUnitsNumberOfCurrencyUnits: number = ConnectionCleared_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_typeOfChargingInfoSubTotal: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Alias of `ConnectionCleared_typeOfChargingInfoSubTotal`.
 */
export
const typeOfChargingInfoSubTotal: number = ConnectionCleared_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_typeOfChargingInfoTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_typeOfChargingInfoTotal: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 * @description
 * Alias of `ConnectionCleared_typeOfChargingInfoTotal`.
 */
export
const typeOfChargingInfoTotal: number = ConnectionCleared_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierAThousandth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierAThousandth: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierAThousandth`.
 */
export
const chargingMultiplierAThousandth: number = ConnectionCleared_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierAHundredth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierAHundredth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierAHundredth`.
 */
export
const chargingMultiplierAHundredth: number = ConnectionCleared_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierATenth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierATenth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierATenth`.
 */
export
const chargingMultiplierATenth: number = ConnectionCleared_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierOne
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierOne: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierOne`.
 */
export
const chargingMultiplierOne: number = ConnectionCleared_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierTen
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierTen: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierTen`.
 */
export
const chargingMultiplierTen: number = ConnectionCleared_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierHundred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierHundred: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierHundred`.
 */
export
const chargingMultiplierHundred: number = ConnectionCleared_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_chargingMultiplierThousand
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_chargingMultiplierThousand: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 * @description
 * Alias of `ConnectionCleared_chargingMultiplierThousand`.
 */
export
const chargingMultiplierThousand: number = ConnectionCleared_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_servicesPermitted: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `ConnectionCleared_servicesPermitted`.
 */
export
const servicesPermitted: number = ConnectionCleared_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_mediaCallCharacteristics: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `ConnectionCleared_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = ConnectionCleared_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_callCharacteristics: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `ConnectionCleared_callCharacteristics`.
 */
export
const callCharacteristics: number = ConnectionCleared_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_droppedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_droppedConnectionInfo: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary droppedConnectionInfo
 * @constant
 * @description
 * Alias of `ConnectionCleared_droppedConnectionInfo`.
 */
export
const droppedConnectionInfo: number = ConnectionCleared_droppedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_callLinkageData
 * @constant
 * @description
 * Bit set means the SF supports the optional `callLinkageData` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_callLinkageData: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 * @description
 * Alias of `ConnectionCleared_callLinkageData`.
 */
export
const callLinkageData: number = ConnectionCleared_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_languagePreferences: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `ConnectionCleared_languagePreferences`.
 */
export
const languagePreferences: number = ConnectionCleared_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_deviceHistory: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `ConnectionCleared_deviceHistory`.
 */
export
const deviceHistory: number = ConnectionCleared_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.4).
 */
export
const ConnectionCleared_privateData: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ConnectionCleared_privateData`.
 */
export
const privateData: number = ConnectionCleared_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ConnectionCleared_locationInfoList
 * @constant
 * @description
 * Bit set means the SF supports the optional `locationInfoList` parameter
 * (ECMA-269 C.6.4).
 */
export
const ConnectionCleared_locationInfoList: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoList
 * @constant
 * @description
 * Alias of `ConnectionCleared_locationInfoList`.
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
