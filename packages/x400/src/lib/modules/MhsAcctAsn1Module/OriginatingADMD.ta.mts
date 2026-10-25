/* eslint-disable */
import {
    type ASN1Element as _Element,
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
    type AdministrationDomainName,
    _decode_AdministrationDomainName,
    _encode_AdministrationDomainName,
} from '../MTSAbstractService/AdministrationDomainName.ta.mjs';
/**
 * @summary OriginatingADMD
 * @description
 *
 * Defined in ITU-T X.411 (1999) (accounting objects).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginatingADMD  ::=  AdministrationDomainName
 * ```
 */
export type OriginatingADMD = AdministrationDomainName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginatingADMD
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginatingADMD} The decoded data structure.
 */
export const _decode_OriginatingADMD: $.ASN1Decoder<OriginatingADMD> = _decode_AdministrationDomainName;

/**
 * @summary Encodes a(n) OriginatingADMD into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginatingADMD, encoded as an ASN.1 Element.
 */
export const _encode_OriginatingADMD: $.ASN1Encoder<OriginatingADMD> = _encode_AdministrationDomainName;


/* eslint-enable */
