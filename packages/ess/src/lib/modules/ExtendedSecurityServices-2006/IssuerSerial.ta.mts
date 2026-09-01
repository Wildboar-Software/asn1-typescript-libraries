/**
 * @summary IssuerSerial
 * @description
 *
 * Issuer `GeneralNames` plus certificate serial. Re-exported from
 * `@wildboar/x500/AttributeCertificateDefinitions` (itself from
 * `@wildboar/pki-stub`). ESS defines this as `issuer` and `serialNumber`
 * only ([RFC 2634 §5.4.1](https://datatracker.ietf.org/doc/html/rfc2634#section-5.4.1));
 * the X.509 type uses `serial` and an optional `issuerUID`.
 *
 */
export {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "@wildboar/x500/AttributeCertificateDefinitions";
