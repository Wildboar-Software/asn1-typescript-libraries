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
import { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../TSM/ProtocolIdentifier.ta.mjs";
// export { ProtocolIdentifier, _decode_ProtocolIdentifier, _encode_ProtocolIdentifier } from "../TSM/ProtocolIdentifier.ta.mjs";
import { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
// export { ProtocolVersion, _decode_ProtocolVersion, _encode_ProtocolVersion } from "../TSM/ProtocolVersion.ta.mjs";
import { TSMPlainText_fragment, _decode_TSMPlainText_fragment, _encode_TSMPlainText_fragment } from "../TSM/TSMPlainText-fragment.ta.mjs";
// export { TSMPlainText_fragment, _decode_TSMPlainText_fragment, _encode_TSMPlainText_fragment } from "../TSM/TSMPlainText-fragment.ta.mjs";


/**
 * @summary TSMPlainText
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMPlainText ::= SEQUENCE {
 * protocolID    ProtocolIdentifier,
 * version    ProtocolVersion,
 * fragment    CHOICE {
 *     change-cipher-spec-opaque    ChangeCipherSpec,
 *     alert-opaque            Alert,
 *     biometric-handshake-opaque    Handshake,
 *     application-data-opaque    ApplicationData
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class TSMPlainText {
    constructor (
        /**
         * @summary `protocolID`.
         * @public
         * @readonly
         */
        readonly protocolID: ProtocolIdentifier,
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: ProtocolVersion,
        /**
         * @summary `fragment`.
         * @public
         * @readonly
         */
        readonly fragment: TSMPlainText_fragment
    ) {}

    /**
     * @summary Restructures an object into a TSMPlainText
     * @description
     * 
     * This takes an `object` and converts it to a `TSMPlainText`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSMPlainText`.
     * @returns {TSMPlainText}
     */
    public static _from_object (_o: { [_K in keyof (TSMPlainText)]: (TSMPlainText)[_K] }): TSMPlainText {
        return new TSMPlainText(_o.protocolID, _o.version, _o.fragment);
    }


}

/**
 * @summary The Leading Root Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TSMPlainText: $.ComponentSpec[] = [
    new $.ComponentSpec("protocolID", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("version", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("fragment", false, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TSMPlainText: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TSMPlainText
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TSMPlainText: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TSMPlainText: $.ASN1Decoder<TSMPlainText> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMPlainText
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMPlainText (el: _Element): TSMPlainText {
    if (!_cached_decoder_for_TSMPlainText) { _cached_decoder_for_TSMPlainText = function (el: _Element): TSMPlainText {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("TSMPlainText contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "protocolID";
    sequence[1].name = "version";
    sequence[2].name = "fragment";
    let protocolID!: ProtocolIdentifier;
    let version!: ProtocolVersion;
    let fragment!: TSMPlainText_fragment;
    protocolID = _decode_ProtocolIdentifier(sequence[0]);
    version = _decode_ProtocolVersion(sequence[1]);
    fragment = _decode_TSMPlainText_fragment(sequence[2]);
    return new TSMPlainText(
        protocolID,
        version,
        fragment,

    );
}; }
    return _cached_decoder_for_TSMPlainText(el);
}

let _cached_encoder_for_TSMPlainText: $.ASN1Encoder<TSMPlainText> | null = null;

/**
 * @summary Encodes a(n) TSMPlainText into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMPlainText, encoded as an ASN.1 Element.
 */
export
function _encode_TSMPlainText (value: TSMPlainText, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMPlainText) { _cached_encoder_for_TSMPlainText = function (value: TSMPlainText, elGetter: $.ASN1Encoder<TSMPlainText>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ProtocolIdentifier(value.protocolID, $.BER),
            /* REQUIRED   */ _encode_ProtocolVersion(value.version, $.BER),
            /* REQUIRED   */ _encode_TSMPlainText_fragment(value.fragment, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TSMPlainText(value, elGetter);
}


/* eslint-enable */
