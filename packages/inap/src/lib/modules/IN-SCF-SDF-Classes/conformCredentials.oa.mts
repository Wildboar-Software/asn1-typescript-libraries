/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type TwoPartMessage, _decode_TwoPartMessage, _encode_TwoPartMessage } from "../IN-SCF-SDF-datatypes/TwoPartMessage.ta.mjs";
// export { TwoPartMessage, _decode_TwoPartMessage, _encode_TwoPartMessage } from "../IN-SCF-SDF-datatypes/TwoPartMessage.ta.mjs";
import { id_mt_conformCredentials } from "../IN-object-identifiers/id-mt-conformCredentials.va.mjs";
// export { id_mt_conformCredentials } from "../IN-object-identifiers/id-mt-conformCredentials.va.mjs";
import { type METHOD } from "../IN-SCF-SDF-Classes/METHOD.oca.mjs";


/**
 * @summary conformCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * conformCredentials METHOD ::= {
 *   SPECIFIC-INPUT   TwoPartMessage
 *   -- see the definition of this type below
 *   SPECIFIC-OUTPUT  BOOLEAN -- to indicate the success of the verification
 *   BEHAVIOUR
 *     "This method performs the following actions on the entry identified by the execute argument, this entry would be of class genericSecurityUserInfo:
 * -    verify with an embedded conformance algorithm that messageData value of TwoPartMessage is no replay (RAND is in the current time window and the associated RS is not in the list of the current time windows currentList).
 * -    add RAND to time windows list currentList.
 * -    return TRUE if no replay,
 * -    otherwise return FALSE
 * "
 *   ID               id-mt-conformCredentials
 * }
 * ```
 * 
 * @constant
 * @type {METHOD<TwoPartMessage, BOOLEAN>}
 * @implements {METHOD<TwoPartMessage, BOOLEAN>}
 */
export
const conformCredentials: METHOD<TwoPartMessage, BOOLEAN> = {
    class: "METHOD",
    decoderFor: {
        "&SpecificInput": _decode_TwoPartMessage,
        "&SpecificOutput": $._decodeBoolean,
    },
    encoderFor: {
        "&SpecificInput": _encode_TwoPartMessage,
        "&SpecificOutput": $._encodeBoolean,
    },
    "&description": "This method performs the following actions on the entry identified by the execute argument, this entry would be of class genericSecurityUserInfo:-\tverify with an embedded conformance algorithm that messageData value of TwoPartMessage is no replay (RAND is in the current time window and the associated RS is not in the list of the current time windows currentList).-\tadd RAND to time windows list currentList.-\treturn TRUE if no replay,-\totherwise return FALSE" /* OBJECT_FIELD_SETTING */,
    "&id": id_mt_conformCredentials /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&SpecificInput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&SpecificOutput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
