/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { epcForm } from "../SelectedAttributeTypes/epcForm.oa.mjs";
import {
    EpcFormat,
    _decode_EpcFormat,
    _encode_EpcFormat,
} from "../SelectedAttributeTypes/EpcFormat.ta.mjs";
import { id_at_epcFormat } from "../SelectedAttributeTypes/id-at-epcFormat.va.mjs";
/**
 * @summary epcFormat
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * epcFormat  ATTRIBUTE ::= {
 *   WITH SYNTAX              EpcFormat
 *   SINGLE VALUE             TRUE
 *   LDAP-SYNTAX              epcForm.&id
 *   LDAP-NAME                {"epcFormat"}
 *   ID                       id-at-epcFormat }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<EpcFormat>}
 * @implements {ATTRIBUTE<EpcFormat>}
 */
export const epcFormat: ATTRIBUTE<EpcFormat> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_EpcFormat,
    },
    encoderFor: {
        "&Type": _encode_EpcFormat,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": epcForm["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["epcFormat"],
    "&id": id_at_epcFormat /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
