/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    DataType,
    _decode_DataType,
    _encode_DataType,
} from "../PKCS-15/DataType.ta.mjs";
import {
    PathOrObjects,
    _get_decoder_for_PathOrObjects,
    _get_encoder_for_PathOrObjects,
} from "../PKCS-15/PathOrObjects.ta.mjs";

/**
 * @summary DataObjects
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataObjects   ::=  PathOrObjects {DataType}
 * ```
 */
export type DataObjects = PathOrObjects<DataType>; // DefinedType


let _cached_decoder_for_DataObjects: $.ASN1Decoder<DataObjects> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) DataObjects
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataObjects} The decoded data structure.
 */
export function _decode_DataObjects(el: _Element) {
    if (!_cached_decoder_for_DataObjects) {
        _cached_decoder_for_DataObjects = _get_decoder_for_PathOrObjects<DataType>(
            _decode_DataType
        );
    }
    return _cached_decoder_for_DataObjects(el);
}


let _cached_encoder_for_DataObjects: $.ASN1Encoder<DataObjects> | null = null;


/**
 * @summary Encodes a(n) DataObjects into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataObjects, encoded as an ASN.1 Element.
 */
export function _encode_DataObjects(
    value: DataObjects,
    elGetter: $.ASN1Encoder<DataObjects>
) {
    if (!_cached_encoder_for_DataObjects) {
        _cached_encoder_for_DataObjects = _get_encoder_for_PathOrObjects<DataType>(
            _encode_DataType
        );
    }
    return _cached_encoder_for_DataObjects(value, elGetter);
}


/* eslint-enable */
