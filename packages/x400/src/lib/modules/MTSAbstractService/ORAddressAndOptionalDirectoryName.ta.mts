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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORAddressAndOptionalDirectoryName
 * @description
 *
 * Alias of `ORName`: O/R address plus optional directory name (ITU-T X.411 (1999), Annex
 * A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndOptionalDirectoryName  ::=  ORName
 * ```
 */
export type ORAddressAndOptionalDirectoryName = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndOptionalDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndOptionalDirectoryName} The decoded data structure.
 */
export const _decode_ORAddressAndOptionalDirectoryName: $.ASN1Decoder<ORAddressAndOptionalDirectoryName> = _decode_ORName;

/**
 * @summary Encodes a(n) ORAddressAndOptionalDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndOptionalDirectoryName, encoded as an ASN.1 Element.
 */
export const _encode_ORAddressAndOptionalDirectoryName: $.ASN1Encoder<ORAddressAndOptionalDirectoryName> = _encode_ORName;


/* eslint-enable */
