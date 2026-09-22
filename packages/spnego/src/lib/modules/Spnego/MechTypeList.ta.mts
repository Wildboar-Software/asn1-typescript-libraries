/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";
// export { MechType, _decode_MechType, _encode_MechType } from "../Spnego/MechType.ta.mjs";


/**
 * @summary MechTypeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MechTypeList  ::=  SEQUENCE OF MechType
 * ```
 */
export
type MechTypeList = MechType[]; // SequenceOfType

let _cached_decoder_for_MechTypeList: $.ASN1Decoder<MechTypeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MechTypeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MechTypeList (el: _Element): MechTypeList {
    if (!_cached_decoder_for_MechTypeList) { _cached_decoder_for_MechTypeList = $._decodeSequenceOf<MechType>(() => _decode_MechType); }
    return _cached_decoder_for_MechTypeList(el);
}

let _cached_encoder_for_MechTypeList: $.ASN1Encoder<MechTypeList> | null = null;

/**
 * @summary Encodes a(n) MechTypeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MechTypeList, encoded as an ASN.1 Element.
 */
export
function _encode_MechTypeList (value: MechTypeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MechTypeList) { _cached_encoder_for_MechTypeList = $._encodeSequenceOf<MechType>(() => _encode_MechType, $.BER); }
    return _cached_encoder_for_MechTypeList(value, elGetter);
}


/* eslint-enable */
