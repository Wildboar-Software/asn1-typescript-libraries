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
import { biometric_client_hello /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_HandshakeType, _encode_HandshakeType } from "../TSM/HandshakeType.ta.mjs";

import { BiometricClientHello, _decode_BiometricClientHello, _encode_BiometricClientHello } from "../TSM/BiometricClientHello.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary biometricClientHello
 * @description
 *
 * `HANDSHAKE` object for `BiometricClientHello`, id
 * `biometric-client-hello` (100 in Annex A). Client → verifier after
 * `ClientHello`. ITU-T Rec. X.1084 (05/2008) §10.1.2, Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * biometricClientHello    HANDSHAKE ::= {
 *     BiometricClientHello    IDENTIFIED-BY biometric-client-hello
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<BiometricClientHello>}
 * @implements {HANDSHAKE<BiometricClientHello>}
 */
export
const biometricClientHello: HANDSHAKE<BiometricClientHello> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_BiometricClientHello,
    },
    encoderFor: {
        "&Type": _encode_BiometricClientHello,
    },
    "&id": biometric_client_hello /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
