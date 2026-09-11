/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary StopDataCollection
 * @description
 * Capability bitmap for the Stop Data Collection service (ECMA-269 C.18.6,
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
 * StopDataCollection  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type StopDataCollection = BIT_STRING;

/**
 * @summary StopDataCollection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * Annex C).
 */
export
const StopDataCollection_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `StopDataCollection_privateData`.
 */
export
const privateData: number = StopDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary StopDataCollection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 Annex C).
 */
export
const StopDataCollection_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `StopDataCollection_privateDataInAck`.
 */
export
const privateDataInAck: number = StopDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_StopDataCollection: $.ASN1Decoder<StopDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StopDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StopDataCollection (el: _Element): StopDataCollection {
    if (!_cached_decoder_for_StopDataCollection) { _cached_decoder_for_StopDataCollection = $._decodeBitString; }
    return _cached_decoder_for_StopDataCollection(el);
}

let _cached_encoder_for_StopDataCollection: $.ASN1Encoder<StopDataCollection> | null = null;

/**
 * @summary Encodes a(n) StopDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StopDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_StopDataCollection (value: StopDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StopDataCollection) { _cached_encoder_for_StopDataCollection = $._encodeBitString; }
    return _cached_encoder_for_StopDataCollection(value, elGetter);
}


/* eslint-enable */
