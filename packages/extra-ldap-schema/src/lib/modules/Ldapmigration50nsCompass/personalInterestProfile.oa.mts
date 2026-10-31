/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_personalInterestProfile } from "../Ldapmigration50nsCompass/id-oc-personalInterestProfile.va.mjs";


/**
 * @summary personalInterestProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * personalInterestProfile OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass
 *                               | pipuid }
 *   MAY CONTAIN               { pipuniqueid
 *                               | pipstatus
 *                               | pipusertype
 *                               | pipfrequency
 *                               | pipmedium
 *                               | pipformat
 *                               | piphour
 *                               | pipmaxhits
 *                               | pipresultset
 *                               | pipsortorder
 *                               | piptimestamp
 *                               | pipirlist
 *                               | pipiroption
 *                               | pippwp
 *                               | piplastcount
 *                               | piptotalcount
 *                               | piptotalrun
 *                               | pipnotify
 *                               | pipprivilege
 *                               | pipgroup
 *                               | pipidstcount
 *                               | pipstid
 *                               | pipstname
 *                               | pipstquery
 *                               | pipsttaxonomy
 *                               | pipstinterest
 *                               | pipsttype
 *                               | pipstprivacy
 *                               | pipststatus
 *                               | pipstlastcount
 *                               | pipsttotalcount
 *                               | pipsttotalrun
 *                               | pipstcategory
 *                               | pipstfrequency
 *                               | pipstmedium
 *                               | pipstformat
 *                               | pipsthour
 *                               | pipstmaxhits
 *                               | pipstresultset
 *                               | pipstsortorder
 *                               | pipsttimestamp
 *                               | pipstirlist
 *                               | pipstiroption
 *                               | pipreservedcis1
 *                               | pipreservedcis2
 *                               | pipreservedcis3
 *                               | pipreservedcis4
 *                               | pipreservedcis5
 *                               | pipreservedcis6
 *                               | pipreservedces1
 *                               | pipreservedces2
 *                               | pipreservedces3 }
 *   LDAP-NAME                 {"personalInterestProfile"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-personalInterestProfile }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const personalInterestProfile: OBJECT_CLASS = undefined;

/* eslint-enable */
