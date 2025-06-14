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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DataObjectsReferenceList */
/**
 * @summary DataObjectsReferenceList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DataObjectsReferenceList  ::=  SET OF ObjectInstance
 * ```
 */
export type DataObjectsReferenceList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION DataObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DataObjectsReferenceList */
let _cached_decoder_for_DataObjectsReferenceList: $.ASN1Decoder<DataObjectsReferenceList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DataObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _decode_DataObjectsReferenceList */
/**
 * @summary Decodes an ASN.1 element into a(n) DataObjectsReferenceList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DataObjectsReferenceList} The decoded data structure.
 */
export function _decode_DataObjectsReferenceList(el: _Element) {
    if (!_cached_decoder_for_DataObjectsReferenceList) {
        _cached_decoder_for_DataObjectsReferenceList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_DataObjectsReferenceList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DataObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DataObjectsReferenceList */
let _cached_encoder_for_DataObjectsReferenceList: $.ASN1Encoder<DataObjectsReferenceList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DataObjectsReferenceList */

/* START_OF_SYMBOL_DEFINITION _encode_DataObjectsReferenceList */
/**
 * @summary Encodes a(n) DataObjectsReferenceList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataObjectsReferenceList, encoded as an ASN.1 Element.
 */
export function _encode_DataObjectsReferenceList(
    value: DataObjectsReferenceList,
    elGetter: $.ASN1Encoder<DataObjectsReferenceList>
) {
    if (!_cached_encoder_for_DataObjectsReferenceList) {
        _cached_encoder_for_DataObjectsReferenceList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_DataObjectsReferenceList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DataObjectsReferenceList */

/* eslint-enable */
