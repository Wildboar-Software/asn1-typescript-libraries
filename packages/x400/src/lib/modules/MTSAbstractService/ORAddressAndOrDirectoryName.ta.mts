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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ORAddressAndOrDirectoryName */
/**
 * @summary ORAddressAndOrDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndOrDirectoryName  ::=  ORName
 * ```
 */
export type ORAddressAndOrDirectoryName = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ORAddressAndOrDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressAndOrDirectoryName */
let _cached_decoder_for_ORAddressAndOrDirectoryName: $.ASN1Decoder<ORAddressAndOrDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressAndOrDirectoryName */

/* START_OF_SYMBOL_DEFINITION _decode_ORAddressAndOrDirectoryName */
/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndOrDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndOrDirectoryName} The decoded data structure.
 */
export function _decode_ORAddressAndOrDirectoryName(el: _Element) {
    if (!_cached_decoder_for_ORAddressAndOrDirectoryName) {
        _cached_decoder_for_ORAddressAndOrDirectoryName = _decode_ORName;
    }
    return _cached_decoder_for_ORAddressAndOrDirectoryName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORAddressAndOrDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressAndOrDirectoryName */
let _cached_encoder_for_ORAddressAndOrDirectoryName: $.ASN1Encoder<ORAddressAndOrDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressAndOrDirectoryName */

/* START_OF_SYMBOL_DEFINITION _encode_ORAddressAndOrDirectoryName */
/**
 * @summary Encodes a(n) ORAddressAndOrDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndOrDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressAndOrDirectoryName(
    value: ORAddressAndOrDirectoryName,
    elGetter: $.ASN1Encoder<ORAddressAndOrDirectoryName>
) {
    if (!_cached_encoder_for_ORAddressAndOrDirectoryName) {
        _cached_encoder_for_ORAddressAndOrDirectoryName = _encode_ORName;
    }
    return _cached_encoder_for_ORAddressAndOrDirectoryName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ORAddressAndOrDirectoryName */

/* eslint-enable */
