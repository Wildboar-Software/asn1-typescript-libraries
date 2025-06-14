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
    SecurityLabel,
    _decode_SecurityLabel,
    _encode_SecurityLabel,
} from '../MTSAbstractService/SecurityLabel.ta.mjs';
/* START_OF_SYMBOL_DEFINITION SecurityLabels */
/**
 * @summary SecurityLabels
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SecurityLabels  ::=  SET OF SecurityLabel
 * ```
 */
export type SecurityLabels = SecurityLabel[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabels */
let _cached_decoder_for_SecurityLabels: $.ASN1Decoder<SecurityLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _decode_SecurityLabels */
/**
 * @summary Decodes an ASN.1 element into a(n) SecurityLabels
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SecurityLabels} The decoded data structure.
 */
export function _decode_SecurityLabels(el: _Element) {
    if (!_cached_decoder_for_SecurityLabels) {
        _cached_decoder_for_SecurityLabels = $._decodeSetOf<SecurityLabel>(
            () => _decode_SecurityLabel
        );
    }
    return _cached_decoder_for_SecurityLabels(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabels */
let _cached_encoder_for_SecurityLabels: $.ASN1Encoder<SecurityLabels> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SecurityLabels */

/* START_OF_SYMBOL_DEFINITION _encode_SecurityLabels */
/**
 * @summary Encodes a(n) SecurityLabels into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SecurityLabels, encoded as an ASN.1 Element.
 */
export function _encode_SecurityLabels(
    value: SecurityLabels,
    elGetter: $.ASN1Encoder<SecurityLabels>
) {
    if (!_cached_encoder_for_SecurityLabels) {
        _cached_encoder_for_SecurityLabels = $._encodeSetOf<SecurityLabel>(
            () => _encode_SecurityLabel,
            $.BER
        );
    }
    return _cached_encoder_for_SecurityLabels(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SecurityLabels */

/* eslint-enable */
