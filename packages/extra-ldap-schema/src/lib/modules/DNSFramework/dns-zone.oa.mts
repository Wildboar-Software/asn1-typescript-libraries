/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { id_oc_dns_zone } from "../DNSFramework/id-oc-dns-zone.va.mjs";

import { dns_record } from "../DNSFramework/dns-record.oa.mjs";
import { dnsName } from "../SelectedAttributeTypes/dnsName.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { aRecord } from "../DNSFramework/aRecord.oa.mjs";
import { mDRecord } from "../DNSFramework/mDRecord.oa.mjs";
import { mxRecord } from "../DNSFramework/mxRecord.oa.mjs";
import { nSRecord } from "../DNSFramework/nSRecord.oa.mjs";
import { sOARecord } from "../DNSFramework/sOARecord.oa.mjs";
import { cNAMERecord } from "../DNSFramework/cNAMERecord.oa.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
/**
 * @summary dns_zone
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dns-zone OBJECT-CLASS ::= {
 *     SUBCLASS OF     {top}
 *     KIND            auxiliary
 *     MAY CONTAIN     {
 *         dns-record
 *         | dnsName
 *         | dc
 *         | aRecord
 *         | mDRecord
 *         | mxRecord
 *         | nSRecord
 *         | sOARecord
 *         | cNAMERecord
 *     }
 *     LDAP-NAME       {"DNS Zone"}
 *     LDAP-DESC       "A DNS Zone"
 *     ID              id-oc-dns-zone
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dns_zone: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dns_record, dnsName, dc, aRecord, mDRecord, mxRecord, nSRecord, sOARecord, cNAMERecord, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "DNS Zone" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A DNS Zone" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dns_zone /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
