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
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from "@wildboar/x500/InformationFramework";
import {
    PlatformConfiguration,
    _decode_PlatformConfiguration,
    _encode_PlatformConfiguration,
} from "../PlatformCertificateProfile/PlatformConfiguration.ta.mjs";
import {
    tcg_at_platformConfiguration_v2,
} from "../PlatformCertificateProfile/tcg-at-platformConfiguration-v2.va.mjs";

/**
 * @summary platformConfiguration
 * @description
 *
 * Platform Configuration attribute (`tcg-at-platformConfiguration-v2`).
 * Non-security component identifiers and issuer-chosen properties.
 * MAY appear in a Platform Certificate. In a Delta, include only
 * changed fields and MUST set `status`. TCG Platform Certificate
 * Profile v1.1 r19 §2.1.5.14, §3.1.6, Table 3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * platformConfiguration ATTRIBUTE ::= {
 *     WITH SYNTAX     PlatformConfiguration
 *     ID              tcg-at-platformConfiguration-v2 }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PlatformConfiguration>}
 * @implements {ATTRIBUTE<PlatformConfiguration>}
 */
export
const platformConfiguration: ATTRIBUTE<PlatformConfiguration> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PlatformConfiguration,
    },
    encoderFor: {
        "&Type": _encode_PlatformConfiguration,
    },
    "&id": tcg_at_platformConfiguration_v2 /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
