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
    ConnectorType,
    _decode_ConnectorType,
    _encode_ConnectorType,
} from '../ASN1DefinedTypesModule/ConnectorType.ta.mjs';

/**
 * @summary scConnectorType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * scConnectorType ConnectorType ::= 3
 * ```
 *
 * @constant
 */
export const scConnectorType: ConnectorType = 3;

/* eslint-enable */
