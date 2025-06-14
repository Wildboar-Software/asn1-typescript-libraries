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
import { URIReference, _decode_URIReference, _encode_URIReference } from "../PlatformCertificateProfile/URIReference.ta.mjs";
import { tcg_at_platformConfigUri } from "../PlatformCertificateProfile/tcg-at-platformConfigUri.va.mjs";
/* START_OF_SYMBOL_DEFINITION platformConfigUri */
/**
 * @summary platformConfigUri
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * platformConfigUri ATTRIBUTE ::= {
 *     WITH SYNTAX     URIReference
 *     ID              tcg-at-platformConfigUri }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<URIReference>}
 * @implements {ATTRIBUTE<URIReference>}
 */
export
const platformConfigUri: ATTRIBUTE<URIReference> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_URIReference,
    },
    encoderFor: {
        "&Type": _encode_URIReference,
    },
    "&id": tcg_at_platformConfigUri /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION platformConfigUri */

/* eslint-enable */
