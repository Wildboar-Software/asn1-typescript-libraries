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
import { id_sat } from '../EDIMSObjectIdentifiers/id-sat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_sat_edi_notification_indicator */
/**
 * @summary id_sat_edi_notification_indicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-sat-edi-notification-indicator ID ::= {id-sat  2}
 * ```
 *
 * @constant
 */
export const id_sat_edi_notification_indicator: ID = new _OID([2], id_sat);
/* END_OF_SYMBOL_DEFINITION id_sat_edi_notification_indicator */

/* eslint-enable */
