/**
 * @summary SecurityClassification
 * @description
 *
 * INTEGER security classification for `ESSSecurityLabel`, constrained to
 * (0..`ub-integer-options`). Named values in the ESS module:
 * `unmarked` (0), `unclassified` (1), `restricted` (2), `confidential` (3),
 * `secret` (4), `top-secret` (5). Policy-defined meanings and hierarchy;
 * re-exported from `@wildboar/sio` ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2); [RFC 2634 §3.3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.3.2)).
 *
 */
export {
    SecurityClassification,
    _decode_SecurityClassification,
    _encode_SecurityClassification,
} from "@wildboar/sio";
