/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaSequence } from "../Ldapmigration97sonia/id-oc-soniaSequence.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { soniaSequenceCycleIsEnabled } from "./soniaSequenceCycleIsEnabled.oa.mjs";
import { soniaSequenceIncrementBy } from "./soniaSequenceIncrementBy.oa.mjs";
import { soniaSequenceIsLocked } from "./soniaSequenceIsLocked.oa.mjs";
import { soniaSequenceLastValue } from "./soniaSequenceLastValue.oa.mjs";
import { soniaSequenceMaxValue } from "./soniaSequenceMaxValue.oa.mjs";
import { soniaSequenceMinValue } from "./soniaSequenceMinValue.oa.mjs";

/**
 * @summary soniaSequence
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaSequence OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | soniaSequenceMinValue
 *                               | soniaSequenceMaxValue
 *                               | soniaSequenceIncrementBy }
 *   MAY CONTAIN               { soniaSequenceCycleIsEnabled
 *                               | soniaSequenceIsLocked
 *                               | soniaSequenceLastValue }
 *   LDAP-NAME                 {"soniaSequence"}
 *   ID                        id-oc-soniaSequence }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaSequence: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, soniaSequenceMinValue, soniaSequenceMaxValue, soniaSequenceIncrementBy] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [soniaSequenceCycleIsEnabled, soniaSequenceIsLocked, soniaSequenceLastValue] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["soniaSequence"],
    "&id": id_oc_soniaSequence /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
