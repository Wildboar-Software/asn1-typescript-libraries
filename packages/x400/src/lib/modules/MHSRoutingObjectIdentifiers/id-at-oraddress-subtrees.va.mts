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
/* START_OF_SYMBOL_DEFINITION id_at_oraddress_subtrees */
/**
 * @summary id_at_oraddress_subtrees
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-at-oraddress-subtrees ID ::= {id-at  33}
 * ```
 *
 * @constant
 */
export const id_at_oraddress_subtrees: ID = new _OID([33], id_at);
/* END_OF_SYMBOL_DEFINITION id_at_oraddress_subtrees */

/* eslint-enable */
