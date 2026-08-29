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
import { BDCReportContentInformation, _decode_BDCReportContentInformation, _encode_BDCReportContentInformation } from "../TAI/BDCReportContentInformation.ta.mjs";
import { id_tai_at_bDCReportContentInformation } from "../TAI/id-tai-at-bDCReportContentInformation.va.mjs";
/**
 * @summary bDCReportContentInformation
 * @description
 *
 * Required BDC attribute: the device public-key certificate (or
 * a URI to it) and the ACBio BPU report (or a URI to it). The
 * report is typically issued to the device by the TBA, or
 * installed by a vendor trusted by the TBA. ITU-T Rec. X.1089
 * (05/2008)
 * [§10.2](https://www.itu.int/rec/T-REC-X.1089-200805-I),
 * §10.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bDCReportContentInformation ATTRIBUTE ::= {
 *   WITH SYNTAX  BDCReportContentInformation
 *   ID           id-tai-at-bDCReportContentInformation
 * }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<BDCReportContentInformation>}
 * @implements {ATTRIBUTE<BDCReportContentInformation>}
 */
export
const bDCReportContentInformation: ATTRIBUTE<BDCReportContentInformation> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_BDCReportContentInformation,
    },
    encoderFor: {
        "&Type": _encode_BDCReportContentInformation,
    },
    "&id": id_tai_at_bDCReportContentInformation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
