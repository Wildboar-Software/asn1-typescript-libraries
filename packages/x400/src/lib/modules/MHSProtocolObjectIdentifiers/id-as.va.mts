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
} from '../MHSProtocolObjectIdentifiers/ID.ta.mjs';
import { id_mhs_protocols } from '../MHSProtocolObjectIdentifiers/id-mhs-protocols.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_as */
/**
 * @summary id_as
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-as ID ::= {id-mhs-protocols  2}
 * ```
 *
 * @constant
 */
export const id_as: ID = new _OID([2], id_mhs_protocols);
/* END_OF_SYMBOL_DEFINITION id_as */

/* eslint-enable */
