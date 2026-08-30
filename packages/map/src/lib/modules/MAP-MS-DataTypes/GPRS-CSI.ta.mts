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
import { GPRS_CamelTDPDataList, _decode_GPRS_CamelTDPDataList, _encode_GPRS_CamelTDPDataList } from "../MAP-MS-DataTypes/GPRS-CamelTDPDataList.ta.mjs";
// export { GPRS_CamelTDPDataList, _decode_GPRS_CamelTDPDataList, _encode_GPRS_CamelTDPDataList } from "../MAP-MS-DataTypes/GPRS-CamelTDPDataList.ta.mjs";
import { CamelCapabilityHandling, _decode_CamelCapabilityHandling, _encode_CamelCapabilityHandling } from "../MAP-MS-DataTypes/CamelCapabilityHandling.ta.mjs";
// export { CamelCapabilityHandling, _decode_CamelCapabilityHandling, _encode_CamelCapabilityHandling } from "../MAP-MS-DataTypes/CamelCapabilityHandling.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary GPRS_CSI
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRS-CSI ::= SEQUENCE {
 *     gprs-CamelTDPDataList    [0] GPRS-CamelTDPDataList    OPTIONAL,
 *     camelCapabilityHandling    [1] CamelCapabilityHandling    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     notificationToCSE    [3]    NULL    OPTIONAL,
 *     csi-Active    [4]    NULL    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class GPRS_CSI {
    constructor (
        /**
         * @summary `gprs_CamelTDPDataList`.
         * @public
         * @readonly
         */
        readonly gprs_CamelTDPDataList: OPTIONAL<GPRS_CamelTDPDataList>,
        /**
         * @summary `camelCapabilityHandling`.
         * @public
         * @readonly
         */
        readonly camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling>,
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
     * @summary Restructures an object into a GPRS_CSI
     * @description
     * 
     * This takes an `object` and converts it to a `GPRS_CSI`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRS_CSI`.
     * @returns {GPRS_CSI}
     */
    public static _from_object (_o: { [_K in keyof (GPRS_CSI)]: (GPRS_CSI)[_K] }): GPRS_CSI {
        return new GPRS_CSI(_o.gprs_CamelTDPDataList, _o.camelCapabilityHandling, _o.extensionContainer, _o.notificationToCSE, _o.csi_Active, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GPRS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRS_CSI: $.ComponentSpec[] = [
    new $.ComponentSpec("gprs-CamelTDPDataList", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("camelCapabilityHandling", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("notificationToCSE", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("csi-Active", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of GPRS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRS_CSI: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRS_CSI
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRS_CSI: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_GPRS_CSI: $.ASN1Decoder<GPRS_CSI> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRS_CSI
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRS_CSI (el: _Element): GPRS_CSI {
    if (!_cached_decoder_for_GPRS_CSI) { _cached_decoder_for_GPRS_CSI = function (el: _Element): GPRS_CSI {
    let gprs_CamelTDPDataList: OPTIONAL<GPRS_CamelTDPDataList>;
    let camelCapabilityHandling: OPTIONAL<CamelCapabilityHandling>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let notificationToCSE: OPTIONAL<NULL>;
    let csi_Active: OPTIONAL<NULL>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "gprs-CamelTDPDataList": (_el: _Element): void => { gprs_CamelTDPDataList = $._decode_implicit<GPRS_CamelTDPDataList>(() => _decode_GPRS_CamelTDPDataList)(_el); },
        "camelCapabilityHandling": (_el: _Element): void => { camelCapabilityHandling = $._decode_implicit<CamelCapabilityHandling>(() => _decode_CamelCapabilityHandling)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "notificationToCSE": (_el: _Element): void => { notificationToCSE = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "csi-Active": (_el: _Element): void => { csi_Active = $._decode_implicit<NULL>(() => $._decodeNull)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRS_CSI,
        _extension_additions_list_spec_for_GPRS_CSI,
        _root_component_type_list_2_spec_for_GPRS_CSI,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRS_CSI(
        gprs_CamelTDPDataList,
        camelCapabilityHandling,
        extensionContainer,
        notificationToCSE,
        csi_Active,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRS_CSI(el);
}

let _cached_encoder_for_GPRS_CSI: $.ASN1Encoder<GPRS_CSI> | null = null;

/**
 * @summary Encodes a(n) GPRS_CSI into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRS_CSI, encoded as an ASN.1 Element.
 */
export
function _encode_GPRS_CSI (value: GPRS_CSI, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRS_CSI) { _cached_encoder_for_GPRS_CSI = function (value: GPRS_CSI, elGetter: $.ASN1Encoder<GPRS_CSI>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.gprs_CamelTDPDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GPRS_CamelTDPDataList, $.BER)(value.gprs_CamelTDPDataList, $.BER)),
            /* IF_ABSENT  */ ((value.camelCapabilityHandling === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CamelCapabilityHandling, $.BER)(value.camelCapabilityHandling, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER)),
            /* IF_ABSENT  */ ((value.notificationToCSE === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.notificationToCSE, $.BER)),
            /* IF_ABSENT  */ ((value.csi_Active === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.csi_Active, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GPRS_CSI(value, elGetter);
}


/* eslint-enable */
