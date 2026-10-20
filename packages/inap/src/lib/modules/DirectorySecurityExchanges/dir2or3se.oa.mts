/* eslint-disable */
import {
    ABSTRACT_SYNTAX,
    ObjectIdentifier as _OID
} from "@wildboar/asn1";
import { SESEapdus, _decode_SESEapdus, _encode_SESEapdus } from "../SeseAPDUs/SESEapdus.ta.mjs";
// export { SESEapdus, _decode_SESEapdus, _encode_SESEapdus } from "../SeseAPDUs/SESEapdus.ta.mjs";


/**
 * @summary dir2or3se
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dir2or3se ABSTRACT-SYNTAX ::= {
 *   SESEapdus
 *   {{dirAuthenticationTwoWay | dirAuthenticationThreeWay | spkmThreeWay},
 *    {NoInvocationId}}
 *   IDENTIFIED BY  {id-as-2or3se}
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<SESEapdus>}
 * @implements {ABSTRACT_SYNTAX<SESEapdus>}
 */
export
const dir2or3se: ABSTRACT_SYNTAX<SESEapdus> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_SESEapdus,
    },
    encoderFor: {
        "&Type": _encode_SESEapdus,
    },
    "&id": _OID.fromParts([id_as_2or3se,]) /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
