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
    ProbeOriginAuthenticationCheck,
    _decode_ProbeOriginAuthenticationCheck,
    _encode_ProbeOriginAuthenticationCheck,
} from '../MTSAbstractService/ProbeOriginAuthenticationCheck.ta.mjs';
import { id_att_probe_origin_authentication_check } from '../MSObjectIdentifiers/id-att-probe-origin-authentication-check.va.mjs';
import { type X413ATTRIBUTE } from '../MSAbstractService/X413ATTRIBUTE.oca.mjs';
import { single_valued } from "../MSAbstractService/X413ATTRIBUTE-numeration.ta.mjs";

/**
 * @summary mt_probe_origin_authentication_check
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mt-probe-origin-authentication-check X413ATTRIBUTE ::= {
 *   WITH ATTRIBUTE-SYNTAX  ProbeOriginAuthenticationCheck,
 *   NUMERATION             single-valued,
 *   ID                     id-att-probe-origin-authentication-check
 * }
 * ```
 *
 * @constant
 * @type {X413ATTRIBUTE<ProbeOriginAuthenticationCheck>}
 * @implements {X413ATTRIBUTE<ProbeOriginAuthenticationCheck>}
 */
export const mt_probe_origin_authentication_check: X413ATTRIBUTE<ProbeOriginAuthenticationCheck> = {
    class: 'X413ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_ProbeOriginAuthenticationCheck,
    },
    encoderFor: {
        '&Type': _encode_ProbeOriginAuthenticationCheck,
    },
    '&numeration': single_valued /* OBJECT_FIELD_SETTING */,
    '&id': id_att_probe_origin_authentication_check /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
