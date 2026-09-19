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
import { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";
// export { VersionType, _decode_VersionType, _encode_VersionType } from "../RSPDefinitions/VersionType.ta.mjs";


/**
 * @summary IoTSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IoTSpecificInfo ::= SEQUENCE {
 *     iotVersion [0] SEQUENCE OF VersionType, -- SGP.32 version(s) supported by the eUICC, at least one must be present
 *     ecallSupported [1] NULL OPTIONAL, -- if present, eUICC supports the Emergency Mechanism
 *     fallbackSupported [2] NULL OPTIONAL, -- if present, eUICC supports the Fallback Mechanism
 *     fallbackAllowedUpdateSupported [3] NULL OPTIONAL -- if present, eUICC supports the update of the Fallback Allowed metadata via ES6
 * }
 * ```
 * 
 * @class
 */
export
class IoTSpecificInfo {
    constructor (
        /**
         * @summary `iotVersion`.
         * @public
         * @readonly
         */
        readonly iotVersion: VersionType[],
        /**
         * @summary `ecallSupported`.
         * @public
         * @readonly
         */
        readonly ecallSupported: OPTIONAL<NULL>,
        /**
         * @summary `fallbackSupported`.
         * @public
         * @readonly
         */
        readonly fallbackSupported: OPTIONAL<NULL>,
        /**
         * @summary `fallbackAllowedUpdateSupported`.
         * @public
         * @readonly
         */
        readonly fallbackAllowedUpdateSupported: OPTIONAL<NULL>
    ) {}

    /**
     * @summary Restructures an object into a IoTSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `IoTSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IoTSpecificInfo`.
     * @returns {IoTSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (IoTSpecificInfo)]: (IoTSpecificInfo)[_K] }): IoTSpecificInfo {
        return new IoTSpecificInfo(_o.iotVersion, _o.ecallSupported, _o.fallbackSupported, _o.fallbackAllowedUpdateSupported);
    }


}

/**
 * @summary The Leading Root Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iotVersion", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ecallSupported", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("fallbackSupported", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fallbackAllowedUpdateSupported", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IoTSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IoTSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IoTSpecificInfo: $.ASN1Decoder<IoTSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IoTSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IoTSpecificInfo (el: _Element): IoTSpecificInfo {
    if (!_cached_decoder_for_IoTSpecificInfo) { _cached_decoder_for_IoTSpecificInfo = function (el: _Element): IoTSpecificInfo {
    let iotVersion!: VersionType[];
    let ecallSupported: OPTIONAL<NULL>;
    let fallbackSupported: OPTIONAL<NULL>;
    let fallbackAllowedUpdateSupported: OPTIONAL<NULL>;
    const callbacks: $.DecodingMap = {
        "iotVersion": (_el: _Element): void => { iotVersion = $._decode_implicit<VersionType[]>(() => $._decodeSequenceOf<VersionType>(() => _decode_VersionType))(_el); },
        "ecallSupported": (_el: _Element): void => { ecallSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "fallbackSupported": (_el: _Element): void => { fallbackSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "fallbackAllowedUpdateSupported": (_el: _Element): void => { fallbackAllowedUpdateSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IoTSpecificInfo,
        _extension_additions_list_spec_for_IoTSpecificInfo,
        _root_component_type_list_2_spec_for_IoTSpecificInfo,
        undefined,
    );
    return new IoTSpecificInfo(
        iotVersion,
        ecallSupported,
        fallbackSupported,
        fallbackAllowedUpdateSupported
    );
}; }
    return _cached_decoder_for_IoTSpecificInfo(el);
}

let _cached_encoder_for_IoTSpecificInfo: $.ASN1Encoder<IoTSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) IoTSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IoTSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_IoTSpecificInfo (value: IoTSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IoTSpecificInfo) { _cached_encoder_for_IoTSpecificInfo = function (value: IoTSpecificInfo, elGetter: $.ASN1Encoder<IoTSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<VersionType>(() => _encode_VersionType, $.BER), $.BER)(value.iotVersion, $.BER),
            /* IF_ABSENT  */ ((value.ecallSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.ecallSupported, $.BER)),
            /* IF_ABSENT  */ ((value.fallbackSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.fallbackSupported, $.BER)),
            /* IF_ABSENT  */ ((value.fallbackAllowedUpdateSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.fallbackAllowedUpdateSupported, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IoTSpecificInfo(value, elGetter);
}


/* eslint-enable */
