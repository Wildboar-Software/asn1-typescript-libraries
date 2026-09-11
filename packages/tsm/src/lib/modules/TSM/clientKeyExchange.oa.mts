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
import { client_key_exchange /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { ClientKeyExchange, _decode_ClientKeyExchange, _encode_ClientKeyExchange } from "../TSM/ClientKeyExchange.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary clientKeyExchange
 * @description
 *
 * `HANDSHAKE` object: `ClientKeyExchange` identified by
 * `client-key-exchange` (16). ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * clientKeyExchange    HANDSHAKE ::= {
 *     ClientKeyExchange    IDENTIFIED-BY client-key-exchange
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<ClientKeyExchange>}
 * @implements {HANDSHAKE<ClientKeyExchange>}
 */
export
const clientKeyExchange: HANDSHAKE<ClientKeyExchange> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_ClientKeyExchange,
    },
    encoderFor: {
        "&Type": _encode_ClientKeyExchange,
    },
    "&id": client_key_exchange /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
