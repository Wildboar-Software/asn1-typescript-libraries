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
/* START_OF_SYMBOL_DEFINITION TPList */
/**
 * @summary TPList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TPList  ::=  SET OF ObjectInstance
 * ```
 */
export type TPList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION TPList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TPList */
let _cached_decoder_for_TPList: $.ASN1Decoder<TPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TPList */

/* START_OF_SYMBOL_DEFINITION _decode_TPList */
/**
 * @summary Decodes an ASN.1 element into a(n) TPList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TPList} The decoded data structure.
 */
export function _decode_TPList(el: _Element) {
    if (!_cached_decoder_for_TPList) {
        _cached_decoder_for_TPList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_TPList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TPList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TPList */
let _cached_encoder_for_TPList: $.ASN1Encoder<TPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TPList */

/* START_OF_SYMBOL_DEFINITION _encode_TPList */
/**
 * @summary Encodes a(n) TPList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TPList, encoded as an ASN.1 Element.
 */
export function _encode_TPList(value: TPList, elGetter: $.ASN1Encoder<TPList>) {
    if (!_cached_encoder_for_TPList) {
        _cached_encoder_for_TPList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_TPList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TPList */

/* eslint-enable */
