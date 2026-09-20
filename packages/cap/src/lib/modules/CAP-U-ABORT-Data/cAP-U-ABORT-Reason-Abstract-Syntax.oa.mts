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
import { CAP_U_ABORT_REASON, _enum_for_CAP_U_ABORT_REASON, _decode_CAP_U_ABORT_REASON, _encode_CAP_U_ABORT_REASON } from "../CAP-U-ABORT-Data/CAP-U-ABORT-REASON.ta.mjs";
import { id_CAP_U_ABORT_Reason } from "../CAP-U-ABORT-Data/id-CAP-U-ABORT-Reason.va.mjs";


/**
 * @summary cAP_U_ABORT_Reason_Abstract_Syntax
 * @description
 *
 * Abstract syntax of `CAP-U-ABORT-REASON`, identified by
 * `id-CAP-U-ABORT-Reason`. Carried in the TC-U-ABORT User Information
 * parameter.
 * (3GPP TS 29.078 V19.0.0 clauses 5.7 and 14.1.1.3.7).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cAP-U-ABORT-Reason-Abstract-Syntax ABSTRACT-SYNTAX ::= {CAP-U-ABORT-REASON IDENTIFIED BY
 * id-CAP-U-ABORT-Reason}
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<CAP_U_ABORT_REASON>}
 * @implements {ABSTRACT_SYNTAX<CAP_U_ABORT_REASON>}
 */
export
const cAP_U_ABORT_Reason_Abstract_Syntax: ABSTRACT_SYNTAX<CAP_U_ABORT_REASON> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_CAP_U_ABORT_REASON,
    },
    encoderFor: {
        "&Type": _encode_CAP_U_ABORT_REASON,
    },
    "&id": id_CAP_U_ABORT_Reason /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
