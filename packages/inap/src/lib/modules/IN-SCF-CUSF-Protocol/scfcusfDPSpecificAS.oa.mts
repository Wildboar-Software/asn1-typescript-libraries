/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type SCFCUSFDPSpecificPDUs, _decode_SCFCUSFDPSpecificPDUs, _encode_SCFCUSFDPSpecificPDUs } from "../IN-SCF-CUSF-Protocol/SCFCUSFDPSpecificPDUs.ta.mjs";
// export { SCFCUSFDPSpecificPDUs, _decode_SCFCUSFDPSpecificPDUs, _encode_SCFCUSFDPSpecificPDUs } from "../IN-SCF-CUSF-Protocol/SCFCUSFDPSpecificPDUs.ta.mjs";
import { id_asscfcusfDPSpecific } from "../IN-object-identifiers/id-asscfcusfDPSpecific.va.mjs";
// export { id_asscfcusfDPSpecific } from "../IN-object-identifiers/id-asscfcusfDPSpecific.va.mjs";


/**
 * @summary scfcusfDPSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * scfcusfDPSpecificAS ABSTRACT-SYNTAX ::= {
 *   SCFCUSFDPSpecificPDUs
 *   IDENTIFIED BY  id-asscfcusfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<SCFCUSFDPSpecificPDUs>}
 * @implements {ABSTRACT_SYNTAX<SCFCUSFDPSpecificPDUs>}
 */
export
const scfcusfDPSpecificAS: ABSTRACT_SYNTAX<SCFCUSFDPSpecificPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_SCFCUSFDPSpecificPDUs,
    },
    encoderFor: {
        "&Type": _encode_SCFCUSFDPSpecificPDUs,
    },
    "&id": id_asscfcusfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
