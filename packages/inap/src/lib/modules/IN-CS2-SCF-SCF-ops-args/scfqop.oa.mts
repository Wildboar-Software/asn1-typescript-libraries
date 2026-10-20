/* eslint-disable */
import {
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { example_protection_mapping } from "../IN-CS2-SCF-SCF-ops-args/example-protection-mapping.oa.mjs";
// export { example_protection_mapping } from "../IN-CS2-SCF-SCF-ops-args/example-protection-mapping.oa.mjs";
import { type SCFQOP } from "../IN-CS2-SCF-SCF-ops-args/SCFQOP.oca.mjs";


/**
 * @summary scfqop
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfqop SCFQOP ::= {
 *   SCFQOP-ID         {1 2 3 -- an appropriate OID goes here --},
 *   SCFBINDERROR-QOP
 *     example-protection-mapping -- an appropriate information object goes here --,
 *   SCFERRORS-QOP
 *     example-protection-mapping -- an appropriate information object goes here --,
 *   SCFOPARG-QOP
 *     example-protection-mapping -- an appropriate information object goes here --,
 *   SCFOPRES-QOP      example-protection-mapping
 *  -- an appropriate information object goes here --}
 * ```
 * 
 * @constant
 * @type {SCFQOP}
 * @implements {SCFQOP}
 */
export
const scfqop: SCFQOP = {
    class: "SCFQOP",
    decoderFor: {
    },
    encoderFor: {
    },
    "&scfqop-id": _OID.fromParts([1, 2, 3,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&scfBindErrorQOP": example_protection_mapping /* OBJECT_FIELD_SETTING */,
    "&scfErrorsQOP": example_protection_mapping /* OBJECT_FIELD_SETTING */,
    "&scfArgumentQOP": example_protection_mapping /* OBJECT_FIELD_SETTING */,
    "&scfResultQOP": example_protection_mapping /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
