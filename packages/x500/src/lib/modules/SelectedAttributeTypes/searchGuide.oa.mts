/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { guide } from "../SelectedAttributeTypes/guide.oa.mjs";
import {
    Guide,
    _decode_Guide,
    _encode_Guide,
} from "../SelectedAttributeTypes/Guide.ta.mjs";
import { id_at_searchGuide } from "../SelectedAttributeTypes/id-at-searchGuide.va.mjs";
/**
 * @summary searchGuide
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * searchGuide ATTRIBUTE ::= {
 *   WITH SYNTAX              Guide
 *   LDAP-SYNTAX              guide.&id
 *   LDAP-NAME                {"searchGuide"}
 *   ID                       id-at-searchGuide }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<Guide>}
 * @implements {ATTRIBUTE<Guide>}
 */
export const searchGuide: ATTRIBUTE<Guide> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_Guide,
    },
    encoderFor: {
        "&Type": _encode_Guide,
    },
    "&ldapSyntax": guide["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["searchGuide"],
    "&id": id_at_searchGuide /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
