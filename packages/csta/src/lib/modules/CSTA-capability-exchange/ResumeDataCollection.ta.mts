/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary ResumeDataCollection
 * @description
 * Capability bitmap for the Resume Data Collection service (ECMA-269 C.18.4,
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
 * ResumeDataCollection  ::=  BIT STRING
 * {     privateData                 ( 0),     -- optional parameters
 *     privateDataInAck             ( 1) }
 * ```
 */
export
type ResumeDataCollection = BIT_STRING;

/**
 * @summary ResumeDataCollection_privateData
 * @constant
 * @description
 * Bit set means the SF supports the optional `privateData` parameter (ECMA-269
 * C.18.4).
 */
export
const ResumeDataCollection_privateData: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 * @description
 * Alias of `ResumeDataCollection_privateData`.
 */
export
const privateData: number = ResumeDataCollection_privateData; /* SHORT_NAMED_BIT */

/**
 * @summary ResumeDataCollection_privateDataInAck
 * @constant
 * @description
 * Bit set means the SF supports optional `privateData` in the acknowledgement
 * (ECMA-269 C.18.4).
 */
export
const ResumeDataCollection_privateDataInAck: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary privateDataInAck
 * @constant
 * @description
 * Alias of `ResumeDataCollection_privateDataInAck`.
 */
export
const privateDataInAck: number = ResumeDataCollection_privateDataInAck; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ResumeDataCollection: $.ASN1Decoder<ResumeDataCollection> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ResumeDataCollection
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ResumeDataCollection (el: _Element): ResumeDataCollection {
    if (!_cached_decoder_for_ResumeDataCollection) { _cached_decoder_for_ResumeDataCollection = $._decodeBitString; }
    return _cached_decoder_for_ResumeDataCollection(el);
}

let _cached_encoder_for_ResumeDataCollection: $.ASN1Encoder<ResumeDataCollection> | null = null;

/**
 * @summary Encodes a(n) ResumeDataCollection into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ResumeDataCollection, encoded as an ASN.1 Element.
 */
export
function _encode_ResumeDataCollection (value: ResumeDataCollection, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ResumeDataCollection) { _cached_encoder_for_ResumeDataCollection = $._encodeBitString; }
    return _cached_encoder_for_ResumeDataCollection(value, elGetter);
}


/* eslint-enable */
