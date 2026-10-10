/* eslint-disable */
import {
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkIdentification
 * @description
 *
 * Identifies the network, and optionally the node, that owns a
 * tariff or that is started or stopped. Clause 9 requires:
 *
 * `{itu-t(0) administration(2) <national regulation authority>(x)
 * network(y) node identification(z)}`.
 *
 * `x` is the national regulation authority. `y` is assigned under
 * that authority. `z` is assigned by the network. Up to six
 * operators may send charging information for one call; they are
 * distinguished up to the `network` arc, and the registration or
 * generation procedures do not depend on that arc's value. An
 * unrecognized network, or a recognized network with no bilateral
 * agreement, is rejected.
 *
 * [ES 201 296 V1.3.1, clauses 6.1 b, 6.3.9, and 9](https://www.etsi.org/deliver/etsi_es/201200_201299/201296/01.03.01_60/es_201296v010301p.pdf).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkIdentification  ::=  OBJECT IDENTIFIER
 * ```
 */
export
type NetworkIdentification = OBJECT_IDENTIFIER; // ObjectIdentifierType
export const _decode_NetworkIdentification = $._decodeObjectIdentifier;
export const _encode_NetworkIdentification = $._encodeObjectIdentifier;


/* eslint-enable */
