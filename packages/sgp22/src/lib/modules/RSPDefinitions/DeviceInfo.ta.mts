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
import { Octet4, _decode_Octet4, _encode_Octet4 } from "../RSPDefinitions/Octet4.ta.mjs";
// export { Octet4, _decode_Octet4, _encode_Octet4 } from "../RSPDefinitions/Octet4.ta.mjs";
import { DeviceCapabilities, _decode_DeviceCapabilities, _encode_DeviceCapabilities } from "../RSPDefinitions/DeviceCapabilities.ta.mjs";
// export { DeviceCapabilities, _decode_DeviceCapabilities, _encode_DeviceCapabilities } from "../RSPDefinitions/DeviceCapabilities.ta.mjs";
import { Octet8, _decode_Octet8, _encode_Octet8 } from "../RSPDefinitions/Octet8.ta.mjs";
// export { Octet8, _decode_Octet8, _encode_Octet8 } from "../RSPDefinitions/Octet8.ta.mjs";


/**
 * @summary DeviceInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeviceInfo ::= SEQUENCE {
 *     tac Octet4,
 *     deviceCapabilities DeviceCapabilities,
 *     imei Octet8 OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DeviceInfo {
    constructor (
        /**
         * @summary `tac`.
         * @public
         * @readonly
         */
        readonly tac: Octet4,
        /**
         * @summary `deviceCapabilities`.
         * @public
         * @readonly
         */
        readonly deviceCapabilities: DeviceCapabilities,
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: OPTIONAL<Octet8>
    ) {}

    /**
     * @summary Restructures an object into a DeviceInfo
     * @description
     * 
     * This takes an `object` and converts it to a `DeviceInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DeviceInfo`.
     * @returns {DeviceInfo}
     */
    public static _from_object (_o: { [_K in keyof (DeviceInfo)]: (DeviceInfo)[_K] }): DeviceInfo {
        return new DeviceInfo(_o.tac, _o.deviceCapabilities, _o.imei);
    }


}

/**
 * @summary The Leading Root Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DeviceInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("tac", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("deviceCapabilities", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("imei", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DeviceInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DeviceInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DeviceInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DeviceInfo: $.ASN1Decoder<DeviceInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeviceInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeviceInfo (el: _Element): DeviceInfo {
    if (!_cached_decoder_for_DeviceInfo) { _cached_decoder_for_DeviceInfo = function (el: _Element): DeviceInfo {
    let tac!: Octet4;
    let deviceCapabilities!: DeviceCapabilities;
    let imei: OPTIONAL<Octet8>;
    const callbacks: $.DecodingMap = {
        "tac": (_el: _Element): void => { tac = _decode_Octet4(_el); },
        "deviceCapabilities": (_el: _Element): void => { deviceCapabilities = _decode_DeviceCapabilities(_el); },
        "imei": (_el: _Element): void => { imei = _decode_Octet8(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DeviceInfo,
        _extension_additions_list_spec_for_DeviceInfo,
        _root_component_type_list_2_spec_for_DeviceInfo,
        undefined,
    );
    return new DeviceInfo(
        tac,
        deviceCapabilities,
        imei
    );
}; }
    return _cached_decoder_for_DeviceInfo(el);
}

let _cached_encoder_for_DeviceInfo: $.ASN1Encoder<DeviceInfo> | null = null;

/**
 * @summary Encodes a(n) DeviceInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeviceInfo, encoded as an ASN.1 Element.
 */
export
function _encode_DeviceInfo (value: DeviceInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeviceInfo) { _cached_encoder_for_DeviceInfo = function (value: DeviceInfo, elGetter: $.ASN1Encoder<DeviceInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_Octet4(value.tac, $.BER),
            /* REQUIRED   */ _encode_DeviceCapabilities(value.deviceCapabilities, $.BER),
            /* IF_ABSENT  */ ((value.imei === undefined) ? undefined : _encode_Octet8(value.imei, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DeviceInfo(value, elGetter);
}


/* eslint-enable */
