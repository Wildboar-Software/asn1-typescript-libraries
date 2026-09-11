/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { CAP_GPRS_ReferenceNumber, _decode_CAP_GPRS_ReferenceNumber, _encode_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/CAP-GPRS-ReferenceNumber.ta.mjs";
// export { CAP_GPRS_ReferenceNumber, _decode_CAP_GPRS_ReferenceNumber, _encode_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/CAP-GPRS-ReferenceNumber.ta.mjs";
import { id_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/id-CAP-GPRS-ReferenceNumber.va.mjs";
// export { id_CAP_GPRS_ReferenceNumber } from "../CAP-GPRS-ReferenceNumber/id-CAP-GPRS-ReferenceNumber.va.mjs";


/**
 * @summary cAP_GPRS_ReferenceNumber_Abstract_Syntax
 * @description
 *
 * Abstract syntax of `CAP-GPRS-ReferenceNumber`, identified by
 * `id-CAP-GPRS-ReferenceNumber`. Carried in TC User Information on the
 * gprsSSF–gsmSCF interface.
 * (3GPP TS 29.078 V19.0.0 clauses 8.1.1 and 14.1.1.3.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cAP-GPRS-ReferenceNumber-Abstract-Syntax ABSTRACT-SYNTAX ::= {CAP-GPRS-ReferenceNumber IDENTIFIED BY id-CAP-GPRS-ReferenceNumber}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber>}
 * @implements {ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber>}
 */
export
const cAP_GPRS_ReferenceNumber_Abstract_Syntax: ABSTRACT_SYNTAX<CAP_GPRS_ReferenceNumber> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CAP_GPRS_ReferenceNumber,
    },
    encoderFor: {
        "&Type": _encode_CAP_GPRS_ReferenceNumber,
    },
    "&id": id_CAP_GPRS_ReferenceNumber /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
