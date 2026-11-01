/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoWorkstation } from "../LdapGosaCoreGoto/id-oc-gotoWorkstation.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { gotoShare } from "../LdapGosaCoreGoto/gotoShare.oa.mjs";
import { goFonHardware } from "../LdapGosaCoreGofon/goFonHardware.oa.mjs";


/**
 * @summary gotoWorkstation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoWorkstation OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | macAddress
 *                               | ipHostNumber
 *                               | gotoShare
 *                               | goFonHardware }
 *   LDAP-NAME                 {"gotoWorkstation"}
 *   LDAP-DESC                 "GOto - Gonicus Terminal Concept, objectclass (v2.7)"
 *   ID                        id-oc-gotoWorkstation }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoWorkstation: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, macAddress, ipHostNumber, gotoShare, goFonHardware, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoWorkstation" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - Gonicus Terminal Concept, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoWorkstation /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

