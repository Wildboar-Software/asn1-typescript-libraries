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
} from '@wildboar/asn1';
import {
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import {
    EDIMLocation,
    _decode_EDIMLocation,
    _encode_EDIMLocation,
} from '../EDIMSMessageStoreAttributes/EDIMLocation.ta.mjs';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.mjs';
import { id_cat_related_edims } from '../EDIMSObjectIdentifiers/id-cat-related-edims.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_related_edims
 * @description
 *
 * Information object `ac_related_edims`. The AC Related EDIMs attribute, which is
 * multi-valued, contains the sequence-numbers of the EDIM entries identified by the
 * Related Messages heading field of the present EDIM. One value of the attribute shall
 * be generated for each subfield of the Related Messages heading field. See ITU-T X.435
 * (1999), §18.8.6.1.6.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-related-edims X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  EDIMLocation,
 *   OTHER MATCHING-RULES   {iPMLocationMatch, ...},
 *   NUMERATION             multi-valued,
 *   ID                     id-cat-related-edims
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<EDIMLocation>}
 * @implements {X413ATTRIBUTE<EDIMLocation>}
 */
export const ac_related_edims: X413ATTRIBUTE<EDIMLocation> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_EDIMLocation,
    },
    encoderFor: {
        '&Type': _encode_EDIMLocation,
    },
    '&OtherMatches': [iPMLocationMatch] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_related_edims /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
