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
    BodyPartSynopsis,
    _decode_BodyPartSynopsis,
    _encode_BodyPartSynopsis,
} from '../EDIMSMessageStoreAttributes/BodyPartSynopsis.ta.mjs';
/**
 * @summary EDIMSynopsis
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EDIMSynopsis  ::=  SEQUENCE OF BodyPartSynopsis
 * ```
 */
export type EDIMSynopsis = BodyPartSynopsis[]; // SequenceOfType

let _cached_decoder_for_EDIMSynopsis: $.ASN1Decoder<EDIMSynopsis> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDIMSynopsis
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {EDIMSynopsis} The decoded data structure.
 */
export function _decode_EDIMSynopsis(el: _Element) {
    if (!_cached_decoder_for_EDIMSynopsis) {
        _cached_decoder_for_EDIMSynopsis = $._decodeSequenceOf<BodyPartSynopsis>(
            () => _decode_BodyPartSynopsis
        );
    }
    return _cached_decoder_for_EDIMSynopsis(el);
}

let _cached_encoder_for_EDIMSynopsis: $.ASN1Encoder<EDIMSynopsis> | null = null;

/**
 * @summary Encodes a(n) EDIMSynopsis into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDIMSynopsis, encoded as an ASN.1 Element.
 */
export function _encode_EDIMSynopsis(
    value: EDIMSynopsis,
    elGetter: $.ASN1Encoder<EDIMSynopsis>
) {
    if (!_cached_encoder_for_EDIMSynopsis) {
        _cached_encoder_for_EDIMSynopsis = $._encodeSequenceOf<BodyPartSynopsis>(
            () => _encode_BodyPartSynopsis,
            $.BER
        );
    }
    return _cached_encoder_for_EDIMSynopsis(value, elGetter);
}


/* eslint-enable */
