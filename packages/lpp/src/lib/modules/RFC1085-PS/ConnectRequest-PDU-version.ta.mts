/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ConnectRequest_PDU_version
 * @description
 *
 * Version of `ConnectRequest-PDU`. `version-1` (0) is the
 * protocol in this memo
 * ([RFC 1085 Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 * No other version is defined. A responder can reject an
 * unsupported version with `protocol-version-not-supported`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * -- version-1 corresponds to to this memo
 * ConnectRequest-PDU-version ::= INTEGER { version-1(0) }
 * ```
 */
export
type ConnectRequest_PDU_version = INTEGER;

/**
 * @summary ConnectRequest_PDU_version_version_1
 * @description
 *
 * `version-1` (0): the Lightweight Presentation Protocol of
 * RFC 1085
 * ([Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * @constant
 * @type {number}
 */
export
const ConnectRequest_PDU_version_version_1: ConnectRequest_PDU_version = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary version_1
 * @description
 *
 * `version-1` (0): the Lightweight Presentation Protocol of
 * RFC 1085
 * ([Appendix A](https://datatracker.ietf.org/doc/html/rfc1085)).
 *
 * @constant
 * @type {number}
 */
export
const version_1: ConnectRequest_PDU_version = ConnectRequest_PDU_version_version_1; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ConnectRequest_PDU_version: $.ASN1Decoder<ConnectRequest_PDU_version> = $._decodeInteger;
export const _encode_ConnectRequest_PDU_version: $.ASN1Encoder<ConnectRequest_PDU_version> = $._encodeInteger;


/* eslint-enable */
