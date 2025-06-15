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
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
import {
    AE_title,
    _decode_AE_title,
    _encode_AE_title,
} from '@wildboar/acse/src/lib/modules/ACSE-1/AE-title.ta.mjs';

/**
 * @summary LastBackupDestination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * LastBackupDestination  ::=  CHOICE {
 *   notBackedUp     NULL,
 *   localObject     ObjectInstance,
 *   managingSystem  AE-title,
 *   remoteSystem    GraphicString
 * }
 * ```
 */
export type LastBackupDestination =
    | { notBackedUp: NULL } /* CHOICE_ALT_ROOT */
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { managingSystem: AE_title } /* CHOICE_ALT_ROOT */
    | { remoteSystem: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LastBackupDestination: $.ASN1Decoder<LastBackupDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LastBackupDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {LastBackupDestination} The decoded data structure.
 */
export function _decode_LastBackupDestination(el: _Element) {
    if (!_cached_decoder_for_LastBackupDestination) {
        _cached_decoder_for_LastBackupDestination = $._decode_inextensible_choice<LastBackupDestination>(
            {
                'UNIVERSAL 5': ['notBackedUp', $._decodeNull],
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                '*': ['managingSystem', _decode_AE_title],
                'UNIVERSAL 25': ['remoteSystem', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_LastBackupDestination(el);
}

let _cached_encoder_for_LastBackupDestination: $.ASN1Encoder<LastBackupDestination> | null = null;

/**
 * @summary Encodes a(n) LastBackupDestination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LastBackupDestination, encoded as an ASN.1 Element.
 */
export function _encode_LastBackupDestination(
    value: LastBackupDestination,
    elGetter: $.ASN1Encoder<LastBackupDestination>
) {
    if (!_cached_encoder_for_LastBackupDestination) {
        _cached_encoder_for_LastBackupDestination = $._encode_choice<LastBackupDestination>(
            {
                notBackedUp: $._encodeNull,
                localObject: _encode_ObjectInstance,
                managingSystem: _encode_AE_title,
                remoteSystem: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_LastBackupDestination(value, elGetter);
}


/* eslint-enable */
