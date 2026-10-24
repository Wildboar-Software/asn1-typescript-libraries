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
    type ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
/**
 * @summary OriginalContentIntegrityCheck
 * @description
 *
 * Defined in ITU-T X.420 (1999) (§15).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OriginalContentIntegrityCheck  ::=  ContentIntegrityCheck
 * ```
 */
export type OriginalContentIntegrityCheck = ContentIntegrityCheck; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) OriginalContentIntegrityCheck
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OriginalContentIntegrityCheck} The decoded data structure.
 */
export const _decode_OriginalContentIntegrityCheck: $.ASN1Decoder<OriginalContentIntegrityCheck> = _decode_ContentIntegrityCheck;

/**
 * @summary Encodes a(n) OriginalContentIntegrityCheck into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OriginalContentIntegrityCheck, encoded as an ASN.1 Element.
 */
export const _encode_OriginalContentIntegrityCheck: $.ASN1Encoder<OriginalContentIntegrityCheck> = _encode_ContentIntegrityCheck;


/* eslint-enable */
