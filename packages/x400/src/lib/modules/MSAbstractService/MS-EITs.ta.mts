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
    MS_EIT,
    _decode_MS_EIT,
    _encode_MS_EIT,
} from '../MSAbstractService/MS-EIT.ta.mjs';
/**
 * @summary MS_EITs
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MS-EITs  ::=  SET SIZE (1..ub-encoded-information-types) OF MS-EIT
 * ```
 */
export type MS_EITs = MS_EIT[]; // SetOfType

let _cached_decoder_for_MS_EITs: $.ASN1Decoder<MS_EITs> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MS_EITs
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MS_EITs} The decoded data structure.
 */
export function _decode_MS_EITs(el: _Element) {
    if (!_cached_decoder_for_MS_EITs) {
        _cached_decoder_for_MS_EITs = $._decodeSetOf<MS_EIT>(
            () => _decode_MS_EIT
        );
    }
    return _cached_decoder_for_MS_EITs(el);
}

let _cached_encoder_for_MS_EITs: $.ASN1Encoder<MS_EITs> | null = null;

/**
 * @summary Encodes a(n) MS_EITs into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MS_EITs, encoded as an ASN.1 Element.
 */
export function _encode_MS_EITs(
    value: MS_EITs,
    elGetter: $.ASN1Encoder<MS_EITs>
) {
    if (!_cached_encoder_for_MS_EITs) {
        _cached_encoder_for_MS_EITs = $._encodeSetOf<MS_EIT>(
            () => _encode_MS_EIT,
            $.BER
        );
    }
    return _cached_encoder_for_MS_EITs(value, elGetter);
}


/* eslint-enable */
