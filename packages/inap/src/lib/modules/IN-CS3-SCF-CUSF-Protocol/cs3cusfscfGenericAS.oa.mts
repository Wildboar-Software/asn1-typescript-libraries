/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type CS3CUSFSCFGenericPDUs, _decode_CS3CUSFSCFGenericPDUs, _encode_CS3CUSFSCFGenericPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3CUSFSCFGenericPDUs.ta.mjs";
// export { CS3CUSFSCFGenericPDUs, _decode_CS3CUSFSCFGenericPDUs, _encode_CS3CUSFSCFGenericPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3CUSFSCFGenericPDUs.ta.mjs";
import { id_as_cs3cusfscfGeneric } from "../IN-CS3-object-identifiers/id-as-cs3cusfscfGeneric.va.mjs";
// export { id_as_cs3cusfscfGeneric } from "../IN-CS3-object-identifiers/id-as-cs3cusfscfGeneric.va.mjs";


/**
 * @summary cs3cusfscfGenericAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3cusfscfGenericAS ABSTRACT-SYNTAX ::= {
 *   CS3CUSFSCFGenericPDUs
 *   IDENTIFIED BY  id-as-cs3cusfscfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CS3CUSFSCFGenericPDUs>}
 * @implements {ABSTRACT_SYNTAX<CS3CUSFSCFGenericPDUs>}
 */
export
const cs3cusfscfGenericAS: ABSTRACT_SYNTAX<CS3CUSFSCFGenericPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CS3CUSFSCFGenericPDUs,
    },
    encoderFor: {
        "&Type": _encode_CS3CUSFSCFGenericPDUs,
    },
    "&id": id_as_cs3cusfscfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
