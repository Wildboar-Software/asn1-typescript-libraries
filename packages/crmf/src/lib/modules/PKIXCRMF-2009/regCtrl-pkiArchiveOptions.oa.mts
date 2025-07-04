/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_regCtrl_pkiArchiveOptions } from "../PKIXCRMF-2009/id-regCtrl-pkiArchiveOptions.va.mjs";
import {
    PKIArchiveOptions,
    _decode_PKIArchiveOptions,
    _encode_PKIArchiveOptions,
} from "../PKIXCRMF-2009/PKIArchiveOptions.ta.mjs";


/**
 * @summary regCtrl_pkiArchiveOptions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-pkiArchiveOptions ATTRIBUTE ::= { TYPE PKIArchiveOptions IDENTIFIED BY
 *         id-regCtrl-pkiArchiveOptions }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PKIArchiveOptions>}
 * @implements {ATTRIBUTE<PKIArchiveOptions>}
 */
export const regCtrl_pkiArchiveOptions: ATTRIBUTE<PKIArchiveOptions> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PKIArchiveOptions,
    },
    encoderFor: {
        "&Type": _encode_PKIArchiveOptions,
    },
    "&id": id_regCtrl_pkiArchiveOptions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
