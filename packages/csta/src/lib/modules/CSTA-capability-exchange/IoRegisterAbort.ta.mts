/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary IoRegisterAbort
 * @description
 * Capability bitmap for the I/O Register Abort service (ECMA-269 C.17.2,
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
 * IoRegisterAbort  ::=  BIT STRING
 * {     privateData                 ( 0) }
 * ```
 */
export
type IoRegisterAbort = BIT_STRING;

/**
 * @summary IoRegisterAbort_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.17.2).
 */
export
const IoRegisterAbort_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `IoRegisterAbort_privateData`.
 */
export
const privateData: number = IoRegisterAbort_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_IoRegisterAbort: $.ASN1Decoder<IoRegisterAbort> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoRegisterAbort
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoRegisterAbort (el: _Element): IoRegisterAbort {
    if (!_cached_decoder_for_IoRegisterAbort) { _cached_decoder_for_IoRegisterAbort = $._decodeBitString; }
    return _cached_decoder_for_IoRegisterAbort(el);
}

let _cached_encoder_for_IoRegisterAbort: $.ASN1Encoder<IoRegisterAbort> | null = null;

/**
 * @summary Encodes a(n) IoRegisterAbort into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoRegisterAbort, encoded as an ASN.1 Element.
 */
export
function _encode_IoRegisterAbort (value: IoRegisterAbort, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoRegisterAbort) { _cached_encoder_for_IoRegisterAbort = $._encodeBitString; }
    return _cached_encoder_for_IoRegisterAbort(value, elGetter);
}


/* eslint-enable */
