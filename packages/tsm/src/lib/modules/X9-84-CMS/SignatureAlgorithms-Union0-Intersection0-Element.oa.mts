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
import { type ALGORITHM } from "../X9-84-CMS/ALGORITHM.oca.mjs";
import { type NoIV, _decode_NoIV, _encode_NoIV, dsa_with_sha1 } from "../X9-84-CMS/X9-84-Identifiers.va.mjs";


/**
 * @summary SignatureAlgorithms_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SignatureAlgorithms-Union0-Intersection0-Element ALGORITHM ::= { OID dsa-with-sha1 PARMS NoIV }
 * ```
 * 
 * @constant
 * @type {ALGORITHM<NoIV>}
 * @implements {ALGORITHM<NoIV>}
 */
export
const SignatureAlgorithms_Union0_Intersection0_Element: ALGORITHM<NoIV> = {
    class: "ALGORITHM",
    decoderFor: {
        "&Type": _decode_NoIV,
    },
    encoderFor: {
        "&Type": _encode_NoIV,
    },
    "&id": dsa_with_sha1 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
