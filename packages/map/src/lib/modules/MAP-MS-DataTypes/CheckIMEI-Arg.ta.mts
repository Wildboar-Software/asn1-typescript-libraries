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
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { RequestedEquipmentInfo, RequestedEquipmentInfo_equipmentStatus /* IMPORTED_LONG_NAMED_BIT */, equipmentStatus /* IMPORTED_SHORT_NAMED_BIT */, RequestedEquipmentInfo_bmuef /* IMPORTED_LONG_NAMED_BIT */, bmuef /* IMPORTED_SHORT_NAMED_BIT */, _decode_RequestedEquipmentInfo, _encode_RequestedEquipmentInfo } from "../MAP-MS-DataTypes/RequestedEquipmentInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CheckIMEI_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckIMEI-Arg ::= SEQUENCE {
 *     imei    IMEI,
 *     requestedEquipmentInfo    RequestedEquipmentInfo,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CheckIMEI_Arg {
    constructor (
        /**
         * @summary `imei`.
         * @public
         * @readonly
         */
        readonly imei: IMEI,
        /**
         * @summary `requestedEquipmentInfo`.
         * @public
         * @readonly
         */
        readonly requestedEquipmentInfo: RequestedEquipmentInfo,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CheckIMEI_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `CheckIMEI_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CheckIMEI_Arg`.
     * @returns {CheckIMEI_Arg}
     */
    public static _from_object (_o: { [_K in keyof (CheckIMEI_Arg)]: (CheckIMEI_Arg)[_K] }): CheckIMEI_Arg {
        return new CheckIMEI_Arg(_o.imei, _o.requestedEquipmentInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CheckIMEI_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CheckIMEI_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("imei", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("requestedEquipmentInfo", false, $.hasTag(_TagClass.universal, 3)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of CheckIMEI_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CheckIMEI_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CheckIMEI_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CheckIMEI_Arg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CheckIMEI_Arg: $.ASN1Decoder<CheckIMEI_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CheckIMEI_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CheckIMEI_Arg (el: _Element): CheckIMEI_Arg {
    if (!_cached_decoder_for_CheckIMEI_Arg) { _cached_decoder_for_CheckIMEI_Arg = function (el: _Element): CheckIMEI_Arg {
    let imei!: IMEI;
    let requestedEquipmentInfo!: RequestedEquipmentInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imei": (_el: _Element): void => { imei = _decode_IMEI(_el); },
        "requestedEquipmentInfo": (_el: _Element): void => { requestedEquipmentInfo = _decode_RequestedEquipmentInfo(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CheckIMEI_Arg,
        _extension_additions_list_spec_for_CheckIMEI_Arg,
        _root_component_type_list_2_spec_for_CheckIMEI_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CheckIMEI_Arg(
        imei,
        requestedEquipmentInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CheckIMEI_Arg(el);
}

let _cached_encoder_for_CheckIMEI_Arg: $.ASN1Encoder<CheckIMEI_Arg> | null = null;

/**
 * @summary Encodes a(n) CheckIMEI_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CheckIMEI_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_CheckIMEI_Arg (value: CheckIMEI_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CheckIMEI_Arg) { _cached_encoder_for_CheckIMEI_Arg = function (value: CheckIMEI_Arg, elGetter: $.ASN1Encoder<CheckIMEI_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_IMEI(value.imei, $.BER),
            /* REQUIRED   */ _encode_RequestedEquipmentInfo(value.requestedEquipmentInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CheckIMEI_Arg(value, elGetter);
}


/* eslint-enable */
