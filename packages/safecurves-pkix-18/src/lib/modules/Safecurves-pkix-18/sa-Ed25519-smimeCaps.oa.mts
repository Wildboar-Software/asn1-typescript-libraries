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
} from "asn1-ts";
import { id_Ed25519 } from "../Safecurves-pkix-18/id-Ed25519.va.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
/* START_OF_SYMBOL_DEFINITION sa_Ed25519_smimeCaps */
/**
 * @summary sa_Ed25519_smimeCaps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sa-Ed25519-smimeCaps ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {SMIME_CAPS}
 * @implements {SMIME_CAPS}
 */
export
const sa_Ed25519_smimeCaps: SMIME_CAPS = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_Ed25519 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION sa_Ed25519_smimeCaps */

/* eslint-enable */
