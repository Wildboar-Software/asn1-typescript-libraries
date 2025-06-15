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
import { id_pro } from '../MHSRoutingObjectIdentifiers/id-pro.va.mjs';
/**
 * @summary id_pro_x445
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pro-x445 ID ::= {id-pro  2}
 * ```
 *
 * @constant
 */
export const id_pro_x445: ID = new _OID([2], id_pro);

/* eslint-enable */
