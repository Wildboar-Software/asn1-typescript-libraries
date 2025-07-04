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
import { type OBJECT_CLASS } from '@wildboar/x500/InformationFramework';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/InformationFramework';
import { mhs_user_agent } from '../MHSDirectoryObjectsAndAttributes/mhs-user-agent.oa.mjs';
import { edi_capabilities } from '../EDIMUseOfDirectory/edi-capabilities.oa.mjs';
import { id_doc_edi_user_agent } from '../EDIMUseOfDirectory/id-doc-edi-user-agent.va.mjs';
/**
 * @summary edi_user_agent
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-user-agent OBJECT-CLASS ::= {
 *   SUBCLASS OF  {mhs-user-agent}
 *   MAY CONTAIN  {edi-capabilities}
 *   ID           id-doc-edi-user-agent
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const edi_user_agent: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [mhs_user_agent] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [edi_capabilities] /* OBJECT_FIELD_SETTING */,
    '&id': id_doc_edi_user_agent /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
