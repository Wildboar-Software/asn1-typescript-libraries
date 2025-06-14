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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_dat } from '../EDIMUseOfDirectory/id-dat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_dat_edi_name */
/**
 * @summary id_dat_edi_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-dat-edi-name ID ::= {id-dat  0}
 * ```
 *
 * @constant
 */
export const id_dat_edi_name: ID = new _OID([0], id_dat);
/* END_OF_SYMBOL_DEFINITION id_dat_edi_name */

/* eslint-enable */
