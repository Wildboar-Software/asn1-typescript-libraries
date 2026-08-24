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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_pt } from '../IPMSObjectIdentifiers/id-pt.va.mjs';
/**
 * @summary id_pt_reception
 * @description
 *
 * OBJECT IDENTIFIER `id_pt_reception`. A reception port is the means by which the IPMS
 * conveys to a single user messages containing information objects of the types defined
 * in section two. Through such a port the user receives interpersonal messages and
 * interpersonal notifications. See ITU-T X.420 (1999), §11.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-pt-reception ID ::= {id-pt  1}
 * ```
 *
 * @constant
 */
export const id_pt_reception: ID = _OID.fromParts([1], id_pt);

/* eslint-enable */
