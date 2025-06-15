/* eslint-disable */
import { ATTRIBUTE } from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import { id_regCtrl_oldCertID } from "../PKIXCRMF-2009/id-regCtrl-oldCertID.va.mjs";
import {
    OldCertId,
    _decode_OldCertId,
    _encode_OldCertId,
} from "../PKIXCRMF-2009/OldCertId.ta.mjs";


/**
 * @summary regCtrl_oldCertID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * regCtrl-oldCertID ATTRIBUTE ::= { TYPE OldCertId IDENTIFIED BY id-regCtrl-oldCertID }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<OldCertId>}
 * @implements {ATTRIBUTE<OldCertId>}
 */
export const regCtrl_oldCertID: ATTRIBUTE<OldCertId> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_OldCertId,
    },
    encoderFor: {
        "&Type": _encode_OldCertId,
    },
    "&id": id_regCtrl_oldCertID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
