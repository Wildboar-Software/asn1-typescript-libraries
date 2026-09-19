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
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_RCSSessionEndpoints {
    remoteOnly = 1,
    localOnly = 2,
    localAndRemote = 3,
}

/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type RCSSessionEndpoints = _enum_for_RCSSessionEndpoints;

/**
 * @summary RCSSessionEndpoints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RCSSessionEndpoints  ::=  ENUMERATED
 * {
 *     remoteOnly(1),
 *     localOnly(2),
 *     localAndRemote(3)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const RCSSessionEndpoints = _enum_for_RCSSessionEndpoints;

/**
 * @summary RCSSessionEndpoints_remoteOnly
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary remoteOnly
 * @constant
 * @type {number}
 */
export
const remoteOnly: RCSSessionEndpoints = RCSSessionEndpoints.remoteOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localOnly
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localOnly
 * @constant
 * @type {number}
 */
export
const localOnly: RCSSessionEndpoints = RCSSessionEndpoints.localOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary RCSSessionEndpoints_localAndRemote
 * @constant
 * @type {number}
 */
export
const RCSSessionEndpoints_localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary localAndRemote
 * @constant
 * @type {number}
 */
export
const localAndRemote: RCSSessionEndpoints = RCSSessionEndpoints.localAndRemote; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_RCSSessionEndpoints: $.ASN1Decoder<RCSSessionEndpoints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RCSSessionEndpoints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RCSSessionEndpoints (el: _Element): RCSSessionEndpoints {
    if (!_cached_decoder_for_RCSSessionEndpoints) { _cached_decoder_for_RCSSessionEndpoints = $._decodeEnumerated; }
    return _cached_decoder_for_RCSSessionEndpoints(el);
}

let _cached_encoder_for_RCSSessionEndpoints: $.ASN1Encoder<RCSSessionEndpoints> | null = null;

/**
 * @summary Encodes a(n) RCSSessionEndpoints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RCSSessionEndpoints, encoded as an ASN.1 Element.
 */
export
function _encode_RCSSessionEndpoints (value: RCSSessionEndpoints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RCSSessionEndpoints) { _cached_encoder_for_RCSSessionEndpoints = $._encodeEnumerated; }
    return _cached_encoder_for_RCSSessionEndpoints(value, elGetter);
}


/* eslint-enable */
