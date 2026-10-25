/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type CS3CUSFSCFDPSpecificPDUs, _decode_CS3CUSFSCFDPSpecificPDUs, _encode_CS3CUSFSCFDPSpecificPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3CUSFSCFDPSpecificPDUs.ta.mjs";
// export { CS3CUSFSCFDPSpecificPDUs, _decode_CS3CUSFSCFDPSpecificPDUs, _encode_CS3CUSFSCFDPSpecificPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3CUSFSCFDPSpecificPDUs.ta.mjs";
import { id_as_cs3cusfscfDPSpecific } from "../IN-CS3-object-identifiers/id-as-cs3cusfscfDPSpecific.va.mjs";
// export { id_as_cs3cusfscfDPSpecific } from "../IN-CS3-object-identifiers/id-as-cs3cusfscfDPSpecific.va.mjs";


/**
 * @summary cs3cusfscfDPSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3cusfscfDPSpecificAS ABSTRACT-SYNTAX ::= {
 *   CS3CUSFSCFDPSpecificPDUs
 *   IDENTIFIED BY  id-as-cs3cusfscfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CS3CUSFSCFDPSpecificPDUs>}
 * @implements {ABSTRACT_SYNTAX<CS3CUSFSCFDPSpecificPDUs>}
 */
export
const cs3cusfscfDPSpecificAS: ABSTRACT_SYNTAX<CS3CUSFSCFDPSpecificPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CS3CUSFSCFDPSpecificPDUs,
    },
    encoderFor: {
        "&Type": _encode_CS3CUSFSCFDPSpecificPDUs,
    },
    "&id": id_as_cs3cusfscfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
