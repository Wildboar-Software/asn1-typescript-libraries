/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_AltNameType_builtinNameForm {
    rfc822Name = 1,
    dNSName = 2,
    x400Address = 3,
    directoryName = 4,
    ediPartyName = 5,
    uniformResourceIdentifier = 6,
    iPAddress = 7,
    registeredId = 8,
}

/**
 * @summary AltNameType_builtinNameForm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AltNameType-builtinNameForm ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type AltNameType_builtinNameForm = _enum_for_AltNameType_builtinNameForm | ENUMERATED;

/**
 * @summary AltNameType_builtinNameForm_rfc822Name
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_rfc822Name: AltNameType_builtinNameForm = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rfc822Name
 * @constant
 * @type {number}
 */
export
const rfc822Name: AltNameType_builtinNameForm = AltNameType_builtinNameForm_rfc822Name; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_dNSName
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_dNSName: AltNameType_builtinNameForm = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary dNSName
 * @constant
 * @type {number}
 */
export
const dNSName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_dNSName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_x400Address
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_x400Address: AltNameType_builtinNameForm = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary x400Address
 * @constant
 * @type {number}
 */
export
const x400Address: AltNameType_builtinNameForm = AltNameType_builtinNameForm_x400Address; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_directoryName
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_directoryName: AltNameType_builtinNameForm = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary directoryName
 * @constant
 * @type {number}
 */
export
const directoryName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_directoryName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_ediPartyName
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_ediPartyName: AltNameType_builtinNameForm = 5; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ediPartyName
 * @constant
 * @type {number}
 */
export
const ediPartyName: AltNameType_builtinNameForm = AltNameType_builtinNameForm_ediPartyName; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_uniformResourceIdentifier: AltNameType_builtinNameForm = 6; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary uniformResourceIdentifier
 * @constant
 * @type {number}
 */
export
const uniformResourceIdentifier: AltNameType_builtinNameForm = AltNameType_builtinNameForm_uniformResourceIdentifier; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_iPAddress
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_iPAddress: AltNameType_builtinNameForm = 7; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary iPAddress
 * @constant
 * @type {number}
 */
export
const iPAddress: AltNameType_builtinNameForm = AltNameType_builtinNameForm_iPAddress; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary AltNameType_builtinNameForm_registeredId
 * @constant
 * @type {number}
 */
export
const AltNameType_builtinNameForm_registeredId: AltNameType_builtinNameForm = 8; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary registeredId
 * @constant
 * @type {number}
 */
export
const registeredId: AltNameType_builtinNameForm = AltNameType_builtinNameForm_registeredId; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_AltNameType_builtinNameForm: $.ASN1Decoder<AltNameType_builtinNameForm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AltNameType_builtinNameForm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AltNameType_builtinNameForm (el: _Element): AltNameType_builtinNameForm {
    if (!_cached_decoder_for_AltNameType_builtinNameForm) { _cached_decoder_for_AltNameType_builtinNameForm = $._decodeEnumerated; }
    return _cached_decoder_for_AltNameType_builtinNameForm(el);
}

let _cached_encoder_for_AltNameType_builtinNameForm: $.ASN1Encoder<AltNameType_builtinNameForm> | null = null;

/**
 * @summary Encodes a(n) AltNameType_builtinNameForm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AltNameType_builtinNameForm, encoded as an ASN.1 Element.
 */
export
function _encode_AltNameType_builtinNameForm (value: AltNameType_builtinNameForm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AltNameType_builtinNameForm) { _cached_encoder_for_AltNameType_builtinNameForm = $._encodeEnumerated; }
    return _cached_encoder_for_AltNameType_builtinNameForm(value, elGetter);
}


/* eslint-enable */
