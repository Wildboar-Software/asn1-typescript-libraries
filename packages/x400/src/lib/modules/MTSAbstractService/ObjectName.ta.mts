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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
import {
    MTAName,
    _decode_MTAName,
    _encode_MTAName,
} from '../MTSAbstractService/MTAName.ta.mjs';
/**
 * @summary ObjectName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ObjectName  ::=  CHOICE {
 *   user-agent     ORAddressAndOptionalDirectoryName,
 *   mTA            [0]  MTAName,
 *   message-store  [4]  ORAddressAndOptionalDirectoryName
 * }
 * ```
 */
export type ObjectName =
    | { user_agent: ORAddressAndOptionalDirectoryName } /* CHOICE_ALT_ROOT */
    | { mTA: MTAName } /* CHOICE_ALT_ROOT */
    | {
          message_store: ORAddressAndOptionalDirectoryName;
      } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectName: $.ASN1Decoder<ObjectName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ObjectName} The decoded data structure.
 */
export function _decode_ObjectName(el: _Element) {
    if (!_cached_decoder_for_ObjectName) {
        _cached_decoder_for_ObjectName = $._decode_inextensible_choice<ObjectName>(
            {
                'APPLICATION 0': [
                    'user_agent',
                    _decode_ORAddressAndOptionalDirectoryName,
                ],
                'CONTEXT 0': [
                    'mTA',
                    $._decode_implicit<MTAName>(() => _decode_MTAName),
                ],
                'CONTEXT 4': [
                    'message_store',
                    $._decode_implicit<ORAddressAndOptionalDirectoryName>(
                        () => _decode_ORAddressAndOptionalDirectoryName
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_ObjectName(el);
}

let _cached_encoder_for_ObjectName: $.ASN1Encoder<ObjectName> | null = null;

/**
 * @summary Encodes a(n) ObjectName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectName, encoded as an ASN.1 Element.
 */
export function _encode_ObjectName(
    value: ObjectName,
    elGetter: $.ASN1Encoder<ObjectName>
) {
    if (!_cached_encoder_for_ObjectName) {
        _cached_encoder_for_ObjectName = $._encode_choice<ObjectName>(
            {
                user_agent: _encode_ORAddressAndOptionalDirectoryName,
                mTA: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_MTAName,
                    $.BER
                ),
                message_store: $._encode_implicit(
                    _TagClass.context,
                    4,
                    () => _encode_ORAddressAndOptionalDirectoryName,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_ObjectName(value, elGetter);
}


/* eslint-enable */
