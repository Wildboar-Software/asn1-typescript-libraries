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
import * as $ from "asn1-ts/dist/node/functional";



/* START_OF_SYMBOL_DEFINITION CAMClientInfo */
/**
 * @summary CAMClientInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMClientInfo ::= SEQUENCE {
 *   -- cAMclientType (CAS, ASD, DRM)
 *   -- 0x01 : CAS (Conditional Access System)
 *   -- 0x02 : ASD (Authorized Service Domain)
 *   -- 0x03 : DRM (Digital Rights Management)
 *   -- 0x04 ~ 0xff : reserved
 *   clientType      OCTET STRING(SIZE (1)),
 *   clientPriority  OCTET STRING(SIZE (1)),
 *   clientVendor    OCTET STRING(SIZE (2)),
 *   clientVersion   OCTET STRING(SIZE (2))
 * }
 * ```
 * 
 * @class
 */
export
class CAMClientInfo {
    constructor (
        /**
         * @summary `clientType`.
         * @public
         * @readonly
         */
        readonly clientType: OCTET_STRING,
        /**
         * @summary `clientPriority`.
         * @public
         * @readonly
         */
        readonly clientPriority: OCTET_STRING,
        /**
         * @summary `clientVendor`.
         * @public
         * @readonly
         */
        readonly clientVendor: OCTET_STRING,
        /**
         * @summary `clientVersion`.
         * @public
         * @readonly
         */
        readonly clientVersion: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a CAMClientInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CAMClientInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMClientInfo`.
     * @returns {CAMClientInfo}
     */
    public static _from_object (_o: { [_K in keyof (CAMClientInfo)]: (CAMClientInfo)[_K] }): CAMClientInfo {
        return new CAMClientInfo(_o.clientType, _o.clientPriority, _o.clientVendor, _o.clientVersion);
    }


}
/* END_OF_SYMBOL_DEFINITION CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAMClientInfo */
/**
 * @summary The Leading Root Component Types of CAMClientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMClientInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("clientType", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("clientPriority", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("clientVendor", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("clientVersion", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAMClientInfo */
/**
 * @summary The Trailing Root Component Types of CAMClientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMClientInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAMClientInfo */
/**
 * @summary The Extension Addition Component Types of CAMClientInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMClientInfo: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CAMClientInfo */
let _cached_decoder_for_CAMClientInfo: $.ASN1Decoder<CAMClientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _decode_CAMClientInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) CAMClientInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAMClientInfo} The decoded data structure.
 */
export
function _decode_CAMClientInfo (el: _Element) {
    if (!_cached_decoder_for_CAMClientInfo) { _cached_decoder_for_CAMClientInfo = function (el: _Element): CAMClientInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("CAMClientInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "clientType";
    sequence[1].name = "clientPriority";
    sequence[2].name = "clientVendor";
    sequence[3].name = "clientVersion";
    let clientType!: OCTET_STRING;
    let clientPriority!: OCTET_STRING;
    let clientVendor!: OCTET_STRING;
    let clientVersion!: OCTET_STRING;
    clientType = $._decodeOctetString(sequence[0]);
    clientPriority = $._decodeOctetString(sequence[1]);
    clientVendor = $._decodeOctetString(sequence[2]);
    clientVersion = $._decodeOctetString(sequence[3]);
    return new CAMClientInfo(
        clientType,
        clientPriority,
        clientVendor,
        clientVersion,

    );
}; }
    return _cached_decoder_for_CAMClientInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CAMClientInfo */
let _cached_encoder_for_CAMClientInfo: $.ASN1Encoder<CAMClientInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CAMClientInfo */

/* START_OF_SYMBOL_DEFINITION _encode_CAMClientInfo */
/**
 * @summary Encodes a(n) CAMClientInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMClientInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CAMClientInfo (value: CAMClientInfo, elGetter: $.ASN1Encoder<CAMClientInfo>) {
    if (!_cached_encoder_for_CAMClientInfo) { _cached_encoder_for_CAMClientInfo = function (value: CAMClientInfo, elGetter: $.ASN1Encoder<CAMClientInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.clientType, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.clientPriority, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.clientVendor, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.clientVersion, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CAMClientInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CAMClientInfo */

/* eslint-enable */
