/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFaxAccount } from "../LdapGosaCoreGofax/id-oc-goFaxAccount.va.mjs";
import { mail } from "../LdapSchema2ldifCore/mail.oa.mjs";
import { facsimileTelephoneNumber } from "../SelectedAttributeTypes/facsimileTelephoneNumber.oa.mjs";
import { uid } from "../SelectedAttributeTypes/uid.oa.mjs";
import { facsimileAlternateTelephoneNumber } from "./facsimileAlternateTelephoneNumber.oa.mjs";
import { goFaxDeliveryMode } from "./goFaxDeliveryMode.oa.mjs";
import { goFaxDivertNumber } from "./goFaxDivertNumber.oa.mjs";
import { goFaxFormat } from "./goFaxFormat.oa.mjs";
import { goFaxIsEnabled } from "./goFaxIsEnabled.oa.mjs";
import { goFaxLanguage } from "./goFaxLanguage.oa.mjs";
import { goFaxPrinter } from "./goFaxPrinter.oa.mjs";
import { goFaxRBlockgroups } from "./goFaxRBlockgroups.oa.mjs";
import { goFaxRBlocklist } from "./goFaxRBlocklist.oa.mjs";
import { goFaxSBlockgroups } from "./goFaxSBlockgroups.oa.mjs";
import { goFaxSBlocklist } from "./goFaxSBlocklist.oa.mjs";

/**
 * @summary goFaxAccount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFaxAccount OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { goFaxDeliveryMode
 *                               | facsimileTelephoneNumber
 *                               | uid
 *                               | goFaxIsEnabled }
 *   MAY CONTAIN               { goFaxPrinter
 *                               | goFaxDivertNumber
 *                               | goFaxLanguage
 *                               | goFaxFormat
 *                               | goFaxRBlocklist
 *                               | goFaxRBlockgroups
 *                               | goFaxSBlocklist
 *                               | goFaxSBlockgroups
 *                               | mail
 *                               | facsimileAlternateTelephoneNumber }
 *   LDAP-NAME                 {"goFaxAccount"}
 *   LDAP-DESC                 "goFax Account objectclass (v1.0.4)"
 *   ID                        id-oc-goFaxAccount }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFaxAccount: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [goFaxDeliveryMode, facsimileTelephoneNumber, uid, goFaxIsEnabled] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [goFaxPrinter, goFaxDivertNumber, goFaxLanguage, goFaxFormat, goFaxRBlocklist, goFaxRBlockgroups, goFaxSBlocklist, goFaxSBlockgroups, mail, facsimileAlternateTelephoneNumber] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFaxAccount"],
    "&ldapDesc": "goFax Account objectclass (v1.0.4)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFaxAccount /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
