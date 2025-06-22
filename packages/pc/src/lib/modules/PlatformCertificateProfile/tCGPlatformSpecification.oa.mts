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
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { _enum_for_AttributeUsage, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs";
import { TCGPlatformSpecification, _decode_TCGPlatformSpecification, _encode_TCGPlatformSpecification } from "../PlatformCertificateProfile/TCGPlatformSpecification.ta.mjs";
import { tcg_at_tcgPlatformSpecification } from "../PlatformCertificateProfile/tcg-at-tcgPlatformSpecification.va.mjs";
/**
 * @summary tCGPlatformSpecification
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * tCGPlatformSpecification ATTRIBUTE ::= {
 *     WITH SYNTAX     TCGPlatformSpecification
 *     ID              tcg-at-tcgPlatformSpecification }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<TCGPlatformSpecification>}
 * @implements {ATTRIBUTE<TCGPlatformSpecification>}
 */
export
const tCGPlatformSpecification: ATTRIBUTE<TCGPlatformSpecification> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TCGPlatformSpecification,
    },
    encoderFor: {
        "&Type": _encode_TCGPlatformSpecification,
    },
    "&id": tcg_at_tcgPlatformSpecification /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
