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
} from '@wildboar/asn1';
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_att } from '../MSObjectIdentifiers/id-att.va.mjs';
/**
 * @summary id_att_originator_return_address
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-att-originator-return-address ID ::= {id-att  64}
 * ```
 *
 * @constant
 */
export const id_att_originator_return_address: ID = _OID.fromParts([64], id_att);

/* eslint-enable */
