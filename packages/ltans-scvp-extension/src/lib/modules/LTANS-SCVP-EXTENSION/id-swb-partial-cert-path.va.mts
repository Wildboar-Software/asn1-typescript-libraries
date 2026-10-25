/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { id_swb } from "../LTANS-SCVP-EXTENSION/id-swb.va.mjs";


/**
 * @summary id_swb_partial_cert_path
 * @description
 *
 * WantBack for a partial certification path: the CA that
 * issued the end-entity certificate through a trust
 * anchor. The `replyWantBack` value is a `CertBundle` of
 * that path minus the end-entity certificate. This is the
 * only WantBack in RFC 5276 that does not return an
 * evidence record. It is an alternative to SCVP's
 * complete-path WantBack, `id-swb-pkc-best-cert-path`
 * (RFC 5276 §3 and §5.6 also call that OID
 * `id-swb-best-cert-path`).
 *
 * Servers may store evidence records only for partial
 * paths. Clients that need those records include this
 * WantBack with {@link id_swb_ers_partial_cert_path}.
 * An end-entity certificate that is not stored with the
 * archived data is requested separately with
 * `id-swb-pkc-cert` and {@link id_swb_ers_pkc_cert}.
 *
 * [RFC 5276, §3](https://www.rfc-editor.org/rfc/rfc5276#section-3)
 * and
 * [§5.6](https://www.rfc-editor.org/rfc/rfc5276#section-5.6).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-swb-partial-cert-path        OBJECT IDENTIFIER ::= {id-swb 15}
 * ```
 * 
 * @constant
 */
export
const id_swb_partial_cert_path: OBJECT_IDENTIFIER = _OID.fromParts([
    15,
], id_swb);

/* eslint-enable */
