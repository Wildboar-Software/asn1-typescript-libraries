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
import { _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
import { _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
import { _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
// export { TypeDescription, _decode_TypeDescription, _encode_TypeDescription } from "../MMS-Object-Module-1/TypeDescription.ta.mjs";
import { _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
// export { Data, _decode_Data, _encode_Data } from "../ISO-9506-MMS-1/Data.ta.mjs";
import { _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
import { type NAMED_VARIABLE, anythingElse } from "../MMS-Object-Module-1/NAMED-VARIABLE.oca.mjs";


/**
 * @summary m_DAYTIME
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * m-DAYTIME NAMED-VARIABLE ::= {
 *     &name               vmd-specific:"M_DAYTIME",
 *     &accessControl      "M_NonDeletable",
 *     &typeDescription    generalized-time:NULL,
 *     &accessMethod       anythingElse,
 *     &value              generalized-time:"299107311200"
 * }
 * ```
 * 
 * @constant
 * @type {NAMED_VARIABLE}
 * @implements {NAMED_VARIABLE}
 */
export
const m_DAYTIME: NAMED_VARIABLE = {
    class: "NAMED-VARIABLE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&name": { vmd_specific: { notChar: "M_DAYTIME" } } /* OBJECT_FIELD_SETTING */,
    "&accessControl": { notChar: "M_NonDeletable" } /* OBJECT_FIELD_SETTING */,
    "&typeDescription": { generalized_time: null } /* OBJECT_FIELD_SETTING */,
    "&accessMethod": anythingElse /* OBJECT_FIELD_SETTING */,
    "&value": { generalized_time: new Date(Date.UTC(2991, 6, 31, 12, 0)) } /* OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
