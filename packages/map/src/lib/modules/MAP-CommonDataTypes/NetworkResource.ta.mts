/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NetworkResource
 * @description
 *
 * Class or type of network resource that may qualify a system-failure error:
 * PLMN; HLR; VLR (current or previous); MSC (controlling or current); EIR;
 * radio sub-system.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.10.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkResource  ::=  ENUMERATED {
 *     plmn  (0),
 *     hlr  (1),
 *     vlr  (2),
 *     pvlr  (3),
 *     controllingMSC  (4),
 *     vmsc  (5),
 *     eir  (6),
 *     rss  (7)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NetworkResource {
    plmn = 0,
    hlr = 1,
    vlr = 2,
    pvlr = 3,
    controllingMSC = 4,
    vmsc = 5,
    eir = 6,
    rss = 7,
}

/**
 * @summary NetworkResource
 * @description
 *
 * Class or type of network resource that may qualify a system-failure error:
 * PLMN; HLR; VLR (current or previous); MSC (controlling or current); EIR;
 * radio sub-system.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.10.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkResource  ::=  ENUMERATED {
 *     plmn  (0),
 *     hlr  (1),
 *     vlr  (2),
 *     pvlr  (3),
 *     controllingMSC  (4),
 *     vmsc  (5),
 *     eir  (6),
 *     rss  (7)}
 * ```
 * 
 * @enum {number}
 */
export
type NetworkResource = _enum_for_NetworkResource;

/**
 * @summary NetworkResource
 * @description
 *
 * Class or type of network resource that may qualify a system-failure error:
 * PLMN; HLR; VLR (current or previous); MSC (controlling or current); EIR;
 * radio sub-system.
 *
 * (3GPP TS 29.002 V19.1.0 clauses 17.7.8 and 7.6.10.1).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkResource  ::=  ENUMERATED {
 *     plmn  (0),
 *     hlr  (1),
 *     vlr  (2),
 *     pvlr  (3),
 *     controllingMSC  (4),
 *     vmsc  (5),
 *     eir  (6),
 *     rss  (7)}
 * ```
 * 
 * @enum {number}
 */
export
const NetworkResource = _enum_for_NetworkResource;

/**
 * @summary NetworkResource_plmn
 * @description
 *
 * PLMN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_plmn: NetworkResource = NetworkResource.plmn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmn
 * @description
 *
 * PLMN (value 0). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const plmn: NetworkResource = NetworkResource.plmn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_hlr
 * @description
 *
 * HLR (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_hlr: NetworkResource = NetworkResource.hlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hlr
 * @description
 *
 * HLR (value 1). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const hlr: NetworkResource = NetworkResource.hlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_vlr
 * @description
 *
 * Current VLR (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_vlr: NetworkResource = NetworkResource.vlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vlr
 * @description
 *
 * Current VLR (value 2). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const vlr: NetworkResource = NetworkResource.vlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_pvlr
 * @description
 *
 * Previous VLR (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_pvlr: NetworkResource = NetworkResource.pvlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pvlr
 * @description
 *
 * Previous VLR (value 3). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const pvlr: NetworkResource = NetworkResource.pvlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_controllingMSC
 * @description
 *
 * Controlling MSC (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_controllingMSC: NetworkResource = NetworkResource.controllingMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary controllingMSC
 * @description
 *
 * Controlling MSC (value 4). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const controllingMSC: NetworkResource = NetworkResource.controllingMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_vmsc
 * @description
 *
 * Current (visited) MSC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_vmsc: NetworkResource = NetworkResource.vmsc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vmsc
 * @description
 *
 * Current (visited) MSC (value 5). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const vmsc: NetworkResource = NetworkResource.vmsc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_eir
 * @description
 *
 * EIR (value 6). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_eir: NetworkResource = NetworkResource.eir; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eir
 * @description
 *
 * EIR (value 6). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const eir: NetworkResource = NetworkResource.eir; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_rss
 * @description
 *
 * Radio sub-system (value 7). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const NetworkResource_rss: NetworkResource = NetworkResource.rss; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rss
 * @description
 *
 * Radio sub-system (value 7). (3GPP TS 29.002 V19.1.0 clause 7.6.10.1).
 *
 * @constant
 * @type {number}
 */
export
const rss: NetworkResource = NetworkResource.rss; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export const _decode_NetworkResource = $._decodeEnumerated;

/**
 * @summary Encodes a(n) NetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkResource, encoded as an ASN.1 Element.
 */
export const _encode_NetworkResource = $._encodeEnumerated;


/* eslint-enable */
