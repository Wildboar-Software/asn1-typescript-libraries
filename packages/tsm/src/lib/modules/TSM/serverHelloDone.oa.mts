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
import { server_hello_done /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { ServerHelloDone, _decode_ServerHelloDone, _encode_ServerHelloDone } from "../TSM/ServerHelloDone.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary serverHelloDone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serverHelloDone    HANDSHAKE ::= {
 *     ServerHelloDone    IDENTIFIED-BY server-hello-done
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<ServerHelloDone>}
 * @implements {HANDSHAKE<ServerHelloDone>}
 */
export
const serverHelloDone: HANDSHAKE<ServerHelloDone> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_ServerHelloDone,
    },
    encoderFor: {
        "&Type": _encode_ServerHelloDone,
    },
    "&id": server_hello_done /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
