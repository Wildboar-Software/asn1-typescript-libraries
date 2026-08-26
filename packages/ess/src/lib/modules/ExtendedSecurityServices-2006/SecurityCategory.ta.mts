/**
 * @summary SecurityCategory
 * @description
 *
 * One security category: `type` [0] OID and `value` [1] content defined
 * by that type (ESS encoding matches the X.411 `SecurityCategory` form).
 * Re-exported from `@wildboar/sio` ([RFC 2634 §3.2](https://datatracker.ietf.org/doc/html/rfc2634#section-3.2); [RFC 2634 §3.3.4](https://datatracker.ietf.org/doc/html/rfc2634#section-3.3.4)).
 *
 */
export {
    SecurityCategory,
    _decode_SecurityCategory,
    _encode_SecurityCategory,
} from "@wildboar/sio";
