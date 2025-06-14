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
/* START_OF_SYMBOL_DEFINITION ORAddressAndOptionalDirectoryName */
/**
 * @summary ORAddressAndOptionalDirectoryName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndOptionalDirectoryName  ::=  ORName
 * ```
 */
export type ORAddressAndOptionalDirectoryName = ORName; // DefinedType
/* END_OF_SYMBOL_DEFINITION ORAddressAndOptionalDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressAndOptionalDirectoryName */
let _cached_decoder_for_ORAddressAndOptionalDirectoryName: $.ASN1Decoder<ORAddressAndOptionalDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ORAddressAndOptionalDirectoryName */

/* START_OF_SYMBOL_DEFINITION _decode_ORAddressAndOptionalDirectoryName */
/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndOptionalDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndOptionalDirectoryName} The decoded data structure.
 */
export function _decode_ORAddressAndOptionalDirectoryName(el: _Element) {
    if (!_cached_decoder_for_ORAddressAndOptionalDirectoryName) {
        _cached_decoder_for_ORAddressAndOptionalDirectoryName = _decode_ORName;
    }
    return _cached_decoder_for_ORAddressAndOptionalDirectoryName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ORAddressAndOptionalDirectoryName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressAndOptionalDirectoryName */
let _cached_encoder_for_ORAddressAndOptionalDirectoryName: $.ASN1Encoder<ORAddressAndOptionalDirectoryName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ORAddressAndOptionalDirectoryName */

/* START_OF_SYMBOL_DEFINITION _encode_ORAddressAndOptionalDirectoryName */
/**
 * @summary Encodes a(n) ORAddressAndOptionalDirectoryName into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndOptionalDirectoryName, encoded as an ASN.1 Element.
 */
export function _encode_ORAddressAndOptionalDirectoryName(
    value: ORAddressAndOptionalDirectoryName,
    elGetter: $.ASN1Encoder<ORAddressAndOptionalDirectoryName>
) {
    if (!_cached_encoder_for_ORAddressAndOptionalDirectoryName) {
        _cached_encoder_for_ORAddressAndOptionalDirectoryName = _encode_ORName;
    }
    return _cached_encoder_for_ORAddressAndOptionalDirectoryName(
        value,
        elGetter
    );
}

/* END_OF_SYMBOL_DEFINITION _encode_ORAddressAndOptionalDirectoryName */

/* eslint-enable */
