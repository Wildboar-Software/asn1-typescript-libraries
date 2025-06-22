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
    AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
/**
 * @summary OriginatingADMD
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingADMD  ::=  AdministrationDomainName
 * ```
 */
export type OriginatingADMD = AdministrationDomainName; // DefinedType

let _cached_decoder_for_OriginatingADMD: $.ASN1Decoder<OriginatingADMD> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingADMD
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingADMD} The decoded data structure.
 */
export function _decode_OriginatingADMD(el: _Element) {
    if (!_cached_decoder_for_OriginatingADMD) {
        _cached_decoder_for_OriginatingADMD = _decode_AdministrationDomainName;
    }
    return _cached_decoder_for_OriginatingADMD(el);
}

let _cached_encoder_for_OriginatingADMD: $.ASN1Encoder<OriginatingADMD> | null = null;

/**
 * @summary Encodes a(n) OriginatingADMD into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingADMD, encoded as an ASN.1 Element.
 */
export function _encode_OriginatingADMD(
    value: OriginatingADMD,
    elGetter: $.ASN1Encoder<OriginatingADMD>
) {
    if (!_cached_encoder_for_OriginatingADMD) {
        _cached_encoder_for_OriginatingADMD = _encode_AdministrationDomainName;
    }
    return _cached_encoder_for_OriginatingADMD(value, elGetter);
}


/* eslint-enable */
