/* eslint-disable */
import {
    type IA5String
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
// export { ia5String } from "../SelectedAttributeTypes/ia5String.oa.mjs";
import { id_at_inetSubscriberChallenge } from "../Ldapmigration20subscriber/id-at-inetSubscriberChallenge.va.mjs";
// export { id_at_inetSubscriberChallenge } from "../Ldapmigration20subscriber/id-at-inetSubscriberChallenge.va.mjs";


/**
 * @summary inetSubscriberChallenge
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inetSubscriberChallenge ATTRIBUTE ::= {
 *   WITH SYNTAX               IA5String
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               ia5String.&id
 *   LDAP-NAME                 {"inetSubscriberChallenge"}
 *   LDAP-DESC                 "Used to confirm subscriberIdentity. This attribute holds the challenge phrase and is used in conjunction with the inetSubscriberResponse"
 *   ID                        id-at-inetSubscriberChallenge }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<IA5String>}
 * @implements {ATTRIBUTE<IA5String>}
 */
export
const inetSubscriberChallenge: ATTRIBUTE<IA5String> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeIA5String,
    },
    encoderFor: {
        "&Type": $._encodeIA5String,
    },
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": ia5String["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "inetSubscriberChallenge" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Used to confirm subscriberIdentity. This attribute holds the challenge phrase and is used in conjunction with the inetSubscriberResponse" /* OBJECT_FIELD_SETTING */,
    "&id": id_at_inetSubscriberChallenge /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
