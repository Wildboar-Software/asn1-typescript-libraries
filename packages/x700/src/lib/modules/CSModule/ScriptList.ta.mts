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
    ScriptId,
    _decode_ScriptId,
    _encode_ScriptId,
} from '../CSModule/ScriptId.ta.mjs';
/**
 * @summary ScriptList
 * @description
 *
 * One script or a sequential/parallel group of script ids.
 * Element type of `availableScriptList`.
 *
 * - `scriptId`: a single launch script.
 * - `sequentialScriptList`: ids in execution order (next after
 *   the previous completes).
 * - `parallelScriptList`: ids that may run in any order /
 *   concurrently.
 *
 * ITU-T Rec. X.753 (10/97)
 * [§7.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.1.6.3.1, A.4, A.8.
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

let _cached_decoder_for_ScriptList: $.ASN1Decoder<ScriptList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScriptList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ScriptList} The decoded data structure.
 */
export function _decode_ScriptList(el: _Element): ScriptList {
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

let _cached_encoder_for_ScriptList: $.ASN1Encoder<ScriptList> | null = null;

/**
 * @summary Encodes a(n) ScriptList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScriptList, encoded as an ASN.1 Element.
 */
export function _encode_ScriptList(
    value: ScriptList,
    elGetter: $.ASN1Encoder<ScriptList>
): _Element {
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


/* eslint-enable */
