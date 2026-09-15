/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SuspendDataCollection
 * @description
 * Capability bitmap for the Suspend Data Collection service (ECMA-269 C.18.7,
 * ECMA-285 §9.10). Presence of this entry in `DataCollectionServList` means the
 * SF supports that service. Each set bit is an optional parameter, enumerated
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
 * SuspendDataCollection  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type SuspendDataCollection = BIT_STRING;

/**
 * @summary SuspendDataCollection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.18.7).
 */
export
const SuspendDataCollection_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `SuspendDataCollection_privateData`.
 */
export
const privateData: number = SuspendDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendDataCollection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.18.7).
 */
export
const SuspendDataCollection_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `SuspendDataCollection_privateDataInAck`.
 */
export
const privateDataInAck: number = SuspendDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendDataCollection: $.ASN1Decoder<SuspendDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendDataCollection (el: _Element): SuspendDataCollection {
    if (!_cached_decoder_for_SuspendDataCollection) { _cached_decoder_for_SuspendDataCollection = $._decodeBitString; }
    return _cached_decoder_for_SuspendDataCollection(el);
}

let _cached_encoder_for_SuspendDataCollection: $.ASN1Encoder<SuspendDataCollection> | null = null;

/**
 * @summary Encodes a(n) SuspendDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendDataCollection (value: SuspendDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendDataCollection) { _cached_encoder_for_SuspendDataCollection = $._encodeBitString; }
    return _cached_encoder_for_SuspendDataCollection(value, elGetter);
}


/* eslint-enable */
