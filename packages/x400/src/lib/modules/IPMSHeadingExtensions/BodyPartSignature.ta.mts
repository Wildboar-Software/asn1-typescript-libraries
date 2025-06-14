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
    _decode_SIGNATURE as _decode_BodyPartSignature,
    _encode_SIGNATURE as _encode_BodyPartSignature,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta.mjs';

/* START_OF_SYMBOL_DEFINITION BodyPartSignature */
/**
 * @summary BodyPartSignature
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BodyPartSignature  ::=
 *   SIGNATURE
 *     {SEQUENCE {signature-algorithm-identifier  AlgorithmIdentifier,
 *                body-part                       BodyPart,
 *                body-part-security-label        SecurityLabel OPTIONAL
 *     }}
 * ```
 */
export type BodyPartSignature = SIGNATURE; // DefinedType
/* END_OF_SYMBOL_DEFINITION BodyPartSignature */

/* eslint-enable */
