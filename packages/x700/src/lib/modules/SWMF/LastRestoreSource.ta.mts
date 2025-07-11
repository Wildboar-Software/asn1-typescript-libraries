/* eslint-disable */
import {
    NULL,
    GraphicString,
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
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip';
import {
    AE_title,
    _decode_AE_title,
    _encode_AE_title,
} from '@wildboar/acse';

/**
 * @summary LastRestoreSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastRestoreSource  ::=  CHOICE {
 *   notRestored     NULL,
 *   localObject     ObjectInstance,
 *   managingSystem  AE-title,
 *   remoteSystem    GraphicString
 * }
 * ```
 */
export type LastRestoreSource =
    | { notRestored: NULL } /* CHOICE_ALT_ROOT */
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { managingSystem: AE_title } /* CHOICE_ALT_ROOT */
    | { remoteSystem: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LastRestoreSource: $.ASN1Decoder<LastRestoreSource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastRestoreSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastRestoreSource} The decoded data structure.
 */
export function _decode_LastRestoreSource(el: _Element): LastRestoreSource {
    if (!_cached_decoder_for_LastRestoreSource) {
        _cached_decoder_for_LastRestoreSource = $._decode_inextensible_choice<LastRestoreSource>(
            {
                'UNIVERSAL 5': ['notRestored', $._decodeNull],
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                '*': ['managingSystem', _decode_AE_title],
                'UNIVERSAL 25': ['remoteSystem', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_LastRestoreSource(el);
}

let _cached_encoder_for_LastRestoreSource: $.ASN1Encoder<LastRestoreSource> | null = null;

/**
 * @summary Encodes a(n) LastRestoreSource into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastRestoreSource, encoded as an ASN.1 Element.
 */
export function _encode_LastRestoreSource(
    value: LastRestoreSource,
    elGetter: $.ASN1Encoder<LastRestoreSource>
): _Element {
    if (!_cached_encoder_for_LastRestoreSource) {
        _cached_encoder_for_LastRestoreSource = $._encode_choice<LastRestoreSource>(
            {
                notRestored: $._encodeNull,
                localObject: _encode_ObjectInstance,
                managingSystem: _encode_AE_title,
                remoteSystem: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LastRestoreSource(value, elGetter);
}


/* eslint-enable */
