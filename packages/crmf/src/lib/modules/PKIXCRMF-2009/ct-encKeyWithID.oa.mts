/* eslint-disable */
import {
    CONTENT_TYPE,
} from "@wildboar/cms/src/lib/modules/CryptographicMessageSyntax-2010/CONTENT-TYPE.oca.mjs";
import {
    EncKeyWithID,
    _decode_EncKeyWithID,
    _encode_EncKeyWithID,
} from "../PKIXCRMF-2009/EncKeyWithID.ta.mjs";
import { id_ct_encKeyWithID } from "../PKIXCRMF-2009/id-ct-encKeyWithID.va.mjs";


/**
 * @summary ct_encKeyWithID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ct-encKeyWithID CONTENT-TYPE ::= { EncKeyWithID IDENTIFIED BY id-ct-encKeyWithID }
 * ```
 *
 * @constant
 * @type {CONTENT_TYPE<EncKeyWithID>}
 * @implements {CONTENT_TYPE<EncKeyWithID>}
 */
export const ct_encKeyWithID: CONTENT_TYPE<EncKeyWithID> = {
    class: "CONTENT-TYPE",
    decoderFor: {
        "&Type": _decode_EncKeyWithID,
    },
    encoderFor: {
        "&Type": _encode_EncKeyWithID,
    },
    "&id": id_ct_encKeyWithID /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
