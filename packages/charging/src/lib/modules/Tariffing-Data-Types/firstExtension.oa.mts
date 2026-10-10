/* eslint-disable */
import {
    NULL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ignore /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../Tariffing-Data-Types/CriticalityType.ta.mjs";
import { type EXTENSION } from "../Tariffing-Data-Types/EXTENSION.oca.mjs";


/**
 * @summary firstExtension
 * @description
 *
 * Example {@link EXTENSION} only. Clause 9 says it is just an
 * example: syntax `NULL`, criticality `ignore`, identified by
 * `local:1`. It is the sole member of the extensible
 * {@link SupportedExtensions} set shipped in this module.
 *
 * [ES 201 296 V1.3.1, clause 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstExtension EXTENSION ::= {
 *     EXTENSION-SYNTAX NULL
 *     CRITICALITY ignore
 *     IDENTIFIED BY local:1
 *     }
 * ```
 * 
 * @constant
 * @type {EXTENSION<NULL>}
 * @implements {EXTENSION<NULL>}
 */
export
const firstExtension: EXTENSION<NULL> = {
    class: "EXTENSION",
    decoderFor: {
        "&ExtensionType": $._decodeNull,
    },
    encoderFor: {
        "&ExtensionType": $._encodeNull,
    },
    "&criticality": ignore /* OBJECT_FIELD_SETTING */,
    "&id": { local: 1 } /* OBJECT_FIELD_SETTING */,
    "&ExtensionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
