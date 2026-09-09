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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary NetworkResource
 * @description
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
 * @constant
 * @type {number}
 */
export
const NetworkResource_plmn: NetworkResource = NetworkResource.plmn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary plmn
 * @constant
 * @type {number}
 */
export
const plmn: NetworkResource = NetworkResource.plmn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_hlr
 * @constant
 * @type {number}
 */
export
const NetworkResource_hlr: NetworkResource = NetworkResource.hlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hlr
 * @constant
 * @type {number}
 */
export
const hlr: NetworkResource = NetworkResource.hlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_vlr
 * @constant
 * @type {number}
 */
export
const NetworkResource_vlr: NetworkResource = NetworkResource.vlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vlr
 * @constant
 * @type {number}
 */
export
const vlr: NetworkResource = NetworkResource.vlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_pvlr
 * @constant
 * @type {number}
 */
export
const NetworkResource_pvlr: NetworkResource = NetworkResource.pvlr; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary pvlr
 * @constant
 * @type {number}
 */
export
const pvlr: NetworkResource = NetworkResource.pvlr; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_controllingMSC
 * @constant
 * @type {number}
 */
export
const NetworkResource_controllingMSC: NetworkResource = NetworkResource.controllingMSC; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary controllingMSC
 * @constant
 * @type {number}
 */
export
const controllingMSC: NetworkResource = NetworkResource.controllingMSC; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_vmsc
 * @constant
 * @type {number}
 */
export
const NetworkResource_vmsc: NetworkResource = NetworkResource.vmsc; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary vmsc
 * @constant
 * @type {number}
 */
export
const vmsc: NetworkResource = NetworkResource.vmsc; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_eir
 * @constant
 * @type {number}
 */
export
const NetworkResource_eir: NetworkResource = NetworkResource.eir; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary eir
 * @constant
 * @type {number}
 */
export
const eir: NetworkResource = NetworkResource.eir; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NetworkResource_rss
 * @constant
 * @type {number}
 */
export
const NetworkResource_rss: NetworkResource = NetworkResource.rss; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rss
 * @constant
 * @type {number}
 */
export
const rss: NetworkResource = NetworkResource.rss; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NetworkResource: $.ASN1Decoder<NetworkResource> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkResource
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkResource (el: _Element): NetworkResource {
    if (!_cached_decoder_for_NetworkResource) { _cached_decoder_for_NetworkResource = $._decodeEnumerated; }
    return _cached_decoder_for_NetworkResource(el);
}

let _cached_encoder_for_NetworkResource: $.ASN1Encoder<NetworkResource> | null = null;

/**
 * @summary Encodes a(n) NetworkResource into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkResource, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkResource (value: NetworkResource, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkResource) { _cached_encoder_for_NetworkResource = $._encodeEnumerated; }
    return _cached_encoder_for_NetworkResource(value, elGetter);
}


/* eslint-enable */
