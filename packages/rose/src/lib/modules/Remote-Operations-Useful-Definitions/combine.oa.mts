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
import { OPERATION_PACKAGE } from '../Remote-Operations-Information-Objects/OPERATION-PACKAGE.oca.mjs';


/**
 * @summary combine
 * @description
 *
 * **This production was manually written in TypeScript.**
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * combine{OPERATION-PACKAGE:ConsumerConsumes, OPERATION-PACKAGE:ConsumerSupplies,
 *         OPERATION-PACKAGE:base} OPERATION-PACKAGE ::= {
 *     OPERATIONS        {ConsumerConsumes.&Both | ConsumerSupplies.&Both}
 *     CONSUMER INVOKES
 *         {ConsumerConsumes.&Consumer | ConsumerSupplies.&Supplier}
 *     SUPPLIER INVOKES
 *         {ConsumerConsumes.&Supplier | ConsumerSupplies.&Consumer}
 *     ID                base.&id
 * }
 * ```
 */
export
function combine (
    ConsumerConsumes: OPERATION_PACKAGE,
    ConsumerSupplies: OPERATION_PACKAGE,
    base: OPERATION_PACKAGE,
): OPERATION_PACKAGE {
    return {
        class: "OPERATION-PACKAGE",
        decoderFor: {},
        encoderFor: {},
        "&Both": [
            ...ConsumerConsumes["&Both"],
            ...ConsumerSupplies["&Both"],
        ],
        "&Consumer": [
            ...ConsumerConsumes["&Consumer"],
            ...ConsumerSupplies["&Supplier"],
        ],
        "&Supplier": [
            ...ConsumerConsumes["&Supplier"],
            ...ConsumerSupplies["&Consumer"],
        ],
        "&id": base["&id"],
    };
}

/* eslint-enable */
