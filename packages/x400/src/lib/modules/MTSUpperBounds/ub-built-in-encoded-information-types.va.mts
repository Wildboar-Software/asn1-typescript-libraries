/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';

/**
 * @summary ub_built_in_encoded_information_types
 * @description
 *
 * The encoded-information-types of a message are the kind(s) of information that appear in
 * its content. Both basic encoded-information-types and externally-defined
 * encoded-information-types may be specified, otherwise the encoded-information-types of a
 * message are unspecified. See ITU-T X.411 (1999), §8.5.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ub-built-in-encoded-information-types INTEGER ::= 32
 * ```
 *
 * @constant
 */
export const ub_built_in_encoded_information_types: INTEGER = 32;

/* eslint-enable */
