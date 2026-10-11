/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrimitiveDataType, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
import { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";


/**
 * @summary ElementDataType
 * @description
 * 
 * Datatype of an element in a schema or record-syntax abstract structure.
 * `primitive` is one of octetString, numeric, date, external, string,
 * trueOrFalse, oid, intUnit, empty, or noneOfTheAbove (see the element's
 * description). `structured` is a nested list of elements. If ElementInfo omits
 * the datatype, it is not specified. REC.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ElementDataType  ::=  CHOICE {
 *     primitive  [0] IMPLICIT PrimitiveDataType,
 *     structured [1] IMPLICIT SEQUENCE OF ElementInfo
 * }
 * ```
 */
export
type ElementDataType =
    { primitive: PrimitiveDataType } /* CHOICE_ALT_ROOT */
    | { structured: ElementInfo[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ElementDataType: $.ASN1Decoder<ElementDataType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ElementDataType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ElementDataType (el: _Element): ElementDataType {
    if (!_cached_decoder_for_ElementDataType) { _cached_decoder_for_ElementDataType = $._decode_inextensible_choice<ElementDataType>({
    "CONTEXT 0": [ "primitive", $._decode_implicit<PrimitiveDataType>(() => _decode_PrimitiveDataType) ],
    "CONTEXT 1": [ "structured", $._decode_implicit<ElementInfo[]>(() => $._decodeSequenceOf<ElementInfo>(() => _decode_ElementInfo)) ]
}); }
    return _cached_decoder_for_ElementDataType(el);
}

let _cached_encoder_for_ElementDataType: $.ASN1Encoder<ElementDataType> | null = null;

/**
 * @summary Encodes a(n) ElementDataType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ElementDataType, encoded as an ASN.1 Element.
 */
export
function _encode_ElementDataType (value: ElementDataType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ElementDataType) { _cached_encoder_for_ElementDataType = $._encode_choice<ElementDataType>({
    "primitive": $._encode_implicit(_TagClass.context, 0, () => _encode_PrimitiveDataType, $.BER),
    "structured": $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ElementInfo>(() => _encode_ElementInfo, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ElementDataType(value, elGetter);
}


/* eslint-enable */
