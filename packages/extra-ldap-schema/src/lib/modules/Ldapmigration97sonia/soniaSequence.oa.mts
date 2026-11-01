/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaSequence } from "../Ldapmigration97sonia/id-oc-soniaSequence.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { soniaSequenceMinValue } from "../Ldapmigration97sonia/soniaSequenceMinValue.oa.mjs";
import { soniaSequenceMaxValue } from "../Ldapmigration97sonia/soniaSequenceMaxValue.oa.mjs";
import { soniaSequenceIncrementBy } from "../Ldapmigration97sonia/soniaSequenceIncrementBy.oa.mjs";
import { soniaSequenceCycleIsEnabled } from "../Ldapmigration97sonia/soniaSequenceCycleIsEnabled.oa.mjs";
import { soniaSequenceIsLocked } from "../Ldapmigration97sonia/soniaSequenceIsLocked.oa.mjs";
import { soniaSequenceLastValue } from "../Ldapmigration97sonia/soniaSequenceLastValue.oa.mjs";


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
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, soniaSequenceMinValue, soniaSequenceMaxValue, soniaSequenceIncrementBy, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ soniaSequenceCycleIsEnabled, soniaSequenceIsLocked, soniaSequenceLastValue, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "soniaSequence" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaSequence /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

