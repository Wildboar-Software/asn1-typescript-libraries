/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';

/**
 * @summary ObjectList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectList  ::=  SET OF ObjectInstance
 * ```
 */
export type ObjectList = ObjectInstance[]; // SetOfType


let _cached_decoder_for_ObjectList: $.ASN1Decoder<ObjectList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) ObjectList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectList} The decoded data structure.
 */
export function _decode_ObjectList(el: _Element) {
    if (!_cached_decoder_for_ObjectList) {
        _cached_decoder_for_ObjectList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_ObjectList(el);
}


let _cached_encoder_for_ObjectList: $.ASN1Encoder<ObjectList> | null = null;


/**
 * @summary Encodes a(n) ObjectList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectList, encoded as an ASN.1 Element.
 */
export function _encode_ObjectList(
    value: ObjectList,
    elGetter: $.ASN1Encoder<ObjectList>
) {
    if (!_cached_encoder_for_ObjectList) {
        _cached_encoder_for_ObjectList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_ObjectList(value, elGetter);
}


/* eslint-enable */
