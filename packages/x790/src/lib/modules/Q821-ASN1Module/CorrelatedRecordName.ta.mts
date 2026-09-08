/* eslint-disable */
import {
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary CorrelatedRecordName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelatedRecordName  ::= 
 *   ObjectInstance
 * ```
 */
export
type CorrelatedRecordName = ObjectInstance; // DefinedType

let _cached_decoder_for_CorrelatedRecordName: $.ASN1Decoder<CorrelatedRecordName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelatedRecordName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelatedRecordName (el: _Element): CorrelatedRecordName {
    if (!_cached_decoder_for_CorrelatedRecordName) { _cached_decoder_for_CorrelatedRecordName = _decode_ObjectInstance; }
    return _cached_decoder_for_CorrelatedRecordName(el);
}

let _cached_encoder_for_CorrelatedRecordName: $.ASN1Encoder<CorrelatedRecordName> | null = null;

/**
 * @summary Encodes a(n) CorrelatedRecordName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelatedRecordName, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelatedRecordName (value: CorrelatedRecordName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelatedRecordName) { _cached_encoder_for_CorrelatedRecordName = _encode_ObjectInstance; }
    return _cached_encoder_for_CorrelatedRecordName(value, elGetter);
}


/* eslint-enable */
