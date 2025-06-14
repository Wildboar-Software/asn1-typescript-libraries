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
import { id_tok } from '../MTSObjectIdentifiers/id-tok.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_tok_asymmetricToken */
/**
 * @summary id_tok_asymmetricToken
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-tok-asymmetricToken ID ::= {id-tok  0}
 * ```
 *
 * @constant
 */
export const id_tok_asymmetricToken: ID = new _OID([0], id_tok);
/* END_OF_SYMBOL_DEFINITION id_tok_asymmetricToken */

/* eslint-enable */
