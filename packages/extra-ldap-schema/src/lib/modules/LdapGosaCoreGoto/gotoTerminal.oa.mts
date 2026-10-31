/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { goFonHardware } from "../LdapGosaCoreGofon/goFonHardware.oa.mjs";
import { id_oc_gotoTerminal } from "../LdapGosaCoreGoto/id-oc-gotoTerminal.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gotoShare } from "./gotoShare.oa.mjs";

/**
 * @summary gotoTerminal
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoTerminal OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | macAddress
 *                               | ipHostNumber
 *                               | gotoShare
 *                               | goFonHardware }
 *   LDAP-NAME                 {"gotoTerminal"}
 *   LDAP-DESC                 "GOto - Gonicus Terminal Concept, objectclass (v2.7)"
 *   ID                        id-oc-gotoTerminal }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoTerminal: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, macAddress, ipHostNumber, gotoShare, goFonHardware] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoTerminal"],
    "&ldapDesc": "GOto - Gonicus Terminal Concept, objectclass (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoTerminal /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
