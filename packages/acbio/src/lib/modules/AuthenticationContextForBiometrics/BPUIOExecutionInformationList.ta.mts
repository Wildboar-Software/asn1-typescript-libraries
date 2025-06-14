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
    BPUIOExecutionInformation,
    _decode_BPUIOExecutionInformation,
    _encode_BPUIOExecutionInformation,
} from '../AuthenticationContextForBiometrics/BPUIOExecutionInformation.ta.mjs';
/* START_OF_SYMBOL_DEFINITION BPUIOExecutionInformationList */
/**
 * @summary BPUIOExecutionInformationList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BPUIOExecutionInformationList  ::=  SEQUENCE OF BPUIOExecutionInformation
 * ```
 */
export type BPUIOExecutionInformationList = BPUIOExecutionInformation[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION BPUIOExecutionInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOExecutionInformationList */
let _cached_decoder_for_BPUIOExecutionInformationList: $.ASN1Decoder<BPUIOExecutionInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_BPUIOExecutionInformationList */

/* START_OF_SYMBOL_DEFINITION _decode_BPUIOExecutionInformationList */
/**
 * @summary Decodes an ASN.1 element into a(n) BPUIOExecutionInformationList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {BPUIOExecutionInformationList} The decoded data structure.
 */
export function _decode_BPUIOExecutionInformationList(el: _Element) {
    if (!_cached_decoder_for_BPUIOExecutionInformationList) {
        _cached_decoder_for_BPUIOExecutionInformationList = $._decodeSequenceOf<BPUIOExecutionInformation>(
            () => _decode_BPUIOExecutionInformation
        );
    }
    return _cached_decoder_for_BPUIOExecutionInformationList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_BPUIOExecutionInformationList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOExecutionInformationList */
let _cached_encoder_for_BPUIOExecutionInformationList: $.ASN1Encoder<BPUIOExecutionInformationList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_BPUIOExecutionInformationList */

/* START_OF_SYMBOL_DEFINITION _encode_BPUIOExecutionInformationList */
/**
 * @summary Encodes a(n) BPUIOExecutionInformationList into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUIOExecutionInformationList, encoded as an ASN.1 Element.
 */
export function _encode_BPUIOExecutionInformationList(
    value: BPUIOExecutionInformationList,
    elGetter: $.ASN1Encoder<BPUIOExecutionInformationList>
) {
    if (!_cached_encoder_for_BPUIOExecutionInformationList) {
        _cached_encoder_for_BPUIOExecutionInformationList = $._encodeSequenceOf<BPUIOExecutionInformation>(
            () => _encode_BPUIOExecutionInformation,
            $.BER
        );
    }
    return _cached_encoder_for_BPUIOExecutionInformationList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_BPUIOExecutionInformationList */

/* eslint-enable */
