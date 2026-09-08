/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import { _decode_Data, _encode_Data } from "../X9-84-CMS/Data.ta.mjs";

import { type CONTENTS } from "../X9-84-CMS/CONTENTS.oca.mjs";
import { id_data } from "../X9-84-CMS/X9-84-Identifiers.va.mjs";


/**
 * @summary Contents_Union0_Intersection0_Element
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Contents-Union0-Intersection0-Element CONTENTS ::= { Data IDENTIFIED BY id-data }
 * ```
 * 
 * @constant
 * @type {CONTENTS}
 * @implements {CONTENTS}
 */
export
const Contents_Union0_Intersection0_Element: CONTENTS = {
    class: "TYPE-IDENTIFIER",
    decoderFor: {
        "&Type": _decode_Data,
    },
    encoderFor: {
        "&Type": _encode_Data,
    },
    "&id": id_data /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
