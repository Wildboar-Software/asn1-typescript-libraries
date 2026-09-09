/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import { ASN1Element as _Element } from "@wildboar/asn1";
import { CSTAObject, _decode_CSTAObject, _encode_CSTAObject } from "../CSTA-switching-function-objects/CSTAObject.ta.mjs";



/**
 * @summary MonitorObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorObject  ::=  CSTAObject
 * ```
 */
export
type MonitorObject = CSTAObject; // DefinedType

let _cached_decoder_for_MonitorObject: $.ASN1Decoder<MonitorObject> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorObject
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorObject (el: _Element): MonitorObject {
    if (!_cached_decoder_for_MonitorObject) { _cached_decoder_for_MonitorObject = _decode_CSTAObject; }
    return _cached_decoder_for_MonitorObject(el);
}

let _cached_encoder_for_MonitorObject: $.ASN1Encoder<MonitorObject> | null = null;

/**
 * @summary Encodes a(n) MonitorObject into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorObject, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorObject (value: MonitorObject, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorObject) { _cached_encoder_for_MonitorObject = _encode_CSTAObject; }
    return _cached_encoder_for_MonitorObject(value, elGetter);
}


/* eslint-enable */
