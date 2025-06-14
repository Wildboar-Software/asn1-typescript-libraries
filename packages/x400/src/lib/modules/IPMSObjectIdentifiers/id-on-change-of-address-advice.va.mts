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
import { id_on } from '../IPMSObjectIdentifiers/id-on.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_on_change_of_address_advice */
/**
 * @summary id_on_change_of_address_advice
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-on-change-of-address-advice ID ::= {id-on  1}
 * ```
 *
 * @constant
 */
export const id_on_change_of_address_advice: ID = new _OID([1], id_on);
/* END_OF_SYMBOL_DEFINITION id_on_change_of_address_advice */

/* eslint-enable */
