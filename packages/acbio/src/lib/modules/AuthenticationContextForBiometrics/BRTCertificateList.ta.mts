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
    BRTCertificate,
    _decode_BRTCertificate,
    _encode_BRTCertificate,
} from '../AuthenticationContextForBiometrics/BRTCertificate.ta.mjs';

/**
 * @summary BRTCertificateList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BRTCertificateList  ::=  SEQUENCE OF BRTCertificate
 * ```
 */
export type BRTCertificateList = BRTCertificate[]; // SequenceOfType


let _cached_decoder_for_BRTCertificateList: $.ASN1Decoder<BRTCertificateList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BRTCertificateList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BRTCertificateList} The decoded data structure.
 */
export function _decode_BRTCertificateList(el: _Element): BRTCertificateList {
    if (!_cached_decoder_for_BRTCertificateList) {
        _cached_decoder_for_BRTCertificateList = $._decodeSequenceOf<BRTCertificate>(
            () => _decode_BRTCertificate
        );
    }
    return _cached_decoder_for_BRTCertificateList(el);
}


let _cached_encoder_for_BRTCertificateList: $.ASN1Encoder<BRTCertificateList> | null = null;


/**
 * @summary Encodes a(n) BRTCertificateList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BRTCertificateList, encoded as an ASN.1 Element.
 */
export function _encode_BRTCertificateList(
    value: BRTCertificateList,
    elGetter: $.ASN1Encoder<BRTCertificateList>
): _Element {
    if (!_cached_encoder_for_BRTCertificateList) {
        _cached_encoder_for_BRTCertificateList = $._encodeSequenceOf<BRTCertificate>(
            () => _encode_BRTCertificate,
            $.BER
        );
    }
    return _cached_encoder_for_BRTCertificateList(value, elGetter);
}


/* eslint-enable */
