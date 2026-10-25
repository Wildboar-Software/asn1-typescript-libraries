/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_ers_pkc_cert
 * @description
 *
 * WantBack for an evidence record covering one public-key
 * certificate. The request and the response MUST also
 * contain `id-swb-pkc-cert`. If that companion is
 * missing, the server MUST set `wantBackUnsatisfied`.
 * Clients MAY ignore this WantBack in that case.
 *
 * The record MUST be calculated over the value of the
 * `cert` field of `CertReply`, not over the companion
 * `replyWantBack`. If the server cannot produce the
 * record, it MUST still return this `replyWantBack`
 * with an empty `value`.
 *
 * Maintaining per-certificate records lets a client omit
 * the signer's certificate from data submitted to a
 * long-term archive and take it from SCVP instead. Check
 * that certificate with this WantBack, `id-swb-pkc-cert`,
 * {@link id_swb_partial_cert_path},
 * {@link id_swb_ers_partial_cert_path},
 * `id-swb-pkc-revocation-info`, and
 * {@link id_swb_ers_revocation_info}.
 *
 * [RFC 5276, §4](https://www.rfc-editor.org/rfc/rfc5276#section-4)
 * and
 * [§5.3](https://www.rfc-editor.org/rfc/rfc5276#section-5.3).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-ers-pkc-cert             OBJECT IDENTIFIER ::= {id-swb 16}
 * ```
 * 
 * @constant
 */
export
const id_swb_ers_pkc_cert: OBJECT_IDENTIFIER = _OID.fromParts([
    16,
], id_swb);

/* eslint-enable */
