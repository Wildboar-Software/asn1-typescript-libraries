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
    IPM,
    _decode_IPM,
    _encode_IPM,
} from '../IPMSInformationObjects/IPM.ta.mjs';
/**
 * @summary ReturnedIPMField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReturnedIPMField  ::=  IPM
 * ```
 */
export type ReturnedIPMField = IPM; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ReturnedIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ReturnedIPMField} The decoded data structure.
 */
export const _decode_ReturnedIPMField: $.ASN1Decoder<ReturnedIPMField> = _decode_IPM;

/**
 * @summary Encodes a(n) ReturnedIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReturnedIPMField, encoded as an ASN.1 Element.
 */
export const _encode_ReturnedIPMField: $.ASN1Encoder<ReturnedIPMField> = _encode_IPM;


/* eslint-enable */
