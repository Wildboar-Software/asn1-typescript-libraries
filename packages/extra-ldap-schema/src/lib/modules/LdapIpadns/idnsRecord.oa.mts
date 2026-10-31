/* eslint-disable */
import { aRecord } from "../DNSFramework/aRecord.oa.mjs";
import { cNAMERecord } from "../DNSFramework/cNAMERecord.oa.mjs";
import { mDRecord } from "../DNSFramework/mDRecord.oa.mjs";
import { mxRecord } from "../DNSFramework/mxRecord.oa.mjs";
import { nSRecord } from "../DNSFramework/nSRecord.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_idnsRecord } from "../LdapIpadns/id-oc-idnsRecord.va.mjs";
import { idnsName } from "../LdapIpadns/idnsName.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { a6Record } from "./a6Record.oa.mjs";
import { aAAARecord } from "./aAAARecord.oa.mjs";
import { aFSDBRecord } from "./aFSDBRecord.oa.mjs";
import { certRecord } from "./certRecord.oa.mjs";
import { dNSClass } from "./dNSClass.oa.mjs";
import { dNSTTL } from "./dNSTTL.oa.mjs";
import { dNameRecord } from "./dNameRecord.oa.mjs";
import { dSRecord } from "./dSRecord.oa.mjs";
import { hInfoRecord } from "./hInfoRecord.oa.mjs";
import { idnsAllowDynUpdate } from "./idnsAllowDynUpdate.oa.mjs";
import { kXRecord } from "./kXRecord.oa.mjs";
import { keyRecord } from "./keyRecord.oa.mjs";
import { locRecord } from "./locRecord.oa.mjs";
import { mInfoRecord } from "./mInfoRecord.oa.mjs";
import { nAPTRRecord } from "./nAPTRRecord.oa.mjs";
import { nSECRecord } from "./nSECRecord.oa.mjs";
import { nXTRecord } from "./nXTRecord.oa.mjs";
import { pTRRecord } from "./pTRRecord.oa.mjs";
import { rRSIGRecord } from "./rRSIGRecord.oa.mjs";
import { sRVRecord } from "./sRVRecord.oa.mjs";
import { sSHFPRecord } from "./sSHFPRecord.oa.mjs";
import { sigRecord } from "./sigRecord.oa.mjs";
import { tXTRecord } from "./tXTRecord.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [idnsName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName, idnsAllowDynUpdate, dNSTTL, dNSClass, aRecord, aAAARecord, a6Record, nSRecord, cNAMERecord, pTRRecord, sRVRecord, tXTRecord, mxRecord, mDRecord, hInfoRecord, mInfoRecord, aFSDBRecord, sigRecord, keyRecord, locRecord, nXTRecord, nAPTRRecord, kXRecord, certRecord, dNameRecord, dSRecord, sSHFPRecord, rRSIGRecord, nSECRecord] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["idnsRecord"],
    "&ldapDesc": "dns Record, usually a host" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_idnsRecord /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
