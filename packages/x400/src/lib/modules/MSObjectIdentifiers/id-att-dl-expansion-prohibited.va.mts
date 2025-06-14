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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_att_dl_expansion_prohibited */
/**
 * @summary id_att_dl_expansion_prohibited
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-dl-expansion-prohibited ID ::= {id-att  53}
 * ```
 *
 * @constant
 */
export const id_att_dl_expansion_prohibited: ID = new _OID([53], id_att);
/* END_OF_SYMBOL_DEFINITION id_att_dl_expansion_prohibited */

/* eslint-enable */
