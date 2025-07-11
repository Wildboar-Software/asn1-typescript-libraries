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
    IPMLocation,
    _decode_IPMLocation,
    _encode_IPMLocation,
} from '../IPMSMessageStoreAttributes/IPMLocation.ta.mjs';
import { iPMLocationMatch } from '../IPMSMessageStoreAttributes/iPMLocationMatch.oa.mjs';
import { id_cat_related_ipms } from '../IPMSObjectIdentifiers/id-cat-related-ipms.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary ac_related_ipms
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ac-related-ipms X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IPMLocation,
 *   OTHER MATCHING-RULES   {iPMLocationMatch, ...},
 *   NUMERATION             multi-valued,
 *   ID                     id-cat-related-ipms
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMLocation>}
 * @implements {X413ATTRIBUTE<IPMLocation>}
 */
export const ac_related_ipms: X413ATTRIBUTE<IPMLocation> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMLocation,
    },
    encoderFor: {
        '&Type': _encode_IPMLocation,
    },
    '&OtherMatches': [iPMLocationMatch] /* OBJECT_FIELD_SETTING */,
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_cat_related_ipms /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
