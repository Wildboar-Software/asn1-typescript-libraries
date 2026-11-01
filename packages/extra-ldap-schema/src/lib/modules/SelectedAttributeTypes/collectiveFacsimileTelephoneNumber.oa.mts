/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
// export { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
// export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
import { id_at_collectiveFacsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveFacsimileTelephoneNumber.va.mjs";
// export { id_at_collectiveFacsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-collectiveFacsimileTelephoneNumber.va.mjs";


/**
 * @summary collectiveFacsimileTelephoneNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * collectiveFacsimileTelephoneNumber ATTRIBUTE ::= {
 *   SUBTYPE OF               facsimileTelephoneNumber
 *   COLLECTIVE               TRUE
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"c-FacsimileTelephoneNumber"}
 *   ID                       id-at-collectiveFacsimileTelephoneNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const collectiveFacsimileTelephoneNumber: ATTRIBUTE = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": undefined,
    },
    encoderFor: {
        "&Type": undefined,
    },
    "&derivation": facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */,
    "&collective": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "c-FacsimileTelephoneNumber" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_collectiveFacsimileTelephoneNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
