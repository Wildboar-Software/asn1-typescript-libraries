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
import { id_ct } from '../CmsTelebiometric/id-ct.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ct_authEnvelopedData */
/**
 * @summary id_ct_authEnvelopedData
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ct-authEnvelopedData OBJECT IDENTIFIER ::= { id-ct 23 }
 * ```
 *
 * @constant
 */
export const id_ct_authEnvelopedData: OBJECT_IDENTIFIER = new _OID([23], id_ct);
/* END_OF_SYMBOL_DEFINITION id_ct_authEnvelopedData */

/* eslint-enable */
