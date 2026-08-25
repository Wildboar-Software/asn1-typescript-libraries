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
import { id_mst } from '../IPMSObjectIdentifiers/id-mst.va.mjs';
/**
 * @summary id_mst_originator_forwarded_content_token
 * @description
 *
 * The Originator forwarded content token MS-submission-extension is used where the
 * submitted message contains a Forwarded Content Token (see B.6.2) that has been encrypted
 * such that it cannot subsequently be decrypted by the originator. See ITU-T X.420 (1999),
 * §19.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mst-originator-forwarded-content-token ID ::= {id-mst  6}
 * ```
 *
 * @constant
 */
export const id_mst_originator_forwarded_content_token: ID = _OID.fromParts(
    [6],
    id_mst
);

/* eslint-enable */
