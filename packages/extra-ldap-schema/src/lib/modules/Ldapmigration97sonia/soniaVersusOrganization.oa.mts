/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_soniaVersusOrganization } from "../Ldapmigration97sonia/id-oc-soniaVersusOrganization.va.mjs";
import { versusAntaresSchoolId } from "./versusAntaresSchoolId.oa.mjs";
import { versusLongSchoolName } from "./versusLongSchoolName.oa.mjs";
import { versusSchoolAdministrationId } from "./versusSchoolAdministrationId.oa.mjs";
import { versusShortSchoolName } from "./versusShortSchoolName.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [versusLongSchoolName, versusShortSchoolName, versusSchoolAdministrationId, versusAntaresSchoolId] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["SoniaVersusOrganization"],
    "&id": id_oc_soniaVersusOrganization /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
