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
import { biometric_server_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { BiometricServerHello, _decode_BiometricServerHello, _encode_BiometricServerHello } from "../TSM/BiometricServerHello.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary biometricServerHello
 * @description
 *
 * `HANDSHAKE` object for `BiometricServerHello`, id
 * `biometric-server-hello` (101 in Annex A). Verifier → client after
 * certificate messages. ITU-T Rec. X.1084 (05/2008) §10.1.3, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * biometricServerHello    HANDSHAKE ::= {
 * BiometricServerHello    IDENTIFIED-BY biometric-server-hello
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<BiometricServerHello>}
 * @implements {HANDSHAKE<BiometricServerHello>}
 */
export
const biometricServerHello: HANDSHAKE<BiometricServerHello> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_BiometricServerHello,
    },
    encoderFor: {
        "&Type": _encode_BiometricServerHello,
    },
    "&id": biometric_server_hello /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
