/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { idnsName } from "../LdapIpadns/idnsName.oa.mjs";
import { id_oc_idnsRecord } from "../LdapIpadns/id-oc-idnsRecord.va.mjs";

import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { idnsAllowDynUpdate } from "../LdapIpadns/idnsAllowDynUpdate.oa.mjs";
import { dNSTTL } from "../LdapIpadns/dNSTTL.oa.mjs";
import { dNSClass } from "../LdapIpadns/dNSClass.oa.mjs";
import { aRecord } from "../DNSFramework/aRecord.oa.mjs";
import { aAAARecord } from "../LdapIpadns/aAAARecord.oa.mjs";
import { a6Record } from "../LdapIpadns/a6Record.oa.mjs";
import { nSRecord } from "../DNSFramework/nSRecord.oa.mjs";
import { cNAMERecord } from "../DNSFramework/cNAMERecord.oa.mjs";
import { pTRRecord } from "../LdapIpadns/pTRRecord.oa.mjs";
import { sRVRecord } from "../LdapIpadns/sRVRecord.oa.mjs";
import { tXTRecord } from "../LdapIpadns/tXTRecord.oa.mjs";
import { mxRecord } from "../DNSFramework/mxRecord.oa.mjs";
import { mDRecord } from "../DNSFramework/mDRecord.oa.mjs";
import { hInfoRecord } from "../LdapIpadns/hInfoRecord.oa.mjs";
import { mInfoRecord } from "../LdapIpadns/mInfoRecord.oa.mjs";
import { aFSDBRecord } from "../LdapIpadns/aFSDBRecord.oa.mjs";
import { sigRecord } from "../LdapIpadns/sigRecord.oa.mjs";
import { keyRecord } from "../LdapIpadns/keyRecord.oa.mjs";
import { locRecord } from "../LdapIpadns/locRecord.oa.mjs";
import { nXTRecord } from "../LdapIpadns/nXTRecord.oa.mjs";
import { nAPTRRecord } from "../LdapIpadns/nAPTRRecord.oa.mjs";
import { kXRecord } from "../LdapIpadns/kXRecord.oa.mjs";
import { certRecord } from "../LdapIpadns/certRecord.oa.mjs";
import { dNameRecord } from "../LdapIpadns/dNameRecord.oa.mjs";
import { dSRecord } from "../LdapIpadns/dSRecord.oa.mjs";
import { sSHFPRecord } from "../LdapIpadns/sSHFPRecord.oa.mjs";
import { rRSIGRecord } from "../LdapIpadns/rRSIGRecord.oa.mjs";
import { nSECRecord } from "../LdapIpadns/nSECRecord.oa.mjs";
/**
 * @summary idnsRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * idnsRecord OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { idnsName }
 *   MAY CONTAIN               { commonName
 *                               | idnsAllowDynUpdate
 *                               | dNSTTL
 *                               | dNSClass
 *                               | aRecord
 *                               | aAAARecord
 *                               | a6Record
 *                               | nSRecord
 *                               | cNAMERecord
 *                               | pTRRecord
 *                               | sRVRecord
 *                               | tXTRecord
 *                               | mxRecord
 *                               | mDRecord
 *                               | hInfoRecord
 *                               | mInfoRecord
 *                               | aFSDBRecord
 *                               | sigRecord
 *                               | keyRecord
 *                               | locRecord
 *                               | nXTRecord
 *                               | nAPTRRecord
 *                               | kXRecord
 *                               | certRecord
 *                               | dNameRecord
 *                               | dSRecord
 *                               | sSHFPRecord
 *                               | rRSIGRecord
 *                               | nSECRecord }
 *   LDAP-NAME                 {"idnsRecord"}
 *   LDAP-DESC                 "dns Record, usually a host"
 *   ID                        id-oc-idnsRecord }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const idnsRecord: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ idnsName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ commonName, idnsAllowDynUpdate, dNSTTL, dNSClass, aRecord, aAAARecord, a6Record, nSRecord, cNAMERecord, pTRRecord, sRVRecord, tXTRecord, mxRecord, mDRecord, hInfoRecord, mInfoRecord, aFSDBRecord, sigRecord, keyRecord, locRecord, nXTRecord, nAPTRRecord, kXRecord, certRecord, dNameRecord, dSRecord, sSHFPRecord, rRSIGRecord, nSECRecord, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "idnsRecord" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "dns Record, usually a host" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsRecord /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
