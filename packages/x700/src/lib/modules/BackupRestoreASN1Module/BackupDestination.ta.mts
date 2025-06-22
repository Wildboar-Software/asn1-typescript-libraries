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
} from '@wildboar/cmip/src/lib/modules/CMIP-1/ObjectInstance.ta.mjs';
/**
 * @summary BackupDestination
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BackupDestination  ::=  CHOICE {
 *   localObject  ObjectInstance,
 *   inLine       NULL, -- in-line in the notification in additionalInfo
 *   offLine      GraphicString -- remote system by, e.g. FTAM
 * }
 * ```
 */
export type BackupDestination =
    | { localObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { inLine: NULL } /* CHOICE_ALT_ROOT */
    | { offLine: GraphicString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BackupDestination: $.ASN1Decoder<BackupDestination> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BackupDestination
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BackupDestination} The decoded data structure.
 */
export function _decode_BackupDestination(el: _Element) {
    if (!_cached_decoder_for_BackupDestination) {
        _cached_decoder_for_BackupDestination = $._decode_inextensible_choice<BackupDestination>(
            {
                'CONTEXT 2': ['localObject', _decode_ObjectInstance],
                'CONTEXT 3': ['localObject', _decode_ObjectInstance],
                'CONTEXT 4': ['localObject', _decode_ObjectInstance],
                'UNIVERSAL 5': ['inLine', $._decodeNull],
                'UNIVERSAL 25': ['offLine', $._decodeGraphicString],
            }
        );
    }
    return _cached_decoder_for_BackupDestination(el);
}

let _cached_encoder_for_BackupDestination: $.ASN1Encoder<BackupDestination> | null = null;

/**
 * @summary Encodes a(n) BackupDestination into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BackupDestination, encoded as an ASN.1 Element.
 */
export function _encode_BackupDestination(
    value: BackupDestination,
    elGetter: $.ASN1Encoder<BackupDestination>
) {
    if (!_cached_encoder_for_BackupDestination) {
        _cached_encoder_for_BackupDestination = $._encode_choice<BackupDestination>(
            {
                localObject: _encode_ObjectInstance,
                inLine: $._encodeNull,
                offLine: $._encodeGraphicString,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BackupDestination(value, elGetter);
}


/* eslint-enable */
