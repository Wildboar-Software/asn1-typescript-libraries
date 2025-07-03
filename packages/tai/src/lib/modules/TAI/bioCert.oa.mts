/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { BioCert, _decode_BioCert, _encode_BioCert } from "../TAI/BioCert.ta.mjs";
import { id_tai_ce_bioCert } from "../TAI/id-tai-ce-bioCert.va.mjs";
import { EXTENSION } from "@wildboar/x500/AuthenticationFramework";
/**
 * @summary bioCert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * bioCert EXTENSION ::= {SYNTAX         BioCert
 *                        IDENTIFIED BY  id-tai-ce-bioCert
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<BioCert>}
 * @implements {EXTENSION<BioCert>}
 */
export
const bioCert: EXTENSION<BioCert> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_BioCert,
    },
    encoderFor: {
        "&ExtnType": _encode_BioCert,
    },
    "&id": id_tai_ce_bioCert /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
