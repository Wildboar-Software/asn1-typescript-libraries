/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_mS_SQL_SQLPublication } from "../LdapSchema2ldifMicrosoft/id-oc-mS-SQL-SQLPublication.va.mjs";
import { mS_SQL_AllowAnonymousSubscription } from "../MSUser/mS-SQL-AllowAnonymousSubscription.oa.mjs";
import { mS_SQL_AllowImmediateUpdatingSubscription } from "../MSUser/mS-SQL-AllowImmediateUpdatingSubscription.oa.mjs";
import { mS_SQL_AllowKnownPullSubscription } from "../MSUser/mS-SQL-AllowKnownPullSubscription.oa.mjs";
import { mS_SQL_AllowQueuedUpdatingSubscription } from "../MSUser/mS-SQL-AllowQueuedUpdatingSubscription.oa.mjs";
import { mS_SQL_AllowSnapshotFilesFTPDownloading } from "../MSUser/mS-SQL-AllowSnapshotFilesFTPDownloading.oa.mjs";
import { mS_SQL_Database } from "../MSUser/mS-SQL-Database.oa.mjs";
import { mS_SQL_Description } from "../MSUser/mS-SQL-Description.oa.mjs";
import { mS_SQL_Name } from "../MSUser/mS-SQL-Name.oa.mjs";
import { mS_SQL_Publisher } from "../MSUser/mS-SQL-Publisher.oa.mjs";
import { mS_SQL_Status } from "../MSUser/mS-SQL-Status.oa.mjs";
import { mS_SQL_ThirdParty } from "../MSUser/mS-SQL-ThirdParty.oa.mjs";
import { mS_SQL_Type } from "../MSUser/mS-SQL-Type.oa.mjs";

/**
 * @summary mS_SQL_SQLPublication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mS-SQL-SQLPublication OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { mS-SQL-Name
 *                               | mS-SQL-Status
 *                               | mS-SQL-Description
 *                               | mS-SQL-Type
 *                               | mS-SQL-Database
 *                               | mS-SQL-AllowAnonymousSubscription
 *                               | mS-SQL-Publisher
 *                               | mS-SQL-AllowKnownPullSubscription
 *                               | mS-SQL-AllowImmediateUpdatingSubscription
 *                               | mS-SQL-AllowQueuedUpdatingSubscription
 *                               | mS-SQL-AllowSnapshotFilesFTPDownloading
 *                               | mS-SQL-ThirdParty }
 *   LDAP-NAME                 {"mS-SQL-SQLPublication"}
 *   ID                        id-oc-mS-SQL-SQLPublication }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mS_SQL_SQLPublication: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [mS_SQL_Name, mS_SQL_Status, mS_SQL_Description, mS_SQL_Type, mS_SQL_Database, mS_SQL_AllowAnonymousSubscription, mS_SQL_Publisher, mS_SQL_AllowKnownPullSubscription, mS_SQL_AllowImmediateUpdatingSubscription, mS_SQL_AllowQueuedUpdatingSubscription, mS_SQL_AllowSnapshotFilesFTPDownloading, mS_SQL_ThirdParty] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["mS-SQL-SQLPublication"],
    "&id": id_oc_mS_SQL_SQLPublication /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
