/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVoting } from "../Ldapmigration97sonia/id-oc-soniaVoting.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { soniaVotingAccessFilter } from "./soniaVotingAccessFilter.oa.mjs";
import { soniaVotingDescription } from "./soniaVotingDescription.oa.mjs";
import { soniaVotingEnabledCount } from "./soniaVotingEnabledCount.oa.mjs";
import { soniaVotingEndDate } from "./soniaVotingEndDate.oa.mjs";
import { soniaVotingFailedCount } from "./soniaVotingFailedCount.oa.mjs";
import { soniaVotingMaxChoice } from "./soniaVotingMaxChoice.oa.mjs";
import { soniaVotingMinChoice } from "./soniaVotingMinChoice.oa.mjs";
import { soniaVotingResultViewer } from "./soniaVotingResultViewer.oa.mjs";
import { soniaVotingSeat } from "./soniaVotingSeat.oa.mjs";
import { soniaVotingStartDate } from "./soniaVotingStartDate.oa.mjs";
import { soniaVotingSucceedCount } from "./soniaVotingSucceedCount.oa.mjs";

/**
 * @summary soniaVoting
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaVoting OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { soniaVotingDescription
 *                               | soniaVotingStartDate
 *                               | soniaVotingEndDate
 *                               | soniaVotingAccessFilter
 *                               | soniaVotingResultViewer
 *                               | soniaVotingMinChoice
 *                               | soniaVotingMaxChoice
 *                               | soniaVotingSeat
 *                               | soniaVotingSucceedCount
 *                               | soniaVotingFailedCount
 *                               | soniaVotingEnabledCount }
 *   LDAP-NAME                 {"soniaVoting"}
 *   ID                        id-oc-soniaVoting }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaVoting: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaVotingDescription, soniaVotingStartDate, soniaVotingEndDate, soniaVotingAccessFilter, soniaVotingResultViewer, soniaVotingMinChoice, soniaVotingMaxChoice, soniaVotingSeat, soniaVotingSucceedCount, soniaVotingFailedCount, soniaVotingEnabledCount] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaVoting"],
    "&id": id_oc_soniaVoting /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
