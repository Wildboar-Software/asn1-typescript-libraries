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
import { tls_kdf } from "../SEC1-v1-9/tls-kdf.va.mjs";
import { HashAlgorithm, _decode_HashAlgorithm, _encode_HashAlgorithm } from "../SEC1-v1-9/HashAlgorithm.ta.mjs";
import { type ALGORITHM } from "../SEC1-v1-9/ALGORITHM.oca.mjs";
/**
 * @summary KDFSet_Union2_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KDFSet-Union2-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {ALGORITHM<HashAlgorithm>}
 * @implements {ALGORITHM<HashAlgorithm>}
 */
export
const KDFSet_Union2_Intersection0_Element: ALGORITHM<HashAlgorithm> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_HashAlgorithm,
    },
    encoderFor: {
        "&Type": _encode_HashAlgorithm,
    },
    "&id": tls_kdf /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
