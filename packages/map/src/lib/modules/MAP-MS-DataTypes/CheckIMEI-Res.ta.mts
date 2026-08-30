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
import { EquipmentStatus, _enum_for_EquipmentStatus, EquipmentStatus_permittedListed /* IMPORTED_LONG_ENUMERATION_ITEM */, permittedListed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EquipmentStatus_prohibitedListed /* IMPORTED_LONG_ENUMERATION_ITEM */, prohibitedListed /* IMPORTED_SHORT_ENUMERATION_ITEM */, EquipmentStatus_trackingListed /* IMPORTED_LONG_ENUMERATION_ITEM */, trackingListed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EquipmentStatus, _encode_EquipmentStatus } from "../MAP-MS-DataTypes/EquipmentStatus.ta.mjs";
import { UESBI_Iu, _decode_UESBI_Iu, _encode_UESBI_Iu } from "../MAP-MS-DataTypes/UESBI-Iu.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CheckIMEI_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CheckIMEI-Res ::= SEQUENCE {
 *     equipmentStatus    EquipmentStatus    OPTIONAL,
 *     bmuef    UESBI-Iu    OPTIONAL,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CheckIMEI_Res {
    constructor (
        /**
         * @summary `equipmentStatus`.
         * @public
         * @readonly
         */
        readonly equipmentStatus: OPTIONAL<EquipmentStatus>,
        /**
         * @summary `bmuef`.
         * @public
         * @readonly
         */
        readonly bmuef: OPTIONAL<UESBI_Iu>,
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
     * @summary Restructures an object into a CheckIMEI_Res
     * @description
     * 
     * This takes an `object` and converts it to a `CheckIMEI_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CheckIMEI_Res`.
     * @returns {CheckIMEI_Res}
     */
    public static _from_object (_o: { [_K in keyof (CheckIMEI_Res)]: (CheckIMEI_Res)[_K] }): CheckIMEI_Res {
        return new CheckIMEI_Res(_o.equipmentStatus, _o.bmuef, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `equipmentStatus`
         * @public
         * @static
         */

    public static _enum_for_equipmentStatus = _enum_for_EquipmentStatus;
}

/**
 * @summary The Leading Root Component Types of CheckIMEI_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CheckIMEI_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("equipmentStatus", true, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("bmuef", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of CheckIMEI_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CheckIMEI_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CheckIMEI_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CheckIMEI_Res: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CheckIMEI_Res: $.ASN1Decoder<CheckIMEI_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CheckIMEI_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CheckIMEI_Res (el: _Element): CheckIMEI_Res {
    if (!_cached_decoder_for_CheckIMEI_Res) { _cached_decoder_for_CheckIMEI_Res = function (el: _Element): CheckIMEI_Res {
    let equipmentStatus: OPTIONAL<EquipmentStatus> = undefined;
    let bmuef: OPTIONAL<UESBI_Iu> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "equipmentStatus": (_el: _Element): void => { equipmentStatus = _decode_EquipmentStatus(_el); },
        "bmuef": (_el: _Element): void => { bmuef = _decode_UESBI_Iu(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CheckIMEI_Res,
        _extension_additions_list_spec_for_CheckIMEI_Res,
        _root_component_type_list_2_spec_for_CheckIMEI_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CheckIMEI_Res(
        equipmentStatus,
        bmuef,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CheckIMEI_Res(el);
}

let _cached_encoder_for_CheckIMEI_Res: $.ASN1Encoder<CheckIMEI_Res> | null = null;

/**
 * @summary Encodes a(n) CheckIMEI_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CheckIMEI_Res, encoded as an ASN.1 Element.
 */
export
function _encode_CheckIMEI_Res (value: CheckIMEI_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CheckIMEI_Res) { _cached_encoder_for_CheckIMEI_Res = function (value: CheckIMEI_Res, elGetter: $.ASN1Encoder<CheckIMEI_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.equipmentStatus === undefined) ? undefined : _encode_EquipmentStatus(value.equipmentStatus, $.BER)),
            /* IF_ABSENT  */ ((value.bmuef === undefined) ? undefined : _encode_UESBI_Iu(value.bmuef, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CheckIMEI_Res(value, elGetter);
}


/* eslint-enable */
