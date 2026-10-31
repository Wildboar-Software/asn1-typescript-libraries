/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVotingChoice } from "../Ldapmigration97sonia/id-oc-soniaVotingChoice.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { soniaVotingChoiceCount } from "./soniaVotingChoiceCount.oa.mjs";
import { soniaVotingChoiceDescription } from "./soniaVotingChoiceDescription.oa.mjs";

/**
 * @summary soniaVotingChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaVotingChoice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { soniaVotingChoiceDescription
 *                               | soniaVotingChoiceCount }
 *   LDAP-NAME                 {"soniaVotingChoice"}
 *   ID                        id-oc-soniaVotingChoice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaVotingChoice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaVotingChoiceDescription, soniaVotingChoiceCount] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaVotingChoice"],
    "&id": id_oc_soniaVotingChoice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
