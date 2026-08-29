/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
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
 * @summary ScriptLanguageName
 * @description
 *
 * Language that defines syntax and semantics of a
 * general-string script. Rec does not assign an OID for SMSL
 * (Annexes F and G). ITU-T Rec. X.753 (10/97)
 * [§8.1.9.2.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * A.4.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ScriptLanguageName  ::=  OBJECT IDENTIFIER
 * ```
 */
export type ScriptLanguageName = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_ScriptLanguageName = $._decodeObjectIdentifier;


export const _encode_ScriptLanguageName = $._encodeObjectIdentifier;


/* eslint-enable */
