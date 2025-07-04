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
import { OBJECT_CLASS } from '@wildboar/x500/src/lib/modules/InformationFramework/OBJECT-CLASS.oca.mjs';
import {
    _enum_for_ObjectClassKind,
    structural /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ObjectClassKind,
    _encode_ObjectClassKind,
} from '@wildboar/x500/src/lib/modules/InformationFramework/ObjectClassKind.ta.mjs';
import { top } from '@wildboar/x500/src/lib/modules/InformationFramework/top.oa.mjs';
import { edi_name } from '../EDIMUseOfDirectory/edi-name.oa.mjs';
import { edi_routing_address } from '../EDIMUseOfDirectory/edi-routing-address.oa.mjs';
import { edi_capabilities } from '../EDIMUseOfDirectory/edi-capabilities.oa.mjs';
import { id_doc_edi_user } from '../EDIMUseOfDirectory/id-doc-edi-user.va.mjs';
/**
 * @summary edi_user
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * edi-user OBJECT-CLASS ::= {
 *   SUBCLASS OF   {top}
 *   MUST CONTAIN  {edi-name}
 *   MAY CONTAIN   {edi-routing-address | edi-capabilities}
 *   ID            id-doc-edi-user
 * }
 * ```
 *
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export const edi_user: OBJECT_CLASS = {
    class: 'OBJECT-CLASS',
    decoderFor: {},
    encoderFor: {},
    '&Superclasses': [top] /* OBJECT_FIELD_SETTING */,
    '&MandatoryAttributes': [edi_name] /* OBJECT_FIELD_SETTING */,
    '&OptionalAttributes': [
        edi_routing_address,
        edi_capabilities,
    ] /* OBJECT_FIELD_SETTING */,
    '&id': id_doc_edi_user /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&kind': structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
