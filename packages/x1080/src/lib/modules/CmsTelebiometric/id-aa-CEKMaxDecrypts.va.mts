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
import { id_aa } from '../CmsTelebiometric/id-aa.va.mjs';

/**
 * @summary id_aa_CEKMaxDecrypts
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-aa-CEKMaxDecrypts   OBJECT IDENTIFIER ::= { id-aa 31 }
 * ```
 *
 * @constant
 */
export const id_aa_CEKMaxDecrypts: OBJECT_IDENTIFIER = _OID.fromParts([31], id_aa);

/* eslint-enable */
