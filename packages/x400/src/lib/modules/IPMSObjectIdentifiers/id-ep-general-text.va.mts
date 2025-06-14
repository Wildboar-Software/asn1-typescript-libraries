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
import { id_ep } from '../IPMSObjectIdentifiers/id-ep.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_ep_general_text */
/**
 * @summary id_ep_general_text
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-ep-general-text ID ::= {id-ep  11}
 * ```
 *
 * @constant
 */
export const id_ep_general_text: ID = new _OID([11], id_ep);
/* END_OF_SYMBOL_DEFINITION id_ep_general_text */

/* eslint-enable */
