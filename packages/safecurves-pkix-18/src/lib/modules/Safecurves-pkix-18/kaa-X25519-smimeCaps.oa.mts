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
import { AlgorithmIdentifier, _decode_AlgorithmIdentifier, _encode_AlgorithmIdentifier } from "../AlgorithmInformation-2009/AlgorithmIdentifier.ta.mjs";
import { id_X25519 } from "../Safecurves-pkix-18/id-X25519.va.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";

/**
 * @summary kaa_X25519_smimeCaps
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * kaa-X25519-smimeCaps ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 *
 * @constant
 * @type {SMIME_CAPS<AlgorithmIdentifier>}
 * @implements {SMIME_CAPS<AlgorithmIdentifier>}
 */
export
const kaa_X25519_smimeCaps: SMIME_CAPS<AlgorithmIdentifier> = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": _decode_AlgorithmIdentifier,
    },
    encoderFor: {
        "&Type": _encode_AlgorithmIdentifier,
    },
    "&id": id_X25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
