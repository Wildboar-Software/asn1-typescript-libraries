/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    OrganizationalUnitName,
    _decode_OrganizationalUnitName,
    _encode_OrganizationalUnitName,
} from "../PkiPmiExternalDataTypes/OrganizationalUnitName.ta.mjs";

/**
 * @summary OrganizationalUnitNames
 * @description
 *
 * Ordered SEQUENCE of 1..4 organizational unit names (ITU-T X.402 (1999), §18.3.10). The
 * first element is the highest-level unit (OU1); each subsequent name is a sub-unit of
 * those that precede it. SIZE (1..`ub-organizational-units`): omit the component rather
 * than encode empty. If this attribute is present in a mnemonic OR-address,
 * `organization-name` shall also be present (X.402 §18.5.1). RFC 1685 and RFC 2156 print
 * units least-significant first (OU4 … OU1).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OrganizationalUnitNames  ::=
 *   SEQUENCE SIZE (1..ub-organizational-units) OF OrganizationalUnitName
 * ```
 */
export type OrganizationalUnitNames = OrganizationalUnitName[]; // SequenceOfType

/**
 * @summary Decodes an ASN.1 element into a(n) OrganizationalUnitNames
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OrganizationalUnitNames} The decoded data structure.
 */
export const _decode_OrganizationalUnitNames: $.ASN1Decoder<OrganizationalUnitNames> = $._decodeSequenceOf<OrganizationalUnitName>(
    () => _decode_OrganizationalUnitName
);

/**
 * @summary Encodes a(n) OrganizationalUnitNames into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OrganizationalUnitNames, encoded as an ASN.1 Element.
 */
export const _encode_OrganizationalUnitNames: $.ASN1Encoder<OrganizationalUnitNames> = $._encodeSequenceOf<OrganizationalUnitName>(
    () => _encode_OrganizationalUnitName,
    $.BER
);


/* eslint-enable */
