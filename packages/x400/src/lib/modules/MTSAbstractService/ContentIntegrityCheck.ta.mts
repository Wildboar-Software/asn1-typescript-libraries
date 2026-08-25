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
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/AuthenticationFramework';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ContentIntegrityCheck,
    _encode_SIGNATURE as _encode_ContentIntegrityCheck,
} from '@wildboar/x500/AuthenticationFramework';

/**
 * @summary ContentIntegrityCheck
 * @description
 *
 * This argument provides the recipient of the message with a means of validating that the
 * message content has not been modified (to provide the Content Integrity
 * element-of-service as defined in recipient of the message. If the value of this argument
 * is specific to a recipient, because either a specific algorithm or key has been used to
 * generate this value (i.e. See ITU-T X.411 (1999), §8.2.1.1.1.28.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ContentIntegrityCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  ContentIntegrityAlgorithmIdentifier OPTIONAL,
 *                content               Content}}
 * ```
 */
export type ContentIntegrityCheck = SIGNATURE; // DefinedType

/* eslint-enable */
