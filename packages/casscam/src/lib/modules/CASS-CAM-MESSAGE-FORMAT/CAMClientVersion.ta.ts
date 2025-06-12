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
import { CAMClientInfo, _decode_CAMClientInfo, _encode_CAMClientInfo } from "../CASS-CAM-MESSAGE-FORMAT/CAMClientInfo.ta.js";
export { CAMClientInfo, _decode_CAMClientInfo, _encode_CAMClientInfo } from "../CASS-CAM-MESSAGE-FORMAT/CAMClientInfo.ta.js";


/* START_OF_SYMBOL_DEFINITION CAMClientVersion */
/**
 * @summary CAMClientVersion
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CAMClientVersion ::= SEQUENCE {
 *   -- CAM chip version
 *   hWVersion      OCTET STRING(SIZE (4)),
 *   -- SW version of Bootloader
 *   sWversion      OCTET STRING(SIZE (4)),
 *   cAMClientInfo  SEQUENCE OF CAMClientInfo
 * }
 * ```
 * 
 * @class
 */
export
class CAMClientVersion {
    constructor (
        /**
         * @summary `hWVersion`.
         * @public
         * @readonly
         */
        readonly hWVersion: OCTET_STRING,
        /**
         * @summary `sWversion`.
         * @public
         * @readonly
         */
        readonly sWversion: OCTET_STRING,
        /**
         * @summary `cAMClientInfo`.
         * @public
         * @readonly
         */
        readonly cAMClientInfo: CAMClientInfo[]
    ) {}

    /**
     * @summary Restructures an object into a CAMClientVersion
     * @description
     * 
     * This takes an `object` and converts it to a `CAMClientVersion`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CAMClientVersion`.
     * @returns {CAMClientVersion}
     */
    public static _from_object (_o: { [_K in keyof (CAMClientVersion)]: (CAMClientVersion)[_K] }): CAMClientVersion {
        return new CAMClientVersion(_o.hWVersion, _o.sWversion, _o.cAMClientInfo);
    }


}
/* END_OF_SYMBOL_DEFINITION CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAMClientVersion */
/**
 * @summary The Leading Root Component Types of CAMClientVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CAMClientVersion: $.ComponentSpec[] = [
    new $.ComponentSpec("hWVersion", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("sWversion", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("cAMClientInfo", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAMClientVersion */
/**
 * @summary The Trailing Root Component Types of CAMClientVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CAMClientVersion: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAMClientVersion */
/**
 * @summary The Extension Addition Component Types of CAMClientVersion
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CAMClientVersion: $.ComponentSpec[] = [
    
];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_CAMClientVersion */
let _cached_decoder_for_CAMClientVersion: $.ASN1Decoder<CAMClientVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _decode_CAMClientVersion */
/**
 * @summary Decodes an ASN.1 element into a(n) CAMClientVersion
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {CAMClientVersion} The decoded data structure.
 */
export
function _decode_CAMClientVersion (el: _Element) {
    if (!_cached_decoder_for_CAMClientVersion) { _cached_decoder_for_CAMClientVersion = function (el: _Element): CAMClientVersion {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CAMClientVersion contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hWVersion";
    sequence[1].name = "sWversion";
    sequence[2].name = "cAMClientInfo";
    let hWVersion!: OCTET_STRING;
    let sWversion!: OCTET_STRING;
    let cAMClientInfo!: CAMClientInfo[];
    hWVersion = $._decodeOctetString(sequence[0]);
    sWversion = $._decodeOctetString(sequence[1]);
    cAMClientInfo = $._decodeSequenceOf<CAMClientInfo>(() => _decode_CAMClientInfo)(sequence[2]);
    return new CAMClientVersion(
        hWVersion,
        sWversion,
        cAMClientInfo,

    );
}; }
    return _cached_decoder_for_CAMClientVersion(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_CAMClientVersion */
let _cached_encoder_for_CAMClientVersion: $.ASN1Encoder<CAMClientVersion> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_CAMClientVersion */

/* START_OF_SYMBOL_DEFINITION _encode_CAMClientVersion */
/**
 * @summary Encodes a(n) CAMClientVersion into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CAMClientVersion, encoded as an ASN.1 Element.
 */
export
function _encode_CAMClientVersion (value: CAMClientVersion, elGetter: $.ASN1Encoder<CAMClientVersion>) {
    if (!_cached_encoder_for_CAMClientVersion) { _cached_encoder_for_CAMClientVersion = function (value: CAMClientVersion, elGetter: $.ASN1Encoder<CAMClientVersion>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.hWVersion, $.BER),
            /* REQUIRED   */ $._encodeOctetString(value.sWversion, $.BER),
            /* REQUIRED   */ $._encodeSequenceOf<CAMClientInfo>(() => _encode_CAMClientInfo, $.BER)(value.cAMClientInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CAMClientVersion(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_CAMClientVersion */

/* eslint-enable */
