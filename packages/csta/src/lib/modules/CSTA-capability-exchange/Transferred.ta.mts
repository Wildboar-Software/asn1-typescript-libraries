/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Transferred
 * @description
 * Capability bitmap for the Transferred event (ECMA-269 C.6.18, ECMA-285
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_transferredConnectionsEndpointDeviceID: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary transferredConnectionsEndpointDeviceID
 * @constant
 * @description
 * Alias of `Transferred_transferredConnectionsEndpointDeviceID`.
 */
export
const transferredConnectionsEndpointDeviceID: number = Transferred_transferredConnectionsEndpointDeviceID; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_transferredConnectionsResultingConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_transferredConnectionsResultingConnectionInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary transferredConnectionsResultingConnectionInfo
 * @constant
 * @description
 * Alias of `Transferred_transferredConnectionsResultingConnectionInfo`.
 */
export
const transferredConnectionsResultingConnectionInfo: number = Transferred_transferredConnectionsResultingConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.18).
 */
export
const Transferred_userData: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `Transferred_userData`.
 */
export
const userData: number = Transferred_userData; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingInfo: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary chargingInfo
 * @constant
 * @description
 * Alias of `Transferred_chargingInfo`.
 */
export
const chargingInfo: number = Transferred_chargingInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsNumberOfChargingUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_numberUnitsNumberOfChargingUnits: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 * @description
 * Alias of `Transferred_numberUnitsNumberOfChargingUnits`.
 */
export
const numberUnitsNumberOfChargingUnits: number = Transferred_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsTypeOfUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_numberUnitsTypeOfUnits: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 * @description
 * Alias of `Transferred_numberUnitsTypeOfUnits`.
 */
export
const numberUnitsTypeOfUnits: number = Transferred_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_numberUnitsNumberOfCurrencyUnits: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Alias of `Transferred_numberUnitsNumberOfCurrencyUnits`.
 */
export
const numberUnitsNumberOfCurrencyUnits: number = Transferred_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_typeOfChargingInfoSubTotal: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Alias of `Transferred_typeOfChargingInfoSubTotal`.
 */
export
const typeOfChargingInfoSubTotal: number = Transferred_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_typeOfChargingInfoTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_typeOfChargingInfoTotal: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 * @description
 * Alias of `Transferred_typeOfChargingInfoTotal`.
 */
export
const typeOfChargingInfoTotal: number = Transferred_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierAThousandth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierAThousandth: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierAThousandth`.
 */
export
const chargingMultiplierAThousandth: number = Transferred_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierAHundredth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierAHundredth: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierAHundredth`.
 */
export
const chargingMultiplierAHundredth: number = Transferred_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierATenth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierATenth: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierATenth`.
 */
export
const chargingMultiplierATenth: number = Transferred_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierOne
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierOne: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierOne`.
 */
export
const chargingMultiplierOne: number = Transferred_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierTen
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierTen: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierTen`.
 */
export
const chargingMultiplierTen: number = Transferred_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierHundred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierHundred: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierHundred`.
 */
export
const chargingMultiplierHundred: number = Transferred_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_chargingMultiplierThousand
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_chargingMultiplierThousand: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 * @description
 * Alias of `Transferred_chargingMultiplierThousand`.
 */
export
const chargingMultiplierThousand: number = Transferred_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_servicesPermitted: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Transferred_servicesPermitted`.
 */
export
const servicesPermitted: number = Transferred_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.18).
 */
export
const Transferred_mediaCallCharacteristics: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Transferred_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Transferred_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.18).
 */
export
const Transferred_callCharacteristics: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Transferred_callCharacteristics`.
 */
export
const callCharacteristics: number = Transferred_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_connectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.18).
 */
export
const Transferred_connectionInfo: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 * @description
 * Alias of `Transferred_connectionInfo`.
 */
export
const connectionInfo: number = Transferred_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.18).
 */
export
const Transferred_languagePreferences: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Transferred_languagePreferences`.
 */
export
const languagePreferences: number = Transferred_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.18).
 */
export
const Transferred_deviceHistory: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Transferred_deviceHistory`.
 */
export
const deviceHistory: number = Transferred_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Transferred_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.18).
 */
export
const Transferred_privateData: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Transferred_privateData`.
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
