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
    PathnameandVersion,
    _decode_PathnameandVersion,
    _encode_PathnameandVersion,
} from '../IPMSFileTransferBodyPartType/PathnameandVersion.ta.mjs';
import {
    CrossReference,
    _decode_CrossReference,
    _encode_CrossReference,
} from '../IPMSFileTransferBodyPartType/CrossReference.ta.mjs';
/* START_OF_SYMBOL_DEFINITION FileIdentifier */
/**
 * @summary FileIdentifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FileIdentifier  ::=  CHOICE {
 *   pathname-and-version  [0]  PathnameandVersion,
 *   cross-reference       [1]  CrossReference
 * }
 * ```
 */
export type FileIdentifier =
    | { pathname_and_version: PathnameandVersion } /* CHOICE_ALT_ROOT */
    | { cross_reference: CrossReference } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION FileIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FileIdentifier */
let _cached_decoder_for_FileIdentifier: $.ASN1Decoder<FileIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FileIdentifier */

/* START_OF_SYMBOL_DEFINITION _decode_FileIdentifier */
/**
 * @summary Decodes an ASN.1 element into a(n) FileIdentifier
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FileIdentifier} The decoded data structure.
 */
export function _decode_FileIdentifier(el: _Element) {
    if (!_cached_decoder_for_FileIdentifier) {
        _cached_decoder_for_FileIdentifier = $._decode_inextensible_choice<FileIdentifier>(
            {
                'CONTEXT 0': [
                    'pathname_and_version',
                    $._decode_implicit<PathnameandVersion>(
                        () => _decode_PathnameandVersion
                    ),
                ],
                'CONTEXT 1': [
                    'cross_reference',
                    $._decode_implicit<CrossReference>(
                        () => _decode_CrossReference
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_FileIdentifier(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FileIdentifier */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FileIdentifier */
let _cached_encoder_for_FileIdentifier: $.ASN1Encoder<FileIdentifier> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FileIdentifier */

/* START_OF_SYMBOL_DEFINITION _encode_FileIdentifier */
/**
 * @summary Encodes a(n) FileIdentifier into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileIdentifier, encoded as an ASN.1 Element.
 */
export function _encode_FileIdentifier(
    value: FileIdentifier,
    elGetter: $.ASN1Encoder<FileIdentifier>
) {
    if (!_cached_encoder_for_FileIdentifier) {
        _cached_encoder_for_FileIdentifier = $._encode_choice<FileIdentifier>(
            {
                pathname_and_version: $._encode_implicit(
                    _TagClass.context,
                    0,
                    () => _encode_PathnameandVersion,
                    $.BER
                ),
                cross_reference: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_CrossReference,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_FileIdentifier(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FileIdentifier */

/* eslint-enable */
