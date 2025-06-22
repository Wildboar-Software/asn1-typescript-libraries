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
import { id_pkcs } from '../CmsTelebiometric/id-pkcs.va.mjs';

/**
 * @summary id_pkcs_9
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pkcs-9 OBJECT IDENTIFIER ::= { id-pkcs pkcs-9(9) }
 * ```
 *
 * @constant
 */
export const id_pkcs_9: OBJECT_IDENTIFIER = _OID.fromParts([/* pkcs-9 */ 9], id_pkcs);

/* eslint-enable */
