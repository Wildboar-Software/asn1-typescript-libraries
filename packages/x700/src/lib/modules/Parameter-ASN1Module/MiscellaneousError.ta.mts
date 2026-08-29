/* eslint-disable */
import {
    NULL,
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

/**
 * @summary MiscellaneousError
 * @description
 *
 * Specific-error syntax of the DMI `miscellaneousError`
 * parameter (`{smi2Parameter 1}`), CONTEXT SPECIFIC-ERROR.
 * Used when a processing failure has occurred and the error
 * does not match any of the object's defined specific error
 * types. Imported by `top` for that purpose; any class may
 * import it. ITU-T Rec. X.721 (02/92)
 * [§12](https://www.itu.int/rec/T-REC-X.721-199202-I), §6.14,
 * §14.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MiscellaneousError  ::=  NULL
 * ```
 */
export type MiscellaneousError = NULL; // NullType


export const _decode_MiscellaneousError = $._decodeNull;


export const _encode_MiscellaneousError = $._encodeNull;


/* eslint-enable */
