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
} from 'asn1-ts';
import { ATTRIBUTE } from '@wildboar/x500/src/lib/modules/InformationFramework/ATTRIBUTE.oca.mjs';
import {
    _enum_for_AttributeUsage,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
} from '@wildboar/x500/src/lib/modules/InformationFramework/AttributeUsage.ta.mjs';
import {
    KEKDerivationAlgorithm,
    _decode_KEKDerivationAlgorithm,
    _encode_KEKDerivationAlgorithm,
} from '../CmsTelebiometric/KEKDerivationAlgorithm.ta.mjs';
import { integerMatch } from '@wildboar/x500/src/lib/modules/SelectedAttributeTypes/integerMatch.oa.mjs';
import { id_aa_KEKDerivationAlg } from '../CmsTelebiometric/id-aa-KEKDerivationAlg.va.mjs';
/* START_OF_SYMBOL_DEFINITION aa_KEKDerivationAlg */
/**
 * @summary aa_KEKDerivationAlg
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * aa-KEKDerivationAlg ATTRIBUTE ::= {
 *   WITH SYNTAX            KEKDerivationAlgorithm
 *   EQUALITY MATCHING RULE integerMatch
 *   SINGLE VALUE           TRUE
 *   ID                     id-aa-KEKDerivationAlg }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<KEKDerivationAlgorithm>}
 * @implements {ATTRIBUTE<KEKDerivationAlgorithm>}
 */
export const aa_KEKDerivationAlg: ATTRIBUTE<KEKDerivationAlgorithm> = {
    class: 'ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_KEKDerivationAlgorithm,
    },
    encoderFor: {
        '&Type': _encode_KEKDerivationAlgorithm,
    },
    '&equality-match': integerMatch /* OBJECT_FIELD_SETTING */,
    '&single-valued': false /* OBJECT_FIELD_SETTING */,
    '&id': id_aa_KEKDerivationAlg /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&collective': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&dummy': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&no-user-modification': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&usage': userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    '&obsolete': false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION aa_KEKDerivationAlg */

/* eslint-enable */
