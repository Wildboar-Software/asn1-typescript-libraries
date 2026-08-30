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
import { WLAN_Offloadability_Indication, _enum_for_WLAN_Offloadability_Indication, WLAN_Offloadability_Indication_notAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, notAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, WLAN_Offloadability_Indication_allowed /* IMPORTED_LONG_ENUMERATION_ITEM */, allowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_WLAN_Offloadability_Indication, _encode_WLAN_Offloadability_Indication } from "../MAP-MS-DataTypes/WLAN-Offloadability-Indication.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary WLAN_Offloadability
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * WLAN-Offloadability ::= SEQUENCE {
 *     wlan-offloadability-EUTRAN    [0] WLAN-Offloadability-Indication     OPTIONAL,
 *     wlan-offloadability-UTRAN    [1] WLAN-Offloadability-Indication    OPTIONAL,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class WLAN_Offloadability {
    constructor (
        /**
         * @summary `wlan_offloadability_EUTRAN`.
         * @public
         * @readonly
         */
        readonly wlan_offloadability_EUTRAN: OPTIONAL<WLAN_Offloadability_Indication>,
        /**
         * @summary `wlan_offloadability_UTRAN`.
         * @public
         * @readonly
         */
        readonly wlan_offloadability_UTRAN: OPTIONAL<WLAN_Offloadability_Indication>,
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
     * @summary Restructures an object into a WLAN_Offloadability
     * @description
     * 
     * This takes an `object` and converts it to a `WLAN_Offloadability`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `WLAN_Offloadability`.
     * @returns {WLAN_Offloadability}
     */
    public static _from_object (_o: { [_K in keyof (WLAN_Offloadability)]: (WLAN_Offloadability)[_K] }): WLAN_Offloadability {
        return new WLAN_Offloadability(_o.wlan_offloadability_EUTRAN, _o.wlan_offloadability_UTRAN, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `wlan_offloadability_EUTRAN`
         * @public
         * @static
         */

    public static _enum_for_wlan_offloadability_EUTRAN = _enum_for_WLAN_Offloadability_Indication;        /**
         * @summary The enum used as the type of the component `wlan_offloadability_UTRAN`
         * @public
         * @static
         */

    public static _enum_for_wlan_offloadability_UTRAN = _enum_for_WLAN_Offloadability_Indication;
}

/**
 * @summary The Leading Root Component Types of WLAN_Offloadability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_WLAN_Offloadability: $.ComponentSpec[] = [
    new $.ComponentSpec("wlan-offloadability-EUTRAN", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("wlan-offloadability-UTRAN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of WLAN_Offloadability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_WLAN_Offloadability: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of WLAN_Offloadability
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_WLAN_Offloadability: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_WLAN_Offloadability: $.ASN1Decoder<WLAN_Offloadability> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) WLAN_Offloadability
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_WLAN_Offloadability (el: _Element): WLAN_Offloadability {
    if (!_cached_decoder_for_WLAN_Offloadability) { _cached_decoder_for_WLAN_Offloadability = function (el: _Element): WLAN_Offloadability {
    let wlan_offloadability_EUTRAN: OPTIONAL<WLAN_Offloadability_Indication> = undefined;
    let wlan_offloadability_UTRAN: OPTIONAL<WLAN_Offloadability_Indication> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "wlan-offloadability-EUTRAN": (_el: _Element): void => { wlan_offloadability_EUTRAN = $._decode_implicit<WLAN_Offloadability_Indication>(() => _decode_WLAN_Offloadability_Indication)(_el); },
        "wlan-offloadability-UTRAN": (_el: _Element): void => { wlan_offloadability_UTRAN = $._decode_implicit<WLAN_Offloadability_Indication>(() => _decode_WLAN_Offloadability_Indication)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_WLAN_Offloadability,
        _extension_additions_list_spec_for_WLAN_Offloadability,
        _root_component_type_list_2_spec_for_WLAN_Offloadability,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new WLAN_Offloadability(
        wlan_offloadability_EUTRAN,
        wlan_offloadability_UTRAN,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_WLAN_Offloadability(el);
}

let _cached_encoder_for_WLAN_Offloadability: $.ASN1Encoder<WLAN_Offloadability> | null = null;

/**
 * @summary Encodes a(n) WLAN_Offloadability into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The WLAN_Offloadability, encoded as an ASN.1 Element.
 */
export
function _encode_WLAN_Offloadability (value: WLAN_Offloadability, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_WLAN_Offloadability) { _cached_encoder_for_WLAN_Offloadability = function (value: WLAN_Offloadability, elGetter: $.ASN1Encoder<WLAN_Offloadability>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.wlan_offloadability_EUTRAN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_WLAN_Offloadability_Indication, $.BER)(value.wlan_offloadability_EUTRAN, $.BER)),
            /* IF_ABSENT  */ ((value.wlan_offloadability_UTRAN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_WLAN_Offloadability_Indication, $.BER)(value.wlan_offloadability_UTRAN, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_WLAN_Offloadability(value, elGetter);
}


/* eslint-enable */
