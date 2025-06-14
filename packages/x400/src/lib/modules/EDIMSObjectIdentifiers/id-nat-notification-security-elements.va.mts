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
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_nat_notification_security_elements */
/**
 * @summary id_nat_notification_security_elements
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-notification-security-elements ID ::= {id-nat  4}
 * ```
 *
 * @constant
 */
export const id_nat_notification_security_elements: ID = new _OID([4], id_nat);
/* END_OF_SYMBOL_DEFINITION id_nat_notification_security_elements */

/* eslint-enable */
