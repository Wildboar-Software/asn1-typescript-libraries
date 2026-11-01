/* eslint-disable */
import {
    type UTCTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { utcTime } from "../SelectedAttributeTypes/utcTime.oa.mjs";
// export { utcTime } from "../SelectedAttributeTypes/utcTime.oa.mjs";
import { id_at_fRSTimeLastCommand } from "../LdapSchema2ldifMicrosoft/id-at-fRSTimeLastCommand.va.mjs";
// export { id_at_fRSTimeLastCommand } from "../LdapSchema2ldifMicrosoft/id-at-fRSTimeLastCommand.va.mjs";


/**
 * @summary fRSTimeLastCommand
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fRSTimeLastCommand ATTRIBUTE ::= {
 *   WITH SYNTAX               UTCTime
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               utcTime.&id
 *   LDAP-NAME                 {"fRSTimeLastCommand"}
 *   ID                        id-at-fRSTimeLastCommand }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<UTCTime>}
 * @implements {ATTRIBUTE<UTCTime>}
 */
export
const fRSTimeLastCommand: ATTRIBUTE<UTCTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeUTCTime,
    },
    encoderFor: {
        "&Type": $._encodeUTCTime,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": utcTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fRSTimeLastCommand" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_at_fRSTimeLastCommand /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
