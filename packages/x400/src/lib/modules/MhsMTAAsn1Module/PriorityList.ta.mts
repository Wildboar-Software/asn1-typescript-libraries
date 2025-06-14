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
    Priority,
    _decode_Priority,
    _encode_Priority,
} from '../MTSAbstractService/Priority.ta.mjs';
/* START_OF_SYMBOL_DEFINITION PriorityList */
/**
 * @summary PriorityList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PriorityList  ::=  SET OF Priority
 * ```
 */
export type PriorityList = Priority[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION PriorityList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PriorityList */
let _cached_decoder_for_PriorityList: $.ASN1Decoder<PriorityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PriorityList */

/* START_OF_SYMBOL_DEFINITION _decode_PriorityList */
/**
 * @summary Decodes an ASN.1 element into a(n) PriorityList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PriorityList} The decoded data structure.
 */
export function _decode_PriorityList(el: _Element) {
    if (!_cached_decoder_for_PriorityList) {
        _cached_decoder_for_PriorityList = $._decodeSetOf<Priority>(
            () => _decode_Priority
        );
    }
    return _cached_decoder_for_PriorityList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PriorityList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PriorityList */
let _cached_encoder_for_PriorityList: $.ASN1Encoder<PriorityList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PriorityList */

/* START_OF_SYMBOL_DEFINITION _encode_PriorityList */
/**
 * @summary Encodes a(n) PriorityList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PriorityList, encoded as an ASN.1 Element.
 */
export function _encode_PriorityList(
    value: PriorityList,
    elGetter: $.ASN1Encoder<PriorityList>
) {
    if (!_cached_encoder_for_PriorityList) {
        _cached_encoder_for_PriorityList = $._encodeSetOf<Priority>(
            () => _encode_Priority,
            $.BER
        );
    }
    return _cached_encoder_for_PriorityList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PriorityList */

/* eslint-enable */
