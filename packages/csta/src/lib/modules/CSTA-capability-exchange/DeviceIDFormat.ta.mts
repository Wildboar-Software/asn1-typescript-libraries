/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary DeviceIDFormat
 * @description
 * Bitmap of DeviceID formats the SF accepts in service requests (ECMA-269
 * §13.1.4.2.1 Table 13-9, ECMA-285 §9.10). A set bit means that format is used.
 * Diallable Digits 0-9 shall be supported.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceIDFormat  ::=  BIT STRING
 * {    dialableDigitsAsterix             ( 0),
 *     dialableDigitsHash             ( 1),
 *     dialableDigitsABCD             ( 2),
 *     dialableDigitsExclamation         ( 3),
 *     dialableDigitsP             ( 4),
 *     dialableDigitsT             ( 5),
 *     dialableDigitsComma             ( 6),
 *     dialableDigitsW             ( 7),
 *     dialableDigitsAt             ( 8),
 *     dialableDigitsDollar             ( 9),
 *     dialableDigitsSemicolon         (10),
 *     sFReprExclamation             (11),
 *     sFReprEt                 (12),
 *     sFReprSlash                 (13),
 *     sFReprPercent                 (14),
 *     sFReprNM                 (15),
 *     sFReprGeneric                 (16),
 *     sFReprImplicitTON             (17),
 *     sFReprPubTONUnkown             (18),
 *     sFReprPubTONInternal             (19),
 *     sFReprPubTONNational             (20),
 *     sFReprPubTONSubscriber             (21),
 *     sFReprPubTONAbbreviated         (22),
 *     sFReprPriTONUnknown             (23),
 *     sFReprPriTONLevel3             (24),
 *     sFReprPriTONLevel2             (25),
 *     sFReprPriTONLevel1             (26),
 *     sFReprPriTONLocal             (27),
 *     sFReprPriTONAbbreviated         (28),
 *     sFReprOther                 (29),
 *     sFRResourceID                (31),
 *     privateNumber                (32),
 *     privateName                (33),
 *     deviceNumber                 (30) }
 * ```
 */
export
type DeviceIDFormat = BIT_STRING;

/**
 * @summary DeviceIDFormat_dialableDigitsAsterix
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "*" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsAsterix: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsAsterix
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsAsterix`.
 */
export
const dialableDigitsAsterix: number = DeviceIDFormat_dialableDigitsAsterix; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsHash
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "#" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsHash: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsHash
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsHash`.
 */
export
const dialableDigitsHash: number = DeviceIDFormat_dialableDigitsHash; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsABCD
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "A-D" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsABCD: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsABCD
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsABCD`.
 */
export
const dialableDigitsABCD: number = DeviceIDFormat_dialableDigitsABCD; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsExclamation
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "!" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsExclamation: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsExclamation
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsExclamation`.
 */
export
const dialableDigitsExclamation: number = DeviceIDFormat_dialableDigitsExclamation; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsP
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "P" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsP: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsP
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsP`.
 */
export
const dialableDigitsP: number = DeviceIDFormat_dialableDigitsP; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsT
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "T" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsT: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsT
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsT`.
 */
export
const dialableDigitsT: number = DeviceIDFormat_dialableDigitsT; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsComma
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "," (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsComma: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsComma
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsComma`.
 */
export
const dialableDigitsComma: number = DeviceIDFormat_dialableDigitsComma; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsW
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "W" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsW: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsW
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsW`.
 */
export
const dialableDigitsW: number = DeviceIDFormat_dialableDigitsW; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsAt
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "@" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsAt: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsAt
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsAt`.
 */
export
const dialableDigitsAt: number = DeviceIDFormat_dialableDigitsAt; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsDollar
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format "$" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsDollar: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsDollar
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsDollar`.
 */
export
const dialableDigitsDollar: number = DeviceIDFormat_dialableDigitsDollar; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_dialableDigitsSemicolon
 * @constant
 * @description
 * Bit set means the SF supports Diallable Digits format ";" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_dialableDigitsSemicolon: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary dialableDigitsSemicolon
 * @constant
 * @description
 * Alias of `DeviceIDFormat_dialableDigitsSemicolon`.
 */
export
const dialableDigitsSemicolon: number = DeviceIDFormat_dialableDigitsSemicolon; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprExclamation
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format "!" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprExclamation: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary sFReprExclamation
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprExclamation`.
 */
export
const sFReprExclamation: number = DeviceIDFormat_sFReprExclamation; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprEt
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format "&" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprEt: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary sFReprEt
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprEt`.
 */
export
const sFReprEt: number = DeviceIDFormat_sFReprEt; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprSlash
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format "/" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprSlash: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary sFReprSlash
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprSlash`.
 */
export
const sFReprSlash: number = DeviceIDFormat_sFReprSlash; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPercent
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format "%" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPercent: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPercent
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPercent`.
 */
export
const sFReprPercent: number = DeviceIDFormat_sFReprPercent; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprNM
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format "NM" (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprNM: number = 15; /* LONG_NAMED_BIT */

/**
 * @summary sFReprNM
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprNM`.
 */
export
const sFReprNM: number = DeviceIDFormat_sFReprNM; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprGeneric
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format Generic (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprGeneric: number = 16; /* LONG_NAMED_BIT */

/**
 * @summary sFReprGeneric
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprGeneric`.
 */
export
const sFReprGeneric: number = DeviceIDFormat_sFReprGeneric; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprImplicitTON
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format ImplicitTON (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprImplicitTON: number = 17; /* LONG_NAMED_BIT */

/**
 * @summary sFReprImplicitTON
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprImplicitTON`.
 */
export
const sFReprImplicitTON: number = DeviceIDFormat_sFReprImplicitTON; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONUnkown
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PublicTON unknown (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPubTONUnkown: number = 18; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONUnkown
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPubTONUnkown`.
 */
export
const sFReprPubTONUnkown: number = DeviceIDFormat_sFReprPubTONUnkown; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONInternal
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PublicTON international
 * number (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPubTONInternal: number = 19; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONInternal
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPubTONInternal`.
 */
export
const sFReprPubTONInternal: number = DeviceIDFormat_sFReprPubTONInternal; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONNational
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PublicTON national (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPubTONNational: number = 20; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONNational
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPubTONNational`.
 */
export
const sFReprPubTONNational: number = DeviceIDFormat_sFReprPubTONNational; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONSubscriber
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PublicTON subscriber
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPubTONSubscriber: number = 21; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONSubscriber
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPubTONSubscriber`.
 */
export
const sFReprPubTONSubscriber: number = DeviceIDFormat_sFReprPubTONSubscriber; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPubTONAbbreviated
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PublicTON abbreviated
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPubTONAbbreviated: number = 22; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPubTONAbbreviated
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPubTONAbbreviated`.
 */
export
const sFReprPubTONAbbreviated: number = DeviceIDFormat_sFReprPubTONAbbreviated; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONUnknown
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON unknown (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONUnknown: number = 23; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONUnknown
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONUnknown`.
 */
export
const sFReprPriTONUnknown: number = DeviceIDFormat_sFReprPriTONUnknown; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel3
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON level 3 regional
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONLevel3: number = 24; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel3
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONLevel3`.
 */
export
const sFReprPriTONLevel3: number = DeviceIDFormat_sFReprPriTONLevel3; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel2
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON level 2 regional
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONLevel2: number = 25; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel2
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONLevel2`.
 */
export
const sFReprPriTONLevel2: number = DeviceIDFormat_sFReprPriTONLevel2; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLevel1
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON level 1 regional
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONLevel1: number = 26; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLevel1
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONLevel1`.
 */
export
const sFReprPriTONLevel1: number = DeviceIDFormat_sFReprPriTONLevel1; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONLocal
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON local (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONLocal: number = 27; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONLocal
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONLocal`.
 */
export
const sFReprPriTONLocal: number = DeviceIDFormat_sFReprPriTONLocal; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprPriTONAbbreviated
 * @constant
 * @description
 * Bit set means the SF supports SF Representation PrivateTON abbreviated
 * (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprPriTONAbbreviated: number = 28; /* LONG_NAMED_BIT */

/**
 * @summary sFReprPriTONAbbreviated
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprPriTONAbbreviated`.
 */
export
const sFReprPriTONAbbreviated: number = DeviceIDFormat_sFReprPriTONAbbreviated; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFReprOther
 * @constant
 * @description
 * Bit set means the SF supports SF Representation format Other (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFReprOther: number = 29; /* LONG_NAMED_BIT */

/**
 * @summary sFReprOther
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFReprOther`.
 */
export
const sFReprOther: number = DeviceIDFormat_sFReprOther; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_sFRResourceID
 * @constant
 * @description
 * Bit set means the SF supports listed in this DeviceIDFormat bitmap (ECMA-285
 * §9.10); Table 13-9 does not name this bit (ECMA-269 §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_sFRResourceID: number = 31; /* LONG_NAMED_BIT */

/**
 * @summary sFRResourceID
 * @constant
 * @description
 * Alias of `DeviceIDFormat_sFRResourceID`.
 */
export
const sFRResourceID: number = DeviceIDFormat_sFRResourceID; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_privateNumber
 * @constant
 * @description
 * Bit set means the SF supports DeviceID Tag privateNumber (ECMA-269
 * §13.1.4.2.1 Table 13-9).
 */
export
const DeviceIDFormat_privateNumber: number = 32; /* LONG_NAMED_BIT */

/**
 * @summary privateNumber
 * @constant
 * @description
 * Alias of `DeviceIDFormat_privateNumber`.
 */
export
const privateNumber: number = DeviceIDFormat_privateNumber; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_privateName
 * @constant
 * @description
 * Bit set means the SF supports DeviceID Tag privateName (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const DeviceIDFormat_privateName: number = 33; /* LONG_NAMED_BIT */

/**
 * @summary privateName
 * @constant
 * @description
 * Alias of `DeviceIDFormat_privateName`.
 */
export
const privateName: number = DeviceIDFormat_privateName; /* SHORT_NAMED_BIT */

/**
 * @summary DeviceIDFormat_deviceNumber
 * @constant
 * @description
 * Bit set means the SF supports Device Number format (ECMA-269 §13.1.4.2.1
 * Table 13-9).
 */
export
const DeviceIDFormat_deviceNumber: number = 30; /* LONG_NAMED_BIT */

/**
 * @summary deviceNumber
 * @constant
 * @description
 * Alias of `DeviceIDFormat_deviceNumber`.
 */
export
const deviceNumber: number = DeviceIDFormat_deviceNumber; /* SHORT_NAMED_BIT */

let _cached_decoder_for_DeviceIDFormat: $.ASN1Decoder<DeviceIDFormat> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceIDFormat
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceIDFormat (el: _Element): DeviceIDFormat {
    if (!_cached_decoder_for_DeviceIDFormat) { _cached_decoder_for_DeviceIDFormat = $._decodeBitString; }
    return _cached_decoder_for_DeviceIDFormat(el);
}

let _cached_encoder_for_DeviceIDFormat: $.ASN1Encoder<DeviceIDFormat> | null = null;

/**
 * @summary Encodes a(n) DeviceIDFormat into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceIDFormat, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceIDFormat (value: DeviceIDFormat, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceIDFormat) { _cached_encoder_for_DeviceIDFormat = $._encodeBitString; }
    return _cached_encoder_for_DeviceIDFormat(value, elGetter);
}


/* eslint-enable */
