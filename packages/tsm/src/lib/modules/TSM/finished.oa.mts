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
import { HandshakeType_finished } from "../TSM/HandshakeType.ta.mjs";

import { Finished, _decode_Finished, _encode_Finished } from "../TSM/Finished.ta.mjs";

import { type HANDSHAKE } from "../TSM/HANDSHAKE.oca.mjs";


/**
 * @summary finished
 * @description
 *
 * `HANDSHAKE` object: `Finished` identified by `finished` (20). ITU-T
 * Rec. X.1084 (05/2008) Annex A.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * finished    HANDSHAKE ::= {
 * Finished    IDENTIFIED-BY finished
 * }
 * ```
 * 
 * @constant
 * @type {HANDSHAKE<Finished>}
 * @implements {HANDSHAKE<Finished>}
 */
export
const finished: HANDSHAKE<Finished> = {
    class: "HANDSHAKE",
    decoderFor: {
        "&Type": _decode_Finished,
    },
    encoderFor: {
        "&Type": _encode_Finished,
    },
    "&id": HandshakeType_finished /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
