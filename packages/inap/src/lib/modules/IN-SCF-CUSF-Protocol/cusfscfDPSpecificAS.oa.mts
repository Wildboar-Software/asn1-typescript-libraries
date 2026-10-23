/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { CUSFSCFDPSpecificPDUs, _decode_CUSFSCFDPSpecificPDUs, _encode_CUSFSCFDPSpecificPDUs } from "../IN-SCF-CUSF-Protocol/CUSFSCFDPSpecificPDUs.ta.mjs";
// export { CUSFSCFDPSpecificPDUs, _decode_CUSFSCFDPSpecificPDUs, _encode_CUSFSCFDPSpecificPDUs } from "../IN-SCF-CUSF-Protocol/CUSFSCFDPSpecificPDUs.ta.mjs";
import { id_ascusfscfDPSpecific } from "../IN-object-identifiers/id-ascusfscfDPSpecific.va.mjs";
// export { id_ascusfscfDPSpecific } from "../IN-object-identifiers/id-ascusfscfDPSpecific.va.mjs";


/**
 * @summary cusfscfDPSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cusfscfDPSpecificAS ABSTRACT-SYNTAX ::= {
 *   CUSFSCFDPSpecificPDUs
 *   IDENTIFIED BY  id-ascusfscfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CUSFSCFDPSpecificPDUs>}
 * @implements {ABSTRACT_SYNTAX<CUSFSCFDPSpecificPDUs>}
 */
export
const cusfscfDPSpecificAS: ABSTRACT_SYNTAX<CUSFSCFDPSpecificPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CUSFSCFDPSpecificPDUs,
    },
    encoderFor: {
        "&Type": _encode_CUSFSCFDPSpecificPDUs,
    },
    "&id": id_ascusfscfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
