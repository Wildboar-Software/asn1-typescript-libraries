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
import {
    ATTRIBUTE,
} from "@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs";
import {
    id_clearanceSponsor,
} from "./id-clearanceSponsor.va.mjs";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";
import {
    caseIgnoreMatch,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/caseIgnoreMatch.oa.mjs";



/**
 * @summary at_clearanceSponsor
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * at-clearanceSponsor ATTRIBUTE ::= {
 *     TYPE                   DirectoryString { ub-clearance-sponsor }
 *                         ( WITH COMPONENTS { utf8String PRESENT } )
 *     EQUALITY MATCHING RULE caseIgnoreMatch
 *     IDENTIFIED BY          id-clearanceSponsor
 * }
 * ```
 */
export
const at_clearanceSponsor: ATTRIBUTE<DirectoryString> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_DirectoryString,
    },
    encoderFor: {
        "&Type": _encode_DirectoryString,
    },
    "&id": id_clearanceSponsor,
    "&Type": 0 as never,
    "&equality-match": caseIgnoreMatch,
};

/* eslint-enable */
