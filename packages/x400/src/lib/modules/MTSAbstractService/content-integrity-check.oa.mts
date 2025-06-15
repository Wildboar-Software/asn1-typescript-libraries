/* eslint-disable */
import {
    TRUE_BIT,
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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ContentIntegrityCheck,
    _decode_ContentIntegrityCheck,
    _encode_ContentIntegrityCheck,
} from '../MTSAbstractService/ContentIntegrityCheck.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary content_integrity_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * content-integrity-check EXTENSION ::= {
 *   ContentIntegrityCheck,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:18
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ContentIntegrityCheck>}
 * @implements {EXTENSION<ContentIntegrityCheck>}
 */
export const content_integrity_check: EXTENSION<ContentIntegrityCheck> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ContentIntegrityCheck,
    },
    encoderFor: {
        '&Type': _encode_ContentIntegrityCheck,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 18,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
