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
    ORAddressAndOptionalDirectoryName,
    _decode_ORAddressAndOptionalDirectoryName,
    _encode_ORAddressAndOptionalDirectoryName,
} from '../MTSAbstractService/ORAddressAndOptionalDirectoryName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION OriginatorName */
/**
 * @summary OriginatorName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatorName  ::=  ORAddressAndOptionalDirectoryName
 * ```
 */
export type OriginatorName = ORAddressAndOptionalDirectoryName; // DefinedType
/* END_OF_SYMBOL_DEFINITION OriginatorName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorName */
let _cached_decoder_for_OriginatorName: $.ASN1Decoder<OriginatorName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OriginatorName */

/* START_OF_SYMBOL_DEFINITION _decode_OriginatorName */
/**
 * @summary Decodes an ASN.1 element into a(n) OriginatorName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatorName} The decoded data structure.
 */
export function _decode_OriginatorName(el: _Element) {
    if (!_cached_decoder_for_OriginatorName) {
        _cached_decoder_for_OriginatorName = _decode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_decoder_for_OriginatorName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OriginatorName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorName */
let _cached_encoder_for_OriginatorName: $.ASN1Encoder<OriginatorName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OriginatorName */

/* START_OF_SYMBOL_DEFINITION _encode_OriginatorName */
/**
 * @summary Encodes a(n) OriginatorName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatorName, encoded as an ASN.1 Element.
 */
export function _encode_OriginatorName(
    value: OriginatorName,
    elGetter: $.ASN1Encoder<OriginatorName>
) {
    if (!_cached_encoder_for_OriginatorName) {
        _cached_encoder_for_OriginatorName = _encode_ORAddressAndOptionalDirectoryName;
    }
    return _cached_encoder_for_OriginatorName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OriginatorName */

/* eslint-enable */
