/* eslint-disable */
import type { ATTRIBUTE } from "@wildboar/x500/InformationFramework";
import { id_regCtrl_pkiPublicationInfo } from "../PKIXCRMF-2009/id-regCtrl-pkiPublicationInfo.va.mjs";
import {
    PKIPublicationInfo,
    _decode_PKIPublicationInfo,
    _encode_PKIPublicationInfo,
} from "../PKIXCRMF-2009/PKIPublicationInfo.ta.mjs";


/**
 * @summary regCtrl_pkiPublicationInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-pkiPublicationInfo ATTRIBUTE ::= { TYPE PKIPublicationInfo IDENTIFIED BY
 *         id-regCtrl-pkiPublicationInfo }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<PKIPublicationInfo>}
 * @implements {ATTRIBUTE<PKIPublicationInfo>}
 */
export const regCtrl_pkiPublicationInfo: ATTRIBUTE<PKIPublicationInfo> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PKIPublicationInfo,
    },
    encoderFor: {
        "&Type": _encode_PKIPublicationInfo,
    },
    "&id": id_regCtrl_pkiPublicationInfo /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
