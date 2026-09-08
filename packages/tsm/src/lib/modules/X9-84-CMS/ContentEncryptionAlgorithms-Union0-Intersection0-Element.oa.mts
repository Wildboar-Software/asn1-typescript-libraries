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
import { IV, _decode_IV, _encode_IV } from "../X9-84-CMS/IV.ta.mjs";

import { type ALGORITHM } from "../X9-84-CMS/ALGORITHM.oca.mjs";
import { des_ede3_cbc } from "../X9-84-CMS/X9-84-Identifiers.va.mjs";


/**
 * @summary ContentEncryptionAlgorithms_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContentEncryptionAlgorithms-Union0-Intersection0-Element ALGORITHM ::= { OID des-ede3-cbc PARMS IV }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<IV>}
 * @implements {ALGORITHM<IV>}
 */
export
const ContentEncryptionAlgorithms_Union0_Intersection0_Element: ALGORITHM<IV> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_IV,
    },
    encoderFor: {
        "&Type": _encode_IV,
    },
    "&id": des_ede3_cbc /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
