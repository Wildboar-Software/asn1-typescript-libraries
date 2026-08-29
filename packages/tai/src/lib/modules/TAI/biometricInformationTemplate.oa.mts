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
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/InformationFramework";
import { BiometricInformationTemplateorPointer, _decode_BiometricInformationTemplateorPointer, _encode_BiometricInformationTemplateorPointer } from "../TAI/BiometricInformationTemplateorPointer.ta.mjs";
import { id_tai_at_BiometricInformationTemplate } from "../TAI/id-tai-at-BiometricInformationTemplate.va.mjs";
/**
 * @summary biometricInformationTemplate
 * @description
 *
 * Recommended BIT attribute in a BC. Syntax is the CBEFF
 * on-card-matching patron format of ISO/IEC 19785-3 clause 11,
 * or a URI pointing at it. Other patron formats may be used by
 * defining a different `ATTRIBUTE` with its own syntax and OID.
 * IBIA registration of BITs is recommended, not required. The
 * BIT is input to matching; integrity is required and
 * confidentiality should be applied. ITU-T Rec. X.1089 (05/2008)
 * [§8.3](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * §8.4–8.6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * biometricInformationTemplate ATTRIBUTE ::= {
 *   WITH SYNTAX  BiometricInformationTemplateorPointer
 *   ID           id-tai-at-BiometricInformationTemplate
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BiometricInformationTemplateorPointer>}
 * @implements {ATTRIBUTE<BiometricInformationTemplateorPointer>}
 */
export
const biometricInformationTemplate: ATTRIBUTE<BiometricInformationTemplateorPointer> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_BiometricInformationTemplateorPointer,
    },
    encoderFor: {
        "&Type": _encode_BiometricInformationTemplateorPointer,
    },
    "&id": id_tai_at_BiometricInformationTemplate /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
