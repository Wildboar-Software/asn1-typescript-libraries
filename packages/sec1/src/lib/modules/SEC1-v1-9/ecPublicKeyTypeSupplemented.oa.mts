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
import { id_ecPublicKeyTypeSupplemented } from "../SEC1-v1-9/id-ecPublicKeyTypeSupplemented.va.mjs";
import { ECPKSupplements, _decode_ECPKSupplements, _encode_ECPKSupplements } from "../SEC1-v1-9/ECPKSupplements.ta.mjs";
import { ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/* START_OF_SYMBOL_DEFINITION ecPublicKeyTypeSupplemented */
/**
 * @summary ecPublicKeyTypeSupplemented
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ecPublicKeyTypeSupplemented ALGORITHM ::= {
 *     OID id-ecPublicKeyTypeSupplemented PARMS ECPKSupplements
 * }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<ECPKSupplements>}
 * @implements {ALGORITHM<ECPKSupplements>}
 */
export
const ecPublicKeyTypeSupplemented: ALGORITHM<ECPKSupplements> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_ECPKSupplements,
    },
    encoderFor: {
        "&Type": _encode_ECPKSupplements,
    },
    "&id": id_ecPublicKeyTypeSupplemented /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION ecPublicKeyTypeSupplemented */

/* eslint-enable */
