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
    ScriptList,
    _decode_ScriptList,
    _encode_ScriptList,
} from '../CSModule/ScriptList.ta.mjs';
/**
 * @summary AvailableScriptList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AvailableScriptList  ::=  SET OF ScriptList
 * ```
 */
export type AvailableScriptList = ScriptList[]; // SetOfType

let _cached_decoder_for_AvailableScriptList: $.ASN1Decoder<AvailableScriptList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AvailableScriptList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AvailableScriptList} The decoded data structure.
 */
export function _decode_AvailableScriptList(el: _Element) {
    if (!_cached_decoder_for_AvailableScriptList) {
        _cached_decoder_for_AvailableScriptList = $._decodeSetOf<ScriptList>(
            () => _decode_ScriptList
        );
    }
    return _cached_decoder_for_AvailableScriptList(el);
}

let _cached_encoder_for_AvailableScriptList: $.ASN1Encoder<AvailableScriptList> | null = null;

/**
 * @summary Encodes a(n) AvailableScriptList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AvailableScriptList, encoded as an ASN.1 Element.
 */
export function _encode_AvailableScriptList(
    value: AvailableScriptList,
    elGetter: $.ASN1Encoder<AvailableScriptList>
) {
    if (!_cached_encoder_for_AvailableScriptList) {
        _cached_encoder_for_AvailableScriptList = $._encodeSetOf<ScriptList>(
            () => _encode_ScriptList,
            $.BER
        );
    }
    return _cached_encoder_for_AvailableScriptList(value, elGetter);
}


/* eslint-enable */
