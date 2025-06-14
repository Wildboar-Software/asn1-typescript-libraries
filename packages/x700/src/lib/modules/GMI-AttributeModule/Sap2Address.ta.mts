/* eslint-disable */
import {
    OCTET_STRING,
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

/* START_OF_SYMBOL_DEFINITION Sap2Address */
/**
 * @summary Sap2Address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Sap2Address  ::=  SET OF OCTET STRING
 * ```
 */
export type Sap2Address = OCTET_STRING[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION Sap2Address */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap2Address */
let _cached_decoder_for_Sap2Address: $.ASN1Decoder<Sap2Address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Sap2Address */

/* START_OF_SYMBOL_DEFINITION _decode_Sap2Address */
/**
 * @summary Decodes an ASN.1 element into a(n) Sap2Address
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Sap2Address} The decoded data structure.
 */
export function _decode_Sap2Address(el: _Element) {
    if (!_cached_decoder_for_Sap2Address) {
        _cached_decoder_for_Sap2Address = $._decodeSetOf<OCTET_STRING>(
            () => $._decodeOctetString
        );
    }
    return _cached_decoder_for_Sap2Address(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Sap2Address */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap2Address */
let _cached_encoder_for_Sap2Address: $.ASN1Encoder<Sap2Address> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Sap2Address */

/* START_OF_SYMBOL_DEFINITION _encode_Sap2Address */
/**
 * @summary Encodes a(n) Sap2Address into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Sap2Address, encoded as an ASN.1 Element.
 */
export function _encode_Sap2Address(
    value: Sap2Address,
    elGetter: $.ASN1Encoder<Sap2Address>
) {
    if (!_cached_encoder_for_Sap2Address) {
        _cached_encoder_for_Sap2Address = $._encodeSetOf<OCTET_STRING>(
            () => $._encodeOctetString,
            $.BER
        );
    }
    return _cached_encoder_for_Sap2Address(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Sap2Address */

/* eslint-enable */
