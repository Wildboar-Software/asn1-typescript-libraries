/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary GetButtonInformation
 * @description
 * Capability bitmap for the Get Button Information service (ECMA-269 C.12.3,
 * ECMA-285 §9.10). Presence of this entry in `PhysDevServList` means the SF
 * supports that service. Each set bit is an optional parameter, enumerated
 * value, initial connection state, or miscellaneous characteristic from Annex
 * C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetButtonInformation  ::=  BIT STRING
 * {     button                     ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     buttonLabelInAck             ( 2),     -- optional parameters
 *     buttonLabelSettableInAck         ( 3),     -- optional parameters
 *     buttonFunctionInAck             ( 4),     -- optional parameters
 *     buttonAssociatedNumberInAck         ( 5),     -- optional parameters
 *     buttonAssociatedNumberSettableInAck     ( 6),     -- optional parameters
 *     listOfLampsInAck             ( 7),     -- optional parameters
 *     privateDataInAck             ( 8) }
 * ```
 */
export
type GetButtonInformation = BIT_STRING;

/**
 * @summary GetButtonInformation_button
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_button: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary button
 * @constant
 * @description
 * Alias of `GetButtonInformation_button`.
 */
export
const button: number = GetButtonInformation_button; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.12.3).
 */
export
const GetButtonInformation_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `GetButtonInformation_privateData`.
 */
export
const privateData: number = GetButtonInformation_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonLabelInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `buttonLabel` in the acknowledgement
 * (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_buttonLabelInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabelInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_buttonLabelInAck`.
 */
export
const buttonLabelInAck: number = GetButtonInformation_buttonLabelInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonLabelSettableInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `buttonLabelSettable` in the
 * acknowledgement (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_buttonLabelSettableInAck: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary buttonLabelSettableInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_buttonLabelSettableInAck`.
 */
export
const buttonLabelSettableInAck: number = GetButtonInformation_buttonLabelSettableInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonFunctionInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `buttonFunction` in the
 * acknowledgement (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_buttonFunctionInAck: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary buttonFunctionInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_buttonFunctionInAck`.
 */
export
const buttonFunctionInAck: number = GetButtonInformation_buttonFunctionInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonAssociatedNumberInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `buttonAssociatedNumber` in the
 * acknowledgement (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_buttonAssociatedNumberInAck: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumberInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_buttonAssociatedNumberInAck`.
 */
export
const buttonAssociatedNumberInAck: number = GetButtonInformation_buttonAssociatedNumberInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_buttonAssociatedNumberSettableInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `buttonAssociatedNumberSettable` in
 * the acknowledgement (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_buttonAssociatedNumberSettableInAck: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary buttonAssociatedNumberSettableInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_buttonAssociatedNumberSettableInAck`.
 */
export
const buttonAssociatedNumberSettableInAck: number = GetButtonInformation_buttonAssociatedNumberSettableInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_listOfLampsInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `listOfLamps` in the acknowledgement
 * (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_listOfLampsInAck: number = 7; /* LONG_NAMED_BIT */

/**
 * @summary listOfLampsInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_listOfLampsInAck`.
 */
export
const listOfLampsInAck: number = GetButtonInformation_listOfLampsInAck; /* SHORT_NAMED_BIT */

/**
 * @summary GetButtonInformation_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.12.3).
 */
export
const GetButtonInformation_privateDataInAck: number = 8; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `GetButtonInformation_privateDataInAck`.
 */
export
const privateDataInAck: number = GetButtonInformation_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_GetButtonInformation: $.ASN1Decoder<GetButtonInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetButtonInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetButtonInformation (el: _Element): GetButtonInformation {
    if (!_cached_decoder_for_GetButtonInformation) { _cached_decoder_for_GetButtonInformation = $._decodeBitString; }
    return _cached_decoder_for_GetButtonInformation(el);
}

let _cached_encoder_for_GetButtonInformation: $.ASN1Encoder<GetButtonInformation> | null = null;

/**
 * @summary Encodes a(n) GetButtonInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetButtonInformation, encoded as an ASN.1 Element.
 */
export
function _encode_GetButtonInformation (value: GetButtonInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetButtonInformation) { _cached_encoder_for_GetButtonInformation = $._encodeBitString; }
    return _cached_encoder_for_GetButtonInformation(value, elGetter);
}


/* eslint-enable */
