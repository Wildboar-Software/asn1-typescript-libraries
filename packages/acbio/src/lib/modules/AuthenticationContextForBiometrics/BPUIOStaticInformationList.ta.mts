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
    BPUIOStaticInformation,
    _decode_BPUIOStaticInformation,
    _encode_BPUIOStaticInformation,
} from '../AuthenticationContextForBiometrics/BPUIOStaticInformation.ta.mjs';

/**
 * @summary BPUIOStaticInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUIOStaticInformationList  ::=  SEQUENCE OF BPUIOStaticInformation
 * ```
 */
export type BPUIOStaticInformationList = BPUIOStaticInformation[]; // SequenceOfType


let _cached_decoder_for_BPUIOStaticInformationList: $.ASN1Decoder<BPUIOStaticInformationList> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) BPUIOStaticInformationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUIOStaticInformationList} The decoded data structure.
 */
export function _decode_BPUIOStaticInformationList(el: _Element): BPUIOStaticInformationList {
    if (!_cached_decoder_for_BPUIOStaticInformationList) {
        _cached_decoder_for_BPUIOStaticInformationList = $._decodeSequenceOf<BPUIOStaticInformation>(
            () => _decode_BPUIOStaticInformation
        );
    }
    return _cached_decoder_for_BPUIOStaticInformationList(el);
}


let _cached_encoder_for_BPUIOStaticInformationList: $.ASN1Encoder<BPUIOStaticInformationList> | null = null;


/**
 * @summary Encodes a(n) BPUIOStaticInformationList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUIOStaticInformationList, encoded as an ASN.1 Element.
 */
export function _encode_BPUIOStaticInformationList(
    value: BPUIOStaticInformationList,
    elGetter: $.ASN1Encoder<BPUIOStaticInformationList>
): _Element {
    if (!_cached_encoder_for_BPUIOStaticInformationList) {
        _cached_encoder_for_BPUIOStaticInformationList = $._encodeSequenceOf<BPUIOStaticInformation>(
            () => _encode_BPUIOStaticInformation,
            $.BER
        );
    }
    return _cached_encoder_for_BPUIOStaticInformationList(value, elGetter);
}


/* eslint-enable */
