/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
// export { internationalISDNNumber } from "../SelectedAttributeTypes/internationalISDNNumber.oa.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
// export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { id_at_collectiveInternationalISDNNumber } from "../SelectedAttributeTypes/id-at-collectiveInternationalISDNNumber.va.mjs";
// export { id_at_collectiveInternationalISDNNumber } from "../SelectedAttributeTypes/id-at-collectiveInternationalISDNNumber.va.mjs";


/**
 * @summary collectiveInternationalISDNNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectiveInternationalISDNNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               internationalISDNNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"c-InternationalISDNNumber"}
 *   ID                       id-at-collectiveInternationalISDNNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectiveInternationalISDNNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": internationalISDNNumber /* OBJECT_FIELD_SETTING */,
    "&collective": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "c-InternationalISDNNumber" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_collectiveInternationalISDNNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
