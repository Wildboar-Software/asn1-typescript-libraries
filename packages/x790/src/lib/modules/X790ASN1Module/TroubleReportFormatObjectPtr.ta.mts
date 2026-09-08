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
 * @summary TroubleReportFormatObjectPtr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TroubleReportFormatObjectPtr  ::=  ObjectInstance
 * ```
 */
export
type TroubleReportFormatObjectPtr = ObjectInstance; // DefinedType

let _cached_decoder_for_TroubleReportFormatObjectPtr: $.ASN1Decoder<TroubleReportFormatObjectPtr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TroubleReportFormatObjectPtr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TroubleReportFormatObjectPtr (el: _Element): TroubleReportFormatObjectPtr {
    if (!_cached_decoder_for_TroubleReportFormatObjectPtr) { _cached_decoder_for_TroubleReportFormatObjectPtr = _decode_ObjectInstance; }
    return _cached_decoder_for_TroubleReportFormatObjectPtr(el);
}

let _cached_encoder_for_TroubleReportFormatObjectPtr: $.ASN1Encoder<TroubleReportFormatObjectPtr> | null = null;

/**
 * @summary Encodes a(n) TroubleReportFormatObjectPtr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TroubleReportFormatObjectPtr, encoded as an ASN.1 Element.
 */
export
function _encode_TroubleReportFormatObjectPtr (value: TroubleReportFormatObjectPtr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TroubleReportFormatObjectPtr) { _cached_encoder_for_TroubleReportFormatObjectPtr = _encode_ObjectInstance; }
    return _cached_encoder_for_TroubleReportFormatObjectPtr(value, elGetter);
}


/* eslint-enable */
