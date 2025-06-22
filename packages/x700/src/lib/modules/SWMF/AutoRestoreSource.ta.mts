/* eslint-disable */
import {
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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary AutoRestoreSource
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AutoRestoreSource  ::=  CHOICE {
 *   localObject   ObjectInstance,
 *   remoteSystem  GraphicString -- off-line from remote system
 * }
 * ```
 */
export type AutoRestoreSource =
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { remoteSystem: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AutoRestoreSource: $.ASN1Decoder<AutoRestoreSource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AutoRestoreSource
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {AutoRestoreSource} The decoded data structure.
 */
export function _decode_AutoRestoreSource(el: _Element) {
    if (!_cached_decoder_for_AutoRestoreSource) {
        _cached_decoder_for_AutoRestoreSource = $._decode_inextensible_choice<AutoRestoreSource>(
            {
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                'UNIVERSAL 25': ['remoteSystem', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_AutoRestoreSource(el);
}

let _cached_encoder_for_AutoRestoreSource: $.ASN1Encoder<AutoRestoreSource> | null = null;

/**
 * @summary Encodes a(n) AutoRestoreSource into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AutoRestoreSource, encoded as an ASN.1 Element.
 */
export function _encode_AutoRestoreSource(
    value: AutoRestoreSource,
    elGetter: $.ASN1Encoder<AutoRestoreSource>
) {
    if (!_cached_encoder_for_AutoRestoreSource) {
        _cached_encoder_for_AutoRestoreSource = $._encode_choice<AutoRestoreSource>(
            {
                localObject: _encode_ObjectInstance,
                remoteSystem: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_AutoRestoreSource(value, elGetter);
}


/* eslint-enable */
