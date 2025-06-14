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
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ScriptList */
/**
 * @summary ScriptList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptList  ::=  CHOICE {
 *   scriptId              ScriptId,
 *   sequentialScriptList  SEQUENCE OF ScriptId,
 *   parallelScriptList    SET OF ScriptId
 * }
 * ```
 */
export type ScriptList =
    | { scriptId: ScriptId } /* CHOICE_ALT_ROOT */
    | { sequentialScriptList: ScriptId[] } /* CHOICE_ALT_ROOT */
    | { parallelScriptList: ScriptId[] } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ScriptList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptList */
let _cached_decoder_for_ScriptList: $.ASN1Decoder<ScriptList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ScriptList */

/* START_OF_SYMBOL_DEFINITION _decode_ScriptList */
/**
 * @summary Decodes an ASN.1 element into a(n) ScriptList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptList} The decoded data structure.
 */
export function _decode_ScriptList(el: _Element) {
    if (!_cached_decoder_for_ScriptList) {
        _cached_decoder_for_ScriptList = $._decode_inextensible_choice<ScriptList>(
            {
                'CONTEXT 2': ['scriptId', _decode_ScriptId],
                'CONTEXT 3': ['scriptId', _decode_ScriptId],
                'CONTEXT 4': ['scriptId', _decode_ScriptId],
                'UNIVERSAL 16': [
                    'sequentialScriptList',
                    $._decodeSequenceOf<ScriptId>(() => _decode_ScriptId),
                ],
                'UNIVERSAL 17': [
                    'parallelScriptList',
                    $._decodeSetOf<ScriptId>(() => _decode_ScriptId),
                ],
            }
        );
    }
    return _cached_decoder_for_ScriptList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ScriptList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptList */
let _cached_encoder_for_ScriptList: $.ASN1Encoder<ScriptList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ScriptList */

/* START_OF_SYMBOL_DEFINITION _encode_ScriptList */
/**
 * @summary Encodes a(n) ScriptList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptList, encoded as an ASN.1 Element.
 */
export function _encode_ScriptList(
    value: ScriptList,
    elGetter: $.ASN1Encoder<ScriptList>
) {
    if (!_cached_encoder_for_ScriptList) {
        _cached_encoder_for_ScriptList = $._encode_choice<ScriptList>(
            {
                scriptId: _encode_ScriptId,
                sequentialScriptList: $._encodeSequenceOf<ScriptId>(
                    () => _encode_ScriptId,
                    $.BER
                ),
                parallelScriptList: $._encodeSetOf<ScriptId>(
                    () => _encode_ScriptId,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ScriptList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ScriptList */

/* eslint-enable */
