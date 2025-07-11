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
    SignerInfo,
    _decode_SignerInfo,
    _encode_SignerInfo,
} from '../CmsTelebiometric/SignerInfo.ta.mjs';

/**
 * @summary SignerInfos
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignerInfos  ::=  SET (SIZE (1)) OF SignerInfo
 * ```
 */
export type SignerInfos = SignerInfo[]; // SetOfType


let _cached_decoder_for_SignerInfos: $.ASN1Decoder<SignerInfos> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) SignerInfos
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignerInfos} The decoded data structure.
 */
export function _decode_SignerInfos(el: _Element): SignerInfos {
    if (!_cached_decoder_for_SignerInfos) {
        _cached_decoder_for_SignerInfos = $._decodeSetOf<SignerInfo>(
            () => _decode_SignerInfo
        );
    }
    return _cached_decoder_for_SignerInfos(el);
}


let _cached_encoder_for_SignerInfos: $.ASN1Encoder<SignerInfos> | null = null;


/**
 * @summary Encodes a(n) SignerInfos into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignerInfos, encoded as an ASN.1 Element.
 */
export function _encode_SignerInfos(
    value: SignerInfos,
    elGetter: $.ASN1Encoder<SignerInfos>
): _Element {
    if (!_cached_encoder_for_SignerInfos) {
        _cached_encoder_for_SignerInfos = $._encodeSetOf<SignerInfo>(
            () => _encode_SignerInfo,
            $.BER
        );
    }
    return _cached_encoder_for_SignerInfos(value, elGetter);
}


/* eslint-enable */
