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
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_edin_initiator
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_edin_initiator`. The EDIN Initiator field can take one of
 * the following values: a) "internal-UA" means that the UA generated the EDIN either for
 * local reasons or because the generation had been delegated to it by the user; b)
 * "internal-MS" means that the MS generated the EDIN either for local reasons or because
 * the generation had been delegated to it by the user; c) "external-UA" means that the
 * generation of the EDIN was… See ITU-T X.435 (1999), §9.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-edin-initiator ID ::= {id-nat  6}
 * ```
 *
 * @constant
 */
export const id_nat_edin_initiator: ID = _OID.fromParts([6], id_nat);

/* eslint-enable */
