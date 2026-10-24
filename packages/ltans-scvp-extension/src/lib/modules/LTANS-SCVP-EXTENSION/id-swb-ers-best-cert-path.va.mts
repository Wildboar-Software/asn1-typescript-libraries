/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_best_cert_path
 * @description
 *
 * WantBack for an evidence record covering a complete
 * certification path, end entity through trust anchor.
 * The request and the response MUST also contain the
 * companion path WantBack. RFC 5276 §5.1 names it
 * `id-swb-best-cert-path`; §4 names it
 * `id-swb-pkc-best-cert-path`, the OID defined by
 * RFC 5055. If the companion is missing, the server MUST
 * set `wantBackUnsatisfied`. Clients MAY ignore this
 * WantBack in that case.
 *
 * The record MUST be calculated over the DER-encoded
 * `CertBundle` in the companion `replyWantBack`'s
 * `value`. The tag and length of that `value` are not
 * covered. If the server cannot produce the record, it
 * MUST still return this `replyWantBack` with an empty
 * `value`.
 *
 * A signature in archived data can then be checked with
 * the end-entity certificate from SCVP. That certificate
 * is checked with this WantBack, the complete path,
 * `id-swb-pkc-revocation-info`, and
 * {@link id_swb_ers_revocation_info}.
 *
 * [RFC 5276, §4](https://www.rfc-editor.org/rfc/rfc5276#section-4)
 * and
 * [§5.1](https://www.rfc-editor.org/rfc/rfc5276#section-5.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-best-cert-path       OBJECT IDENTIFIER ::= {id-swb 17}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_best_cert_path: OBJECT_IDENTIFIER = _OID.fromParts([
    17,
], id_swb);

/* eslint-enable */
