/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
import { id_oc_gLUE2ApplicationEnvironment } from "../LdapGlue607ApplicationEnvironment/id-oc-gLUE2ApplicationEnvironment.va.mjs";
import { gLUE2ApplicationEnvironmentAppName } from "./gLUE2ApplicationEnvironmentAppName.oa.mjs";
import { gLUE2ApplicationEnvironmentAppVersion } from "./gLUE2ApplicationEnvironmentAppVersion.oa.mjs";
import { gLUE2ApplicationEnvironmentBestBenchmark } from "./gLUE2ApplicationEnvironmentBestBenchmark.oa.mjs";
import { gLUE2ApplicationEnvironmentComputingManagerForeignKey } from "./gLUE2ApplicationEnvironmentComputingManagerForeignKey.oa.mjs";
import { gLUE2ApplicationEnvironmentDescription } from "./gLUE2ApplicationEnvironmentDescription.oa.mjs";
import { gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey } from "./gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeJobs } from "./gLUE2ApplicationEnvironmentFreeJobs.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeSlots } from "./gLUE2ApplicationEnvironmentFreeSlots.oa.mjs";
import { gLUE2ApplicationEnvironmentFreeUserSeats } from "./gLUE2ApplicationEnvironmentFreeUserSeats.oa.mjs";
import { gLUE2ApplicationEnvironmentID } from "./gLUE2ApplicationEnvironmentID.oa.mjs";
import { gLUE2ApplicationEnvironmentLicense } from "./gLUE2ApplicationEnvironmentLicense.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxJobs } from "./gLUE2ApplicationEnvironmentMaxJobs.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxSlots } from "./gLUE2ApplicationEnvironmentMaxSlots.oa.mjs";
import { gLUE2ApplicationEnvironmentMaxUserSeats } from "./gLUE2ApplicationEnvironmentMaxUserSeats.oa.mjs";
import { gLUE2ApplicationEnvironmentParallelSupport } from "./gLUE2ApplicationEnvironmentParallelSupport.oa.mjs";
import { gLUE2ApplicationEnvironmentRemovalDate } from "./gLUE2ApplicationEnvironmentRemovalDate.oa.mjs";
import { gLUE2ApplicationEnvironmentRepository } from "./gLUE2ApplicationEnvironmentRepository.oa.mjs";
import { gLUE2ApplicationEnvironmentState } from "./gLUE2ApplicationEnvironmentState.oa.mjs";

/**
 * @summary gLUE2ApplicationEnvironment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2ApplicationEnvironment OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ApplicationEnvironmentID
 *                               | gLUE2ApplicationEnvironmentAppName
 *                               | gLUE2ApplicationEnvironmentComputingManagerForeignKey }
 *   MAY CONTAIN               { gLUE2ApplicationEnvironmentAppVersion
 *                               | gLUE2ApplicationEnvironmentRepository
 *                               | gLUE2ApplicationEnvironmentState
 *                               | gLUE2ApplicationEnvironmentRemovalDate
 *                               | gLUE2ApplicationEnvironmentLicense
 *                               | gLUE2ApplicationEnvironmentDescription
 *                               | gLUE2ApplicationEnvironmentBestBenchmark
 *                               | gLUE2ApplicationEnvironmentParallelSupport
 *                               | gLUE2ApplicationEnvironmentMaxSlots
 *                               | gLUE2ApplicationEnvironmentMaxJobs
 *                               | gLUE2ApplicationEnvironmentMaxUserSeats
 *                               | gLUE2ApplicationEnvironmentFreeSlots
 *                               | gLUE2ApplicationEnvironmentFreeJobs
 *                               | gLUE2ApplicationEnvironmentFreeUserSeats
 *                               | gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey }
 *   LDAP-NAME                 {"GLUE2ApplicationEnvironment"}
 *   LDAP-DESC                 "Description of the application software or environment characteristic available within one or more execution environments"
 *   ID                        id-oc-gLUE2ApplicationEnvironment }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2ApplicationEnvironment: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [gLUE2Entity] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gLUE2ApplicationEnvironmentID, gLUE2ApplicationEnvironmentAppName, gLUE2ApplicationEnvironmentComputingManagerForeignKey] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gLUE2ApplicationEnvironmentAppVersion, gLUE2ApplicationEnvironmentRepository, gLUE2ApplicationEnvironmentState, gLUE2ApplicationEnvironmentRemovalDate, gLUE2ApplicationEnvironmentLicense, gLUE2ApplicationEnvironmentDescription, gLUE2ApplicationEnvironmentBestBenchmark, gLUE2ApplicationEnvironmentParallelSupport, gLUE2ApplicationEnvironmentMaxSlots, gLUE2ApplicationEnvironmentMaxJobs, gLUE2ApplicationEnvironmentMaxUserSeats, gLUE2ApplicationEnvironmentFreeSlots, gLUE2ApplicationEnvironmentFreeJobs, gLUE2ApplicationEnvironmentFreeUserSeats, gLUE2ApplicationEnvironmentExecutionEnvironmentForeignKey] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["GLUE2ApplicationEnvironment"],
    "&ldapDesc": "Description of the application software or environment characteristic available within one or more execution environments" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2ApplicationEnvironment /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
