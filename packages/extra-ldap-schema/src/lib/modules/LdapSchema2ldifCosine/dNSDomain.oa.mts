/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { domain } from "../LdapSchema2ldifCosine/domain.oa.mjs";
// export { domain } from "../LdapSchema2ldifCosine/domain.oa.mjs";
import { id_oc_dNSDomain } from "../LdapSchema2ldifCosine/id-oc-dNSDomain.va.mjs";
import { aRecord } from "../Cosine/aRecord.oa.mjs";
import { mDRecord } from "../Cosine/mDRecord.oa.mjs";
import { mxRecord } from "../Cosine/mxRecord.oa.mjs";
import { nSRecord } from "../Cosine/nSRecord.oa.mjs";
import { sOARecord } from "../Cosine/sOARecord.oa.mjs";
import { cNAMERecord } from "../Cosine/cNAMERecord.oa.mjs";
// export { id_oc_dNSDomain } from "../LdapSchema2ldifCosine/id-oc-dNSDomain.va.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ domain, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ aRecord, mDRecord, mxRecord, nSRecord, sOARecord, cNAMERecord, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dNSDomain" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dNSDomain /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
