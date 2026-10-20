/* eslint-disable */
import {
    ABSTRACT_SYNTAX
} from "@wildboar/asn1";
import { ReliableShadowBinding_PDUs, _decode_ReliableShadowBinding_PDUs, _encode_ReliableShadowBinding_PDUs } from "../DirectoryInformationShadowProtocol/ReliableShadowBinding-PDUs.ta.mjs";
// export { ReliableShadowBinding_PDUs, _decode_ReliableShadowBinding_PDUs, _encode_ReliableShadowBinding_PDUs } from "../DirectoryInformationShadowProtocol/ReliableShadowBinding-PDUs.ta.mjs";
import { id_as_reliableShadowBindingAS } from "../ProtocolObjectIdentifiers/id-as-reliableShadowBindingAS.va.mjs";
// export { id_as_reliableShadowBindingAS } from "../ProtocolObjectIdentifiers/id-as-reliableShadowBindingAS.va.mjs";


/**
 * @summary reliableShadowBindingAbstractSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * reliableShadowBindingAbstractSyntax ABSTRACT-SYNTAX ::= {
 *   ReliableShadowBinding-PDUs
 *   IDENTIFIED BY  id-as-reliableShadowBindingAS
 * }
 * ```
 * 
 * @constant
 * @type {ABSTRACT_SYNTAX<ReliableShadowBinding_PDUs>}
 * @implements {ABSTRACT_SYNTAX<ReliableShadowBinding_PDUs>}
 */
export
const reliableShadowBindingAbstractSyntax: ABSTRACT_SYNTAX<ReliableShadowBinding_PDUs> = {
    class: "ABSTRACT-SYNTAX",
    decoderFor: {
        "&Type": _decode_ReliableShadowBinding_PDUs,
    },
    encoderFor: {
        "&Type": _encode_ReliableShadowBinding_PDUs,
    },
    "&id": id_as_reliableShadowBindingAS /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&property": undefined,
};

/* eslint-enable */
