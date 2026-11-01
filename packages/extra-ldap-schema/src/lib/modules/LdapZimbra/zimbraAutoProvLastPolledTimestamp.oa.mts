/* eslint-disable */
import {
    type GeneralizedTime
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import { userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
import { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
// export { generalizedTimeMatch } from "../SelectedAttributeTypes/generalizedTimeMatch.oa.mjs";
import { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs";
// export { generalizedTimeOrderingMatch } from "../SelectedAttributeTypes/generalizedTimeOrderingMatch.oa.mjs";
import { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
// export { generalizedTime } from "../SelectedAttributeTypes/generalizedTime.oa.mjs";
import { id_at_zimbraAutoProvLastPolledTimestamp } from "../LdapZimbra/id-at-zimbraAutoProvLastPolledTimestamp.va.mjs";
// export { id_at_zimbraAutoProvLastPolledTimestamp } from "../LdapZimbra/id-at-zimbraAutoProvLastPolledTimestamp.va.mjs";


/**
 * @summary zimbraAutoProvLastPolledTimestamp
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAutoProvLastPolledTimestamp ATTRIBUTE ::= {
 *   WITH SYNTAX               GeneralizedTime
 *   EQUALITY MATCHING RULE    generalizedTimeMatch
 *   ORDERING MATCHING RULE    generalizedTimeOrderingMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               generalizedTime.&id
 *   LDAP-NAME                 {"zimbraAutoProvLastPolledTimestamp"}
 *   LDAP-DESC                 "EAGER mode: for Zimbra internal use only - do not change it. LAZY mode: N/A MANUAL mode: N/A Timestamp when the external domain is last polled for EAGER auto provision. The poll (LDAP search) for the next iteration will fetch external entries with create timestamp later than the timestamp recorded from the previous iteration."
 *   ID                        id-at-zimbraAutoProvLastPolledTimestamp }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE<GeneralizedTime>}
 * @implements {ATTRIBUTE<GeneralizedTime>}
 */
export
const zimbraAutoProvLastPolledTimestamp: ATTRIBUTE<GeneralizedTime> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": $._decodeGeneralizedTime,
    },
    encoderFor: {
        "&Type": $._encodeGeneralizedTime,
    },
    "&equality-match": generalizedTimeMatch /* OBJECT_FIELD_SETTING */,
    "&ordering-match": generalizedTimeOrderingMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": generalizedTime["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "zimbraAutoProvLastPolledTimestamp" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "EAGER mode: for Zimbra internal use only - do not change it. LAZY mode: N/A MANUAL mode: N/A Timestamp when the external domain is last polled for EAGER auto provision. The poll (LDAP search) for the next iteration will fetch external entries with create timestamp later than the timestamp recorded from the previous iteration." /* OBJECT_FIELD_SETTING */,
    "&id": id_at_zimbraAutoProvLastPolledTimestamp /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
