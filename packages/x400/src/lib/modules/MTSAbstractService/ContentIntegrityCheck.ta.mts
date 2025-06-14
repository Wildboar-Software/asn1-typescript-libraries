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
} from 'asn1-ts';
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_ContentIntegrityCheck,
    _encode_SIGNATURE as _encode_ContentIntegrityCheck,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';

/* START_OF_SYMBOL_DEFINITION ContentIntegrityCheck */
/**
 * @summary ContentIntegrityCheck
 * @description
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
/* END_OF_SYMBOL_DEFINITION ContentIntegrityCheck */

/* eslint-enable */
