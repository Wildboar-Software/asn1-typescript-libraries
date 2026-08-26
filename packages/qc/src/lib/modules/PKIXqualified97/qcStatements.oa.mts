/* eslint-disable */
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";
import { id_pe_qcStatements } from "../PKIXqualified97/id-pe-qcStatements.va.mjs";
import {
    QCStatements,
    _decode_QCStatements,
    _encode_QCStatements,
} from "../PKIXqualified97/QCStatements.ta.mjs";


/**
 * @summary qcStatements
 * @description
 *
 * Optional certificate extension for statements defining explicit
 * properties of the certificate
 * ([RFC 3739 §3.2.6](https://datatracker.ietf.org/doc/html/rfc3739#section-3.2.6)).
 * May be critical or non-critical; if critical, all included
 * statements are regarded as critical. Does not allow mixing critical
 * and non-critical statements within one extension instance.
 *
 * Suitable statements include issuer declarations that the certificate
 * is issued as a Qualified Certificate under a particular legal
 * system, or jurisdiction-related limits (e.g., maximum reliance /
 * CA liability).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * qcStatements  EXTENSION ::= {
 *     SYNTAX        QCStatements
 *     IDENTIFIED BY id-pe-qcStatements }
 * ```
 *
 * @constant
 * @type {EXTENSION<QCStatements>}
 * @implements {EXTENSION<QCStatements>}
 */
export const qcStatements: EXTENSION<QCStatements> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_QCStatements,
    },
    encoderFor: {
        "&ExtnType": _encode_QCStatements,
    },
    "&id": id_pe_qcStatements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
