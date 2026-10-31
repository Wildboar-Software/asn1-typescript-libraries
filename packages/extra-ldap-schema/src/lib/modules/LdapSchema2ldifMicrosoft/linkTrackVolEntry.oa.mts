/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { leaf } from "../LdapSchema2ldifFmserver/leaf.oa.mjs";
import { id_oc_linkTrackVolEntry } from "../LdapSchema2ldifMicrosoft/id-oc-linkTrackVolEntry.va.mjs";
import { currMachineId } from "../MSUser/currMachineId.oa.mjs";
import { linkTrackSecret } from "../MSUser/linkTrackSecret.oa.mjs";
import { objectCount } from "../MSUser/objectCount.oa.mjs";
import { seqNotification } from "../MSUser/seqNotification.oa.mjs";
import { timeRefresh } from "../MSUser/timeRefresh.oa.mjs";
import { timeVolChange } from "../MSUser/timeVolChange.oa.mjs";
import { volTableGUID } from "../MSUser/volTableGUID.oa.mjs";
import { volTableIdxGUID } from "../MSUser/volTableIdxGUID.oa.mjs";

/**
 * @summary linkTrackVolEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * linkTrackVolEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { leaf }
 *   MAY CONTAIN               { linkTrackSecret
 *                               | volTableIdxGUID
 *                               | volTableGUID
 *                               | currMachineId
 *                               | timeVolChange
 *                               | timeRefresh
 *                               | seqNotification
 *                               | objectCount }
 *   LDAP-NAME                 {"linkTrackVolEntry"}
 *   ID                        id-oc-linkTrackVolEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const linkTrackVolEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [leaf] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [linkTrackSecret, volTableIdxGUID, volTableGUID, currMachineId, timeVolChange, timeRefresh, seqNotification, objectCount] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["linkTrackVolEntry"],
    "&id": id_oc_linkTrackVolEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
