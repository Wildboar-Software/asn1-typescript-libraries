/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_goFonHardware_2 } from "../LdapGosaCoreGofon/id-oc-goFonHardware-2.va.mjs";
import { ipHostNumber } from "../NIS/ipHostNumber.oa.mjs";
import { macAddress } from "../NIS/macAddress.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { goFonAccountCode } from "./goFonAccountCode.oa.mjs";
import { goFonAuth } from "./goFonAuth.oa.mjs";
import { goFonDefaultIP } from "./goFonDefaultIP.oa.mjs";
import { goFonDeny } from "./goFonDeny.oa.mjs";
import { goFonDmtfMode } from "./goFonDmtfMode.oa.mjs";
import { goFonHost } from "./goFonHost.oa.mjs";
import { goFonInkeys } from "./goFonInkeys.oa.mjs";
import { goFonMSN } from "./goFonMSN.oa.mjs";
import { goFonOutkey } from "./goFonOutkey.oa.mjs";
import { goFonPermit } from "./goFonPermit.oa.mjs";
import { goFonQualify } from "./goFonQualify.oa.mjs";
import { goFonSecret } from "./goFonSecret.oa.mjs";
import { goFonTrunk } from "./goFonTrunk.oa.mjs";
import { goFonType } from "./goFonType.oa.mjs";

/**
 * @summary goFonHardware_2
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * goFonHardware-2 OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | macAddress
 *                               | ipHostNumber }
 *   MAY CONTAIN               { description
 *                               | goFonType
 *                               | goFonDmtfMode
 *                               | goFonHost
 *                               | goFonDefaultIP
 *                               | goFonQualify
 *                               | goFonAuth
 *                               | goFonSecret
 *                               | goFonInkeys
 *                               | goFonOutkey
 *                               | goFonTrunk
 *                               | goFonAccountCode
 *                               | goFonMSN
 *                               | goFonPermit
 *                               | goFonDeny }
 *   LDAP-NAME                 {"goFonHardware"}
 *   LDAP-DESC                 "defines a telephone (v2.7)"
 *   ID                        id-oc-goFonHardware-2 }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const goFonHardware_2: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, macAddress, ipHostNumber] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, goFonType, goFonDmtfMode, goFonHost, goFonDefaultIP, goFonQualify, goFonAuth, goFonSecret, goFonInkeys, goFonOutkey, goFonTrunk, goFonAccountCode, goFonMSN, goFonPermit, goFonDeny] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["goFonHardware"],
    "&ldapDesc": "defines a telephone (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_goFonHardware_2 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
