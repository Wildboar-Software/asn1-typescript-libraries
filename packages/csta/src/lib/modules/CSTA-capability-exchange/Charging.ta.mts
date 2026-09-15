/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Charging
 * @description
 * Capability bitmap for the Charging event (ECMA-269 C.8.2, ECMA-285 §9.10).
 * Presence of this entry in `CallAssociatedEvtsList` means the SF supports that
 * event. Each set bit is an optional parameter, enumerated value, initial
 * connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
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
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_numberUnitsNumberOfChargingUnits: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfChargingUnits
 * @constant
 * @description
 * Alias of `Charging_numberUnitsNumberOfChargingUnits`.
 */
export
const numberUnitsNumberOfChargingUnits: number = Charging_numberUnitsNumberOfChargingUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_numberUnitsTypeOfUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_numberUnitsTypeOfUnits: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsTypeOfUnits
 * @constant
 * @description
 * Alias of `Charging_numberUnitsTypeOfUnits`.
 */
export
const numberUnitsTypeOfUnits: number = Charging_numberUnitsTypeOfUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_numberUnitsNumberOfCurrencyUnits: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary numberUnitsNumberOfCurrencyUnits
 * @constant
 * @description
 * Alias of `Charging_numberUnitsNumberOfCurrencyUnits`.
 */
export
const numberUnitsNumberOfCurrencyUnits: number = Charging_numberUnitsNumberOfCurrencyUnits; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_typeOfChargingInfoSubTotal: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoSubTotal
 * @constant
 * @description
 * Alias of `Charging_typeOfChargingInfoSubTotal`.
 */
export
const typeOfChargingInfoSubTotal: number = Charging_typeOfChargingInfoSubTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_typeOfChargingInfoTotal
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_typeOfChargingInfoTotal: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary typeOfChargingInfoTotal
 * @constant
 * @description
 * Alias of `Charging_typeOfChargingInfoTotal`.
 */
export
const typeOfChargingInfoTotal: number = Charging_typeOfChargingInfoTotal; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierAThousandth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierAThousandth: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAThousandth
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierAThousandth`.
 */
export
const chargingMultiplierAThousandth: number = Charging_chargingMultiplierAThousandth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierAHundredth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierAHundredth: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierAHundredth
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierAHundredth`.
 */
export
const chargingMultiplierAHundredth: number = Charging_chargingMultiplierAHundredth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierATenth
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierATenth: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierATenth
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierATenth`.
 */
export
const chargingMultiplierATenth: number = Charging_chargingMultiplierATenth; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierOne
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierOne: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierOne
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierOne`.
 */
export
const chargingMultiplierOne: number = Charging_chargingMultiplierOne; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierTen
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierTen: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierTen
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierTen`.
 */
export
const chargingMultiplierTen: number = Charging_chargingMultiplierTen; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierHundred
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierHundred: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierHundred
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierHundred`.
 */
export
const chargingMultiplierHundred: number = Charging_chargingMultiplierHundred; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_chargingMultiplierThousand
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.2).
 */
export
const Charging_chargingMultiplierThousand: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary chargingMultiplierThousand
 * @constant
 * @description
 * Alias of `Charging_chargingMultiplierThousand`.
 */
export
const chargingMultiplierThousand: number = Charging_chargingMultiplierThousand; /* SHORT_NAMED_BIT */

/**
 * @summary Charging_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.8.2).
 */
export
const Charging_privateData: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Charging_privateData`.
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
