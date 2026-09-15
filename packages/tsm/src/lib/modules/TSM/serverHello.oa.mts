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
import { server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { ServerHello, _decode_ServerHello, _encode_ServerHello } from "../TSM/ServerHello.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary serverHello
 * @description
 *
 * `HANDSHAKE` object: `ServerHello` identified by `server-hello` (2).
 * ITU-T Rec. X.1084 (05/2008) §10.3.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serverHello    HANDSHAKE ::= {
 * ServerHello    IDENTIFIED-BY server-hello
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<ServerHello>}
 * @implements {HANDSHAKE<ServerHello>}
 */
export
const serverHello: HANDSHAKE<ServerHello> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_ServerHello,
    },
    encoderFor: {
        "&Type": _encode_ServerHello,
    },
    "&id": server_hello /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
