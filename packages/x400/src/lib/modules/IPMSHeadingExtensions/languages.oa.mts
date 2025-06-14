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
import * as $ from 'asn1-ts/dist/functional.mjs';
import {
    Language,
    _decode_Language,
    _encode_Language,
} from '../IPMSHeadingExtensions/Language.ta.mjs';
import { id_hex_languages } from '../IPMSObjectIdentifiers/id-hex-languages.va.mjs';
import { IPMS_EXTENSION } from '../IPMSInformationObjects/IPMS-EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION languages */
/**
 * @summary languages
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * languages IPMS-EXTENSION ::= {
 *   VALUE          SET OF Language,
 *   IDENTIFIED BY  id-hex-languages
 * }
 * ```
 *
 * @constant
 * @type {IPMS_EXTENSION<Language[]>}
 * @implements {IPMS_EXTENSION<Language[]>}
 */
export const languages: IPMS_EXTENSION<Language[]> = {
    class: 'IPMS-EXTENSION',
    decoderFor: {
        '&Type': $._decodeSetOf<Language>(() => _decode_Language),
    },
    encoderFor: {
        '&Type': $._encodeSetOf<Language>(() => _encode_Language, $.BER),
    },
    '&id': id_hex_languages /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION languages */

/* eslint-enable */
