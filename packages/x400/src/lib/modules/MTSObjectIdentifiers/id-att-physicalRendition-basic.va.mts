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
import { ID, _decode_ID, _encode_ID } from '../MTSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MTSObjectIdentifiers/id-att.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_att_physicalRendition_basic */
/**
 * @summary id_att_physicalRendition_basic
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-physicalRendition-basic ID ::= {id-att  0}
 * ```
 *
 * @constant
 */
export const id_att_physicalRendition_basic: ID = new _OID([0], id_att);
/* END_OF_SYMBOL_DEFINITION id_att_physicalRendition_basic */

/* eslint-enable */
