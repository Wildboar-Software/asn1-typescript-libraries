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
import { id_hat } from '../EDIMSObjectIdentifiers/id-hat.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_hat_heading */
/**
 * @summary id_hat_heading
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-hat-heading ID ::= {id-hat  0}
 * ```
 *
 * @constant
 */
export const id_hat_heading: ID = new _OID([0], id_hat);
/* END_OF_SYMBOL_DEFINITION id_hat_heading */

/* eslint-enable */
