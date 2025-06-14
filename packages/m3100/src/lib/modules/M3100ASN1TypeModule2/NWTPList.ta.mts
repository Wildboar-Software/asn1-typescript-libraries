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
/* START_OF_SYMBOL_DEFINITION NWTPList */
/**
 * @summary NWTPList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * NWTPList  ::=  SET OF ObjectInstance
 * ```
 */
export type NWTPList = ObjectInstance[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION NWTPList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_NWTPList */
let _cached_decoder_for_NWTPList: $.ASN1Decoder<NWTPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_NWTPList */

/* START_OF_SYMBOL_DEFINITION _decode_NWTPList */
/**
 * @summary Decodes an ASN.1 element into a(n) NWTPList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {NWTPList} The decoded data structure.
 */
export function _decode_NWTPList(el: _Element) {
    if (!_cached_decoder_for_NWTPList) {
        _cached_decoder_for_NWTPList = $._decodeSetOf<ObjectInstance>(
            () => _decode_ObjectInstance
        );
    }
    return _cached_decoder_for_NWTPList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_NWTPList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_NWTPList */
let _cached_encoder_for_NWTPList: $.ASN1Encoder<NWTPList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_NWTPList */

/* START_OF_SYMBOL_DEFINITION _encode_NWTPList */
/**
 * @summary Encodes a(n) NWTPList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NWTPList, encoded as an ASN.1 Element.
 */
export function _encode_NWTPList(
    value: NWTPList,
    elGetter: $.ASN1Encoder<NWTPList>
) {
    if (!_cached_encoder_for_NWTPList) {
        _cached_encoder_for_NWTPList = $._encodeSetOf<ObjectInstance>(
            () => _encode_ObjectInstance,
            $.BER
        );
    }
    return _cached_encoder_for_NWTPList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_NWTPList */

/* eslint-enable */
