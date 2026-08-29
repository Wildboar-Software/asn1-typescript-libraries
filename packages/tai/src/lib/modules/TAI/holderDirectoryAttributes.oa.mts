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
import { AttributesSyntax, _decode_AttributesSyntax, _encode_AttributesSyntax } from "../TAI/AttributesSyntax.ta.mjs";
import { id_tai_ce_holderDirectoryAttributes } from "../TAI/id-tai-ce-holderDirectoryAttributes.va.mjs";
import type { EXTENSION } from "@wildboar/x500/AuthenticationFramework";

/**
 * @summary holderDirectoryAttributes
 * @description
 *
 * When TAI uses PMI, BC attributes may also carry privilege
 * information about a PMI AC of the BC holder. This extension
 * holds any Directory attribute values related to that holder.
 * ITU-T Rec. X.1089 (05/2008)
 * [§11.2](https://www.itu.int/rec/T-REC-X.1089-200805-I).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * holderDirectoryAttributes EXTENSION ::= {
 *   SYNTAX         AttributesSyntax
 *   IDENTIFIED BY  id-tai-ce-holderDirectoryAttributes
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<AttributesSyntax>}
 * @implements {EXTENSION<AttributesSyntax>}
 */
export
const holderDirectoryAttributes: EXTENSION<AttributesSyntax> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_AttributesSyntax,
    },
    encoderFor: {
        "&ExtnType": _encode_AttributesSyntax,
    },
    "&id": id_tai_ce_holderDirectoryAttributes /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
