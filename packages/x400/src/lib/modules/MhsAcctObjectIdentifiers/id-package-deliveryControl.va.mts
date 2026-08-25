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
 * @summary id_package_deliveryControl
 * @description
 *
 * The Delivery-control abstract-operation enables the MTS-user to temporarily limit the
 * delivery-port abstract-operations that the MTS may invoke, and the messages that the MTS
 * may deliver to the MTS-user via the Message-delivery abstract-operation. The MTS shall
 * hold until a later time, rather than abandon, abstract-operations and messages presently
 * forbidden. See ITU-T X.411 (1999), §8.3.1.3.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-deliveryControl ID ::= {id-package  15}
 * ```
 *
 * @constant
 */
export const id_package_deliveryControl: ID = _OID.fromParts([15], id_package);

/* eslint-enable */
