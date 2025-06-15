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
/* START_OF_SYMBOL_DEFINITION id_messageDigest */
/**
 * @summary id_messageDigest
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-messageDigest       OBJECT IDENTIFIER ::= { id-pkcs-9 4 }
 * ```
 *
 * @constant
 */
export const id_messageDigest: OBJECT_IDENTIFIER = new _OID([4], id_pkcs_9);
/* END_OF_SYMBOL_DEFINITION id_messageDigest */

/* eslint-enable */
