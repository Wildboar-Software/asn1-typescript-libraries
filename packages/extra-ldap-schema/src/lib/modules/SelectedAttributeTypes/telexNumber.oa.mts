/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { TelexNumber, _decode_TelexNumber, _encode_TelexNumber } from "../SelectedAttributeTypes/TelexNumber.ta.mjs";
// export { TelexNumber, _decode_TelexNumber, _encode_TelexNumber } from "../SelectedAttributeTypes/TelexNumber.ta.mjs";
import { telexNr } from "../SelectedAttributeTypes/telexNr.oa.mjs";
// export { telexNr } from "../SelectedAttributeTypes/telexNr.oa.mjs";
import { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va.mjs";
// export { id_at_telexNumber } from "../SelectedAttributeTypes/id-at-telexNumber.va.mjs";


/**
 * @summary telexNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * telexNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              TelexNumber
 *   LDAP-SYNTAX              telexNr.&id
 *   LDAP-NAME                {"telexNumber"}
 *   ID                       id-at-telexNumber }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<TelexNumber>}
 * @implements {ATTRIBUTE<TelexNumber>}
 */
export
const telexNumber: ATTRIBUTE<TelexNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_TelexNumber,
    },
    encoderFor: {
        "&Type": _encode_TelexNumber,
    },
    "&ldapSyntax": telexNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "telexNumber" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_telexNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
