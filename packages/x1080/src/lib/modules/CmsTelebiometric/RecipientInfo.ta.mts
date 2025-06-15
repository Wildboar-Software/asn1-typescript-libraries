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
    KeyAgreeRecipientInfo,
    _decode_KeyAgreeRecipientInfo,
    _encode_KeyAgreeRecipientInfo,
} from '../CmsTelebiometric/KeyAgreeRecipientInfo.ta.mjs';
import {
    KEKRecipientInfo,
    _decode_KEKRecipientInfo,
    _encode_KEKRecipientInfo,
} from '../CmsTelebiometric/KEKRecipientInfo.ta.mjs';
/* START_OF_SYMBOL_DEFINITION RecipientInfo */
/**
 * @summary RecipientInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RecipientInfo  ::=  CHOICE {
 * --ktri      KeyTransRecipientInfo,
 *   kari  [1] KeyAgreeRecipientInfo,
 *   kekri [2] KEKRecipientInfo,
 * --pwri  [3] PasswordRecipientinfo,
 * --ori   [4] OtherRecipientInfo,
 *   ... }
 * ```
 */
export type RecipientInfo =
    | { kari: KeyAgreeRecipientInfo } /* CHOICE_ALT_ROOT */
    | { kekri: KEKRecipientInfo } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;
/* END_OF_SYMBOL_DEFINITION RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */
let _cached_decoder_for_RecipientInfo: $.ASN1Decoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_RecipientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) RecipientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RecipientInfo} The decoded data structure.
 */
export function _decode_RecipientInfo(el: _Element) {
    if (!_cached_decoder_for_RecipientInfo) {
        _cached_decoder_for_RecipientInfo = $._decode_extensible_choice<RecipientInfo>(
            {
                'CONTEXT 1': [
                    'kari',
                    $._decode_implicit<KeyAgreeRecipientInfo>(
                        () => _decode_KeyAgreeRecipientInfo
                    ),
                ],
                'CONTEXT 2': [
                    'kekri',
                    $._decode_implicit<KEKRecipientInfo>(
                        () => _decode_KEKRecipientInfo
                    ),
                ],
            }
        );
    }
    return _cached_decoder_for_RecipientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */
let _cached_encoder_for_RecipientInfo: $.ASN1Encoder<RecipientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RecipientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_RecipientInfo */
/**
 * @summary Encodes a(n) RecipientInfo into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecipientInfo, encoded as an ASN.1 Element.
 */
export function _encode_RecipientInfo(
    value: RecipientInfo,
    elGetter: $.ASN1Encoder<RecipientInfo>
) {
    if (!_cached_encoder_for_RecipientInfo) {
        _cached_encoder_for_RecipientInfo = $._encode_choice<RecipientInfo>(
            {
                kari: $._encode_implicit(
                    _TagClass.context,
                    1,
                    () => _encode_KeyAgreeRecipientInfo,
                    $.BER
                ),
                kekri: $._encode_implicit(
                    _TagClass.context,
                    2,
                    () => _encode_KEKRecipientInfo,
                    $.BER
                ),
            },
            $.BER
        );
    }
    return _cached_encoder_for_RecipientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RecipientInfo */

/* eslint-enable */
