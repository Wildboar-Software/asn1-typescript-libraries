/* eslint-disable */
import { id_oc_dns_zone } from "../DNSFramework/id-oc-dns-zone.va.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";
import { dnsName } from "../SelectedAttributeTypes/dnsName.oa.mjs";
import { aRecord } from "./aRecord.oa.mjs";
import { cNAMERecord } from "./cNAMERecord.oa.mjs";
import { dns_record } from "./dns-record.oa.mjs";
import { mDRecord } from "./mDRecord.oa.mjs";
import { mxRecord } from "./mxRecord.oa.mjs";
import { nSRecord } from "./nSRecord.oa.mjs";
import { sOARecord } from "./sOARecord.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dns_record, dnsName, dc, aRecord, mDRecord, mxRecord, nSRecord, sOARecord, cNAMERecord] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["DNS Zone"],
    "&ldapDesc": "A DNS Zone" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dns_zone /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
