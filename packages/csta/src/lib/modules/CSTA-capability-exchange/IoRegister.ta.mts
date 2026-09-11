/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IoRegister
 * @description
 * Capability bitmap for the I/O Register service (ECMA-269 C.17.1, ECMA-285
 * §9.10). Presence of this entry in `IOServicesServList` means the SF supports
 * that service. Each set bit is an optional parameter, enumerated value,
 * initial connection state, or miscellaneous characteristic from Annex C.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/}
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-285/}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IoRegister  ::=  BIT STRING
 * {     ioDevice                 ( 0),     -- optional parameters
 *     privateData                 ( 1),     -- optional parameters
 *     privateDataInAck             ( 2),     -- optional parameters
 *     allIODevices                 ( 3) }
 * ```
 */
export
type IoRegister = BIT_STRING;

/**
 * @summary IoRegister_ioDevice
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.1).
 */
export
const IoRegister_ioDevice: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary ioDevice
 * @constant
 * @description
 * Alias of `IoRegister_ioDevice`.
 */
export
const ioDevice: number = IoRegister_ioDevice; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.1).
 */
export
const IoRegister_privateData: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `IoRegister_privateData`.
 */
export
const privateData: number = IoRegister_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.17.1).
 */
export
const IoRegister_privateDataInAck: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `IoRegister_privateDataInAck`.
 */
export
const privateDataInAck: number = IoRegister_privateDataInAck; /* SHORT_NAMED_BIT */

/**
 * @summary IoRegister_allIODevices
 * @constant
 * @description
 * Bit set means the SF supports listed in this capability bitmap without a
 * separate Annex C prose gloss (ECMA-269 C.17.1).
 */
export
const IoRegister_allIODevices: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary allIODevices
 * @constant
 * @description
 * Alias of `IoRegister_allIODevices`.
 */
export
const allIODevices: number = IoRegister_allIODevices; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IoRegister: $.ASN1Decoder<IoRegister> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoRegister
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoRegister (el: _Element): IoRegister {
    if (!_cached_decoder_for_IoRegister) { _cached_decoder_for_IoRegister = $._decodeBitString; }
    return _cached_decoder_for_IoRegister(el);
}

let _cached_encoder_for_IoRegister: $.ASN1Encoder<IoRegister> | null = null;

/**
 * @summary Encodes a(n) IoRegister into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoRegister, encoded as an ASN.1 Element.
 */
export
function _encode_IoRegister (value: IoRegister, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoRegister) { _cached_encoder_for_IoRegister = $._encodeBitString; }
    return _cached_encoder_for_IoRegister(value, elGetter);
}


/* eslint-enable */
