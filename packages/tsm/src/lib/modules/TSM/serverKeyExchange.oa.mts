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
import { server_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { ServerKeyExchange, _decode_ServerKeyExchange, _encode_ServerKeyExchange } from "../TSM/ServerKeyExchange.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary serverKeyExchange
 * @description
 *
 * `HANDSHAKE` object: `ServerKeyExchange` identified by
 * `server-key-exchange` (12). ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * serverKeyExchange    HANDSHAKE ::= {
 * ServerKeyExchange    IDENTIFIED-BY server-key-exchange
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<ServerKeyExchange>}
 * @implements {HANDSHAKE<ServerKeyExchange>}
 */
export
const serverKeyExchange: HANDSHAKE<ServerKeyExchange> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_ServerKeyExchange,
    },
    encoderFor: {
        "&Type": _encode_ServerKeyExchange,
    },
    "&id": server_key_exchange /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
