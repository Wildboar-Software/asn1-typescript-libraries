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
    AddTpsToGtpResult_Item,
    _decode_AddTpsToGtpResult_Item,
    _encode_AddTpsToGtpResult_Item,
} from '../ASN1DefinedTypesModule/AddTpsToGtpResult-Item.ta.mjs';

/**
 * @summary AddTpsToGtpResult
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AddTpsToGtpResult  ::=
 *   SEQUENCE OF CHOICE {failed    [0]  Failed,
 *                       addedTps  [1]  AddedTps}
 * ```
 */
export type AddTpsToGtpResult = AddTpsToGtpResult_Item[]; // SequenceOfType


let _cached_decoder_for_AddTpsToGtpResult: $.ASN1Decoder<AddTpsToGtpResult> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) AddTpsToGtpResult
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AddTpsToGtpResult} The decoded data structure.
 */
export function _decode_AddTpsToGtpResult(el: _Element) {
    if (!_cached_decoder_for_AddTpsToGtpResult) {
        _cached_decoder_for_AddTpsToGtpResult = $._decodeSequenceOf<AddTpsToGtpResult_Item>(
            () => _decode_AddTpsToGtpResult_Item
        );
    }
    return _cached_decoder_for_AddTpsToGtpResult(el);
}


let _cached_encoder_for_AddTpsToGtpResult: $.ASN1Encoder<AddTpsToGtpResult> | null = null;


/**
 * @summary Encodes a(n) AddTpsToGtpResult into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AddTpsToGtpResult, encoded as an ASN.1 Element.
 */
export function _encode_AddTpsToGtpResult(
    value: AddTpsToGtpResult,
    elGetter: $.ASN1Encoder<AddTpsToGtpResult>
) {
    if (!_cached_encoder_for_AddTpsToGtpResult) {
        _cached_encoder_for_AddTpsToGtpResult = $._encodeSequenceOf<AddTpsToGtpResult_Item>(
            () => _encode_AddTpsToGtpResult_Item,
            $.BER
        );
    }
    return _cached_encoder_for_AddTpsToGtpResult(value, elGetter);
}


/* eslint-enable */
