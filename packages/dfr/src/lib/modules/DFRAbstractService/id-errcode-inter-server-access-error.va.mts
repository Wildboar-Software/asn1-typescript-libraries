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
} from "@wildboar/asn1";
import { Code, _decode_Code, _encode_Code } from "../Remote-Operations-Information-Objects/Code.ta.mjs";


/**
 * @summary id_errcode_inter_server_access_error
 * @description
 *
 * Local ROSE error code 6 for `interServerAccessError`. ISO/IEC 10166-1:1991
 * §8.3.6. ISO/IEC 10166-2:1991 §6.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * id-errcode-inter-server-access-error    Code ::= local:6
 * ```
 * 
 * @constant
 */
export
const id_errcode_inter_server_access_error: Code = { local: 6 };

/* eslint-enable */
