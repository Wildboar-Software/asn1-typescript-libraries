/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type SCFCUSFGenericPDUs, _decode_SCFCUSFGenericPDUs, _encode_SCFCUSFGenericPDUs } from "../IN-SCF-CUSF-Protocol/SCFCUSFGenericPDUs.ta.mjs";
// export { SCFCUSFGenericPDUs, _decode_SCFCUSFGenericPDUs, _encode_SCFCUSFGenericPDUs } from "../IN-SCF-CUSF-Protocol/SCFCUSFGenericPDUs.ta.mjs";
import { id_asscfcusfGeneric } from "../IN-object-identifiers/id-asscfcusfGeneric.va.mjs";
// export { id_asscfcusfGeneric } from "../IN-object-identifiers/id-asscfcusfGeneric.va.mjs";


/**
 * @summary scfcusfGenericAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfcusfGenericAS ABSTRACT-SYNTAX ::= {
 *   SCFCUSFGenericPDUs
 *   IDENTIFIED BY  id-asscfcusfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<SCFCUSFGenericPDUs>}
 * @implements {ABSTRACT_SYNTAX<SCFCUSFGenericPDUs>}
 */
export
const scfcusfGenericAS: ABSTRACT_SYNTAX<SCFCUSFGenericPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_SCFCUSFGenericPDUs,
    },
    encoderFor: {
        "&Type": _encode_SCFCUSFGenericPDUs,
    },
    "&id": id_asscfcusfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
