/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary CallCleared
 * @description
 * Capability bitmap for the Call Cleared event (ECMA-269 C.6.2, ECMA-285
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
 * CallCleared  ::=  BIT STRING
 * {     correlatorData                 ( 0),     -- optional parameters
 *     userData                 ( 1),     -- optional parameters
 *     mediaCallCharacteristics         ( 2),     -- optional parameters
 *     callCharacteristics             ( 3),     -- optional parameters
 *     callLinkageData             ( 6),     -- optional parameters
 *     privateData                 ( 4),     -- optional parameters
 *     callIDOnly                 ( 5) }
 * ```
 */
export
type CallCleared = BIT_STRING;

/**
 * @summary CallCleared_correlatorData
 * @constant
 * @description
 * Bit set means the SF supports the optional `correlatorData` parameter
 * (ECMA-269 C.6.2).
 */
export
const CallCleared_correlatorData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary correlatorData
 * @constant
 * @description
 * Alias of `CallCleared_correlatorData`.
 */
export
const correlatorData: number = CallCleared_correlatorData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_userData
 * @constant
 * @description
 * Bit set means the SF supports the optional `userData` parameter (ECMA-269
 * C.6.2).
 */
export
const CallCleared_userData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary userData
 * @constant
 * @description
 * Alias of `CallCleared_userData`.
 */
export
const userData: number = CallCleared_userData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_mediaCallCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `mediaCallCharacteristics`
 * parameter (ECMA-269 C.6.2).
 */
export
const CallCleared_mediaCallCharacteristics: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary mediaCallCharacteristics
 * @constant
 * @description
 * Alias of `CallCleared_mediaCallCharacteristics`.
 */
export
const mediaCallCharacteristics: number = CallCleared_mediaCallCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callCharacteristics
 * @constant
 * @description
 * Bit set means the SF supports the optional `callCharacteristics` parameter
 * (ECMA-269 C.6.2).
 */
export
const CallCleared_callCharacteristics: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary callCharacteristics
 * @constant
 * @description
 * Alias of `CallCleared_callCharacteristics`.
 */
export
const callCharacteristics: number = CallCleared_callCharacteristics; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callLinkageData
 * @constant
 * @description
 * Bit set means the SF supports the optional `callLinkageData` parameter
 * (ECMA-269 C.6.2).
 */
export
const CallCleared_callLinkageData: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary callLinkageData
 * @constant
 * @description
 * Alias of `CallCleared_callLinkageData`.
 */
export
const callLinkageData: number = CallCleared_callLinkageData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.6.2).
 */
export
const CallCleared_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `CallCleared_privateData`.
 */
export
const privateData: number = CallCleared_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary CallCleared_callIDOnly
 * @constant
 * @description
 * Bit set means the SF supports CallID-only ConnectionIDs for this service
 * (ECMA-269 C.6.2).
 */
export
const CallCleared_callIDOnly: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary callIDOnly
 * @constant
 * @description
 * Alias of `CallCleared_callIDOnly`.
 */
export
const callIDOnly: number = CallCleared_callIDOnly; /* SHORT_NAMED_BIT */

let _cached_decoder_for_CallCleared: $.ASN1Decoder<CallCleared> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallCleared
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallCleared (el: _Element): CallCleared {
    if (!_cached_decoder_for_CallCleared) { _cached_decoder_for_CallCleared = $._decodeBitString; }
    return _cached_decoder_for_CallCleared(el);
}

let _cached_encoder_for_CallCleared: $.ASN1Encoder<CallCleared> | null = null;

/**
 * @summary Encodes a(n) CallCleared into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallCleared, encoded as an ASN.1 Element.
 */
export
function _encode_CallCleared (value: CallCleared, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallCleared) { _cached_encoder_for_CallCleared = $._encodeBitString; }
    return _cached_encoder_for_CallCleared(value, elGetter);
}


/* eslint-enable */
