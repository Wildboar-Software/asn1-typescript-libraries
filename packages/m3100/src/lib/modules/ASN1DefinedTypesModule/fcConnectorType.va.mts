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
    ConnectorType,
    _decode_ConnectorType,
    _encode_ConnectorType,
} from '../ASN1DefinedTypesModule/ConnectorType.ta.mjs';

/**
 * @summary fcConnectorType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * fcConnectorType ConnectorType ::= 1
 * ```
 *
 * @constant
 */
export const fcConnectorType: ConnectorType = 1;

/* eslint-enable */
