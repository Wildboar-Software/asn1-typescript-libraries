/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ASN1OverflowError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary HandshakeType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * HandshakeType      ::=     INTEGER {
 *     hello-request         (0),
 *     client-hello         (1),
 *     server-hello         (2),
 *     certificate-list     (11),
 *     server-key-exchange    (12),
 *     certificate-request     (13),
 *     server-hello-done     (14),
 *     certificate-verify     (15),
 *     client-key-exchange     (16),
 *     finished         (20),
 *     biometric-client-hello     (100),
 *     biometric-server-hello     (101)
 * } (0..255)
 * ```
 */
export
type HandshakeType = INTEGER;

/**
 * @summary HandshakeType_hello_request
 * @constant
 * @type {number}
 */
export
const HandshakeType_hello_request: HandshakeType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_hello_request
 * @constant
 * @type {number}
 */
export
const hello_request: HandshakeType = HandshakeType_hello_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_client_hello: HandshakeType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_hello
 * @constant
 * @type {number}
 */
export
const client_hello: HandshakeType = HandshakeType_client_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_hello: HandshakeType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello
 * @constant
 * @type {number}
 */
export
const server_hello: HandshakeType = HandshakeType_server_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_list
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_list: HandshakeType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_list
 * @constant
 * @type {number}
 */
export
const certificate_list: HandshakeType = HandshakeType_certificate_list; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_key_exchange
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_key_exchange: HandshakeType = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_key_exchange
 * @constant
 * @type {number}
 */
export
const server_key_exchange: HandshakeType = HandshakeType_server_key_exchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_request
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_request: HandshakeType = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_request
 * @constant
 * @type {number}
 */
export
const certificate_request: HandshakeType = HandshakeType_certificate_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello_done
 * @constant
 * @type {number}
 */
export
const HandshakeType_server_hello_done: HandshakeType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_server_hello_done
 * @constant
 * @type {number}
 */
export
const server_hello_done: HandshakeType = HandshakeType_server_hello_done; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_verify
 * @constant
 * @type {number}
 */
export
const HandshakeType_certificate_verify: HandshakeType = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_certificate_verify
 * @constant
 * @type {number}
 */
export
const certificate_verify: HandshakeType = HandshakeType_certificate_verify; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_key_exchange
 * @constant
 * @type {number}
 */
export
const HandshakeType_client_key_exchange: HandshakeType = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_client_key_exchange
 * @constant
 * @type {number}
 */
export
const client_key_exchange: HandshakeType = HandshakeType_client_key_exchange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_finished
 * @constant
 * @type {number}
 */
export
const HandshakeType_finished: HandshakeType = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_finished
 * @constant
 * @type {number}
 */
export
const finished: HandshakeType = HandshakeType_finished; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_client_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_biometric_client_hello: HandshakeType = 100; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_client_hello
 * @constant
 * @type {number}
 */
export
const biometric_client_hello: HandshakeType = HandshakeType_biometric_client_hello; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_server_hello
 * @constant
 * @type {number}
 */
export
const HandshakeType_biometric_server_hello: HandshakeType = 101; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary HandshakeType_biometric_server_hello
 * @constant
 * @type {number}
 */
export
const biometric_server_hello: HandshakeType = HandshakeType_biometric_server_hello; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_HandshakeType = (el: _Element): HandshakeType => {
    const value = $._decodeInteger(el);
    const n = typeof value === "bigint" ? value : BigInt(value);
    if (n < 0n || n > 255n) {
        throw new ASN1OverflowError("HandshakeType violates INTEGER range");
    }
    return value;
};
export const _encode_HandshakeType = $._encodeInteger;


/* eslint-enable */
