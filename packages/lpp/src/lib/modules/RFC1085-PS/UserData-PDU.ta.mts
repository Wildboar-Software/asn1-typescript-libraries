/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary UserData_PDU
 * @description
 *
 * One ASN.1 object, plus the presentation context it belongs to
 * ([RFC 1085 Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * As a top-level `PDUs` alternative this is P-DATA on the
 * tcp-based service: one remote-operations APDU in presentation
 * context 1
 * ([§9.1](https://datatracker.ietf.org/doc/html/rfc1085#section-9.1)).
 * DATA stays in DATA. The provider sends it for P-DATA.REQUEST
 * and issues P-DATA.INDICATION on receipt
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)).
 * [Appendix B](https://datatracker.ietf.org/doc/html/rfc1085)
 * encodes an RO-INVOKE this way. The udp-based service carries
 * P-DATA in `CL-UserData-PDU`.
 *
 * Nested in connect, release, or abort user data, the object is
 * in presentation context 3:
 *
 * - P-CONNECT: one A-ASSOCIATE PDU
 *   ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
 *   item 15)
 * - P-RELEASE: one A-RELEASE PDU
 *   ([§8.1](https://datatracker.ietf.org/doc/html/rfc1085#section-8.1)
 *   item 2)
 * - P-U-ABORT: one A-ABORT PDU
 *   ([§8.2](https://datatracker.ietf.org/doc/html/rfc1085#section-8.2)
 *   item 2)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * UserData-PDU ::= [5] ANY
 * -- this is the ASN.1 object
 * -- if it is a top-level PDU, it
 * -- is in PCI #1, otherwise PCI #3
 * ```
 */
export
type UserData_PDU = _Element; // AnyType

export const _decode_UserData_PDU: $.ASN1Decoder<UserData_PDU> = $._decode_explicit<UserData_PDU>(() => $._decodeAny);
export const _encode_UserData_PDU: $.ASN1Encoder<UserData_PDU> = $._encode_explicit(_TagClass.context, 5, () => $._encodeAny, $.BER);


/* eslint-enable */
