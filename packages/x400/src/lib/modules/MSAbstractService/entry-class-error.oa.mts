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
    _decode_Priority,
    _encode_Priority,
} from '@wildboar/rose';
import {
    _decode_Code,
    _encode_Code,
} from '@wildboar/rose';
import {
    EntryClassErrorParameter,
    _decode_EntryClassErrorParameter,
    _encode_EntryClassErrorParameter,
} from '../MSAbstractService/EntryClassErrorParameter.ta.mjs';
import { err_entry_class_error } from '../MSAccessProtocol/err-entry-class-error.va.mjs';
import { type ABSTRACT_ERROR } from '../MTSAbstractService/ABSTRACT-ERROR.oca.mjs';
/**
 * @summary entry_class_error
 * @description
 *
 * Information object `entry_class_error`. An Entry-class-error reports a problem in an
 * attempt to address an entry-class in an abstract-operation. entry-class-error
 * ABSTRACT-ERROR ::= { PARAMETER EntryClassErrorParameter CODE err-entry-class-error }
 * 56 EntryClassErrorParameter ::= SET { entry-class [0] EntryClass, problem [1] BIT
 * STRING { unsupported-entry-class (0), entry-class-not-subscribed (1),
 * inappropriate-entry-class (2) } } The parameter has the… See ITU-T X.413 (1999),
 * §9.17.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * entry-class-error ABSTRACT-ERROR ::= {
 *   PARAMETER  EntryClassErrorParameter
 *   CODE       err-entry-class-error
 * }
 * ```
 *
 * @constant
 * @type {ABSTRACT_ERROR<EntryClassErrorParameter>}
 * @implements {ABSTRACT_ERROR<EntryClassErrorParameter>}
 */
export const entry_class_error: ABSTRACT_ERROR<EntryClassErrorParameter> = {
    class: 'ERROR',
    decoderFor: {
        '&ParameterType': _decode_EntryClassErrorParameter,
    },
    encoderFor: {
        '&ParameterType': _encode_EntryClassErrorParameter,
    },
    '&errorCode': err_entry_class_error /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&ParameterType': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&ErrorPriority': 0 as never /* OBJECT_FIELD_SETTING OBJECT_VALUE_SET_FIELD_SETTING */,
};

/* eslint-enable */
