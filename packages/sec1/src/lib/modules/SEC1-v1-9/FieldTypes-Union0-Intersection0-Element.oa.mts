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
import { Prime_p, _decode_Prime_p, _encode_Prime_p } from "../SEC1-v1-9/Prime-p.ta.mjs";
import { prime_field } from "../SEC1-v1-9/prime-field.va.mjs";
import { FIELD_ID } from "../SEC1-v1-9/FIELD-ID.oca.mjs";
/**
 * @summary FieldTypes_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FieldTypes-Union0-Intersection0-Element ::= {} -- REMOVED_FROM_UNNESTING --
 * ```
 * 
 * @constant
 * @type {FIELD_ID<Prime_p>}
 * @implements {FIELD_ID<Prime_p>}
 */
export
const FieldTypes_Union0_Intersection0_Element: FIELD_ID<Prime_p> = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Prime_p,
    },
    encoderFor: {
        "&Type": _encode_Prime_p,
    },
    "&id": prime_field /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
