/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary Retrieved
 * @description
 * Capability bitmap for the Retrieved event (ECMA-269 C.6.16, ECMA-285 §9.10).
 * Presence of this entry in `CallControlEvtsList` means the SF supports that
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
 * Retrieved  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     servicesPermitted             ( 1),     -- optional parameters
 *     mediaCallCharacteristics         ( 2),     -- optional parameters
 *     callCharacteristics             ( 3),     -- optional parameters
 *     retrievedConnectionInfo         ( 4),     -- optional parameters
 *     callLinkageData             ( 6),     -- optional parameters
 *     languagePreferences            ( 7),     -- optional parameters
 *     deviceHistory                ( 8),     -- optional parameters
 *     privateData                 ( 5),     -- optional parameters
 *     locationInfoLiist            ( 9) }
 * ```
 */
export
type Retrieved = BIT_STRING;

/**
 * @summary Retrieved_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.6.16).
 */
export
const Retrieved_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `Retrieved_correlatorData`.
 */
export
const correlatorData: number = Retrieved_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_servicesPermitted
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.16).
 */
export
const Retrieved_servicesPermitted: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 * @description
 * Alias of `Retrieved_servicesPermitted`.
 */
export
const servicesPermitted: number = Retrieved_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.16).
 */
export
const Retrieved_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `Retrieved_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = Retrieved_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.16).
 */
export
const Retrieved_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `Retrieved_callCharacteristics`.
 */
export
const callCharacteristics: number = Retrieved_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_retrievedConnectionInfo
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.16).
 */
export
const Retrieved_retrievedConnectionInfo: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary retrievedConnectionInfo
 * @constant
 * @description
 * Alias of `Retrieved_retrievedConnectionInfo`.
 */
export
const retrievedConnectionInfo: number = Retrieved_retrievedConnectionInfo; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_callLinkageData
 * @constant
 * @description
 * Bit set means the SF supports the optional `callLinkageData` parameter
 * (ECMA-269 C.6.16).
 */
export
const Retrieved_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 * @description
 * Alias of `Retrieved_callLinkageData`.
 */
export
const callLinkageData: number = Retrieved_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_languagePreferences
 * @constant
 * @description
 * Bit set means the SF supports the optional `languagePreferences` parameter
 * (ECMA-269 C.6.16).
 */
export
const Retrieved_languagePreferences: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary languagePreferences
 * @constant
 * @description
 * Alias of `Retrieved_languagePreferences`.
 */
export
const languagePreferences: number = Retrieved_languagePreferences; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_deviceHistory
 * @constant
 * @description
 * Bit set means the SF supports the optional `deviceHistory` parameter
 * (ECMA-269 C.6.16).
 */
export
const Retrieved_deviceHistory: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary deviceHistory
 * @constant
 * @description
 * Alias of `Retrieved_deviceHistory`.
 */
export
const deviceHistory: number = Retrieved_deviceHistory; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.16).
 */
export
const Retrieved_privateData: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `Retrieved_privateData`.
 */
export
const privateData: number = Retrieved_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary Retrieved_locationInfoLiist
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.6.16).
 */
export
const Retrieved_locationInfoLiist: number = 9; /* LONG_NAMED_BIT */

/**
 * @summary locationInfoLiist
 * @constant
 * @description
 * Alias of `Retrieved_locationInfoLiist`.
 */
export
const locationInfoLiist: number = Retrieved_locationInfoLiist; /* SHORT_NAMED_BIT */

let _cached_decoder_for_Retrieved: $.ASN1Decoder<Retrieved> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Retrieved
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Retrieved (el: _Element): Retrieved {
    if (!_cached_decoder_for_Retrieved) { _cached_decoder_for_Retrieved = $._decodeBitString; }
    return _cached_decoder_for_Retrieved(el);
}

let _cached_encoder_for_Retrieved: $.ASN1Encoder<Retrieved> | null = null;

/**
 * @summary Encodes a(n) Retrieved into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Retrieved, encoded as an ASN.1 Element.
 */
export
function _encode_Retrieved (value: Retrieved, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Retrieved) { _cached_encoder_for_Retrieved = $._encodeBitString; }
    return _cached_encoder_for_Retrieved(value, elGetter);
}


/* eslint-enable */
