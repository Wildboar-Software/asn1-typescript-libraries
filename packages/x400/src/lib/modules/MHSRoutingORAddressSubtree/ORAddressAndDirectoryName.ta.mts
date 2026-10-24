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
 * @summary ORAddressAndDirectoryName
 * @description
 *
 * Defined in ITU-T X.412 (1999) (§12).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ORAddressAndDirectoryName  ::=
 *   ORName
 * ```
 */
export type ORAddressAndDirectoryName = ORName; // DefinedType

/**
 * @summary Decodes an ASN.1 element into a(n) ORAddressAndDirectoryName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ORAddressAndDirectoryName} The decoded data structure.
 */
export const _decode_ORAddressAndDirectoryName: $.ASN1Decoder<ORAddressAndDirectoryName> = _decode_ORName;

/**
 * @summary Encodes a(n) ORAddressAndDirectoryName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ORAddressAndDirectoryName, encoded as an ASN.1 Element.
 */
export const _encode_ORAddressAndDirectoryName: $.ASN1Encoder<ORAddressAndDirectoryName> = _encode_ORName;


/* eslint-enable */
