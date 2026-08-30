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
import { SS_CamelData, _decode_SS_CamelData, _encode_SS_CamelData } from "../MAP-MS-DataTypes/SS-CamelData.ta.mjs";
// export { SS_CamelData, _decode_SS_CamelData, _encode_SS_CamelData } from "../MAP-MS-DataTypes/SS-CamelData.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SS_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-CSI ::= SEQUENCE {
 *     ss-CamelData    SS-CamelData,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     notificationToCSE    [0]    NULL    OPTIONAL,
 *     csi-Active    [1]    NULL    OPTIONAL
 * --    notificationToCSE and csi-Active shall not be present when SS-CSI is sent to VLR.
 * --    They may only be included in ATSI/ATM ack/NSDC message.
 * }
 * ```
 * 
 * @class
 */
export
class SS_CSI {
    constructor (
        /**
         * @summary `ss_CamelData`.
         * @public
         * @readonly
         */
        readonly ss_CamelData: SS_CamelData,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
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
     * @summary Restructures an object into a SS_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `SS_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SS_CSI`.
     * @returns {SS_CSI}
     */
    public static _from_object (_o: { [_K in keyof (SS_CSI)]: (SS_CSI)[_K] }): SS_CSI {
        return new SS_CSI(_o.ss_CamelData, _o.extensionContainer, _o.notificationToCSE, _o.csi_Active, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SS_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("ss-CamelData", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SS_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SS_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("csi-Active", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

let _cached_decoder_for_SS_CSI: $.ASN1Decoder<SS_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_CSI (el: _Element): SS_CSI {
    if (!_cached_decoder_for_SS_CSI) { _cached_decoder_for_SS_CSI = function (el: _Element): SS_CSI {
    let ss_CamelData!: SS_CamelData;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let notificationToCSE: OPTIONAL<NULL>;
    let csi_Active: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ss-CamelData": (_el: _Element): void => { ss_CamelData = _decode_SS_CamelData(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csi-Active": (_el: _Element): void => { csi_Active = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SS_CSI,
        _extension_additions_list_spec_for_SS_CSI,
        _root_component_type_list_2_spec_for_SS_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SS_CSI(
        ss_CamelData,
        extensionContainer,
        notificationToCSE,
        csi_Active,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SS_CSI(el);
}

let _cached_encoder_for_SS_CSI: $.ASN1Encoder<SS_CSI> | null = null;

/**
 * @summary Encodes a(n) SS_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_SS_CSI (value: SS_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_CSI) { _cached_encoder_for_SS_CSI = function (value: SS_CSI, elGetter: $.ASN1Encoder<SS_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SS_CamelData(value.ss_CamelData, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.csi_Active === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.csi_Active, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SS_CSI(value, elGetter);
}


/* eslint-enable */
