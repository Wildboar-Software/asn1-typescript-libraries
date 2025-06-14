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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_hex } from '../IPMSObjectIdentifiers/id-hex.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_hex_ipm_security_label */
/**
 * @summary id_hex_ipm_security_label
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hex-ipm-security-label ID ::= {id-hex  4}
 * ```
 *
 * @constant
 */
export const id_hex_ipm_security_label: ID = new _OID([4], id_hex);
/* END_OF_SYMBOL_DEFINITION id_hex_ipm_security_label */

/* eslint-enable */
