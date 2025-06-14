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
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
/* START_OF_SYMBOL_DEFINITION DestinationADMD */
/**
 * @summary DestinationADMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DestinationADMD  ::=  AdministrationDomainName
 * ```
 */
export type DestinationADMD = AdministrationDomainName; // DefinedType
/* END_OF_SYMBOL_DEFINITION DestinationADMD */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationADMD */
let _cached_decoder_for_DestinationADMD: $.ASN1Decoder<DestinationADMD> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DestinationADMD */

/* START_OF_SYMBOL_DEFINITION _decode_DestinationADMD */
/**
 * @summary Decodes an ASN.1 element into a(n) DestinationADMD
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DestinationADMD} The decoded data structure.
 */
export function _decode_DestinationADMD(el: _Element) {
    if (!_cached_decoder_for_DestinationADMD) {
        _cached_decoder_for_DestinationADMD = _decode_AdministrationDomainName;
    }
    return _cached_decoder_for_DestinationADMD(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DestinationADMD */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationADMD */
let _cached_encoder_for_DestinationADMD: $.ASN1Encoder<DestinationADMD> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DestinationADMD */

/* START_OF_SYMBOL_DEFINITION _encode_DestinationADMD */
/**
 * @summary Encodes a(n) DestinationADMD into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationADMD, encoded as an ASN.1 Element.
 */
export function _encode_DestinationADMD(
    value: DestinationADMD,
    elGetter: $.ASN1Encoder<DestinationADMD>
) {
    if (!_cached_encoder_for_DestinationADMD) {
        _cached_encoder_for_DestinationADMD = _encode_AdministrationDomainName;
    }
    return _cached_encoder_for_DestinationADMD(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DestinationADMD */

/* eslint-enable */
