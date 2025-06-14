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
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { PlatformConfiguration, _decode_PlatformConfiguration, _encode_PlatformConfiguration } from "../PlatformCertificateProfile/PlatformConfiguration.ta.mjs";
import { tcg_at_platformConfiguration_v2 } from "../PlatformCertificateProfile/tcg-at-platformConfiguration-v2.va.mjs";
/* START_OF_SYMBOL_DEFINITION platformConfiguration */
/**
 * @summary platformConfiguration
 * @description
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
/* END_OF_SYMBOL_DEFINITION platformConfiguration */

/* eslint-enable */
