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
    BPUSubprocessInformation,
    _decode_BPUSubprocessInformation,
    _encode_BPUSubprocessInformation,
} from '../AuthenticationContextForBiometrics/BPUSubprocessInformation.ta.mjs';

/**
 * @summary BPUSubprocessInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUSubprocessInformationList  ::=  SEQUENCE OF BPUSubprocessInformation
 * ```
 */
export type BPUSubprocessInformationList = BPUSubprocessInformation[]; // SequenceOfType


let _cached_decoder_for_BPUSubprocessInformationList: $.ASN1Decoder<BPUSubprocessInformationList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUSubprocessInformationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUSubprocessInformationList} The decoded data structure.
 */
export function _decode_BPUSubprocessInformationList(el: _Element) {
    if (!_cached_decoder_for_BPUSubprocessInformationList) {
        _cached_decoder_for_BPUSubprocessInformationList = $._decodeSequenceOf<BPUSubprocessInformation>(
            () => _decode_BPUSubprocessInformation
        );
    }
    return _cached_decoder_for_BPUSubprocessInformationList(el);
}


let _cached_encoder_for_BPUSubprocessInformationList: $.ASN1Encoder<BPUSubprocessInformationList> | null = null;


/**
 * @summary Encodes a(n) BPUSubprocessInformationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUSubprocessInformationList, encoded as an ASN.1 Element.
 */
export function _encode_BPUSubprocessInformationList(
    value: BPUSubprocessInformationList,
    elGetter: $.ASN1Encoder<BPUSubprocessInformationList>
) {
    if (!_cached_encoder_for_BPUSubprocessInformationList) {
        _cached_encoder_for_BPUSubprocessInformationList = $._encodeSequenceOf<BPUSubprocessInformation>(
            () => _encode_BPUSubprocessInformation,
            $.BER
        );
    }
    return _cached_encoder_for_BPUSubprocessInformationList(value, elGetter);
}


/* eslint-enable */
