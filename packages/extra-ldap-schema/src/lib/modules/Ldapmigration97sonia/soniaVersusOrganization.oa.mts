/* eslint-disable */

import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";

import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVersusOrganization } from "../Ldapmigration97sonia/id-oc-soniaVersusOrganization.va.mjs";

import { versusLongSchoolName } from "../Ldapmigration97sonia/versusLongSchoolName.oa.mjs";
import { versusShortSchoolName } from "../Ldapmigration97sonia/versusShortSchoolName.oa.mjs";
import { versusSchoolAdministrationId } from "../Ldapmigration97sonia/versusSchoolAdministrationId.oa.mjs";
import { versusAntaresSchoolId } from "../Ldapmigration97sonia/versusAntaresSchoolId.oa.mjs";
/**
 * @summary soniaVersusOrganization
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * soniaVersusOrganization OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { versusLongSchoolName
 *                               | versusShortSchoolName
 *                               | versusSchoolAdministrationId
 *                               | versusAntaresSchoolId }
 *   LDAP-NAME                 {"SoniaVersusOrganization"}
 *   ID                        id-oc-soniaVersusOrganization }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const soniaVersusOrganization: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ versusLongSchoolName, versusShortSchoolName, versusSchoolAdministrationId, versusAntaresSchoolId, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "SoniaVersusOrganization" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_soniaVersusOrganization /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
