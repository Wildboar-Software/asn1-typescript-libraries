/**
 * @summary IssuerSerial
 * @description
 *
 * `SEQUENCE { issuer GeneralNames, serialNumber CertificateSerialNumber }`
 * identifying a certificate by issuer name and serial. Used optionally in
 * `ESSCertID` / `ESSCertIDv2`. Re-exported from
 * `@wildboar/x500/AttributeCertificateDefinitions`
 * ([RFC 2634 §5.4.1](https://datatracker.ietf.org/doc/html/rfc2634#section-5.4.1); [RFC 5035 §4](https://datatracker.ietf.org/doc/html/rfc5035#section-4)).
 *
 */
export {
    IssuerSerial,
    _decode_IssuerSerial,
    _encode_IssuerSerial,
} from "@wildboar/x500/AttributeCertificateDefinitions";
