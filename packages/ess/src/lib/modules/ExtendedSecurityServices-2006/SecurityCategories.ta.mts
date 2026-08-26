/**
 * @summary SecurityCategories
 * @description
 *
 * `SET SIZE (1..ub-security-categories) OF SecurityCategory` providing
 * finer sensitivity within an `ESSSecurityLabel`. Re-exported from
 * `@wildboar/sio` ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2); [RFC 2634 §3.3.4](https://datatracker.ietf.org/doc/html/rfc2634#section-3.3.4)).
 *
 */
export {
    type SecurityCategories,
    _decode_SecurityCategories,
    _encode_SecurityCategories,
} from "@wildboar/sio";
