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
import { id_ecPublicKeyTypeRestricted } from "../SEC1-v1-9/id-ecPublicKeyTypeRestricted.va.mjs";
import { ECPKRestrictions, _decode_ECPKRestrictions, _encode_ECPKRestrictions } from "../SEC1-v1-9/ECPKRestrictions.ta.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/* START_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */
/**
 * @summary ecPublicKeyTypeRestricted
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKeyTypeRestricted ALGORITHM ::= {
 *     OID id-ecPublicKeyTypeRestricted PARMS ECPKRestrictions
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECPKRestrictions>}
 * @implements {ALGORITHM<ECPKRestrictions>}
 */
export
const ecPublicKeyTypeRestricted: ALGORITHM<ECPKRestrictions> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECPKRestrictions,
    },
    encoderFor: {
        "&Type": _encode_ECPKRestrictions,
    },
    "&id": id_ecPublicKeyTypeRestricted /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKeyTypeRestricted */

/* eslint-enable */
