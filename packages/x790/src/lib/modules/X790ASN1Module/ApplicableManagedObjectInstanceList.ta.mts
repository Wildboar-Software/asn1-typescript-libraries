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
 * @summary ApplicableManagedObjectInstanceList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicableManagedObjectInstanceList  ::=  SET OF ObjectInstance
 * ```
 */
export
type ApplicableManagedObjectInstanceList = ObjectInstance[]; // SetOfType

let _cached_decoder_for_ApplicableManagedObjectInstanceList: $.ASN1Decoder<ApplicableManagedObjectInstanceList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicableManagedObjectInstanceList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicableManagedObjectInstanceList (el: _Element): ApplicableManagedObjectInstanceList {
    if (!_cached_decoder_for_ApplicableManagedObjectInstanceList) { _cached_decoder_for_ApplicableManagedObjectInstanceList = $._decodeSetOf<ObjectInstance>(() => _decode_ObjectInstance); }
    return _cached_decoder_for_ApplicableManagedObjectInstanceList(el);
}

let _cached_encoder_for_ApplicableManagedObjectInstanceList: $.ASN1Encoder<ApplicableManagedObjectInstanceList> | null = null;

/**
 * @summary Encodes a(n) ApplicableManagedObjectInstanceList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicableManagedObjectInstanceList, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicableManagedObjectInstanceList (value: ApplicableManagedObjectInstanceList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicableManagedObjectInstanceList) { _cached_encoder_for_ApplicableManagedObjectInstanceList = $._encodeSetOf<ObjectInstance>(() => _encode_ObjectInstance, $.BER); }
    return _cached_encoder_for_ApplicableManagedObjectInstanceList(value, elGetter);
}


/* eslint-enable */
