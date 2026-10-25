/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type CUSFSCFGenericPDUs, _decode_CUSFSCFGenericPDUs, _encode_CUSFSCFGenericPDUs } from "../IN-SCF-CUSF-Protocol/CUSFSCFGenericPDUs.ta.mjs";
// export { CUSFSCFGenericPDUs, _decode_CUSFSCFGenericPDUs, _encode_CUSFSCFGenericPDUs } from "../IN-SCF-CUSF-Protocol/CUSFSCFGenericPDUs.ta.mjs";
import { id_ascusfscfGeneric } from "../IN-object-identifiers/id-ascusfscfGeneric.va.mjs";
// export { id_ascusfscfGeneric } from "../IN-object-identifiers/id-ascusfscfGeneric.va.mjs";


/**
 * @summary cusfscfGenericAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfscfGenericAS ABSTRACT-SYNTAX ::= {
 *   CUSFSCFGenericPDUs
 *   IDENTIFIED BY  id-ascusfscfGeneric
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CUSFSCFGenericPDUs>}
 * @implements {ABSTRACT_SYNTAX<CUSFSCFGenericPDUs>}
 */
export
const cusfscfGenericAS: ABSTRACT_SYNTAX<CUSFSCFGenericPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CUSFSCFGenericPDUs,
    },
    encoderFor: {
        "&Type": _encode_CUSFSCFGenericPDUs,
    },
    "&id": id_ascusfscfGeneric /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
