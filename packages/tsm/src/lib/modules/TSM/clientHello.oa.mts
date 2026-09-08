/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { ClientHello, _decode_ClientHello, _encode_ClientHello } from "../TSM/ClientHello.ta.mjs";

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
