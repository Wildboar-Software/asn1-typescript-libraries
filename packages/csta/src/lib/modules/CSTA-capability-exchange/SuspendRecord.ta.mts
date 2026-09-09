/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { BIT_STRING, ASN1Element as _Element } from "@wildboar/asn1";



/**
 * @summary SuspendRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuspendRecord  ::=  BIT STRING
 * {     message                    ( 5),     -- optional parameters
 *     resource                ( 6),     -- optional parameters
 *     length                     ( 0),     -- optional parameters
 *     currentPosition             ( 1),     -- optional parameters
 *     cause                     ( 2),     -- optional parameters
 *     servicesPermitted             ( 3),     -- optional parameters
 *     privateData                 ( 4) }
 * ```
 */
export
type SuspendRecord = BIT_STRING;

/**
 * @summary SuspendRecord_message
 * @constant
 */
export
const SuspendRecord_message: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary message
 * @constant
 */
export
const message: number = SuspendRecord_message; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_resource
 * @constant
 */
export
const SuspendRecord_resource: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary resource
 * @constant
 */
export
const resource: number = SuspendRecord_resource; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_length
 * @constant
 */
export
const SuspendRecord_length: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary length
 * @constant
 */
export
const length: number = SuspendRecord_length; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_currentPosition
 * @constant
 */
export
const SuspendRecord_currentPosition: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary currentPosition
 * @constant
 */
export
const currentPosition: number = SuspendRecord_currentPosition; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_cause
 * @constant
 */
export
const SuspendRecord_cause: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary cause
 * @constant
 */
export
const cause: number = SuspendRecord_cause; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_servicesPermitted
 * @constant
 */
export
const SuspendRecord_servicesPermitted: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary servicesPermitted
 * @constant
 */
export
const servicesPermitted: number = SuspendRecord_servicesPermitted; /* SHORT_NAMED_BIT */

/**
 * @summary SuspendRecord_privateData
 * @constant
 */
export
const SuspendRecord_privateData: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary privateData
 * @constant
 */
export
const privateData: number = SuspendRecord_privateData; /* SHORT_NAMED_BIT */

let _cached_decoder_for_SuspendRecord: $.ASN1Decoder<SuspendRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuspendRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuspendRecord (el: _Element): SuspendRecord {
    if (!_cached_decoder_for_SuspendRecord) { _cached_decoder_for_SuspendRecord = $._decodeBitString; }
    return _cached_decoder_for_SuspendRecord(el);
}

let _cached_encoder_for_SuspendRecord: $.ASN1Encoder<SuspendRecord> | null = null;

/**
 * @summary Encodes a(n) SuspendRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuspendRecord, encoded as an ASN.1 Element.
 */
export
function _encode_SuspendRecord (value: SuspendRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuspendRecord) { _cached_encoder_for_SuspendRecord = $._encodeBitString; }
    return _cached_encoder_for_SuspendRecord(value, elGetter);
}


/* eslint-enable */
