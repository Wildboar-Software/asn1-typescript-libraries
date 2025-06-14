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
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
import { id_at } from '../MHSRoutingObjectIdentifiers/id-at.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_at_mhs_message_transfer_agent */
/**
 * @summary id_at_mhs_message_transfer_agent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-mhs-message-transfer-agent ID ::= {id-at  17}
 * ```
 *
 * @constant
 */
export const id_at_mhs_message_transfer_agent: ID = new _OID([17], id_at);
/* END_OF_SYMBOL_DEFINITION id_at_mhs_message_transfer_agent */

/* eslint-enable */
