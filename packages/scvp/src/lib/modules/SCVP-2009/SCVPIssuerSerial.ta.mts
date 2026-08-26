/**
 * @summary SCVPIssuerSerial
 * @description
 *
 * Issuer name(s) and serial number for `SCVPCertID`
 * ([RFC 5055 §3.2.1](https://datatracker.ietf.org/doc/html/rfc5055#section-3.2.1)). Re-exported as the PKI-stub `IssuerSerial`
 * type (same ASN.1 shape as in ([RFC 5912 §11](https://datatracker.ietf.org/doc/html/rfc5912#section-11))).
 *
 */
export {
    IssuerSerial as SCVPIssuerSerial,
    _decode_IssuerSerial as _decode_SCVPIssuerSerial,
    _encode_IssuerSerial as _encode_SCVPIssuerSerial,
} from "@wildboar/pki-stub";
