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
    AddTpsToTpPoolResult_Item,
    _decode_AddTpsToTpPoolResult_Item,
    _encode_AddTpsToTpPoolResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToTpPoolResult-Item.ta.mjs';

/**
 * @summary AddTpsToTpPoolResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToTpPoolResult  ::=
 *   SEQUENCE OF
 *     CHOICE {failed            [0]  Failed,
 *             tpsAddedToTpPool  [1]  TpsAddedToTpPool}
 * ```
 */
export type AddTpsToTpPoolResult = AddTpsToTpPoolResult_Item[]; // SequenceOfType


let _cached_decoder_for_AddTpsToTpPoolResult: $.ASN1Decoder<AddTpsToTpPoolResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToTpPoolResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToTpPoolResult} The decoded data structure.
 */
export function _decode_AddTpsToTpPoolResult(el: _Element): AddTpsToTpPoolResult {
    if (!_cached_decoder_for_AddTpsToTpPoolResult) {
        _cached_decoder_for_AddTpsToTpPoolResult = $._decodeSequenceOf<AddTpsToTpPoolResult_Item>(
            () => _decode_AddTpsToTpPoolResult_Item
        );
    }
    return _cached_decoder_for_AddTpsToTpPoolResult(el);
}


let _cached_encoder_for_AddTpsToTpPoolResult: $.ASN1Encoder<AddTpsToTpPoolResult> | null = null;


/**
 * @summary Encodes a(n) AddTpsToTpPoolResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToTpPoolResult, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToTpPoolResult(
    value: AddTpsToTpPoolResult,
    elGetter: $.ASN1Encoder<AddTpsToTpPoolResult>
): _Element {
    if (!_cached_encoder_for_AddTpsToTpPoolResult) {
        _cached_encoder_for_AddTpsToTpPoolResult = $._encodeSequenceOf<AddTpsToTpPoolResult_Item>(
            () => _encode_AddTpsToTpPoolResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToTpPoolResult(value, elGetter);
}


/* eslint-enable */
