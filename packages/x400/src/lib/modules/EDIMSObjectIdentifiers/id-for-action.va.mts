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
import { id_for } from '../EDIMSObjectIdentifiers/id-for.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_for_action */
/**
 * @summary id_for_action
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-for-action ID ::= {id-for  0}
 * ```
 *
 * @constant
 */
export const id_for_action: ID = new _OID([0], id_for);
/* END_OF_SYMBOL_DEFINITION id_for_action */

/* eslint-enable */
