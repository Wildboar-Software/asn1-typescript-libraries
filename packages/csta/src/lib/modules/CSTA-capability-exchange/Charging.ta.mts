/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Charging
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Charging  ::=  BIT STRING
 * {     numberUnitsNumberOfChargingUnits     ( 0),     -- optional parameters
 *     numberUnitsTypeOfUnits             ( 1),     -- optional parameters
 *     numberUnitsNumberOfCurrencyUnits     ( 2),     -- optional parameters
 *     typeOfChargingInfoSubTotal         ( 3),     -- optional parameters
 *     typeOfChargingInfoTotal         ( 4),     -- optional parameters
 *     chargingMultiplierAThousandth         ( 5),     -- optional parameters
 *     chargingMultiplierAHundredth         ( 6),     -- optional parameters
 *     chargingMultiplierATenth         ( 7),     -- optional parameters
 *     chargingMultiplierOne             ( 8),     -- optional parameters
 *     chargingMultiplierTen             ( 9),     -- optional parameters
 *     chargingMultiplierHundred         (10),     -- optional parameters
 *     chargingMultiplierThousand         (11),     -- optional parameters
 *     privateData                 (12) }
 * ```
 */
export
type Charging = BIT_STRING;

/**
 * @summary Charging_numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const Charging_numberUnitsNumberOfChargingUnits: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 */
export
const numberUnitsNumberOfChargingUnits: number = Charging_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_numberUnitsTypeOfUnits
 * @constant
 */
export
const Charging_numberUnitsTypeOfUnits: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 */
export
const numberUnitsTypeOfUnits: number = Charging_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const Charging_numberUnitsNumberOfCurrencyUnits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 */
export
const numberUnitsNumberOfCurrencyUnits: number = Charging_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_typeOfChargingInfoSubTotal
 * @constant
 */
export
const Charging_typeOfChargingInfoSubTotal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 */
export
const typeOfChargingInfoSubTotal: number = Charging_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_typeOfChargingInfoTotal
 * @constant
 */
export
const Charging_typeOfChargingInfoTotal: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 */
export
const typeOfChargingInfoTotal: number = Charging_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierAThousandth
 * @constant
 */
export
const Charging_chargingMultiplierAThousandth: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 */
export
const chargingMultiplierAThousandth: number = Charging_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierAHundredth
 * @constant
 */
export
const Charging_chargingMultiplierAHundredth: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 */
export
const chargingMultiplierAHundredth: number = Charging_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierATenth
 * @constant
 */
export
const Charging_chargingMultiplierATenth: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 */
export
const chargingMultiplierATenth: number = Charging_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierOne
 * @constant
 */
export
const Charging_chargingMultiplierOne: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 */
export
const chargingMultiplierOne: number = Charging_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierTen
 * @constant
 */
export
const Charging_chargingMultiplierTen: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 */
export
const chargingMultiplierTen: number = Charging_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierHundred
 * @constant
 */
export
const Charging_chargingMultiplierHundred: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 */
export
const chargingMultiplierHundred: number = Charging_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierThousand
 * @constant
 */
export
const Charging_chargingMultiplierThousand: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 */
export
const chargingMultiplierThousand: number = Charging_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_privateData
 * @constant
 */
export
const Charging_privateData: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = Charging_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Charging: $.ASN1Decoder<Charging> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Charging
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Charging (el: _Element): Charging {
    if (!_cached_decoder_for_Charging) { _cached_decoder_for_Charging = $._decodeBitString; }
    return _cached_decoder_for_Charging(el);
}

let _cached_encoder_for_Charging: $.ASN1Encoder<Charging> | null = null;

/**
 * @summary Encodes a(n) Charging into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Charging, encoded as an ASN.1 Element.
 */
export
function _encode_Charging (value: Charging, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Charging) { _cached_encoder_for_Charging = $._encodeBitString; }
    return _cached_encoder_for_Charging(value, elGetter);
}


/* eslint-enable */
