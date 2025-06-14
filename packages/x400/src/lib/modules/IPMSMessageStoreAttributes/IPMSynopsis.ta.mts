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
    BodyPartSynopsis,
    _decode_BodyPartSynopsis,
    _encode_BodyPartSynopsis,
} from '../IPMSMessageStoreAttributes/BodyPartSynopsis.ta.mjs';
/* START_OF_SYMBOL_DEFINITION IPMSynopsis */
/**
 * @summary IPMSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IPMSynopsis  ::=  SEQUENCE OF BodyPartSynopsis
 * ```
 */
export type IPMSynopsis = BodyPartSynopsis[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION IPMSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMSynopsis */
let _cached_decoder_for_IPMSynopsis: $.ASN1Decoder<IPMSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IPMSynopsis */

/* START_OF_SYMBOL_DEFINITION _decode_IPMSynopsis */
/**
 * @summary Decodes an ASN.1 element into a(n) IPMSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IPMSynopsis} The decoded data structure.
 */
export function _decode_IPMSynopsis(el: _Element) {
    if (!_cached_decoder_for_IPMSynopsis) {
        _cached_decoder_for_IPMSynopsis = $._decodeSequenceOf<BodyPartSynopsis>(
            () => _decode_BodyPartSynopsis
        );
    }
    return _cached_decoder_for_IPMSynopsis(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IPMSynopsis */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMSynopsis */
let _cached_encoder_for_IPMSynopsis: $.ASN1Encoder<IPMSynopsis> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IPMSynopsis */

/* START_OF_SYMBOL_DEFINITION _encode_IPMSynopsis */
/**
 * @summary Encodes a(n) IPMSynopsis into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPMSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_IPMSynopsis(
    value: IPMSynopsis,
    elGetter: $.ASN1Encoder<IPMSynopsis>
) {
    if (!_cached_encoder_for_IPMSynopsis) {
        _cached_encoder_for_IPMSynopsis = $._encodeSequenceOf<BodyPartSynopsis>(
            () => _encode_BodyPartSynopsis,
            $.BER
        );
    }
    return _cached_encoder_for_IPMSynopsis(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IPMSynopsis */

/* eslint-enable */
