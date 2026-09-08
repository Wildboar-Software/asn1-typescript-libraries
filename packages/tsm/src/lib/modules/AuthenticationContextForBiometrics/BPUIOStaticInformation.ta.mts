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
import { DataType, _decode_DataType, _encode_DataType } from "../AuthenticationContextForBiometrics/DataType.ta.mjs";
// export { DataType, _decode_DataType, _encode_DataType } from "../AuthenticationContextForBiometrics/DataType.ta.mjs";
import { IOIndex, _decode_IOIndex, _encode_IOIndex } from "../AuthenticationContextForBiometrics/IOIndex.ta.mjs";
// export { IOIndex, _decode_IOIndex, _encode_IOIndex } from "../AuthenticationContextForBiometrics/IOIndex.ta.mjs";


/**
 * @summary BPUIOStaticInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BPUIOStaticInformation ::= SEQUENCE {
 *     biometricType       BiometricType OPTIONAL,
 *     biometricSubtype    BiometricSubtype OPTIONAL,
 *     dataType            DataType,
 *     subprocessIOIndex   IOIndex }
 * ```
 * 
 * @class
 */
export
class BPUIOStaticInformation {
    constructor (
        /**
         * @summary `biometricType`.
         * @public
         * @readonly
         */
        readonly biometricType: OPTIONAL<BiometricType>,
        /**
         * @summary `biometricSubtype`.
         * @public
         * @readonly
         */
        readonly biometricSubtype: OPTIONAL<BiometricSubtype>,
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: DataType,
        /**
         * @summary `subprocessIOIndex`.
         * @public
         * @readonly
         */
        readonly subprocessIOIndex: IOIndex
    ) {}

    /**
     * @summary Restructures an object into a BPUIOStaticInformation
     * @description
     * 
     * This takes an `object` and converts it to a `BPUIOStaticInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BPUIOStaticInformation`.
     * @returns {BPUIOStaticInformation}
     */
    public static _from_object (_o: { [_K in keyof (BPUIOStaticInformation)]: (BPUIOStaticInformation)[_K] }): BPUIOStaticInformation {
        return new BPUIOStaticInformation(_o.biometricType, _o.biometricSubtype, _o.dataType, _o.subprocessIOIndex);
    }


}

/**
 * @summary The Leading Root Component Types of BPUIOStaticInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BPUIOStaticInformation: $.ComponentSpec[] = [
    /* FIXME: biometricType COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: biometricSubtype COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("dataType", false, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("subprocessIOIndex", false, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of BPUIOStaticInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BPUIOStaticInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BPUIOStaticInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BPUIOStaticInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BPUIOStaticInformation: $.ASN1Decoder<BPUIOStaticInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BPUIOStaticInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BPUIOStaticInformation (el: _Element): BPUIOStaticInformation {
    if (!_cached_decoder_for_BPUIOStaticInformation) { _cached_decoder_for_BPUIOStaticInformation = function (el: _Element): BPUIOStaticInformation {
    let biometricType: OPTIONAL<BiometricType>;
    let biometricSubtype: OPTIONAL<BiometricSubtype>;
    let dataType!: DataType;
    let subprocessIOIndex!: IOIndex;
    const callbacks: $.DecodingMap = {
        "biometricType": (_el: _Element): void => { biometricType = _decode_BiometricType(_el); },
        "biometricSubtype": (_el: _Element): void => { biometricSubtype = _decode_BiometricSubtype(_el); },
        "dataType": (_el: _Element): void => { dataType = _decode_DataType(_el); },
        "subprocessIOIndex": (_el: _Element): void => { subprocessIOIndex = _decode_IOIndex(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BPUIOStaticInformation,
        _extension_additions_list_spec_for_BPUIOStaticInformation,
        _root_component_type_list_2_spec_for_BPUIOStaticInformation,
        undefined,
    );
    return new BPUIOStaticInformation(
        biometricType,
        biometricSubtype,
        dataType,
        subprocessIOIndex
    );
}; }
    return _cached_decoder_for_BPUIOStaticInformation(el);
}

let _cached_encoder_for_BPUIOStaticInformation: $.ASN1Encoder<BPUIOStaticInformation> | null = null;

/**
 * @summary Encodes a(n) BPUIOStaticInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BPUIOStaticInformation, encoded as an ASN.1 Element.
 */
export
function _encode_BPUIOStaticInformation (value: BPUIOStaticInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BPUIOStaticInformation) { _cached_encoder_for_BPUIOStaticInformation = function (value: BPUIOStaticInformation, elGetter: $.ASN1Encoder<BPUIOStaticInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.biometricType === undefined) ? undefined : _encode_BiometricType(value.biometricType, $.BER)),
            /* IF_ABSENT  */ ((value.biometricSubtype === undefined) ? undefined : _encode_BiometricSubtype(value.biometricSubtype, $.BER)),
            /* REQUIRED   */ _encode_DataType(value.dataType, $.BER),
            /* REQUIRED   */ _encode_IOIndex(value.subprocessIOIndex, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BPUIOStaticInformation(value, elGetter);
}


/* eslint-enable */
