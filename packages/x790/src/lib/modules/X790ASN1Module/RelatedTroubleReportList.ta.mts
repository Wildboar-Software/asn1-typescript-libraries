/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";



/**
 * @summary RelatedTroubleReportList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RelatedTroubleReportList  ::=  SET OF ObjectInstance
 * ```
 */
export
type RelatedTroubleReportList = ObjectInstance[]; // SetOfType

let _cached_decoder_for_RelatedTroubleReportList: $.ASN1Decoder<RelatedTroubleReportList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RelatedTroubleReportList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RelatedTroubleReportList (el: _Element): RelatedTroubleReportList {
    if (!_cached_decoder_for_RelatedTroubleReportList) { _cached_decoder_for_RelatedTroubleReportList = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance); }
    return _cached_decoder_for_RelatedTroubleReportList(el);
}

let _cached_encoder_for_RelatedTroubleReportList: $.ASN1Encoder<RelatedTroubleReportList> | null = null;

/**
 * @summary Encodes a(n) RelatedTroubleReportList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RelatedTroubleReportList, encoded as an ASN.1 Element.
 */
export
function _encode_RelatedTroubleReportList (value: RelatedTroubleReportList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RelatedTroubleReportList) { _cached_encoder_for_RelatedTroubleReportList = $._encodeSetOf<ObjectInstance>(() => _encode_ObjectInstance, $.BER); }
    return _cached_encoder_for_RelatedTroubleReportList(value, elGetter);
}


/* eslint-enable */
