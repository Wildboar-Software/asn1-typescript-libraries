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
    SubprocessIndex,
    _decode_SubprocessIndex,
    _encode_SubprocessIndex,
} from '../AuthenticationContextForBiometrics/SubprocessIndex.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SubprocessIndexList */
/**
 * @summary SubprocessIndexList
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SubprocessIndexList  ::=  SEQUENCE OF SubprocessIndex
 * ```
 */
export type SubprocessIndexList = SubprocessIndex[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION SubprocessIndexList */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndexList */
let _cached_decoder_for_SubprocessIndexList: $.ASN1Decoder<SubprocessIndexList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SubprocessIndexList */

/* START_OF_SYMBOL_DEFINITION _decode_SubprocessIndexList */
/**
 * @summary Decodes an ASN.1 element into a(n) SubprocessIndexList
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SubprocessIndexList} The decoded data structure.
 */
export function _decode_SubprocessIndexList(el: _Element) {
    if (!_cached_decoder_for_SubprocessIndexList) {
        _cached_decoder_for_SubprocessIndexList = $._decodeSequenceOf<SubprocessIndex>(
            () => _decode_SubprocessIndex
        );
    }
    return _cached_decoder_for_SubprocessIndexList(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SubprocessIndexList */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndexList */
let _cached_encoder_for_SubprocessIndexList: $.ASN1Encoder<SubprocessIndexList> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SubprocessIndexList */

/* START_OF_SYMBOL_DEFINITION _encode_SubprocessIndexList */
/**
 * @summary Encodes a(n) SubprocessIndexList into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubprocessIndexList, encoded as an ASN.1 Element.
 */
export function _encode_SubprocessIndexList(
    value: SubprocessIndexList,
    elGetter: $.ASN1Encoder<SubprocessIndexList>
) {
    if (!_cached_encoder_for_SubprocessIndexList) {
        _cached_encoder_for_SubprocessIndexList = $._encodeSequenceOf<SubprocessIndex>(
            () => _encode_SubprocessIndex,
            $.BER
        );
    }
    return _cached_encoder_for_SubprocessIndexList(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SubprocessIndexList */

/* eslint-enable */
