/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallInformation
 * @description
 * Capability bitmap for the Call Information event (ECMA-269 C.8.1, ECMA-285
 * §9.10). Presence of this entry in `CallAssociatedEvtsList` means the SF
 * supports that event. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallInformation  ::=  BIT STRING
 * {     callingDevice                 ( 0),     -- optional parameters
 *     accountInfo                 ( 1),     -- optional parameters
 *     authorisatinonCode             ( 2),     -- optional parameters
 *     correlatorData                 ( 3),     -- optional parameters
 *     servicesPermitted             ( 4),     -- optional parameters
 *     userData                 ( 5),     -- optional parameters
 *     callQualifyingData             ( 6),     -- optional parameters
 *     connectionInfo                 ( 7),     -- optional parameters
 *     callLinkageData             (10),     -- optional parameters
 *     callCharacteristics            (11),     -- optional parameters
 *     subjectOfCall                (12),     -- optional parameters
 *     languagePreferences            (13),     -- optional parameters
 *     privateData                 ( 8),     -- optional parameters
 *     genCallInfoForOutdatedConnID         ( 9),     -- misc characteristics
 *     deviceInfo                (14) }
 * ```
 */
export
type CallInformation = BIT_STRING;

/**
 * @summary CallInformation_callingDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_callingDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary callingDevice
 * @constant
 * @description
 * Alias of `CallInformation_callingDevice`.
 */
export
const callingDevice: number = CallInformation_callingDevice; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_accountInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_accountInfo: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary accountInfo
 * @constant
 * @description
 * Alias of `CallInformation_accountInfo`.
 */
export
const accountInfo: number = CallInformation_accountInfo; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_authorisatinonCode
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_authorisatinonCode: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary authorisatinonCode
 * @constant
 * @description
 * Alias of `CallInformation_authorisatinonCode`.
 */
export
const authorisatinonCode: number = CallInformation_authorisatinonCode; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.8.1).
 */
export
const CallInformation_correlatorData: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `CallInformation_correlatorData`.
 */
export
const correlatorData: number = CallInformation_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_servicesPermitted: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `CallInformation_servicesPermitted`.
 */
export
const servicesPermitted: number = CallInformation_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.8.1).
 */
export
const CallInformation_userData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `CallInformation_userData`.
 */
export
const userData: number = CallInformation_userData; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_callQualifyingData
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_callQualifyingData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callQualifyingData
 * @constant
 * @description
 * Alias of `CallInformation_callQualifyingData`.
 */
export
const callQualifyingData: number = CallInformation_callQualifyingData; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_connectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_connectionInfo: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary connectionInfo
 * @constant
 * @description
 * Alias of `CallInformation_connectionInfo`.
 */
export
const connectionInfo: number = CallInformation_connectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_callLinkageData
 * @constant
 * @description
 * Bit set means the SF supports the optional `callLinkageData` parameter
 * (ECMA-269 C.8.1).
 */
export
const CallInformation_callLinkageData: number = 10; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 * @description
 * Alias of `CallInformation_callLinkageData`.
 */
export
const callLinkageData: number = CallInformation_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.8.1).
 */
export
const CallInformation_callCharacteristics: number = 11; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `CallInformation_callCharacteristics`.
 */
export
const callCharacteristics: number = CallInformation_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_subjectOfCall
 * @constant
 * @description
 * Bit set means the SF supports the optional `subjectOfCall` parameter
 * (ECMA-269 C.8.1).
 */
export
const CallInformation_subjectOfCall: number = 12; /* LONG_NAMED_BIT */

/**
 * @summary subjectOfCall
 * @constant
 * @description
 * Alias of `CallInformation_subjectOfCall`.
 */
export
const subjectOfCall: number = CallInformation_subjectOfCall; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.8.1).
 */
export
const CallInformation_languagePreferences: number = 13; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `CallInformation_languagePreferences`.
 */
export
const languagePreferences: number = CallInformation_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.8.1).
 */
export
const CallInformation_privateData: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallInformation_privateData`.
 */
export
const privateData: number = CallInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_genCallInfoForOutdatedConnID
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_genCallInfoForOutdatedConnID: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary genCallInfoForOutdatedConnID
 * @constant
 * @description
 * Alias of `CallInformation_genCallInfoForOutdatedConnID`.
 */
export
const genCallInfoForOutdatedConnID: number = CallInformation_genCallInfoForOutdatedConnID; /* SHORT_NAMED_BIT */

/**
 * @summary CallInformation_deviceInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.8.1).
 */
export
const CallInformation_deviceInfo: number = 14; /* LONG_NAMED_BIT */

/**
 * @summary deviceInfo
 * @constant
 * @description
 * Alias of `CallInformation_deviceInfo`.
 */
export
const deviceInfo: number = CallInformation_deviceInfo; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallInformation: $.ASN1Decoder<CallInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallInformation (el: _Element): CallInformation {
    if (!_cached_decoder_for_CallInformation) { _cached_decoder_for_CallInformation = $._decodeBitString; }
    return _cached_decoder_for_CallInformation(el);
}

let _cached_encoder_for_CallInformation: $.ASN1Encoder<CallInformation> | null = null;

/**
 * @summary Encodes a(n) CallInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallInformation, encoded as an ASN.1 Element.
 */
export
function _encode_CallInformation (value: CallInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallInformation) { _cached_encoder_for_CallInformation = $._encodeBitString; }
    return _cached_encoder_for_CallInformation(value, elGetter);
}


/* eslint-enable */
