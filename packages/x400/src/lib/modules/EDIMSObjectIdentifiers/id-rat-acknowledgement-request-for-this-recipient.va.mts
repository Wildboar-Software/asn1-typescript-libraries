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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_rat } from '../EDIMSObjectIdentifiers/id-rat.va.mjs';
/**
 * @summary id_rat_acknowledgement_request_for_this_recipient
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-rat-acknowledgement-request-for-this-recipient ID ::= {id-rat  8}
 * ```
 *
 * @constant
 */
export const id_rat_acknowledgement_request_for_this_recipient: ID = _OID.fromParts(
    [8],
    id_rat
);

/* eslint-enable */
