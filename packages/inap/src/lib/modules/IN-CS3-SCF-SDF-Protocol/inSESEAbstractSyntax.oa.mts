/* eslint-disable */
import {
    type ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { type SESEapdus, _decode_SESEapdus, _encode_SESEapdus } from "../SeseAPDUs/SESEapdus.ta.mjs";
// export { SESEapdus, _decode_SESEapdus, _encode_SESEapdus } from "../SeseAPDUs/SESEapdus.ta.mjs";
import { id_as_inSESEAS } from "../IN-CS3-object-identifiers/id-as-inSESEAS.va.mjs";
// export { id_as_inSESEAS } from "../IN-CS3-object-identifiers/id-as-inSESEAS.va.mjs";


/**
 * @summary inSESEAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * inSESEAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   SESEapdus {{spkmThreeWay},
 *              {NoInvocationId}}
 *   IDENTIFIED BY  id-as-inSESEAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<SESEapdus>}
 * @implements {ABSTRACT_SYNTAX<SESEapdus>}
 */
export
const inSESEAbstractSyntax: ABSTRACT_SYNTAX<SESEapdus> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_SESEapdus,
    },
    encoderFor: {
        "&Type": _encode_SESEapdus,
    },
    "&id": id_as_inSESEAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
