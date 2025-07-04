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
    IPMSExtension,
    _decode_IPMSExtension,
    _encode_IPMSExtension,
} from '../IPMSInformationObjects/IPMSExtension.ta.mjs';
import { id_nat_nrn_extensions } from '../IPMSObjectIdentifiers/id-nat-nrn-extensions.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { multi_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary nrn_extensions
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * nrn-extensions X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  IPMSExtension {{NRNExtensions}},
 *   NUMERATION             multi-valued,
 *   ID                     id-nat-nrn-extensions
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<IPMSExtension>}
 * @implements {X413ATTRIBUTE<IPMSExtension>}
 */
export const nrn_extensions: X413ATTRIBUTE<IPMSExtension> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_IPMSExtension,
    },
    encoderFor: {
        '&Type': _encode_IPMSExtension,
    },
    '&numeration': multi_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_nat_nrn_extensions /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
