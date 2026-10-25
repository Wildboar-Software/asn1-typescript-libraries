/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_partial_cert_path
 * @description
 *
 * WantBack for an evidence record covering a partial
 * certification path. The request and the response MUST
 * also contain {@link id_swb_partial_cert_path}. If that
 * companion is missing, the server MUST set
 * `wantBackUnsatisfied`. Clients MAY ignore this WantBack
 * in that case.
 *
 * The record MUST be calculated over the contents of the
 * companion `replyWantBack`'s `value` (the `CertBundle`
 * minus the end-entity certificate). The tag and length
 * of that `value` are not covered. If the server cannot
 * produce the record, it MUST still return this
 * `replyWantBack` with an empty `value`. Keeping records
 * for partial paths, rather than a full path per
 * end-entity certificate, is how a server reduces
 * storage.
 *
 * The end-entity certificate itself is expected to sit
 * in the archived data, protected by that object's own
 * evidence record. Check it with this WantBack,
 * {@link id_swb_partial_cert_path},
 * `id-swb-pkc-revocation-info`, and
 * {@link id_swb_ers_revocation_info}. Unlike the partial
 * path, the revocation information includes material for
 * the end-entity certificate's status.
 *
 * [RFC 5276, §4](https://www.rfc-editor.org/rfc/rfc5276#section-4)
 * and
 * [§5.2](https://www.rfc-editor.org/rfc/rfc5276#section-5.2).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-partial-cert-path    OBJECT IDENTIFIER ::= {id-swb 18}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_partial_cert_path: OBJECT_IDENTIFIER = _OID.fromParts([
    18,
], id_swb);

/* eslint-enable */
