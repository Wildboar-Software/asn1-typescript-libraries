/* eslint-disable */
import {
    GeneralString,
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

/* START_OF_SYMBOL_DEFINITION InformationString */
/**
 * @summary InformationString
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationString  ::=  GeneralString
 * ```
 */
export type InformationString = GeneralString; // GeneralString
/* END_OF_SYMBOL_DEFINITION InformationString */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationString */
let _cached_decoder_for_InformationString: $.ASN1Decoder<InformationString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_InformationString */

/* START_OF_SYMBOL_DEFINITION _decode_InformationString */
/**
 * @summary Decodes an ASN.1 element into a(n) InformationString
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {InformationString} The decoded data structure.
 */
export function _decode_InformationString(el: _Element) {
    if (!_cached_decoder_for_InformationString) {
        _cached_decoder_for_InformationString = $._decodeGeneralString;
    }
    return _cached_decoder_for_InformationString(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_InformationString */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationString */
let _cached_encoder_for_InformationString: $.ASN1Encoder<InformationString> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_InformationString */

/* START_OF_SYMBOL_DEFINITION _encode_InformationString */
/**
 * @summary Encodes a(n) InformationString into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InformationString, encoded as an ASN.1 Element.
 */
export function _encode_InformationString(
    value: InformationString,
    elGetter: $.ASN1Encoder<InformationString>
) {
    if (!_cached_encoder_for_InformationString) {
        _cached_encoder_for_InformationString = $._encodeGeneralString;
    }
    return _cached_encoder_for_InformationString(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_InformationString */

/* eslint-enable */
