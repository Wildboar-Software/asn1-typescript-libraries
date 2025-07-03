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
import { PublicKeyCert, _decode_PublicKeyCert, _encode_PublicKeyCert } from "../TAI/PublicKeyCert.ta.mjs";
import { id_tai_ce_publicKeyCert } from "../TAI/id-tai-ce-publicKeyCert.va.mjs";
import { EXTENSION } from "@wildboar/x500/AuthenticationFramework";
/**
 * @summary publicKeyCert
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * publicKeyCert EXTENSION ::= {
 *   SYNTAX         PublicKeyCert
 *   IDENTIFIED BY  id-tai-ce-publicKeyCert
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<PublicKeyCert>}
 * @implements {EXTENSION<PublicKeyCert>}
 */
export
const publicKeyCert: EXTENSION<PublicKeyCert> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": _decode_PublicKeyCert,
    },
    encoderFor: {
        "&ExtnType": _encode_PublicKeyCert,
    },
    "&id": id_tai_ce_publicKeyCert /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
