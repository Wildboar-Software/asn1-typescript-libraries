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
 * @summary lcConnectorType
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * lcConnectorType ConnectorType ::= 2
 * ```
 *
 * @constant
 */
export const lcConnectorType: ConnectorType = 2;

/* eslint-enable */
