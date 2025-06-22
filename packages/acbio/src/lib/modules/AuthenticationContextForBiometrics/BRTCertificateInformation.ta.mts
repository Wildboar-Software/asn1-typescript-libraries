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
import * as $ from '@wildboar/asn1/functional';
import {
    BRTCertificateList,
    _decode_BRTCertificateList,
    _encode_BRTCertificateList,
} from '../AuthenticationContextForBiometrics/BRTCertificateList.ta.mjs';
import {
    BRTCertificateReferrerList,
    _decode_BRTCertificateReferrerList,
    _encode_BRTCertificateReferrerList,
} from '../AuthenticationContextForBiometrics/BRTCertificateReferrerList.ta.mjs';

/**
 * @summary BRTCertificateInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificateInformation  ::=  CHOICE {
 *     brtCertificateList          BRTCertificateList,
 *     brtCertificateReferrerList  BRTCertificateReferrerList }
 * ```
 */
export type BRTCertificateInformation =
    | { brtCertificateList: BRTCertificateList } /* CHOICE_ALT_ROOT */
    | {
          brtCertificateReferrerList: BRTCertificateReferrerList;
      } /* CHOICE_ALT_ROOT */;


let _cached_decoder_for_BRTCertificateInformation: $.ASN1Decoder<BRTCertificateInformation> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificateInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificateInformation} The decoded data structure.
 */
export function _decode_BRTCertificateInformation(el: _Element) {
    if (!_cached_decoder_for_BRTCertificateInformation) {
        _cached_decoder_for_BRTCertificateInformation = $._decode_inextensible_choice<BRTCertificateInformation>(
            {
                'CONTEXT 0': ['brtCertificateList', _decode_BRTCertificateList],
                'CONTEXT 1': [
                    'brtCertificateReferrerList',
                    _decode_BRTCertificateReferrerList,
                ],
            }
        );
    }
    return _cached_decoder_for_BRTCertificateInformation(el);
}


let _cached_encoder_for_BRTCertificateInformation: $.ASN1Encoder<BRTCertificateInformation> | null = null;


/**
 * @summary Encodes a(n) BRTCertificateInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificateInformation, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificateInformation(
    value: BRTCertificateInformation,
    elGetter: $.ASN1Encoder<BRTCertificateInformation>
) {
    if (!_cached_encoder_for_BRTCertificateInformation) {
        _cached_encoder_for_BRTCertificateInformation = $._encode_choice<BRTCertificateInformation>(
            {
                brtCertificateList: _encode_BRTCertificateList,
                brtCertificateReferrerList: _encode_BRTCertificateReferrerList,
            },
            $.BER
        );
    }
    return _cached_encoder_for_BRTCertificateInformation(value, elGetter);
}


/* eslint-enable */
