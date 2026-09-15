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
import { hello_request /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { HelloRequest, _decode_HelloRequest, _encode_HelloRequest } from "../TSM/HelloRequest.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary helloRequest
 * @description
 *
 * `HANDSHAKE` object: `HelloRequest` identified by `hello-request`
 * (0). ITU-T Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * helloRequest    HANDSHAKE ::= {
 * HelloRequest     IDENTIFIED-BY hello-request
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<HelloRequest>}
 * @implements {HANDSHAKE<HelloRequest>}
 */
export
const helloRequest: HANDSHAKE<HelloRequest> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_HelloRequest,
    },
    encoderFor: {
        "&Type": _encode_HelloRequest,
    },
    "&id": hello_request /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
