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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_reportDelivery
 * @description
 *
 * OBJECT IDENTIFIER `id_package_reportDelivery`. The Report-delivery abstract-operation
 * enables the MTS to acknowledge to the MTS-user one or more outcomes of a previous
 * invocation of the Message-submission or Probe-submission abstract-operations. For the
 * Message-submission abstract-operation, the Report-delivery abstract-operation
 * indicates the delivery or non-delivery of the submitted message to one or more
 * recipients. See ITU-T X.411 (1999), §8.3.1.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-reportDelivery ID ::= {id-package  44}
 * ```
 *
 * @constant
 */
export const id_package_reportDelivery: ID = _OID.fromParts([44], id_package);

/* eslint-enable */
