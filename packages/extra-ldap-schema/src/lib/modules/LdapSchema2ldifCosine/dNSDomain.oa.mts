/* eslint-disable */
import { aRecord } from "../DNSFramework/aRecord.oa.mjs";
import { cNAMERecord } from "../DNSFramework/cNAMERecord.oa.mjs";
import { mDRecord } from "../DNSFramework/mDRecord.oa.mjs";
import { mxRecord } from "../DNSFramework/mxRecord.oa.mjs";
import { nSRecord } from "../DNSFramework/nSRecord.oa.mjs";
import { sOARecord } from "../DNSFramework/sOARecord.oa.mjs";
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { domain } from "../LdapSchema2ldifCosine/domain.oa.mjs";
import { id_oc_dNSDomain } from "../LdapSchema2ldifCosine/id-oc-dNSDomain.va.mjs";

/**
 * @summary dNSDomain
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dNSDomain OBJECT-CLASS ::= {
 *   SUBCLASS OF               { domain }
 *   MAY CONTAIN               { aRecord
 *                               | mDRecord
 *                               | mxRecord
 *                               | nSRecord
 *                               | sOARecord
 *                               | cNAMERecord }
 *   LDAP-NAME                 {"dNSDomain"}
 *   ID                        id-oc-dNSDomain }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dNSDomain: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [domain] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [aRecord, mDRecord, mxRecord, nSRecord, sOARecord, cNAMERecord] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dNSDomain"],
    "&id": id_oc_dNSDomain /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
