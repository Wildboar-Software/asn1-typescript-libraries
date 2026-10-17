/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_all
 * @description
 *
 * Shorthand WantBack: one OID asks for an evidence record
 * for every other item returned in `replyWantBacks`. The
 * `replyWantBack` value is an
 * {@link EvidenceRecordWantBacks}, which pairs each
 * record with the WantBack it covers. A server may
 * thereby return records for WantBacks other than the
 * four evidence-record types in this module, such as
 * attribute-certificate information.
 *
 * For example, a path, revocation information, and a
 * record for each is `id-swb-pkc-best-cert-path` (RFC
 * 5276 §3 says `id-swb-best-cert-path`),
 * `id-swb-pkc-revocation-info`, and this OID, instead of
 * listing {@link id_swb_ers_best_cert_path} and
 * {@link id_swb_ers_revocation_info} separately.
 *
 * There MUST be one {@link EvidenceRecordWantBack} per
 * other `replyWantBack`. Where the server has no record,
 * that entry's `evidenceRecord` is absent. If the server
 * cannot return the collection at all, it MUST still
 * return this `replyWantBack` with an empty `value`.
 *
 * [RFC 5276, §3](https://www.rfc-editor.org/rfc/rfc5276#section-3)
 * and
 * [§5.5](https://www.rfc-editor.org/rfc/rfc5276#section-5.5).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-all                  OBJECT IDENTIFIER ::= {id-swb 20}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_all: OBJECT_IDENTIFIER = _OID.fromParts([
    20,
], id_swb);

/* eslint-enable */
