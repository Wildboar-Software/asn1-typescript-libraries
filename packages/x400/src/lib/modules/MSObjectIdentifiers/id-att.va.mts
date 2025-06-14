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
import { id_ms } from '../MHSObjectIdentifiers/id-ms.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_att */
/**
 * @summary id_att
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att -- attribute types -- ID ::= {id-ms  3}
 * ```
 *
 * @constant
 */
export const id_att: ID = new _OID([3], id_ms);
/* END_OF_SYMBOL_DEFINITION id_att */

/* eslint-enable */
