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
 * @summary id_package_cancelDeferredDelivery
 * @description
 *
 * OBJECT IDENTIFIER `id_package_cancelDeferredDelivery`. The Cancel-deferred-delivery
 * abstract-operation enables an MTS-user to abort the deferred-delivery of a message
 * previously submitted by that user via the Message-submission abstract-operation. The
 * MTS-user identifies the message whose delivery is to be cancelled by means of the
 * message-submission-identifier returned by the MTS as a result of the previous
 * invocation of the Message-submission abstract-operation. See ITU-T X.411 (1999),
 * §8.2.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-cancelDeferredDelivery ID ::= {id-package  3}
 * ```
 *
 * @constant
 */
export const id_package_cancelDeferredDelivery: ID = _OID.fromParts([3], id_package);

/* eslint-enable */
