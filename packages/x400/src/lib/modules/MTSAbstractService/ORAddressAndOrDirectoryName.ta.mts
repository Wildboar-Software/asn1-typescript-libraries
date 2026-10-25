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
    ORName,
    _decode_ORName,
    _encode_ORName,
} from '../MTSAbstractService/ORName.ta.mjs';
/**
 * @summary ORAddressAndOrDirectoryName
 * @description
 *
 * Alias of `ORName` used where either or both name forms may identify the user (ITU-T
 * X.411 (1999), Annex A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndOrDirectoryName  ::=  ORName
 * ```
 */
export type ORAddressAndOrDirectoryName = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndOrDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndOrDirectoryName} The decoded data structure.
 */
export const _decode_ORAddressAndOrDirectoryName: $.ASN1Decoder<ORAddressAndOrDirectoryName> = _decode_ORName;

/**
 * @summary Encodes a(n) ORAddressAndOrDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndOrDirectoryName, encoded as an ASN.1 Element.
 */
export const _encode_ORAddressAndOrDirectoryName: $.ASN1Encoder<ORAddressAndOrDirectoryName> = _encode_ORName;


/* eslint-enable */
