/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type CS3SCFCUSFDPSpecificPDUs, _decode_CS3SCFCUSFDPSpecificPDUs, _encode_CS3SCFCUSFDPSpecificPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3SCFCUSFDPSpecificPDUs.ta.mjs";
// export { CS3SCFCUSFDPSpecificPDUs, _decode_CS3SCFCUSFDPSpecificPDUs, _encode_CS3SCFCUSFDPSpecificPDUs } from "../IN-CS3-SCF-CUSF-Protocol/CS3SCFCUSFDPSpecificPDUs.ta.mjs";
import { id_as_cs3scfcusfDPSpecific } from "../IN-CS3-object-identifiers/id-as-cs3scfcusfDPSpecific.va.mjs";
// export { id_as_cs3scfcusfDPSpecific } from "../IN-CS3-object-identifiers/id-as-cs3scfcusfDPSpecific.va.mjs";


/**
 * @summary cs3scfcusfDPSpecificAS
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cs3scfcusfDPSpecificAS ABSTRACT-SYNTAX ::= {
 *   CS3SCFCUSFDPSpecificPDUs
 *   IDENTIFIED BY  id-as-cs3scfcusfDPSpecific
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CS3SCFCUSFDPSpecificPDUs>}
 * @implements {ABSTRACT_SYNTAX<CS3SCFCUSFDPSpecificPDUs>}
 */
export
const cs3scfcusfDPSpecificAS: ABSTRACT_SYNTAX<CS3SCFCUSFDPSpecificPDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CS3SCFCUSFDPSpecificPDUs,
    },
    encoderFor: {
        "&Type": _encode_CS3SCFCUSFDPSpecificPDUs,
    },
    "&id": id_as_cs3scfcusfDPSpecific /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
