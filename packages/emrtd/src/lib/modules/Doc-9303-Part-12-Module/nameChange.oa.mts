/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { id_icao_mrtd_security_extensions_nameChange } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-nameChange.va.mjs";
// export { id_icao_mrtd_security_extensions_nameChange } from "../Doc-9303-Part-12-Module/id-icao-mrtd-security-extensions-nameChange.va.mjs";
import { type EXTENSION } from "../AuthenticationFramework/EXTENSION.oca.mjs";


/**
 * @summary nameChange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nameChange EXTENSION ::= {
 *     SYNTAX NULL
 *     IDENTIFIED BY id-icao-mrtd-security-extensions-nameChange
 * }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const nameChange: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtnType": $._decodeNull,
    },
    encoderFor: {
        "&ExtnType": $._encodeNull,
    },
    "&id": id_icao_mrtd_security_extensions_nameChange /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&ExtnType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
