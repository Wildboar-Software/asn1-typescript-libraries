/* eslint-disable */
import {
    PrintableString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary AcceptableCircuitPackTypeList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AcceptableCircuitPackTypeList  ::=  SET OF PrintableString
 * ```
 */
export type AcceptableCircuitPackTypeList = PrintableString[]; // SetOfType


let _cached_decoder_for_AcceptableCircuitPackTypeList: $.ASN1Decoder<AcceptableCircuitPackTypeList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AcceptableCircuitPackTypeList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AcceptableCircuitPackTypeList} The decoded data structure.
 */
export function _decode_AcceptableCircuitPackTypeList(el: _Element) {
    if (!_cached_decoder_for_AcceptableCircuitPackTypeList) {
        _cached_decoder_for_AcceptableCircuitPackTypeList = $._decodeSetOf<PrintableString>(
            () => $._decodePrintableString
        );
    }
    return _cached_decoder_for_AcceptableCircuitPackTypeList(el);
}


let _cached_encoder_for_AcceptableCircuitPackTypeList: $.ASN1Encoder<AcceptableCircuitPackTypeList> | null = null;


/**
 * @summary Encodes a(n) AcceptableCircuitPackTypeList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcceptableCircuitPackTypeList, encoded as an ASN.1 Element.
 */
export function _encode_AcceptableCircuitPackTypeList(
    value: AcceptableCircuitPackTypeList,
    elGetter: $.ASN1Encoder<AcceptableCircuitPackTypeList>
) {
    if (!_cached_encoder_for_AcceptableCircuitPackTypeList) {
        _cached_encoder_for_AcceptableCircuitPackTypeList = $._encodeSetOf<PrintableString>(
            () => $._encodePrintableString,
            $.BER
        );
    }
    return _cached_encoder_for_AcceptableCircuitPackTypeList(value, elGetter);
}


/* eslint-enable */
