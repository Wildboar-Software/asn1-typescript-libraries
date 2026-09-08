/* eslint-disable */
import {
    SET,
    ASN1Element as _Element,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectClass,
    _decode_ObjectClass,
    _encode_ObjectClass,
} from "../CMIP-1/ObjectClass.ta.mjs";



/**
 * @summary ApplicableManagedObjectClassList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicableManagedObjectClassList  ::=  SET OF ObjectClass
 * ```
 */
export
type ApplicableManagedObjectClassList = ObjectClass[]; // SetOfType

let _cached_decoder_for_ApplicableManagedObjectClassList: $.ASN1Decoder<ApplicableManagedObjectClassList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplicableManagedObjectClassList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplicableManagedObjectClassList (el: _Element): ApplicableManagedObjectClassList {
    if (!_cached_decoder_for_ApplicableManagedObjectClassList) { _cached_decoder_for_ApplicableManagedObjectClassList = $._decodeSetOf<ObjectClass>(() => _decode_ObjectClass); }
    return _cached_decoder_for_ApplicableManagedObjectClassList(el);
}

let _cached_encoder_for_ApplicableManagedObjectClassList: $.ASN1Encoder<ApplicableManagedObjectClassList> | null = null;

/**
 * @summary Encodes a(n) ApplicableManagedObjectClassList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplicableManagedObjectClassList, encoded as an ASN.1 Element.
 */
export
function _encode_ApplicableManagedObjectClassList (value: ApplicableManagedObjectClassList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplicableManagedObjectClassList) { _cached_encoder_for_ApplicableManagedObjectClassList = $._encodeSetOf<ObjectClass>(() => _encode_ObjectClass, $.BER); }
    return _cached_encoder_for_ApplicableManagedObjectClassList(value, elGetter);
}


/* eslint-enable */
