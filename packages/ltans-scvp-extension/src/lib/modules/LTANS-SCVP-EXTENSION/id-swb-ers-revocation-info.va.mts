/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_revocation_info
 * @description
 *
 * WantBack for evidence records covering revocation
 * information. The `replyWantBack` value is an
 * {@link EvidenceRecords}. The request and the response
 * MUST also contain the companion revocation WantBack.
 * RFC 5276 §3 and §4 name it
 * `id-swb-pkc-revocation-info`; §5.4 names it
 * `id-swb-revocation-info`. RFC 5055 defines
 * `id-swb-pkc-revocation-info`. If the companion is
 * missing, the server MUST set `wantBackUnsatisfied`.
 * Clients MAY ignore this WantBack in that case.
 *
 * Each revocation object in the companion
 * `replyWantBack` is covered by a record here. One
 * record may cover more than one object; find the
 * object's hash in the record's first initial timestamp
 * to select the right record. §5.4 also says one record
 * is returned for each element of the companion.
 * Revocation objects may be CRLs or OCSP responses.
 * Cumulative CRLs may be generated for archiving. If the
 * server cannot produce the records, it MUST still
 * return this `replyWantBack` with an empty `value`.
 *
 * [RFC 5276, §4](https://www.rfc-editor.org/rfc/rfc5276#section-4)
 * and
 * [§5.4](https://www.rfc-editor.org/rfc/rfc5276#section-5.4).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-revocation-info      OBJECT IDENTIFIER ::= {id-swb 19}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_revocation_info: OBJECT_IDENTIFIER = _OID.fromParts([
    19,
], id_swb);

/* eslint-enable */
