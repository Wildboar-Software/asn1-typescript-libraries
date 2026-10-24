/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type CS3SCFCUSFGenericPDUs, _decode_CS3SCFCUSFGenericPDUs, _encode_CS3SCFCUSFGenericPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3SCFCUSFGenericPDUs.ta.mjs";
// export { CS3SCFCUSFGenericPDUs, _decode_CS3SCFCUSFGenericPDUs, _encode_CS3SCFCUSFGenericPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3SCFCUSFGenericPDUs.ta.mjs";
import { id_as_cs3scfcusfGeneric } from "../IN-CS3-object-identifiers/id-as-cs3scfcusfGeneric.va.mjs";
// export { id_as_cs3scfcusfGeneric } from "../IN-CS3-object-identifiers/id-as-cs3scfcusfGeneric.va.mjs";


/**
 * @summary cs3scfcusfGenericAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3scfcusfGenericAS ABSTRACT-SYNTAX ::= {
 *   CS3SCFCUSFGenericPDUs
 *   IDENTIFIED BY  id-as-cs3scfcusfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CS3SCFCUSFGenericPDUs>}
 * @implements {ABSTRACT_SYNTAX<CS3SCFCUSFGenericPDUs>}
 */
export
const cs3scfcusfGenericAS: ABSTRACT_SYNTAX<CS3SCFCUSFGenericPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CS3SCFCUSFGenericPDUs,
    },
    encoderFor: {
        "&Type": _encode_CS3SCFCUSFGenericPDUs,
    },
    "&id": id_as_cs3scfcusfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
