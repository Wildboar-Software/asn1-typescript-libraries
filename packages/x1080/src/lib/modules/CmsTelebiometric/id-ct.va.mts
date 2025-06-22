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
} from 'asn1-ts';
import { id_pkcs_9 } from '../CmsTelebiometric/id-pkcs-9.va.mjs';

/**
 * @summary id_ct
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct OBJECT IDENTIFIER ::= { id-pkcs-9 smime(16) ct(1) }
 * ```
 *
 * @constant
 */
export const id_ct: OBJECT_IDENTIFIER = _OID.fromParts(
    [/* smime */ 16, /* ct */ 1],
    id_pkcs_9
);

/* eslint-enable */
