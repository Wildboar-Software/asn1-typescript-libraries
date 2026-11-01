/* eslint-disable */
import { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
// export { DNSRecord, _decode_DNSRecord, _encode_DNSRecord } from "../DNSFramework/DNSRecord.ta.mjs";
import { id_lsx_dnsRec } from "../DNSFramework/id-lsx-dnsRec.va.mjs";
// export { id_lsx_dnsRec } from "../DNSFramework/id-lsx-dnsRec.va.mjs";
import { type SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";


/**
 * @summary dnsRec
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsRec SYNTAX-NAME ::= {
 *     LDAP-DESC            "DNS Record, displayed loosely according to IETF RFC 1035, Section 5."
 *     DIRECTORY SYNTAX    DNSRecord
 *     ID                    id-lsx-dnsRec
 * }
 * ```
 * 
 * @constant
 * @type {SYNTAX_NAME<DNSRecord>}
 * @implements {SYNTAX_NAME<DNSRecord>}
 */
export
const dnsRec: SYNTAX_NAME<DNSRecord> = {
    class: "SYNTAX-NAME",
    decoderFor: {
        "&Type": _decode_DNSRecord,
    },
    encoderFor: {
        "&Type": _encode_DNSRecord,
    },
    "&ldapDesc": "DNS Record, displayed loosely according to IETF RFC 1035, Section 5." /* OBJECT_FIELD_SETTING */,
    "&id": id_lsx_dnsRec /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
