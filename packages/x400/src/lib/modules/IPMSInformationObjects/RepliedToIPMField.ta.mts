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
    IPMIdentifier,
    _decode_IPMIdentifier,
    _encode_IPMIdentifier,
} from '../IPMSInformationObjects/IPMIdentifier.ta.mjs';
/**
 * @summary RepliedToIPMField
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§7).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RepliedToIPMField  ::=  IPMIdentifier
 * ```
 */
export type RepliedToIPMField = IPMIdentifier; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) RepliedToIPMField
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RepliedToIPMField} The decoded data structure.
 */
export const _decode_RepliedToIPMField: $.ASN1Decoder<RepliedToIPMField> = _decode_IPMIdentifier;

/**
 * @summary Encodes a(n) RepliedToIPMField into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepliedToIPMField, encoded as an ASN.1 Element.
 */
export const _encode_RepliedToIPMField: $.ASN1Encoder<RepliedToIPMField> = _encode_IPMIdentifier;


/* eslint-enable */
