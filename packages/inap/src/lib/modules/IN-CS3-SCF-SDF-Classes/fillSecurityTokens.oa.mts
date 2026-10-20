/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
// export { NPartsMessage, _decode_NPartsMessage, _encode_NPartsMessage } from "../IN-CS3-SCF-SDF-datatypes/NPartsMessage.ta.mjs";
import { id_mt_fillSecurityTokens } from "../IN-CS3-object-identifiers/id-mt-fillSecurityTokens.va.mjs";
// export { id_mt_fillSecurityTokens } from "../IN-CS3-object-identifiers/id-mt-fillSecurityTokens.va.mjs";
import { type METHOD } from "../IN-CS3-SCF-SDF-Classes/METHOD.oca.mjs";


/**
 * @summary fillSecurityTokens
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fillSecurityTokens METHOD ::= {
 *   SPECIFIC-INPUT   INTEGER -- X number of value to be computed
 *   SPECIFIC-OUTPUT  SEQUENCE OF NPartsMessage
 *   BEHAVIOUR
 *     "This method performs the following actions on the entry identified by the execute argument, this entry shall be of object class (or subclass) genericSecurityUserInfo:
 * -    read the secretKey attribute and Algorithms attribute
 * -    repeat X times
 *         - fill the first BIT STRING field with a random value
 *         - apply cryptographic algorithms to compute
 *          the other  BIT STRING fields of the NPARTMESSAGE.
 * -    return X NPartMessage values
 * "
 *   ID               id-mt-fillSecurityTokens
 * }
 * ```
 * 
 * @constant
 * @type {METHOD<INTEGER, NPartsMessage[]>}
 * @implements {METHOD<INTEGER, NPartsMessage[]>}
 */
export
const fillSecurityTokens: METHOD<INTEGER, NPartsMessage[]> = {
    class: "METHOD",
    decoderFor: {
        "&SpecificInput": $._decodeInteger,
        "&SpecificOutput": $._decodeSequenceOf<NPartsMessage>(() => _decode_NPartsMessage),
    },
    encoderFor: {
        "&SpecificInput": $._encodeInteger,
        "&SpecificOutput": $._encodeSequenceOf<NPartsMessage>(() => _encode_NPartsMessage, $.BER),
    },
    "&description": "This method performs the following actions on the entry identified by the execute argument, this entry shall be of object class (or subclass) genericSecurityUserInfo:-\tread the secretKey attribute and Algorithms attribute-\trepeat X times- fill the first BIT STRING field with a random value- apply cryptographic algorithms to computethe other  BIT STRING fields of the NPARTMESSAGE.-\treturn X NPartMessage values" /* OBJECT_FIELD_SETTING */,
    "&id": id_mt_fillSecurityTokens /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&SpecificInput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&SpecificOutput": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
