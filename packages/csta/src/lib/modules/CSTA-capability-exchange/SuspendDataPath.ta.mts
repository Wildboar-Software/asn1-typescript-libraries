/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SuspendDataPath
 * @description
 * Capability bitmap for the Suspend Data Path service (ECMA-269 C.17.13,
 * ECMA-285 §9.10). Presence of this entry in `IOServicesServList` means the SF
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
 * SuspendDataPath  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SuspendDataPath = BIT_STRING;

/**
 * @summary SuspendDataPath_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.13).
 */
export
const SuspendDataPath_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SuspendDataPath_privateData`.
 */
export
const privateData: number = SuspendDataPath_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendDataPath_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.13).
 */
export
const SuspendDataPath_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SuspendDataPath_privateDataInAck`.
 */
export
const privateDataInAck: number = SuspendDataPath_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendDataPath: $.ASN1Decoder<SuspendDataPath> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataPath
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataPath (el: _Element): SuspendDataPath {
    if (!_cached_decoder_for_SuspendDataPath) { _cached_decoder_for_SuspendDataPath = $._decodeBitString; }
    return _cached_decoder_for_SuspendDataPath(el);
}

let _cached_encoder_for_SuspendDataPath: $.ASN1Encoder<SuspendDataPath> | null = null;

/**
 * @summary Encodes a(n) SuspendDataPath into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataPath, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataPath (value: SuspendDataPath, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataPath) { _cached_encoder_for_SuspendDataPath = $._encodeBitString; }
    return _cached_encoder_for_SuspendDataPath(value, elGetter);
}


/* eslint-enable */
