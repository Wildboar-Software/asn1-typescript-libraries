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
import {
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Priority.ta.mjs';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose/src/lib/modules/Remote-Operations-Information-Objects/Code.ta.mjs';
import { id_aae_duplicate_edin } from '../EDIMSObjectIdentifiers/id-aae-duplicate-edin.va.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
/* START_OF_SYMBOL_DEFINITION duplicate_edin */
/**
 * @summary duplicate_edin
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * duplicate-edin AUTO-ACTION-ERROR ::= {CODE  global:id-aae-duplicate-edin
 * }
 * ```
 *
 * @constant
 * @type {AUTO_ACTION_ERROR}
 * @implements {AUTO_ACTION_ERROR}
 */
export const duplicate_edin: AUTO_ACTION_ERROR = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': undefined,
    },
    encoderFor: {
        '&ParameterType': undefined,
    },
    '&errorCode': {
        global: id_aae_duplicate_edin,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION duplicate_edin */

/* eslint-enable */
