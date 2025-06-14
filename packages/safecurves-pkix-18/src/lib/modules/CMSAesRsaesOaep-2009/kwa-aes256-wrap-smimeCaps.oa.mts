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
import { id_aes256_wrap } from "../CMSAesRsaesOaep-2009/id-aes256-wrap.va.mjs";
import { SMIME_CAPS } from "../AlgorithmInformation-2009/SMIME-CAPS.oca.mjs";
/* START_OF_SYMBOL_DEFINITION kwa_aes256_wrap_smimeCaps */
/**
 * @summary kwa_aes256_wrap_smimeCaps
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * kwa-aes256-wrap-smimeCaps ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {SMIME_CAPS}
 * @implements {SMIME_CAPS}
 */
export
const kwa_aes256_wrap_smimeCaps: SMIME_CAPS = {
    class: "SMIME-CAPS",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&id": id_aes256_wrap /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION kwa_aes256_wrap_smimeCaps */

/* eslint-enable */
