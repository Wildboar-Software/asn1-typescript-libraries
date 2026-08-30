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
import { T_BcsmCamelTDPDataList, _decode_T_BcsmCamelTDPDataList, _encode_T_BcsmCamelTDPDataList } from "../MAP-MS-DataTypes/T-BcsmCamelTDPDataList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { CamelCapabilityHandling, _decode_CamelCapabilityHandling, _encode_CamelCapabilityHandling } from "../MAP-MS-DataTypes/CamelCapabilityHandling.ta.mjs";


/**
 * @summary T_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * T-CSI ::= SEQUENCE {
 *     t-BcsmCamelTDPDataList    T-BcsmCamelTDPDataList,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     camelCapabilityHandling    [0] CamelCapabilityHandling    OPTIONAL,
 *     notificationToCSE    [1] NULL    OPTIONAL,
 *     csi-Active    [2] NULL    OPTIONAL}
 * ```
 * 
 * @class
 */
export
class T_CSI {
    constructor (
        /**
         * @summary `t_BcsmCamelTDPDataList`.
         * @public
         * @readonly
         */
        readonly t_BcsmCamelTDPDataList: T_BcsmCamelTDPDataList,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `camelCapabilityHandling`.
         * @public
         * @readonly
         */
        readonly camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling>,
        /**
         * @summary `notificationToCSE`.
         * @public
         * @readonly
         */
        readonly notificationToCSE: OPTIONAL<NULL>,
        /**
         * @summary `csi_Active`.
         * @public
         * @readonly
         */
        readonly csi_Active: OPTIONAL<NULL>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a T_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `T_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `T_CSI`.
     * @returns {T_CSI}
     */
    public static _from_object (_o: { [_K in keyof (T_CSI)]: (T_CSI)[_K] }): T_CSI {
        return new T_CSI(_o.t_BcsmCamelTDPDataList, _o.extensionContainer, _o.camelCapabilityHandling, _o.notificationToCSE, _o.csi_Active, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of T_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_T_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("t-BcsmCamelTDPDataList", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of T_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_T_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of T_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_T_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("camelCapabilityHandling", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("csi-Active", true, $.hasTag(_TagClass.context, 2))
];

let _cached_decoder_for_T_CSI: $.ASN1Decoder<T_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) T_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_T_CSI (el: _Element): T_CSI {
    if (!_cached_decoder_for_T_CSI) { _cached_decoder_for_T_CSI = function (el: _Element): T_CSI {
    let t_BcsmCamelTDPDataList!: T_BcsmCamelTDPDataList;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling> = undefined;
    let notificationToCSE: OPTIONAL<NULL> = undefined;
    let csi_Active: OPTIONAL<NULL> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "t-BcsmCamelTDPDataList": (_el: _Element): void => { t_BcsmCamelTDPDataList = _decode_T_BcsmCamelTDPDataList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "camelCapabilityHandling": (_el: _Element): void => { camelCapabilityHandling = $._decode_implicit<CamelCapabilityHandling>(() => _decode_CamelCapabilityHandling)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csi-Active": (_el: _Element): void => { csi_Active = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_T_CSI,
        _extension_additions_list_spec_for_T_CSI,
        _root_component_type_list_2_spec_for_T_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new T_CSI(
        t_BcsmCamelTDPDataList,
        extensionContainer,
        camelCapabilityHandling,
        notificationToCSE,
        csi_Active,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_T_CSI(el);
}

let _cached_encoder_for_T_CSI: $.ASN1Encoder<T_CSI> | null = null;

/**
 * @summary Encodes a(n) T_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The T_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_T_CSI (value: T_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_T_CSI) { _cached_encoder_for_T_CSI = function (value: T_CSI, elGetter: $.ASN1Encoder<T_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_T_BcsmCamelTDPDataList(value.t_BcsmCamelTDPDataList, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.camelCapabilityHandling === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CamelCapabilityHandling, $.BER)(value.camelCapabilityHandling, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.csi_Active === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.csi_Active, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_T_CSI(value, elGetter);
}


/* eslint-enable */
