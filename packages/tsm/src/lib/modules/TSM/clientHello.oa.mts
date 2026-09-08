/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { HandshakeType, HandshakeType_hello_request /* IMPORTED_LONG_NAMED_INTEGER */, hello_request /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_client_hello /* IMPORTED_LONG_NAMED_INTEGER */, client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_hello /* IMPORTED_LONG_NAMED_INTEGER */, server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_list /* IMPORTED_LONG_NAMED_INTEGER */, certificate_list /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_key_exchange /* IMPORTED_LONG_NAMED_INTEGER */, server_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_request /* IMPORTED_LONG_NAMED_INTEGER */, certificate_request /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_hello_done /* IMPORTED_LONG_NAMED_INTEGER */, server_hello_done /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_verify /* IMPORTED_LONG_NAMED_INTEGER */, certificate_verify /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_client_key_exchange /* IMPORTED_LONG_NAMED_INTEGER */, client_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_finished /* IMPORTED_LONG_NAMED_INTEGER */, finished /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_biometric_client_hello /* IMPORTED_LONG_NAMED_INTEGER */, biometric_client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_biometric_server_hello /* IMPORTED_LONG_NAMED_INTEGER */, biometric_server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";
// export { HandshakeType, HandshakeType_hello_request /* IMPORTED_LONG_NAMED_INTEGER */, hello_request /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_client_hello /* IMPORTED_LONG_NAMED_INTEGER */, client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_hello /* IMPORTED_LONG_NAMED_INTEGER */, server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_list /* IMPORTED_LONG_NAMED_INTEGER */, certificate_list /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_key_exchange /* IMPORTED_LONG_NAMED_INTEGER */, server_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_request /* IMPORTED_LONG_NAMED_INTEGER */, certificate_request /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_server_hello_done /* IMPORTED_LONG_NAMED_INTEGER */, server_hello_done /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_certificate_verify /* IMPORTED_LONG_NAMED_INTEGER */, certificate_verify /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_client_key_exchange /* IMPORTED_LONG_NAMED_INTEGER */, client_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_finished /* IMPORTED_LONG_NAMED_INTEGER */, finished /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_biometric_client_hello /* IMPORTED_LONG_NAMED_INTEGER */, biometric_client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, HandshakeType_biometric_server_hello /* IMPORTED_LONG_NAMED_INTEGER */, biometric_server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";
import { ClientHello, _decode_ClientHello, _encode_ClientHello } from "../TSM/ClientHello.ta.mjs";
// export { ClientHello, _decode_ClientHello, _encode_ClientHello } from "../TSM/ClientHello.ta.mjs";
import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary clientHello
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clientHello    HANDSHAKE ::= {
 * ClientHello     IDENTIFIED-BY client-hello
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<ClientHello>}
 * @implements {HANDSHAKE<ClientHello>}
 */
export
const clientHello: HANDSHAKE<ClientHello> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_ClientHello,
    },
    encoderFor: {
        "&Type": _encode_ClientHello,
    },
    "&id": client_hello /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
